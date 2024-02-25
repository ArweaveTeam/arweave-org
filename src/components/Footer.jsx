import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import Link from 'next/link'

export function Footer() {
  return (
    <footer className="mx-auto pt-40 sm:pb-20">
      <Container className="flex flex-col items-center justify-start lg:flex-row">
        <p className="text-slate-500 mt-6 text-base lg:mt-0">
          &copy; MIT License 2024. Got something to add?{' '}
          <a
            href="https://github.com/arweaveteam/arweave-org"
            target="_blank"
            rel="noreferrer"
            className="underline"
          >
            Send a PR.
          </a>{' '}
          |{' '}
          <Link href="/legal-policies" className="underline">
            Legal policies.
          </Link>{' '}
          |{' '}
          <Link href="/brand-kit" className="underline">
            Brand Kit
          </Link>
          .
        </p>
      </Container>
    </footer>
  )
}
