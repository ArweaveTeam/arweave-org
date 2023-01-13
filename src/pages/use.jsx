import { Container } from '@/components/Container'
import { TrustedBy } from '@/components/TrustedBy'
import screenArweave101 from '@/images/screenshot/use/arweave101.jpg'
import screenAkord from '@/images/screenshot/use/akord.png'
import screenLenster from '@/images/screenshot/use/lenster.png'
import screenPermapages from '@/images/screenshot/use/permapages.png'
import screenPioneers from '@/images/screenshot/use/pioneers.png'
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
      title: 'Send a message that will last forever',
      link: 'https://lenster.xyz/',
      screenshot: screenLenster,
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
      title: 'Podcasts',
      link: 'https://permaweb-pioneers.simplecast.com/',
      screenshot: screenPioneers,
    },
    {
      title: 'Check out the latest news',
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
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-4xl lg:pr-24">
            <h2 className="text-blue-600 font-display text-4xl font-medium tracking-tighter sm:text-5xl">
              Use Arweave
            </h2>
            <p className="text-blue-900 mt-4 font-display text-2xl tracking-tight">
              Experience the power of decentralized data storage with Arweave.
              Browse and discover the benefits of using a permanent,
              tamper-proof, and censor-free data storage solution.
            </p>
          </div>

          <div className="mx-auto pt-5">
            <ResourceScreenList resources={resources[0]} />
            {/* {Object.entries(resources).map(([title, link]) => (
            <p className='py-2'>
              <a
              key={title}
              href={link}
              target="_blank"
              className="text-link"
            >
              {title}
            </a>
            </p>
          ))} */}
          </div>
          <h2 className="text-blue-600 pt-5 font-display text-3xl font-medium tracking-tighter sm:text-3xl">
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
