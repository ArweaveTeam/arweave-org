import Image from 'next/image'

export default function ResourceList({ resources }) {
  console.log(resources)

  return (
    <div
      role="list"
      className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
    >
      {resources.map((resource) => (
        <a
          key={resource.name}
          href={resource.link}
          target="_blank"
          className="col-span-1 flex flex-col text-center"
        >
          <div className="flex flex-1 flex-col p-8 align-middle">
            {/* If resource.logo, show the logo, otherwise show the name */}
            {resource.logo ? (
              <Image
                src={resource.logo}
                alt={resource.title}
                target="_blank"
                rel="noreferer noopener"
                className="mx-auto inline-block h-20 w-auto flex-shrink-0 align-middle grayscale transition duration-300 ease-in-out hover:grayscale-0"
              />
            ) : (
              <h3 className="text-3xl font-medium text-gray-900">
                {resource.title}
              </h3>
            )}
          </div>
        </a>
      ))}
    </div>
  )
}
