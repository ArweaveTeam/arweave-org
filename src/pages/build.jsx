import { Container } from '@/components/Container'
import screenArwiki from '@/images/screenshot/build/arwiki.png'
import screenArwiki2 from '@/images/screenshot/build/arwiki2.png'
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
      screenshot: screenArwiki2,
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

export default function Use() {
  return (
    <>
      <section id="build" aria-label="Build on Arweave">
        <Container className="relative z-10 ">
          <div className="mx-auto lg:mx-0 lg:pr-24">
            <h2 className="font-display text-4xl font-medium tracking-tighter sm:text-5xl ">
              Build on Arweave
            </h2>
            <div className="font-display text-xl tracking-tight">
              <p className="mt-4">
                Arweave lets you build quickly and simply with permanent
                storage. You can store anything from files to fully
                decentralized web applications.
              </p>
              <p className="mt-4">
                The permaweb ecosystem is a full stack for building
                decentralized web applications on Arweave. It offers everything
                from hosting of your web apps UI, to database querying, and
                domain name services – all completely decentralized. This lets
                you build web apps with the properties of blockchains:
                permanent, provably neutral and transparent.
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
