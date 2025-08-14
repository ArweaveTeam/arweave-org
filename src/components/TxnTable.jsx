import { useEffect, useRef, useState } from 'react';

function generateInitialTxns() {
  return Array.from({ length: 10 }, (_, i) => ({
    id: `abcdefghijabcdefghijabcdefghijabcdefghij${i}`,
    size: Math.floor(Math.random() * 1000000),
    timestamp: Date.now() - i * 1000,
  }));
}

function formatSize(size) {
  if (size < 1024) {
    return `${size} B`;
  }
  if (size < 1024 * 1024) {
    return `${(size / 1024).toFixed(2)} KB`;
  }
  if (size < 1024 * 1024 * 1024) {
    return `${(size / 1024 / 1024).toFixed(2)} MB`;
  }
  return `${(size / 1024 / 1024 / 1024).toFixed(2)} GB`;
}

function tsToRelativeTime(ts) {
  const diff = Date.now() - ts;
  const seconds = Math.floor(diff / 1000);

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

export default function TxnTable() {
  const [txns, setTxns] = useState(() => generateInitialTxns());
  const [isAnimating, setIsAnimating] = useState(false);
  const [animOffset, setAnimOffset] = useState(0);
  const tbodyRef = useRef(null);
  const [maxTxShown, setMaxTxShown] = useState(10);

  useEffect(() => {
    if(typeof window === 'undefined') return;
    const handleResize = () => {
      setMaxTxShown(window.innerWidth < 1024 ? 6 : 10);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Add a new txn every second and drop the oldest to keep 10
  useEffect(() => {
    const durationMs = 300;
    const interval = setInterval(() => {
      if (isAnimating) return;

      const firstRow = tbodyRef.current?.querySelector('tr');
      const rowHeight = firstRow ? firstRow.getBoundingClientRect().height : 0;
      if (rowHeight === 0) {
        // Fallback: if we cannot measure, just update without animation
        setTxns((prev) => {
          const next = [ {
            id: `abcdefghijabcdefghijabcdefghijabcdefghij${Math.floor(Math.random() * 1000)}`,
            size: Math.floor(Math.random() * 1000000),
            timestamp: Date.now(),
          }, ...prev].slice(0, maxTxShown);
          return next;
        });
        return;
      }

      setIsAnimating(true);
      setAnimOffset(-rowHeight);

      const timeout = setTimeout(() => {
        setTxns((prev) => {
          const next = [{
            id: `abcdefghijabcdefghijabcdefghijabcdefghij${Math.floor(Math.random() * 1000)}`,
            size: Math.floor(Math.random() * 1000000),
            timestamp: Date.now(),
          }, ...prev].slice(0, maxTxShown);
          return next;
        });
        setIsAnimating(false);
        setAnimOffset(0);
      }, durationMs);

      return () => clearTimeout(timeout);
    }, 1000);
    return () => clearInterval(interval);
  }, [isAnimating]);

  return (
    <div className="overflow-x-auto mt-12">
      <table className="min-w-full table-fixed">
        <thead>
          <tr className="text-xs uppercase tracking-wider text-gray-400">
            <th className="py-2 px-4 text-left font-display font-normal">Transaction</th>
            <th className="py-2 px-4 text-right font-display font-normal">Size</th>
            <th className="py-2 pr-4 text-right font-display font-normal">When</th>
          </tr>
        </thead>
        <tbody
          ref={tbodyRef}
          style={{
            transform: `translateY(${-animOffset}px)`,
            transition: isAnimating ? 'transform 300ms ease-in-out' : 'none',
            willChange: isAnimating ? 'transform' : 'auto',
          }}
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
                key={`${txn.id}-${txn.timestamp}`}
                className={rowClass}
                onClick={() => window.open(`https://arweave.net/${txn.id}`, '_blank')}
                style={{

                }}
              >
                <td className="py-3 pl-4 font-mono text-orange">
                  {txn.id.slice(0, 10)}...{txn.id.slice(-10)}
                </td>
                <td className="py-3 px-4 text-right font-mono text-gray-900">{formatSize(txn.size)}</td>
                <td className="py-3 pr-4 text-right text-gray-500">{tsToRelativeTime(txn.timestamp)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}


