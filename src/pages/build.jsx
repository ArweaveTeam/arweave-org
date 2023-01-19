import { Container } from '@/components/Container'
import screenArwiki from '@/images/screenshot/build/arwiki.png'
import screenCookbook from '@/images/screenshot/build/cookbook.png'
import ResourceScreenList from '@/components/ResourceScreenList'
import screenDiscord from '@/images/screenshot/build/discord.png'
import screenUploadData from '@/images/screenshot/build/upload-data2.png'
import screenArweaveAsDb from '@/images/screenshot/build/arweave-as-db.png'
import screenWarp from '@/images/screenshot/build/warp.png'
import screenFullstack from '@/images/screenshot/build/fullstack.png'

const resources = [
  [
    {
      title: 'Upload your first data',
      link: 'https://cookbook.arweave.dev/concepts/post-transactions.html',
      screenshot: screenUploadData,
    },
    {
      title: 'Build a fully decentralized app',
      link: 'https://arwiki.arweave.dev/#/en/creating-a-dapp',
      screenshot: screenArwiki,
    },
    {
      title: 'Use Arweave as a database',
      link: 'https://cookbook.arweave.dev/concepts/queryTransactions.html',
      screenshot: screenArweaveAsDb,
    },
    {
      title: 'Launch Smart Contracts on Arweave',
      link: 'https://warp.cc/',
      screenshot: screenWarp,
    },
  ],
  [
    {
      title: 'Arweave+SmartWeave App Development Workshop',
      link: 'https://www.youtube.com/watch?v=cGLMN5A2C4E',
      screenshot: screenFullstack,
    },
    {
      title: 'Explore the cookbook',
      link: 'https://cookbook.arweave.dev',
      screenshot: screenCookbook,
    },
    {
      title: 'Understand the protocol',
      link: 'https://arwiki.arweave.dev/#/en/Arweave',
      screenshot: screenArwiki,
    },
    {
      title: 'Join the developer Discord',
      link: 'https://discord.gg/AhsZfBm',
      screenshot: screenDiscord,
    },
  ],
]

// const resources = [
//   {
//     title: 'Upload data to Arweave',
//     link: 'https://cookbook.arweave.dev/concepts/post-transactions.html',
//     screenshot: screenCookbook,
//   },
//   {
//     title: 'Build your first app',
//     link: 'https://arwiki.arweave.dev/#/en/creating-a-dapp',
//     screenshot: screenArwiki2,
//   },
//   {
//     title: 'Learn more',
//     link: 'https://arwiki.arweave.dev',
//     screenshot: screenArwiki,
//   },

//   {
//     title: 'Join the developer Discord',
//     link: 'https://discord.gg/4Y4W3ZJ',
//     screenshot: screenDiscord,
//   },
// ]

export default function Use() {
  return (
    <>
      <section id="build" aria-label="Build on Arweave">
        <Container className="relative z-10">
          <div className="mx-auto lg:mx-0 lg:pr-24">
            <h2 className="font-display text-4xl font-medium tracking-tighter sm:text-5xl">
              Build on Arweave
            </h2>
            <div className="font-display text-xl tracking-tight">
              <p className="mt-4">
                Arweave allows you to add permanent storage to your app simply –
                or even make your apps themselves fully permanent and
                decentralized.
              </p>
              <p className="mt-4">
                The permaweb ecosystem, built by our community on top of
                Arweave, offers everything from hosting of your UI, to
                decentralized database querying, all the way to a decentralized
                name service.
              </p>
            </div>
          </div>

          <h2 className="pt-8 font-display text-3xl font-medium tracking-tighter sm:text-3xl">
            Get Started.
          </h2>
          <div className="mx-auto">
            <ResourceScreenList resources={resources[0]} />
          </div>
          <h2 className="pt-8 font-display text-3xl font-medium tracking-tighter sm:text-3xl">
            Dive Deep.
          </h2>
          <div className="mx-auto sm:pb-20">
            <ResourceScreenList resources={resources[1]} />
          </div>
        </Container>
      </section>
    </>
  )
}
