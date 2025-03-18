export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Your Name
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
            Software Engineer • Developer • Tech Enthusiast
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            I'm a passionate developer focused on creating elegant solutions to complex problems.
            Specialized in web development and modern technologies.
          </p>
        </div>
      </div>
    </section>
  );
} 