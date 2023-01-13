import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <>
      <div className="mx-auto max-w-2xl lg:max-w-4xl lg:px-12">
        <h1 className="text-blue-600 font-display text-5xl font-bold tracking-tighter sm:text-6xl">
          <span className="sr-only">Arweave - </span>Arweave is permanent
          information storage.
        </h1>
        <div className="text-blue-900 mt-6 space-y-6 font-sans text-2xl tracking-tight">
          <p>
            Arweave is an open source protocol that allows you to permanently
            store everything from personal files, artifacts of history, to fully
            fledged decentralized web applications.
          </p>

          <p>
            All data stored on Arweave is composable, queryable and remixable.
            This enables the creation of a radically different form of web: the
            Permaweb.
          </p>

          <p>
            Arweave is not a typical “crypto project”. Our protocol does not
            have a team, instead it is powered by a fully decentralized
            ecosystem. The protocol is complete, mature and widely adopted.
            Anyone can evolve the Arweave protocol in a permissionless way.
          </p>
        </div>
      </div>
      <Footer />
    </>
  )
}
