import Image from 'next/image'

export default function ResourceScreenList({ resources }) {
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
          className="col-span-1 flex flex-col text-center  grayscale transition duration-300 ease-in-out hover:grayscale-0"
        >
          <div className="flex flex-1 flex-col pt-8 align-middle">
            {/* If resource.logo, show the logo, otherwise show the name */}
            {resource.screenshot ? (
              <>
                <Image
                  src={resource.screenshot}
                  alt={resource.title}
                  target="_blank"
                  rel="noreferer noopener"
                  className="mx-auto inline-block h-auto w-auto flex-shrink-0 rounded-lg object-cover align-middle shadow-lg"
                />
                <div className="space-y-1 pt-3 text-xl font-medium leading-6">
                  <h3>{resource.title}</h3>
                </div>
              </>
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
