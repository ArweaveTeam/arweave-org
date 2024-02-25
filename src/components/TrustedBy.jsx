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
    <section id="trustedby" aria-label="Trusted By" className="py-16 sm:py-20">
      <Container>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center font-display mb-10 tracking-tight">
          Trusted by the best.
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 place-items-center">
          {trustedby.map((trustee) => (
            <a
              href={trustee.link}
              target="_blank"
              rel="noreferrer"
              key={trustee.name}
              className="hover:scale-105 transform transition-transform duration-300"
            >
              <Image
                src={trustee.logo}
                alt={trustee.name}
                className="w-32 h-32 object-contain"
                unoptimized
              />
            </a>
          ))}
        </div>
      </Container>
    </section>
  )
}
