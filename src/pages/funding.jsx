import { Container } from '@/components/Container'
import ResourceList from '@/components/ResourceList'

import logoCommunitylabs from '@/images/logos/communitylabs.svg'
import logoDha from '@/images/logos/dha.png'
import logoForward from '@/images/logos/forward.png'
import logoHansa from '@/images/logos/hansa.svg'
import logoPermadao from '@/images/logos/permadao.png'
import logoPermaventures from '@/images/logos/permaventures.png'
import logoLongview from '@/images/logos/longview.png'

const resources = [
  {
    title: 'Permanent Ventures',
    link: 'https://permanent.ventures/', // TODO: Validate this link is right
    logo: logoPermaventures,
  },
  {
    title: 'PermaDAO',
    link: 'https://permadao.notion.site/',
    logo: logoPermadao,
  },
  {
    title: 'Longview Labs',
    link: 'https://www.longviewlabs.co/',
    logo: logoLongview,
  },
  {
    title: 'Digital History Association',
    link: 'https://dha.arweave.dev/',
    logo: logoDha,
  },
  {
    title: 'Arweave Asia Fund',
    link: 'https://arweave.asia/', // TODO: Validate this link is right
  },
  {
    title: 'Community Labs',
    link: 'https://communitylabs.com/',
    logo: logoCommunitylabs,
  },
  {
    title: 'Forward Research',
    link: 'https://forward.arweave.dev/',
    logo: logoForward,
  },
  {
    title: 'Hansa',
    link: 'https://www.hansa.network/',
    logo: logoHansa,
  },
].sort((a, b) => a.title.localeCompare(b.title))

export default function Fund() {
  return (
    <>
      <section id="fund" aria-label="Get Funded">
        <Container className="relative z-10">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-4xl lg:pr-24">
            <h2 className="text-blue-600 font-display text-4xl font-medium tracking-tighter sm:text-5xl">
              Get Funded
            </h2>
            <p className="text-blue-900 mt-4 font-display text-2xl tracking-tight">
              Unlock funding and investment opportunities with Arweave.
              Revolutionize the way you store and share data and be a part of
              Arweave&apos;s vision of a decentralized future.
            </p>
          </div>

          <div className="mx-auto pt-20">
            <ResourceList resources={resources} />
          </div>
        </Container>
      </section>
    </>
  )
}
