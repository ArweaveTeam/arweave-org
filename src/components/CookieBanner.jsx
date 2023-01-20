import { Fragment, useState, useEffect } from 'react'
import { Transition } from '@headlessui/react'
import Link from 'next/link'

export default function CookieBanner() {
  const [show, setShow] = useState(false)

  const useStateWithLocalStorage = (localStorageKey) => {
    let localStorage
    if (typeof window !== 'undefined') {
      localStorage = window.localStorage
    } else {
      localStorage = null
      console.log('localStorage is not available')
    }

    const [value, setValue] = useState(
      localStorage
        ? localStorage.getItem(localStorageKey) === null
          ? null
          : localStorage.getItem(localStorageKey) === 'null'
          ? null
          : localStorage.getItem(localStorageKey) === 'true'
          ? true
          : false
        : null
    )

    useEffect(() => {
      if (localStorage) {
        localStorage.setItem(localStorageKey, value)
      }
    }, [value])

    return [value, setValue]
  }

  // Save the user's preference to localStorage
  const [userPreference, setUserPreference] =
    useStateWithLocalStorage('user-preference')

  // If the user has already made a choice, don't display the banner
  useEffect(() => {
    console.log('userPreference', userPreference)
    if (userPreference !== null) {
      setShow(false)
    } else {
      setShow(true)
    }
  }, [userPreference])

  return (
    <>
      {/* Global notification live region, render this permanently at the end of the document */}
      <div
        aria-live="assertive"
        className="pointer-events-none fixed inset-0 z-50 flex items-end px-4 py-20 sm:py-40"
      >
        <div className="flex w-full flex-col items-center space-y-4 sm:items-end">
          {/* Notification panel, dynamically insert this into the live region when it needs to be displayed */}
          <Transition
            show={show}
            as={Fragment}
            enter="transform ease-out duration-300 transition"
            enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
            enterTo="translate-y-0 opacity-100 sm:translate-x-0"
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="pointer-events-auto z-50 flex w-full max-w-md divide-x divide-gray-200 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="flex w-0 flex-1 items-center p-4">
                <div className="w-full">
                  <p className="text-sm text-gray-900">
                    Cookie helps us improve your experience.
                  </p>
                  <p className="mt-1 text-sm text-gray-500">
                    This website uses cookies to improve the user experience,
                    and for analytics. By using this site, you agree to our use
                    of cookies.
                  </p>
                  <p className="mt-1">
                    <Link
                      href="/legal-policies"
                      className=" text-sm text-gray-500 underline"
                    >
                      More about our cookie policy
                    </Link>
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="flex flex-col divide-y divide-gray-200">
                  <div className="flex h-0 flex-1">
                    <button
                      type="button"
                      className="flex w-full items-center justify-center rounded-none rounded-tr-lg border border-transparent px-4 py-3 text-sm font-bold text-gray-900 hover:text-gray-500 focus:z-10 focus:outline-none focus:ring-2 focus:ring-gray-500"
                      onClick={() => {
                        setShow(false)
                        setUserPreference(true)
                      }}
                    >
                      Accept
                    </button>
                  </div>
                  <div className="flex h-0 flex-1">
                    <button
                      type="button"
                      className="flex w-full items-center justify-center rounded-none rounded-br-lg border border-transparent px-4 py-3 text-sm text-gray-700 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500"
                      onClick={() => {
                        setShow(false)
                        setUserPreference(false)
                      }}
                    >
                      No, thanks
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Transition>
        </div>
      </div>
    </>
  )
}
