import Image from 'next/image'

import { Container } from '@/components/Container'
import screenArwiki from '@/images/screenshot/build/arwiki.png'
import screenCookbook from '@/images/screenshot/build/cookbook.png'
import screenWarp from '@/images/screenshot/build/warp.png'
import screenExm from '@/images/screenshot/build/exm.png'
import screenWeavedb from '@/images/screenshot/build/weavedb.png'
import screenArdb from '@/images/screenshot/build/ardb.jpg'
import screenKwil from '@/images/screenshot/build/kwil.png'
import ResourceScreenList from '@/components/ResourceScreenList'

const resources = [
  // Tutorials
  [
    {
      title: 'Down the rabbit hole',
      link: 'https://arwiki.wiki/',
      screenshot: screenArwiki,
    },
    {
      title: 'Build apps on Arweave',
      link: 'https://cookbook.arweave.dev/',
      screenshot: screenCookbook,
    },
  ],
  // SmartWeave Contracts
  [
    {
      title: 'Warp',
      link: 'https://warp.cc/',
      screenshot: screenWarp,
    },
    {
      title: 'EXM',
      link: 'https://exm.dev/',
      screenshot: screenExm,
    },
  ],
  // Use AR as a Database
  [
    {
      title: 'WeaveDB',
      link: 'https://weavedb.dev/',
      screenshot: screenWeavedb,
    },
    {
      title: 'ArDB',
      link: 'https://github.com/textury/ardb',
      screenshot: screenArdb,
    },
    {
      title: 'Kwil',
      link: 'https://www.kwil.com/',
      screenshot: screenKwil,
    },
  ],
]

export default function Use() {
  return (
    <>
      <section id="build" aria-label="Build on Arweave">
        <Container className="relative z-10">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-4xl lg:pr-24">
            <h2 className="text-blue-600 font-display text-4xl font-medium tracking-tighter sm:text-5xl">
              Build on Arweave
            </h2>
            <p className="text-blue-900 mt-4 font-display text-2xl tracking-tight">
              Experience the power of decentralized data storage with Arweave.
              Browse and discover the benefits of using a permanent,
              tamper-proof, and censor-free data storage solution.
            </p>
            <p className="pt-5">
              <a
                href="https://discord.gg/AhsZfBm"
                className="text-link"
                target="_blank"
              >
                Join our Developer Discord
              </a>
            </p>
          </div>

          <div className="mx-auto">
            <ResourceScreenList resources={resources[0]} />

            <h2 className="text-blue-600 pt-5 font-display text-3xl font-medium tracking-tighter sm:text-3xl">
              SmartWeave Contracts
            </h2>
            <ResourceScreenList resources={resources[1]} />

            <h2 className="text-blue-600 pt-5 font-display text-3xl font-medium tracking-tighter sm:text-3xl">
              Use Arweave as a Database
            </h2>
            <ResourceScreenList resources={resources[2]} />
          </div>
        </Container>
      </section>
    </>
  )
}
