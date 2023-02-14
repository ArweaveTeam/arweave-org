import { Button } from '@/components/Button'
import Link from 'next/link'
import { Container } from '@/components/Container'
import { DiamondIcon } from '@/components/DiamondIcon'
import { Logo } from '@/components/Logo'

export function Header() {
  return (
    <header className="relative z-50 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 lg:pt-4">
      <Container className="flex flex-wrap items-center justify-center sm:justify-between lg:flex-nowrap">
        <div className="mt-10 lg:mt-0 lg:grow lg:basis-0 xl:mt-10">
          <Link href="/" className="inline-block">
            <Logo className="text-slate-900 h-12 w-auto" up="up" />
          </Link>
        </div>
        {/* <div className="/10  order-first -mx-4 flex flex-auto basis-full overflow-x-auto whitespace-nowrap border-b py-4 font-mono text-sm sm:-mx-6 lg:order-none lg:mx-0 lg:basis-auto lg:border-0 lg:py-0">
          <div className="mx-auto flex items-center gap-4 px-4">
            <p>
              <time dateTime="2022-04-04">04</time>-
              <time dateTime="2022-04-06">06 of April, 2022</time>
            </p>
            <DiamondIcon className="h-1.5 w-1.5 overflow-visible fill-current stroke-current" />
            <p>Los Angeles, CA</p>
          </div>
        </div> */}
        {/* <div className="hidden uppercase sm:mt-10 sm:flex lg:mt-0 lg:grow lg:basis-0 lg:justify-end">
          <Button href="#">Claim AR tokens</Button>
        </div> */}
      </Container>
    </header>
  )
}
