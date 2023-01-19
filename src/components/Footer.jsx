import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'

export function Footer() {
  return (
    <footer className="mx-auto pt-40 sm:pb-20">
      <Container className="flex flex-col items-center justify-end lg:flex-row">
        <Logo className="text-slate-900 lg:hidden" up="up" />
        <Logo className="text-slate-900 hidden lg:block" />
        <p className="text-slate-500 mt-6 text-base lg:mt-0">
          &copy; Copyright {new Date().getFullYear()}. Minimum Spanning
          Technologies Limited (10889544). <br />
          International House, 24 Holborn Viaduct, London, EC1A 2BN, United
          Kingdom.
        </p>
      </Container>
    </footer>
  )
}
