import Image from 'next/image'

import { Container } from '@/components/Container'
import logoAkord from '@/images/logos/akord.svg'
import logoArdrive from '@/images/logos/ardrive.svg'

const resources = {
  'Arweave 101': [
    {
      title: 'Arweave 101',
      link: 'https://www.arweave.org/developers',
    },
  ],
  'Get a Wallet': [
    {
      title: 'ArweaveApp',
      link: 'https://arweave.app/',
    },
    {
      title: 'ArConnect',
      link: 'https://www.arconnect.io/',
    },
    {
      title: 'Cooper.co',
      link: 'https://cooper.co/',
    },
  ],
  'Upload a file forever': [
    {
      title: 'Akord',
      link: 'https://akord.com/',
      logo: logoAkord,
    },
    {
      title: 'ArDrive',
      link: 'https://ardrive.io/',
      logo: logoArdrive,
    },
  ],
  'Send a message that will last forever': [
    {
      title: 'Metaweave',
      link: 'https://metaweave.com/',
    },
    {
      title: 'Lens protocol',
      link: 'https://lenster.xyz/',
    },
  ],
  'Claim your homepage on the Permaweb': [
    {
      title: 'Permapages',
      link: 'https://permapages.app/',
    },
  ],
  'Learn more': [
    {
      title: 'Podcasts',
      link: 'https://permaweb-pioneers.simplecast.com/',
    },
    {
      title: 'Check out the latest news',
      link: 'https://arweave.news/',
    },
  ],
}

export function Users() {
  return (
    <section
      id="use"
      aria-label="Use Arweave"
      className="scroll-mt-14 py-20 sm:py-32"
    >
      <Container className="relative z-10">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-4xl lg:pr-24">
          <h2 className="text-blue-600 font-display text-4xl font-medium tracking-tighter sm:text-5xl">
            Use Arweave
          </h2>
          <p className="text-blue-900 mt-4 font-display text-2xl tracking-tight">
            Experience the power of decentralized data storage with Arweave.
            Browse and discover the benefits of using a permanent, tamper-proof,
            and censor-free data storage solution.
          </p>
        </div>

        <div className="mx-auto">
          {Object.entries(resources).map(([category, res]) => (
            <div>
              <h3 className="mt-20 font-display text-3xl font-medium">
                {category}
              </h3>
              <div className="mt-10 divide-y-2 divide-black border-y-2 border-black">
                {res.map((r) => (
                  <a
                    href={r.link}
                    target="_blank"
                    className="resource relative grayscale transition duration-300 ease-in-out hover:grayscale-0"
                  >
                    {r.title}
                    {r.logo && <Image src={r.logo} alt={r.title} />}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
