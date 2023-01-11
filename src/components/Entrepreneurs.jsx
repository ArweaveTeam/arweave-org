import { Container } from '@/components/Container'

/**
 * Arweave Asia Fund
 * Community Labs
 * Digital History Association
 * Forward Research
 * Hansa
 * Longview Labs
 * PermaDAO
 * Permanent Ventures
 */
const resources = {
  'Get Funded': [
    {
      title: 'Arweave Asia Fund',
      link: 'https://arweave.asia/',
    },
    {
      title: 'Community Labs',
      link: 'https://communitylabs.org/',
    },
    {
      title: 'Digital History Association',
      link: 'https://www.digitalhistoryassociation.org/',
    },
    {
      title: 'Forward Research',
      link: 'https://forward.research/',
    },
    {
      title: 'Hansa',
      link: 'https://hansa.io/',
    },
    {
      title: 'Longview Labs',
      link: 'https://longviewlabs.com/',
    },
    {
      title: 'PermaDAO',
      link: 'https://perma-dao.org/',
    },
    {
      title: 'Permanent Ventures',
      link: 'https://permanentventures.com/',
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
            <div className="mt-10 divide-y-2 divide-black border-y-2 border-black">
              {res.map((r) => (
                <a href={r.link} target="_blank" className="resource">
                  {r.title}
                </a>
              ))}
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
