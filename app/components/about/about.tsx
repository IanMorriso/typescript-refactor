export function About() {
  return (
    <section className="py-20 bg-white dark:bg-gray-800 min-h-screen flex items-center">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              I'm a fourth-year Computer Science student at the University of Alberta looking to Intern for a company that values growth, grit, and innovation.
              My journey in tech started when I realized how unhappy I was with my career in construction. I always told myself I wasn't smart enough for university; but at twenty-six I decided enough was enough and I was going to follow my dream of getting a degree in computer science and working as a Software Engineer.
            </p>
            <br />
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              It was a daunting task to even begin the change, as I had to upgrade my high school courses to meet the competitive average for admission. However, after a year and a half of study and working full-time to save, I was accepted to the University of Alberta! Now the real challenge begins and I wouldn't trade it for anything.
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