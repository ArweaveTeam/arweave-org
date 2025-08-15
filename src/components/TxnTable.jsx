import { useEffect, useRef, useState } from 'react';

// const GQL_URL = "https://arweave-search.goldsky.com/graphql";
const GQL_URL = "https://arweave.net/graphql";
const PENDING_URL = "https://arweave.net/tx/pending";

export default function TxnTable() {
  const [txns, setTxns] = useState([]);
  const [isAnimating, setIsAnimating] = useState(false);
  const [animOffset, setAnimOffset] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [currentTime, setCurrentTime] = useState(Date.now());
  const [error, setError] = useState(null);
  const tbodyRef = useRef(null);
  const [maxTxShown, setMaxTxShown] = useState(10);
  
  // Move seen sets to component state to prevent persistence across re-renders
  const [seenPending, setSeenPending] = useState(new Set());
  const [seenMined, setSeenMined] = useState(new Set());

  async function getLatestMined(limit = 10) {
    const query = `
      query {
        transactions(first: ${limit}, sort: HEIGHT_DESC) {
          edges {
            node {
              id
              owner { address }
              block { height timestamp }
              tags { name value }
              data {
                size
              }
            }
          }
        }
      }
    `;

    try {
      const res = await fetch(GQL_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query })
      });

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const json = await res.json();
      
      if (!json.data?.transactions?.edges) {
        console.warn("Unexpected response format from GraphQL API");
        return [];
      }
      
      return json.data.transactions.edges.map(e => e.node);
    } catch (error) {
      console.error("Error fetching mined transactions:", error);
      setError("Failed to fetch mined transactions");
      return [];
    }
  }

  async function getPendingTransactions() {
    try {
      const res = await fetch(PENDING_URL);
      
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      
      const ids = await res.json();
      if (!Array.isArray(ids) || ids.length === 0) return [];

      // Look up details for the first few pending TXs
      const query = `
        query {
          transactions(ids: [${ids.slice(0, 5).map(id => `"${id}"`).join(", ")}]) {
            edges {
              node {
                id
                owner { address }
                tags { name value }
                data {
                  size
                }
              }
            }
          }
        }
      `;

      const gqlRes = await fetch(GQL_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query })
      });

      if (!gqlRes.ok) {
        throw new Error(`HTTP error! status: ${gqlRes.status}`);
      }

      const json = await gqlRes.json();
      
      if (!json.data?.transactions?.edges) {
        console.warn("Unexpected response format from GraphQL API for pending transactions");
        return [];
      }
      
      return json.data.transactions.edges.map(e => e.node);
    } catch (error) {
      console.error("Error fetching pending transactions:", error);
      setError("Failed to fetch pending transactions");
      return [];
    }
  }

  function formatSize(size) {
    if (!size || size < 1024) {
      return `${size || 0} B`;
    }
    if (size < 1024 * 1024) {
      return `${(size / 1024).toFixed(2)} KB`;
    }
    if (size < 1024 * 1024 * 1024) {
      return `${(size / 1024 / 1024).toFixed(2)} MB`;
    }
    return `${(size / 1024 / 1024 / 1024).toFixed(2)} GB`;
  }

  function tsToRelativeTime(ts, currentTime) {
    if (!ts) return 'Unknown';
    
    const diff = currentTime - ts * 1000; // Convert from seconds to milliseconds
    const seconds = Math.floor(diff / 1000);

    if (seconds < 0) return 'Just now';
    if (seconds < 60) {
      return `${seconds} second${seconds !== 1 ? 's' : ''} ago`;
    }
    const minutes = Math.floor(seconds / 60);
    if (minutes < 60) {
      return `${minutes} minute${minutes !== 1 ? 's' : ''} ago`;
    }
    const hours = Math.floor(minutes / 60);
    if (hours < 24) {
      return `${hours} hour${hours !== 1 ? 's' : ''} ago`;
    }
    const days = Math.floor(hours / 24);
    return `${days} day${days !== 1 ? 's' : ''} ago`;
  }

  // Helper function to sort transactions by timestamp (newest first)
  function sortTransactionsByTime(transactions) {
    return transactions.sort((a, b) => {
      // If both have timestamps, sort by timestamp
      if (a.timestamp && b.timestamp) {
        return b.timestamp - a.timestamp;
      }
      // If only one has timestamp, prioritize the one with timestamp
      if (a.timestamp && !b.timestamp) return -1;
      if (!a.timestamp && b.timestamp) return 1;
      // If neither has timestamp, maintain order
      return 0;
    });
  }

  // Helper function to merge and deduplicate transactions
  function mergeAndDeduplicateTransactions(mined, pending, currentTxns) {
    const allTxns = [...currentTxns];
    
    // Add new mined transactions
    for (const tx of mined) {
      if (!seenMined.has(tx.id)) {
        seenMined.add(tx.id);
        allTxns.push({
          id: tx.id,
          size: tx.data?.size || 0,
          timestamp: tx.block?.timestamp || null,
          owner: tx.owner?.address,
          blockHeight: tx.block?.height,
          tags: tx.tags || [],
          status: 'mined'
        });
      }
    }
    
    // Add new pending transactions
    for (const tx of pending) {
      if (!seenPending.has(tx.id)) {
        seenPending.add(tx.id);
        allTxns.push({
          id: tx.id,
          size: tx.data?.size || 0,
          timestamp: null, // Pending transactions don't have a block timestamp
          owner: tx.owner?.address,
          blockHeight: null,
          tags: tx.tags || [],
          status: 'pending'
        });
      }
    }
    
    // Sort by timestamp (newest first), pending transactions go to the top
    const sorted = sortTransactionsByTime(allTxns);
    
    // Update seen sets
    setSeenMined(new Set(seenMined));
    setSeenPending(new Set(seenPending));
    
    return sorted.slice(0, maxTxShown);
  }

  useEffect(() => {
    if(typeof window === 'undefined') return;
    const handleResize = () => {
      setMaxTxShown(window.innerWidth < 1024 ? 6 : 10);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Live time updates every second
  useEffect(() => {
    const timeInterval = setInterval(() => {
      setCurrentTime(Date.now());
    }, 1000);

    return () => clearInterval(timeInterval);
  }, []);

  // Initial load of transactions
  useEffect(() => {
    const loadInitialTxns = async () => {
      setIsLoading(true);
      try {
        const [minedTransactions, pendingTransactions] = await Promise.all([
          getLatestMined(maxTxShown),
          getPendingTransactions()
        ]);

        const formattedMined = minedTransactions.map(tx => ({
          id: tx.id,
          size: tx.data?.size || 0,
          timestamp: tx.block?.timestamp || null,
          owner: tx.owner?.address,
          blockHeight: tx.block?.height,
          tags: tx.tags || [],
          status: 'mined'
        }));

        const formattedPending = pendingTransactions.map(tx => ({
          id: tx.id,
          size: tx.data?.size || 0,
          timestamp: null, // Pending transactions don't have a block timestamp
          owner: tx.owner?.address,
          blockHeight: null,
          tags: tx.tags || [],
          status: 'pending'
        }));

        // Merge and sort by timestamp (newest first)
        const allTxns = sortTransactionsByTime([...formattedMined, ...formattedPending])
          .slice(0, maxTxShown);
        
        setTxns(allTxns);

        // Add to seen transactions
        const newSeenMined = new Set();
        const newSeenPending = new Set();
        
        formattedMined.forEach(tx => newSeenMined.add(tx.id));
        formattedPending.forEach(tx => newSeenPending.add(tx.id));
        
        setSeenMined(newSeenMined);
        setSeenPending(newSeenPending);
        setError(null); // Clear any previous errors on success
      } catch (error) {
        console.error("Error loading initial transactions:", error);
        setError("Failed to load transactions");
      } finally {
        setIsLoading(false);
      }
    };

    loadInitialTxns();
  }, [maxTxShown]);

  // Poll for new transactions
  useEffect(() => {
    const pollInterval = setInterval(async () => {
      try {
        const [mined, pending] = await Promise.all([
          getLatestMined(maxTxShown),
          getPendingTransactions()
        ]);

        const newTxns = [];

        // Check for new mined transactions
        for (const tx of mined) {
          if (!seenMined.has(tx.id)) {
            seenMined.add(tx.id);
            newTxns.push({
              id: tx.id,
              size: tx.data?.size || 0,
              timestamp: tx.block?.timestamp || null,
              owner: tx.owner?.address,
              blockHeight: tx.block?.height,
              tags: tx.tags || [],
              status: 'mined'
            });
          }
        }

        // Check for new pending transactions
        for (const tx of pending) {
          if (!seenPending.has(tx.id)) {
            seenPending.add(tx.id);
            newTxns.push({
              id: tx.id,
              size: tx.data?.size || 0,
              timestamp: null, // Pending transactions don't have a block timestamp
              owner: tx.owner?.address,
              blockHeight: null,
              tags: tx.tags || [],
              status: 'pending'
            });
          }
        }

        if (newTxns.length > 0) {
          const durationMs = 300;
          const firstRow = tbodyRef.current?.querySelector('tr');
          const rowHeight = firstRow ? firstRow.getBoundingClientRect().height : 0;

          if (rowHeight === 0) {
            // Fallback: update without animation
            setTxns(prev => {
              const merged = [...newTxns, ...prev];
              return sortTransactionsByTime(merged).slice(0, maxTxShown);
            });
            return;
          }

          setIsAnimating(true);
          setAnimOffset(-rowHeight * newTxns.length);

          const timeout = setTimeout(() => {
            setTxns(prev => {
              const merged = [...newTxns, ...prev];
              return sortTransactionsByTime(merged).slice(0, maxTxShown);
            });
            setIsAnimating(false);
            setAnimOffset(0);
            setError(null); // Clear any previous errors on success
          }, durationMs);

          return () => clearTimeout(timeout);
        }
      } catch (error) {
        console.error("Error polling transactions:", error);
        setError("Failed to poll transactions");
      }
    }, 10000); // Poll every 10 seconds instead of 5 to reduce API load

    return () => clearInterval(pollInterval);
  }, [maxTxShown, seenMined, seenPending]);

  if (isLoading) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <div className="text-center py-8">
          <div className="text-gray-500 text-lg">Loading transactions...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <div className="text-center py-8">
          <div className="text-red-500 text-lg mb-4">{error}</div>
          <button 
            onClick={() => {
              setError(null);
              setIsLoading(true);
              // Trigger a reload by calling the initial load effect
              const loadInitialTxns = async () => {
                try {
                  const [minedTransactions, pendingTransactions] = await Promise.all([
                    getLatestMined(maxTxShown),
                    getPendingTransactions()
                  ]);

                  const formattedMined = minedTransactions.map(tx => ({
                    id: tx.id,
                    size: tx.data?.size || 0,
                    timestamp: tx.block?.timestamp || null,
                    owner: tx.owner?.address,
                    blockHeight: tx.block?.height,
                    tags: tx.tags || [],
                    status: 'mined'
                  }));

                  const formattedPending = pendingTransactions.map(tx => ({
                    id: tx.id,
                    size: tx.data?.size || 0,
                    timestamp: null,
                    owner: tx.owner?.address,
                    blockHeight: null,
                    tags: tx.tags || [],
                    status: 'pending'
                  }));

                  const allTxns = sortTransactionsByTime([...formattedMined, ...formattedPending])
                    .slice(0, maxTxShown);
                  
                  setTxns(allTxns);

                  const newSeenMined = new Set();
                  const newSeenPending = new Set();
                  
                  formattedMined.forEach(tx => newSeenMined.add(tx.id));
                  formattedPending.forEach(tx => newSeenPending.add(tx.id));
                  
                  setSeenMined(newSeenMined);
                  setSeenPending(newSeenPending);
                } catch (error) {
                  console.error("Error retrying transaction load:", error);
                  setError("Failed to retry loading transactions");
                } finally {
                  setIsLoading(false);
                }
              };
              loadInitialTxns();
            }}
            className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition-colors"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full mt-auto mb-6">
      {/* Mobile view - stacked cards */}
      <div className="block lg:hidden space-y-3">
        {txns.map((txn, i) => {
          const total = txns.length;
          const isEdge = i === 0 || i === total - 1;
          const isNearEdge = i === 1 || i === total - 2;

          const classes = ['bg-white rounded-lg border border-gray-200 p-4 hover:border-orange-300 transition-all duration-300'];

          if(isEdge) classes.push('opacity-40', 'blur-[1px]');
          if(isNearEdge) classes.push('opacity-80', 'blur-[0.5px]');

          const cardClass = classes.join(' ');

          return (
            <div
              key={`${txn.id}-${txn.status}`}
              className={cardClass}
              onClick={() => window.open(`https://arweave.net/${txn.id}`, '_blank')}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-gray-500">{tsToRelativeTime(txn.timestamp, currentTime)}</span>
                <span className={`text-xs px-2 py-1 rounded-full ${
                  txn.status === 'pending' 
                    ? 'bg-yellow-100 text-yellow-800' 
                    : 'bg-green-100 text-green-800'
                }`}>
                  {txn.status === 'pending' ? 'Pending' : 'Mined'}
                </span>
              </div>
              
              <div className="font-mono text-orange text-sm mb-2">
                {txn.id.slice(0, 12)}...{txn.id.slice(-12)}
              </div>
              
              <div className="text-xs text-gray-600">
                Size: {formatSize(txn.size)}
              </div>
            </div>
          );
        })}
      </div>

      {/* Desktop view - table */}
      <div className="hidden lg:block overflow-x-auto">
        <table className="min-w-full table-fixed">
          <thead>
            <tr className="text-xs uppercase tracking-wider text-gray-400">
              {/* <th className="py-2 px-4 text-right font-display font-normal">Block</th> */}
              <th className="py-2 px-4 text-left font-display font-normal">Transaction</th>
              <th className="py-2 px-4 text-right font-display font-normal">Size</th>
              <th className="py-2 px-4 text-right font-display font-normal">Status</th>
              <th className="py-2 px-4 text-right font-display font-normal">When</th>
            </tr>
          </thead>
          <tbody
            ref={tbodyRef}
            style={{
              transform: `translateY(${-animOffset}px)`,
              transition: isAnimating ? 'transform 300ms ease-in-out' : 'none',
              willChange: isAnimating ? 'transform' : 'auto',
            }}
            className='whitespace-nowrap'
          >
            {txns.map((txn, i) => {
              const total = txns.length;
              const isEdge = i === 0 || i === total - 1;
              const isNearEdge = i === 1 || i === total - 2;

              const classes = ['hover:bg-orange/5', 'cursor-pointer', 'transition-all', 'duration-300'];

              if(isEdge) classes.push('opacity-40', 'blur-[2px]');
              if(isNearEdge) classes.push('opacity-80', 'blur-[1px]');

              const rowClass = classes.join(' ');

              return (
                <tr
                  key={`${txn.id}-${txn.status}`}
                  className={rowClass}
                  onClick={() => window.open(`https://arweave.net/${txn.id}`, '_blank')}
                >
                  {/* <td className="py-3 px-4 text-right font-mono text-gray-500">
                    {txn.status === 'mined' && txn.blockHeight ? txn.blockHeight : '—'}
                  </td> */}
                  <td className="py-3 pl-4 font-mono text-orange">
                    <div className="flex items-center gap-2">
                      <span>{txn.id.slice(0, 10)}...{txn.id.slice(-10)}</span>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-right font-mono text-gray-900">{formatSize(txn.size)}</td>
                  <td className="py-3 px-4 text-right">
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      txn.status === 'pending' 
                        ? 'bg-yellow-100 text-yellow-800' 
                        : 'bg-green-100 text-green-800'
                    }`}>
                      {txn.status === 'pending' ? 'Pending' : 'Mined'}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-right text-gray-500">{tsToRelativeTime(txn.timestamp, currentTime)}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}


