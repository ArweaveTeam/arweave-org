import Image from 'next/image'
import clsx from 'clsx'

// On hover of the image, add 🚧 for the resources that have construction: true

export default function ResourceList({ resources }) {
  return (
    <div
      role="list"
      className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
    >
      {resources.map((resource) => (
        <a
          key={resource.link}
          href={resource.link}
          target="_blank"
          rel="noreferrer"
          className={clsx(
            'relative col-span-1 flex flex-col text-center',
            resource.construction &&
              ' hover:before:absolute hover:before:bottom-8 hover:before:right-8 hover:before:content-["🚧"]'
          )}
        >
          <div className="flex flex-1 flex-col p-8 align-middle">
            {resource.logo ? (
              <Image
                src={resource.logo}
                alt={resource.title}
                className="duration-50 mx-auto inline-block h-20 w-auto flex-shrink-0 border-b-2 border-transparent align-middle transition ease-in-out hover:border-spacing-2 hover:border-orange"
              />
            ) : (
              <h3 className="duration-50 border-b-2 border-transparent  text-3xl  text-gray-900 transition hover:border-spacing-2 hover:border-orange">
                {resource.title}
              </h3>
            )}
          </div>
        </a>
      ))}
    </div>
  )
}
