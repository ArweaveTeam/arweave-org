import Image from 'next/image'

import { Container } from '@/components/Container'
import logoMeta from '@/images/trustedby/meta.svg'
import logoMetaplex from '@/images/trustedby/metaplex.png'
import logoMirror from '@/images/trustedby/mirror.png'
import logoInstagram from '@/images/trustedby/instagram.png'

const trustedby = [
  { name: 'Meta', logo: logoMeta },
  { name: 'Metaplex', logo: logoMetaplex },
  { name: 'Mirror', logo: logoMirror },
  { name: 'Instagram', logo: logoInstagram },
]

export function TrustedBy() {
  return (
    <section
      id="trustedby"
      aria-label="Trusted By"
      className="scroll-mt-14 py-20 sm:py-32"
    >
      <Container>
        <h2 className="text-blue-900 mx-auto max-w-2xl text-center font-display text-4xl font-medium tracking-tighter sm:text-5xl">
          Trusted by the best
        </h2>
        <div className="mx-auto mt-20 grid max-w-max grid-cols-2 place-content-center gap-y-12 gap-x-32 md:grid-cols-4 md:gap-x-16 lg:gap-x-32">
          {trustedby.map((trustee) => (
            <div
              key={trustee.name}
              className="flex items-center justify-center"
            >
              <Image
                src={trustee.logo}
                alt={trustee.name}
                className="grayscale transition duration-300 ease-in-out hover:grayscale-0"
                unoptimized
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
