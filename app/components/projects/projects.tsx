import { useState } from "react";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  link: string;
}

const PROJECTS = [
  {
    title: "TCG Collection Manager",
    description: "This is a Trading Card Collection Management System that I'm creating with Typescript. Users can upload card data to begin tracking their collection in terms of individual card prices, current market values, collection value, and more. This project is a work in progress, but I am excited to continue developing it!",
    technologies: ["TypeScript", "React", "Node.js", "Express", "MongoDB", "APIs"],
    link: "https://github.com/IanMorriso/collection-manager",
  },

  {
    title: "HackED 2025: PicReads",
    description: "This web application  allows users to upload images of books on a bookshelf and recieve their corresponding reviews and ratings. I used this project as an opportunity to learn Nuxt.js and brush up on my Vue and Front-End skills to create a UI for data visualization. To extract data from our images we used OCR with PyTesseract, allowing us to feed our data into the Google Books API.",
    technologies: ["Nuxt.js", "Vue", "Flask", "PyTesseract"],
    link: "https://github.com/HackED-404/look-at-this-photograph",
  },

  {
    title: "Eventilate: Breath Life into Events",
    description:
      "An event management application for the Andriod platform. Created in Android Studio using Java, my team and I followed Agile Development practices to develop a user-friendly application that allows users to create, manage, and attend events. The app features real-time updates with Google Firebase, event geo-fencing, event notifications, and much more.",
    technologies: ["Android Studio", "Java", "Google Cloud Platform"],
    link: "https://github.com/404-Founders-Not-Found/Syntax-Terror",
  },

  {
    title: "Portfolio Website",
    description:
      "A personal portfolio website built with React and TypeScript. This website showcases my projects, skills, and experience. It is fully responsive and optimized for performance.",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    link: "https://github.com/IanMorriso/typescript-refactor",
  },

  {
    title: "UAIS Datathon: Wildfire Size Prediction Model",
    description: "A machine learning model created for a Datathon hosted by the University of Alberta Artificial Intelligence Society. This model predicts the size category of wildfires in Alberta using a government-created dataset.",
    technologies: ["Python", "Pandas", "Scikit-learn", "Pipelines", "Data Processing"],
    link: "https://github.com/IanMorriso/UAIS-Wildfire-Datathon",
  },
  {
    title: "Wordle Clone",
    description: "A clone of the popular word game Wordle. This project was created to run in Python's terminal, allowing users 5 chances to guess a random 5-letter word. Utelizing Object-Oriented programming, the game is designed to clean and use a hash-seperated dictionary of words to randomly select a word for the user to guess. I developed a seperate hint program to assist users, which accepts current correct letter placements and 'wild card' letters. With this, the program checks the dictionary and displays possible matches.",
    technologies: ["Python", "Object-Oriented Programming", "Data Cleaning", "Data Structures"],
    link: "https://github.com/IanMorriso/wordle-clone",
  },
  
  {
    title: "Snake Game in RISC-V Assembly",
    description:"A simple snake game created in RISC-V Assembly. This was a challenging project that required a deep understanding of assembly language and low-level programming concepts. It was a very rewarding experience, specifically the development of the exception handlers to handle user input and game events.",
    technologies: ["RISC-V Assembly", "Assembly Language", "Exception Handlers"],
    link: "https://github.com/IanMorriso/RISC-Vnake",
  },

];

export function Projects() {

  return ( <ProjectGrid projects={PROJECTS} /> );

} 
function ProjectGrid({ projects }: {projects: Project[] }) {

  const projectCards = projects.map((project, index) => (
    <ProjectCard key={index} project={project} />
  ));

  return (
    <section className="py-20 bg-white dark:bg-gray-800 min-h-screen flex items-center">
      <div className="container mx-auto px-4 max-w-6xl">

        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectCards}
        </div>

      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const [isExpanded, setIsExpanded] = useState(false);
  
  // Estimate if text will overflow 3 lines (roughly 120-140 chars depending on content)
  const estimatedMaxChars = 140;
  const shouldShowReadMore = project.description.length > estimatedMaxChars;

  return (
    <div className="bg-gray-50 dark:bg-gray-700 rounded-lg overflow-hidden h-full flex flex-col">
      <div className="p-6 flex flex-col h-full">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          {project.title}
        </h3>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-600 rounded dark:bg-blue-900 dark:text-blue-200"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex-grow mb-4">
          <p 
            className={`text-gray-600 dark:text-gray-300 ${
              !isExpanded && shouldShowReadMore 
                ? 'line-clamp-3' 
                : ''
            }`}
          >
            {project.description}
          </p>
          {shouldShowReadMore && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-blue-500 hover:text-blue-600 dark:hover:text-blue-400 text-sm mt-2 font-medium"
            >
              {isExpanded ? "Show Less" : "Read More"}
            </button>
          )}
        </div>
        <div className="flex gap-2 mt-auto">
            <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-600 dark:hover:text-blue-400"
            >
            View Project →
            </a>
        </div>
      </div>
    </div>
  );
}

