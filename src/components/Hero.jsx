import Image from 'next/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import backgroundImage from '@/images/background.jpg'

export function Hero() {
  return (
    <div className="relative pt-10 pb-20 sm:py-24">
      <div className="bg-indigo-50 absolute inset-x-0 -top-48 -bottom-14 overflow-hidden">
        <Image
          className="absolute top-0 left-0 translate-y-[-10%] translate-x-[-55%] -scale-x-100 sm:left-1/2 sm:translate-y-[-6%] sm:translate-x-[-98%] lg:translate-x-[-106%] xl:translate-x-[-122%]"
          src={backgroundImage}
          alt=""
          width={918}
          height={1495}
          priority
          unoptimized
        />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white" />
      </div>
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:max-w-4xl lg:px-12">
          <h1 className="text-blue-600 font-display text-5xl font-bold tracking-tighter sm:text-6xl">
            <span className="sr-only">Arweave - </span>Arweave is permanent
            information storage.
          </h1>
          <div className="text-blue-900 mt-6 space-y-6 font-sans text-2xl tracking-tight">
            <p>
              Arweave is an open source protocol that allows you to permanently
              store everything from personal files, artifacts of history, to
              fully fledged decentralized web applications.
            </p>

            <p>
              All data stored on Arweave is composable, queryable and remixable.
              This enables the creation of a radically different form of web:
              the Permaweb.
            </p>

            <p>
              Arweave is not a typical “crypto project”. Our protocol does not
              have a team, instead it is powered by a fully decentralized
              ecosystem. The protocol is complete, mature and widely adopted.
              Anyone can evolve the Arweave protocol in a permissionless way.
            </p>
          </div>
          <Button href="#" className="mt-10 w-full sm:hidden">
            Get your tickets
          </Button>
        </div>
      </Container>
    </div>
  )
}
