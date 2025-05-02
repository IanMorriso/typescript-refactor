export function Contact() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          Get In Touch
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
          I'm always open to new opportunities and interesting projects.
          Feel free to reach out!
        </p>
        <div className="flex justify-center gap-4">
          <a href="https://github.com/ianmorriso" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
            Github
          </a>
          <a href="https://linkedin.com/in/ianhmorrison" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
} 