import Image from 'next/image'

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
          className="col-span-1 flex flex-col text-center"
        >
          <div className="flex flex-1 flex-col p-8 align-middle">
            {/* If resource.logo, show the logo, otherwise show the name */}
            {resource.logo ? (
              <Image
                src={resource.logo}
                alt={resource.title}
                className="duration-50 mx-auto inline-block h-20 w-auto flex-shrink-0 border-b-2 border-transparent align-middle transition ease-in-out hover:border-spacing-2 hover:border-orange"
              />
            ) : (
              <h3 className="duration-50 border-b-2 border-transparent  text-3xl font-medium text-gray-900 transition hover:border-spacing-2 hover:border-orange">
                {resource.title}
              </h3>
            )}
          </div>
        </a>
      ))}
    </div>
  )
}
