import Image from 'next/image'

import { Container } from '@/components/Container'

const resources = {
  'Get Funded': [
    {
      title: 'Arweave Asia Fund',
      link: 'https://arweave.asia/', // TODO: Validate this link is right
    },
    {
      title: 'Community Labs',
      link: 'https://communitylabs.com/',
    },
    {
      title: 'Digital History Association',
      link: 'https://dha.arweave.dev/',
    },
    {
      title: 'Forward Research',
      link: 'https://forward.arweave.dev/',
    },
    {
      title: 'Hansa',
      link: 'https://www.hansa.network/',
    },
    {
      title: 'Longview Labs',
      link: 'https://longviewlabs.com/', // TODO: Validate this link is right
    },
    {
      title: 'PermaDAO',
      link: 'https://permadao.notion.site/',
    },
    {
      title: 'Permanent Ventures',
      link: 'https://permanent.ventures/', // TODO: Validate this link is right
    },
  ],
}

export function Entrepreneurs() {
  return (
    <section
      id="funding"
      aria-label="Get Funded"
      className="scroll-mt-14 py-20 sm:py-32"
    >
      <Container className="relative z-10">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-4xl lg:pr-24">
          <h2 className="text-blue-600 font-display text-4xl font-medium tracking-tighter sm:text-5xl">
            Get Funded
          </h2>
          <p className="text-blue-900 mt-4 font-display text-2xl tracking-tight">
            Unlock funding and investment opportunities with Arweave.
            Revolutionize the way you store and share data and be a part of
            Arweave's vision of a decentralized future.
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
                  <a
                    href={r.link}
                    target="_blank"
                    className="resource relative grayscale transition duration-300 ease-in-out hover:grayscale-0"
                  >
                    {r.title}
                    {r.logo && (
                      <Image
                        src={r.logo}
                        alt={r.title}
                        width={100}
                        height={60}
                        className="absolute right-0 top-2"
                      />
                    )}
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
