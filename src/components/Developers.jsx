import Image from 'next/image'

import { Container } from '@/components/Container'
import logoEver from '@/images/logos/ever.png'
import logoWarp from '@/images/logos/warp.png'

const resources = {
  'Down the rabbit hole': [
    {
      title: 'ArWiki',
      link: 'https://arwiki.wiki',
    },
  ],
  'Build apps on Arweave': [
    {
      title: "Dmac's courses",
      link: '#',
    },
  ],
  'Build SmartContracts on Arweave': [
    {
      title: 'Warp',
      link: 'https://warp.cc/',
      logo: logoWarp,
    },
    {
      title: 'EverFinance',
      link: 'https://ever.finance/', // TODO: Validate this link is right
      logo: logoEver,
    },
    {
      title: 'EXM',
      link: 'https://exm.dev/',
    },
  ],
  'Use Arweave as a Database': [
    {
      title: 'WeaveDB',
      link: 'https://weavedb.dev/',
    },
    {
      title: 'ArDB',
      link: 'https://github.com/textury/ardb',
    },
    {
      title: 'Kwil',
      link: 'https://www.kwil.com/',
    },
  ],
}

export function Developers() {
  return (
    <section
      id="build"
      aria-label="Build on Arweave"
      className="scroll-mt-14 py-20 sm:py-32"
    >
      <Container className="relative z-10">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-4xl lg:pr-24">
          <h2 className="text-blue-600 font-display text-4xl font-medium tracking-tighter sm:text-5xl">
            Build on Arweave
          </h2>
          <p className="text-blue-900 mt-4 font-display text-2xl tracking-tight">
            Unleash the full potential of Arweave with our developer resources.
            Learn about our technology, access our documentation and join our
            community of builders.
          </p>
          <p className="pt-5">
            <a href="https://discord.gg/AhsZfBm" className="text-link">
              Join our Developer Discord
            </a>
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
                  <a href={r.link} target="_blank" className="resource">
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
