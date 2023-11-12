// import { Container } from '@/components/Container'
// import { Logo } from '@/components/Logo'
// import Link from 'next/link'

// export function Footer() {
//   return (
//     <footer className="mx-auto pt-40 sm:pb-20">
//       <Container className="flex flex-col items-center justify-start lg:flex-row">
//         <p className="text-slate-500 mt-6 text-base lg:mt-0">
//           &copy; MIT License 2023. Got something to add?{' '}
//           <a
//             href="https://github.com/arweaveteam/arweave-org"
//             target="_blank"
//             rel="noreferrer"
//             className="underline hover:text-orange"
//           >
//             Send a PR.
//           </a>{' '}
//           |{' '}
//           <Link href="/legal-policies" className="underline hover:text-orange">
//             Legal policies.
//           </Link>{' '}
//           |{' '}
//           <Link href="/brand-kit" className="underline hover:text-orange">
//             Brand Kit
//           </Link>
//           .
//         </p>
//       </Container>
//     </footer>
//   )
// }
import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import Link from 'next/link'

export function Footer() {
  return (
    <footer className="py-8 text-slate-500">
      <Container className="flex flex-col items-center justify-center lg:flex-row">
        <p className="text-lg lg:text-base text-center lg:text-left">
          &copy; MIT License {new Date().getFullYear()} Arweave.
        </p>
        <div className="flex flex-wrap justify-center mt-4 lg:mt-0">
          <div className="mx-2">
            <a
              href="https://github.com/arweaveteam/arweave-org"
              target="_blank"
              rel="noreferrer"
              className="text-slate-500 hover:text-orange transition duration-300"
            >
              Send a PR
            </a>
          </div>
          |
          <div className="mx-2">
            <Link href="/legal-policies" className="text-slate-500 hover:text-orange transition duration-300">
              Legal Policies
            </Link>
          </div>
          |
          <div className="mx-2">
            <Link href="/brand-kit" className="text-slate-500 hover:text-orange transition duration-300">
              Brand Kit
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  )
}
