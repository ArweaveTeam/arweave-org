import { Container } from '@/components/Container'
import { TrustedBy } from '@/components/TrustedBy'
import screenArweave101 from '@/images/screenshot/use/arweave101.png'
import screenAkord from '@/images/screenshot/use/akord.png'
import screenPermapages from '@/images/screenshot/use/permapages.png'
import screenPioneers from '@/images/screenshot/use/pioneers.png'
import screenPermacast from '@/images/screenshot/use/permacast.png'
import screenArweavenews from '@/images/screenshot/use/arweavenews.png'
import screenList from '@/images/screenshot/use/arweavelists.png'
import screenAcceleratear from '@/images/screenshot/use/acceleratear.png'
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
      title: 'Save a file forever',
      link: 'https://akord.com/',
      screenshot: screenAkord,
    },
    {
      title: 'Make your homepage on the permaweb',
      link: 'https://permapages.app/',
      screenshot: screenPermapages,
    },
    {
      title: 'Arweave for Enterprise',
      link: 'https://acceleratear.co/',
      screenshot: screenAcceleratear,
    },
  ],
  // Learn More
  [
    {
      title: 'Check out the latest on Arweave.news',
      link: 'https://arweave.news/',
      screenshot: screenArweavenews,
    },
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
      title: 'Explore the ecosystem',
      link: 'https://list.weavescan.com/',
      screenshot: screenList,
    },
  ],
]

export default function Use() {
  return (
    <>
      <section id="use" aria-label="Use Arweave">
        <Container className="relative z-10 ">
          <div className="mx-auto lg:mx-0 lg:pr-24">
            <h2 className="font-display text-4xl  tracking-tighter sm:text-5xl ">
              Use Arweave
            </h2>
            <div className="mt-4 font-display text-xl tracking-tight">
              <p className="mt-4">
                Arweave is a protocol that developers can use in many different
                ways. Jump in and try the power of permanent data storage by
                uploading a file, making your own homepage on the permaweb or
                simply learning more about Arweave and its ecosystem.
              </p>
            </div>
          </div>

          <h2 className="pt-8 font-display text-3xl  tracking-tighter sm:text-3xl">
            Get Started.
          </h2>
          <div className="mx-auto">
            <ResourceScreenList resources={resources[0]} />
          </div>
          <h2 className="pt-5 font-display text-3xl  tracking-tighter sm:text-3xl">
            Dive Deep.
          </h2>
          <div className="mx-auto">
            <ResourceScreenList resources={resources[1]} />
          </div>
        </Container>
      </section>
      <TrustedBy />
    </>
  )
}
