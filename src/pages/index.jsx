import Head from 'next/head'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Entrepreneurs } from '@/components/Entrepreneurs'
import { Developers } from '@/components/Developers'
import { Users } from '@/components/Users'
import { NavBar } from '@/components/NavBar'
import { Trustees } from '@/components/Trustees'

export default function Home() {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon-183x183.png" />
        <title>Arweave - A community-driven ecosystem</title>
        <meta
          name="description"
          content="Store data permanently on the decentralized web with Arweave."
        />
      </Head>
      <Header />
      <main>
        <Hero />
        <NavBar />
        <Users />
        <Developers />
        <Entrepreneurs />
        <Trustees />
      </main>
      <Footer />
    </>
  )
}
