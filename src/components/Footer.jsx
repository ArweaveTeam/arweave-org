import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'

export function Footer() {
  return (
    <footer className="mx-auto pt-40 sm:pb-20 xl:pt-52 xl:px-10">
      <Container className="flex flex-col items-center justify-start lg:flex-row">
        <p className="text-slate-500 mt-6 text-base lg:mt-0">
          &copy; MIT License 2023. Got something to add?{' '}
          <a href="#!" className="underline">
            Send a PR.
          </a>{' '}
          |{' '}
          <a href="#!" className="underline">
            Legal.
          </a>
        </p>
      </Container>
    </footer>
  )
}
