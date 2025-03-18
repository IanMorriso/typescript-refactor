export function About() {
  return (
    <section className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              I'm a software engineer with X years of experience building web applications.
              My journey in tech started with [your story]. I'm passionate about [your interests]
              and constantly learning new technologies.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Skills
            </h3>
            <div className="flex flex-wrap gap-2">
              {['JavaScript', 'TypeScript', 'React', 'Node.js', 'Tailwind CSS'].map((skill) => (
                <span key={skill} className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm text-gray-700 dark:text-gray-300">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 