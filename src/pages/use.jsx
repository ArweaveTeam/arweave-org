import { Container } from '@/components/Container'
import { TrustedBy } from '@/components/TrustedBy'
import screenArweave101 from '@/images/screenshot/use/arweave101.png'
import screenAkord from '@/images/screenshot/use/akord.png'
import screenPermapages from '@/images/screenshot/use/permapages.png'
import screenPioneers from '@/images/screenshot/use/pioneers.png'
import screenPermacast from '@/images/screenshot/use/permacast.png'
import screenArweavenews from '@/images/screenshot/use/arweavenews.png'
import ResourceScreenList from '@/components/ResourceScreenList'

const resources = [
  // Use Arweave
  [
    {
      title: 'Arweave 101',
      link: '#!', // TODO: Validate this link is right
      screenshot: screenArweave101,
    },
    {
      title: 'Upload a file forever',
      link: 'https://akord.com/',
      screenshot: screenAkord,
    },
    {
      title: 'Claim your homepage on the Permaweb',
      link: 'https://permapages.app/',
      screenshot: screenPermapages,
    },
  ],
  // Learn More
  [
    {
      title: 'Podcast: Permaweb Pioneers',
      link: 'https://permaweb-pioneers.simplecast.com/',
      screenshot: screenPioneers,
    },
    {
      title: 'Podcast: Permacast',
      link: 'https://legacy.permacast.dev/#/podcasts/rBIQpWeYcf0_reltNXTKjjEUHlQRL9CmZCNcgYjZaao',
      screenshot: screenPermacast,
    },
    {
      title: 'Check out Arweave.news',
      link: 'https://arweave.news/',
      screenshot: screenArweavenews,
    },
  ],
]

export default function Use() {
  return (
    <>
      <section id="use" aria-label="Use Arweave">
        <Container className="relative z-10">
          <div className="mx-auto lg:mx-0 lg:pr-24">
            <h2 className="font-display text-4xl font-medium tracking-tighter sm:text-5xl">
              Use Arweave
            </h2>
            <div className="mt-4 font-display text-2xl tracking-tight">
              <p className="mt-4">
                Experience the power of permanent data storage with Arweave.
              </p>
              <p class="mt-4">
                Arweave is a protocol that enables developers to build
                applications with the power of permanent data storage. As such
                there are a million different ways to use it – from social media
                apps that provably respect your rights, to applications that
                help you secure your most valuable documents. Check out some of
                these apps, explore the ecosystem, and learn more!
              </p>
            </div>
          </div>

          <div className="mx-auto pt-5">
            <ResourceScreenList resources={resources[0]} />
          </div>
          <h2 className="pt-5 font-display text-3xl font-medium tracking-tighter sm:text-3xl">
            Learn more
          </h2>
          <div>
            <ResourceScreenList resources={resources[1]} />
          </div>
        </Container>
      </section>
      <TrustedBy />
    </>
  )
}
