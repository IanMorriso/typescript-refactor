export function Projects() {
  return (
    <section className="py-20 bg-white dark:bg-gray-800 min-h-screen flex items-center">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12">
          Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project Card 1 */}
          <div className="bg-gray-50 dark:bg-gray-700 rounded-lg overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Eventilate: Breath Life into Events
              </h3>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-600 rounded dark:bg-blue-900 dark:text-blue-200">
                  Android Studio
                </span>
                <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-600 rounded dark:bg-green-900 dark:text-green-200">
                  Java
                </span>
                <span className="px-2 py-1 text-xs font-medium bg-purple-100 text-purple-600 rounded dark:bg-purple-900 dark:text-purple-200">
                  Firebase
                </span>
                <span className="px-2 py-1 text-xs font-medium bg-red-100 text-red-600 rounded dark:bg-red-900 dark:text-red-200">
                    
                </span>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
              An event management application for the Andriod platform. Created in Android Studio using Java, my team and I followed Agile Development practices to develop a user-friendly application that allows users to create, manage, and attend events. The app features real-time updates with Google Firebase, event geo-fencing, event notifications, and much more.
              </p>
              <div className="flex gap-2">
                <a href="#" className="text-blue-500 hover:text-blue-600 dark:hover:text-blue-400">
                  View Project →
                </a>
              </div>
            </div>
          </div>
          {/* Project Card 2 */}
          <div className="bg-gray-50 dark:bg-gray-700 rounded-lg overflow-hidden">
            <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    Project Name
                </h3>
                <div className="flex flex-wrap gap-2 mb-4"> 
                    <span className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-600 rounded dark:bg-blue-900 dark:text-blue-200">
                        React
                    </span>
                    <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-600 rounded dark:bg-green-900 dark:text-green-200">
                        Node.js
                    </span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Brief description of the project and your role in it.
                </p>
                <div className="flex gap-2">
                    <a href="#" className="text-blue-500 hover:text-blue-600 dark:hover:text-blue-400">
                    View Project →
                    </a>                
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 