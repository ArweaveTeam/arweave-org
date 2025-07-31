import { useRef, useState } from 'react'
import { Popover } from '@headlessui/react'
import clsx from 'clsx'

const sections = [
  { id: '/', title: 'Discover.', icon: '🏠' },
  { id: '/use/index.html', title: 'Use.', icon: '👤' },
  { id: '/build/index.html', title: 'Build.', icon: '</>' },
  { id: '/funding/index.html', title: 'Get Funded.', icon: '$' },
]

function MenuIcon({ open, ...props }) {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        d={open ? 'M17 7 7 17M7 7l10 10' : 'm15 16-3 3-3-3M15 8l-3-3-3 3'}
      />
    </svg>
  )
}

export function NavBar({ currentPathname }) {
  let navBarRef = useRef()
  let miniMenuRef = useRef()
  let [isOpen, setIsOpen] = useState(false)

  let currentTitle =
    currentPathname &&
    sections.find((section) => section.id === currentPathname)?.title
  if (!currentTitle) currentTitle = 'Menu.' // default

  return (
    <div
      ref={navBarRef}
      className={clsx(
        'fixed bottom-0 left-0 right-0 z-50',
        isOpen && ' bottom-28'
      )}
    >
      <Popover className="sm:hidden" ref={miniMenuRef}>
        {({ open }) => (
          <>
            <div
              className={clsx(
                'relative flex items-center px-4 py-3',
                !open &&
                'bg-white/95 shadow-sm [@supports(backdrop-filter:blur(0))]:bg-white/80 [@supports(backdrop-filter:blur(0))]:backdrop-blur',
                open && ' open'
              )}
            >
              {!open && (
                <>
                  <span className="ml-4 text-base  text-orange underline">
                    {currentTitle}
                  </span>
                </>
              )}
              <Popover.Button
                className={clsx(
                  '-mr-1 ml-auto flex h-8 w-8 items-center justify-center',
                  open && 'relative z-10'
                )}
                aria-label="Toggle navigation menu"
                onClick={() => {
                  setIsOpen(!isOpen)
                }}
              >
                {!open && (
                  <>
                    {/* Increase hit area */}
                    <span className="absolute inset-0" />
                  </>
                )}
                <MenuIcon open={open} className="h-6 w-6 stroke-gray-700" />
              </Popover.Button>
            </div>
            <Popover.Panel className="absolute inset-x-0 top-0 bg-white/95 py-3.5 shadow-sm [@supports(backdrop-filter:blur(0))]:bg-white/80 [@supports(backdrop-filter:blur(0))]:backdrop-blur">
              {sections.map((section) => (
                <Popover.Button
                  key={section.id}
                  className="flex items-center px-4 py-1.5"
                  onClick={() => {
                    setIsOpen(false)
                    // go to link
                    if (section.id !== currentPathname) {
                      window.location.href
                        ? window.location.href = section.id
                        : window.location.pathname = section.id
                    }
                  }
                  }
                >
                  <span
                    className={clsx(
                      'ml-4 text-base  ',
                      currentPathname === section.id
                        ? 'text-orange underline'
                        : 'text-gray-900'
                    )}
                  >
                    {section.title}
                  </span>
                </Popover.Button>
              ))}
            </Popover.Panel>
            <div className="absolute inset-x-0 bottom-full z-10 h-4 bg-white" />
          </>
        )}
      </Popover>
      <div className="hidden sm:flex sm:h-32 sm:justify-center sm:border-b sm:border-gray-200 sm:bg-white/95 sm:[@supports(backdrop-filter:blur(0))]:bg-white/80 sm:[@supports(backdrop-filter:blur(0))]:backdrop-blur">
        <ol
          role="list"
          className="mb-[-2px] grid auto-cols-[minmax(0,15rem)] grid-flow-col text-2xl  text-gray-900 [counter-reset:section]"
        >
          {sections.map((section) => (
            <li key={section.id} className="flex [counter-increment:section]">
              <a
                href={`${section.id}`}
                className={clsx(
                  'flex w-full flex-col items-center justify-center border-b-2 before:mb-2 before:font-mono before:text-sm before:content-[counter(section,decimal-leading-zero)]',
                  currentPathname === section.id
                    ? 'border-b-8 border-orange text-orange before:text-orange'
                    : 'border-transparent before:text-gray-500 hover:bg-gray-50/40 hover:text-orange hover:before:text-orange'
                )}
              >
                {section.title}
              </a>
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}
