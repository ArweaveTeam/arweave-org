import { Container } from '@/components/Container'
import screenArwiki from '@/images/screenshot/build/arwiki.png'
import screenArwiki2 from '@/images/screenshot/build/arwiki2.png'
import screenCookbook from '@/images/screenshot/build/cookbook.png'
import screenList from '@/images/screenshot/build/arweavelist.png'
import ResourceScreenList from '@/components/ResourceScreenList'
import screenDiscord from '@/images/screenshot/build/discord.png'

const resources = [
  {
    title: 'Upload data to Arweave',
    link: 'https://cookbook.arweave.dev/concepts/post-transactions.html',
    screenshot: screenCookbook,
  },
  {
    title: 'Build your first app',
    link: 'https://arwiki.arweave.dev/#/en/creating-a-dapp',
    screenshot: screenArwiki2,
  },
  {
    title: 'Learn more',
    link: 'https://arwiki.arweave.dev',
    screenshot: screenArwiki,
  },
  {
    title: 'See what others have built',
    link: 'https://list.weavescan.com/',
    screenshot: screenList,
  },
  {
    title: 'Join the Discord',
    link: 'https://discord.gg/4Y4W3ZJ',
    screenshot: screenDiscord,
  },
]

export default function Use() {
  return (
    <>
      <section id="build" aria-label="Build on Arweave">
        <Container className="relative z-10">
          <div className="mx-auto lg:mx-0 lg:pr-24">
            <h2 className="font-display text-4xl font-medium tracking-tighter sm:text-5xl">
              Build on Arweave
            </h2>
            <div className="font-display text-2xl tracking-tight">
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

          <div className="mx-auto">
            <ResourceScreenList resources={resources} />
          </div>
        </Container>
      </section>
    </>
  )
}
