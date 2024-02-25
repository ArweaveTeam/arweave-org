import Image from 'next/image';
import clsx from 'clsx';

export default function ResourceList({ resources }) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {resources.map((resource) => (
        <a
          key={resource.link}
          href={resource.link}
          target={resource.link.startsWith('#') ? '' : '_blank'}
          rel="noreferrer"
          className={clsx(
            'relative col-span-1 flex flex-col text-center p-4 border rounded-lg border-gray-200 transition-transform transform hover:shadow-xl hover:border-orange',
            resource.construction && 'bg-yellow-100'
          )}
        >
          <div className="flex flex-1 flex-col items-center">
            {resource.logo ? (
              <Image
                src={resource.logo}
                alt={resource.title}
                className="w-32 h-32 object-contain"
              />
            ) : (
              <h3 className="text-xl text-gray-900">
                {resource.title}
              </h3>
            )}
          </div>
          {resource.construction && (
            <div className="text-yellow-700 mt-2">
              🚧 Under Construction
            </div>
          )}
        </a>
      ))}
    </div>
  );
}
