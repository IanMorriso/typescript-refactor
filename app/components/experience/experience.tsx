export function Experience() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12">
          Experience
        </h2>
        <div className="space-y-12">
          <div className="border-l-4 border-blue-500 pl-4">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Senior Developer
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-2">
              Company Name • 2020 - Present
            </p>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
              <li>Led development of key features for main product</li>
              <li>Mentored junior developers and improved team processes</li>
              <li>Implemented new technology stack improving performance by 40%</li>
            </ul>
          </div>
          {/* Add more experience items here */}
        </div>
      </div>
    </section>
  );
} 