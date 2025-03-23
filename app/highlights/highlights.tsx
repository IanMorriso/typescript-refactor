interface HighlightCard {
    title: string;
    description: string;
    hasGradient?: boolean;
    skills: string[];
}

const highlightCards: HighlightCard[] = [
    {
        title: "Eventilate: Breath Life Into Events",
        description: "An event management application for the Andriod platform. Created in Android Studio using Java, my team and I followed Agile Development practices to develop a user-friendly application that allows users to create, manage, and attend events. The app features real-time updates with Google Firebase, event geo-fencing, event notifications, and much more.",
        hasGradient: true,
        skills: ["Java", "Android Studio", "Firebase", "Agile", "Git", "Database Design"]
    },
    {
        title: "Member Retention - HackED 2023 Hackathon",
        description: "This project was created by our team to increase the memeber retention of financial institutions. We used machine learning to predict the likelihood of a member leaving the institution and created a user-friendly interface to display and interpert the results.",
        skills: ["Python", "Machine Learning", "Data Analysis", "Scikit-learn"]
    },
    {
        title: "Datathon - Predicting Alberta Wildfire Size Catagories",
        description: "A machine learning model created for a Datathon hosted by the University of Alberta Artificial Intelligence Society. This model predicts the size category of wildfires in Alberta using a government-created dataset.",
        hasGradient: true,
        skills: ["Python", "Machine Learning", "Data Science", "Pandas", "NumPy"]
    },
    {
        title: "Wordle",
        description: "A clone of the popular puzzle game, Wordle designed and created in Python with additional features. Included in the repo is a seperate hint program that can be used to generate hints based on current game state and word library in use.",
        skills: ["Python", "Data Structures", "Algorithms"]
    },
    {
        title: "RISC-V Snake",
        description: "A modified version of the classic game, Snake, developed in the RISC-V assembly language. Writing the exception handler for timer interrupts, keyboard inputs, and scoring was quite the challenge, but very rewarding.",
        hasGradient: true,
        skills: ["Assembly", "RISC-V", "Data Structures", "Stack Management"]
    },
    {
        title: "Pic Reads - HackED 2025 Hackathon",
        description: "",
        skills: ["Nuxt.js", "Vue"]
    },
];

function Card({ title, description, hasGradient, skills }: HighlightCard) {
    const cardContent = (
        <div className={`${hasGradient ? 'relative' : ''} overflow-hidden bg-white shadow-md rounded-xl h-full`}>
            <div className="p-9">
                <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
                <div className="flex flex-wrap gap-2 justify-center sm:justify-start mt-4">
                    {skills.map((skill, index) => (
                        <span 
                            key={index}
                            className="px-2 py-1 text-xs font-medium text-gray-600 bg-gray-100 rounded-full"
                        >
                            {skill}
                        </span>
                    ))}
                </div>
                <p className="mt-6 text-base text-gray-600">{description}</p>
            </div>
        </div>
    );

    if (hasGradient) {
        return (
            <div className="relative">
                <div className="absolute -inset-1">
                    <div className="w-full h-full rotate-180 opacity-30 blur-lg filter bg-gradient-to-r from-yellow-400 via-pink-500 to-green-600"></div>
                </div>
                {cardContent}
            </div>
        );
    }

    return cardContent;
}

export function Highlights() {
    return ( 
        <section className="py-12 bg-gray-900 text-gray-100 sm:py-12 lg:py-16">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="max-w-xl mx-auto text-center xl:max-w-2xl">
                    <h2 className="text-3xl font-bold leading-tight text-gray-50 sm:text-4xl xl:text-5xl mb-6">
                        Ian Morrison
                    </h2>
                    <p className="mb-4">
                        Software Engineer, Rock Climber, and Go-Getter!
                    </p>
                </div>
                <div className="grid max-w-4xl lg:max-w-6xl grid-cols-1 mx-auto mt-8 text-center gap-y-4 sm:gap-x-8 sm:grid-cols-2 lg:grid-cols-3 sm:mt-12 lg:mt-20 sm:text-left">
                    {highlightCards.map((card, index) => (
                        <Card key={index} {...card} />
                    ))}
                </div>
            </div>
        </section>
    );
}