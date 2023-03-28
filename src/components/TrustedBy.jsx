import Image from 'next/image'

import { Container } from '@/components/Container'
import logoMeta from '@/images/trustedby/meta.svg'
import logoMetaplex from '@/images/trustedby/metaplex.png'
import logoMirror from '@/images/trustedby/mirror.png'
import logoInstagram from '@/images/trustedby/instagram.png'

const trustedby = [
  {
    name: 'Meta',
    logo: logoMeta,
    link: 'https://www.theblock.co/post/182569/meta-arweave-instagram-nfts',
  },
  { name: 'Metaplex', logo: logoMetaplex, link: 'https://www.metaplex.com/' },
  { name: 'Mirror', logo: logoMirror, link: 'https://mirror.xyz/' },
  {
    name: 'Instagram',
    logo: logoInstagram,
    link: 'https://www.instagram.com/',
  },
]

export function TrustedBy() {
  return (
    <section
      id="trustedby"
      aria-label="Trusted By"
      className="scroll-mt-14 pt-10 sm:pb-20 sm:pt-10"
    >
      <Container>
        <h2 className="pt-8 font-display text-3xl  tracking-tighter sm:text-3xl">
          Trusted by the best.
        </h2>
        <div className="mx-auto mt-10 grid max-w-max grid-cols-2 place-content-center gap-x-32 gap-y-12 md:grid-cols-4 md:gap-x-16 lg:gap-x-32">
          {trustedby.map((trustee) => (
            <a
              href={trustee.link}
              target="_blank"
              rel="noreferrer"
              key={trustee.name}
              className="flex items-center justify-center"
            >
              <Image
                src={trustee.logo}
                alt={trustee.name}
                className=" transition duration-300 ease-in-out "
                unoptimized
              />
            </a>
          ))}
        </div>
      </Container>
    </section>
  )
}
