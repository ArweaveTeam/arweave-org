import { Container } from '@/components/Container'
import ResourceList from '@/components/ResourceList'

import logoCommunitylabs from '@/images/logos/communitylabs.svg'
import logoDha from '@/images/logos/dha.png'
import logoForward from '@/images/logos/forward.png'
import logoHansa from '@/images/logos/hansa.svg'
import logoPermadao from '@/images/logos/permadao.png'
import logoPermaventures from '@/images/logos/permaventures.png'
import logoLongview from '@/images/logos/longview.png'
import logoArweaveasia from '@/images/logos/arweaveasia.png'

const resources = [
  {
    title: 'Permanent Ventures',
    link: 'https://twitter.com/permanentvc',
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
    link: 'https://arscp.ventures/',
    logo: logoArweaveasia,
  },
  {
    title: 'Community Labs',
    link: 'https://communitylabs.com/',
    logo: logoCommunitylabs,
  },
  {
    title: 'Forward Research',
    link: 'https://fwd.arweave.dev/',
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
        <Container className="relative z-10 ">
          <div className="mx-auto lg:mx-0 lg:pr-24">
            <h2 className="font-display text-4xl  tracking-tighter sm:text-5xl ">
              Get Funded.
            </h2>
            <div className="font-display text-xl tracking-tight">
              <p className="mt-4">
                Arweave is a fully decentralized ecosystem. There are numerous
                dedicated organizations – ranging from non-profits, to DAOs and
                ventures studios – that back its development and help the
                ecosystem grow. Many of these organizations have grant and
                investment opportunities available for those contributing to the
                Arweave ecosystem.
              </p>
              <p className="mt-4">
                Thinking of building a project on Arweave? Start building, reach
                out, get funded!
              </p>
            </div>
          </div>

          <div className="mx-auto pt-20 sm:pb-20">
            <ResourceList resources={resources} />
          </div>
        </Container>
      </section>
    </>
  )
}
