import type {
    EnhancedProject,
    SkillCategory,
    Experience,
    Education,
    Achievement,
    ContactInfo,
    HeroContent,
    SEOMetadata,
    ProfessionalLink
} from '../types/portfolio';

// Professional Links
export const PROFESSIONAL_LINKS: ProfessionalLink[] = [
    {
        platform: 'github',
        url: 'https://github.com/IanMorriso',
        label: 'GitHub',
        icon: 'github'
    },
    {
        platform: 'linkedin',
        url: 'https://linkedin.com/in/ianmorrison',
        label: 'LinkedIn',
        icon: 'linkedin'
    },
    {
        platform: 'email',
        url: 'mailto:ianmorrison@example.com',
        label: 'Email',
        icon: 'email'
    },
    {
        platform: 'resume',
        url: '/resume.pdf',
        label: 'Download Resume',
        icon: 'download'
    }
];

// Enhanced Hero Content
export const HERO_CONTENT: HeroContent = {
    name: 'Ian Morrison',
    title: 'Software Engineering Student',
    subtitle: 'Computer Science • University of Alberta',
    description: 'Passionate about building innovative solutions and seeking software engineering internship opportunities to grow and contribute to meaningful projects.',
    ctaText: 'Available for Internships',
    resumeDownloadUrl: '/resume.pdf',
    professionalLinks: PROFESSIONAL_LINKS
};

// Enhanced Skills Data
export const SKILLS_DATA: SkillCategory[] = [
    {
        name: 'Programming Languages',
        skills: [
            {
                name: 'TypeScript/JavaScript',
                proficiency: 'Advanced',
                yearsOfExperience: 2,
                projectExamples: ['TCG Collection Manager', 'Portfolio Website'],
                description: 'Strong experience with modern ES6+ features, async programming, and type systems'
            },
            {
                name: 'Python',
                proficiency: 'Intermediate',
                yearsOfExperience: 2,
                projectExamples: ['Wildfire Prediction Model', 'PicReads OCR'],
                description: 'Data science, machine learning, and backend development'
            },
            {
                name: 'Java',
                proficiency: 'Intermediate',
                yearsOfExperience: 1,
                projectExamples: ['Eventilate Android App'],
                description: 'Android development and object-oriented programming'
            },
            {
                name: 'C',
                proficiency: 'Intermediate',
                yearsOfExperience: 1,
                projectExamples: ['University Coursework'],
                description: 'Systems programming and memory management'
            },
            {
                name: 'RISC-V Assembly',
                proficiency: 'Beginner',
                projectExamples: ['Snake Game'],
                description: 'Low-level programming and computer architecture understanding'
            }
        ]
    },
    {
        name: 'Frameworks & Libraries',
        skills: [
            {
                name: 'React',
                proficiency: 'Advanced',
                projectExamples: ['Portfolio Website', 'TCG Collection Manager'],
                description: 'Hooks, context, performance optimization, and modern patterns'
            },
            {
                name: 'Node.js/Express',
                proficiency: 'Intermediate',
                projectExamples: ['TCG Collection Manager'],
                description: 'RESTful APIs, middleware, and server-side development'
            },
            {
                name: 'Vue/Nuxt.js',
                proficiency: 'Intermediate',
                projectExamples: ['PicReads'],
                description: 'Component-based development and SSR applications'
            },
            {
                name: 'Flask',
                proficiency: 'Beginner',
                projectExamples: ['PicReads'],
                description: 'Python web framework for API development'
            }
        ]
    },
    {
        name: 'Tools & Technologies',
        skills: [
            {
                name: 'Git/GitHub',
                proficiency: 'Advanced',
                projectExamples: ['TCG Collection Manager', 'Portfolio Website', 'Eventilate'],
                description: 'Version control, branching strategies, and collaborative development'
            },
            {
                name: 'MongoDB',
                proficiency: 'Intermediate',
                projectExamples: ['TCG Collection Manager'],
                description: 'NoSQL database design and optimization'
            },
            {
                name: 'Firebase',
                proficiency: 'Intermediate',
                projectExamples: ['Eventilate'],
                description: 'Real-time databases and authentication'
            },
            {
                name: 'REST APIs',
                proficiency: 'Intermediate',
                projectExamples: ['TCG Collection Manager', 'PicReads'],
                description: 'API design, integration, and consumption'
            },
            {
                name: 'Tailwind CSS',
                proficiency: 'Advanced',
                projectExamples: ['Portfolio Website'],
                description: 'Utility-first CSS framework for responsive design'
            }
        ]
    },
    {
        name: 'Data Science & ML',
        skills: [
            {
                name: 'Pandas',
                proficiency: 'Intermediate',
                projectExamples: ['Wildfire Prediction Model'],
                description: 'Data manipulation and analysis'
            },
            {
                name: 'Scikit-learn',
                proficiency: 'Beginner',
                projectExamples: ['Wildfire Prediction Model'],
                description: 'Machine learning model development'
            },
            {
                name: 'PyTesseract',
                proficiency: 'Beginner',
                projectExamples: ['PicReads'],
                description: 'Optical Character Recognition (OCR) for text extraction'
            }
        ]
    }
];

// Enhanced Projects Data
export const ENHANCED_PROJECTS: EnhancedProject[] = [
    {
        title: 'TCG Collection Manager',
        description: 'Full-stack TypeScript application for trading card collection management with real-time price tracking and analytics.',
        problemStatement: 'Card collectors need a centralized system to track collection value, market prices, and inventory management across multiple trading card games.',
        solution: 'Built a comprehensive web application with real-time price tracking, collection analytics, inventory management, and integration with multiple card pricing APIs.',
        technologies: [
            {
                name: 'TypeScript',
                category: 'language',
                reasonForChoice: 'Type safety for complex data structures and API interactions'
            },
            {
                name: 'React',
                category: 'framework',
                reasonForChoice: 'Component-based architecture for scalable UI development'
            },
            {
                name: 'Node.js',
                category: 'framework',
                reasonForChoice: 'JavaScript runtime for consistent full-stack development'
            },
            {
                name: 'Express',
                category: 'framework',
                reasonForChoice: 'Lightweight web framework for RESTful API development'
            },
            {
                name: 'MongoDB',
                category: 'database',
                reasonForChoice: 'Flexible document structure for varied card data formats'
            }
        ],
        metrics: [
            {
                label: 'API Integration',
                value: '3+ External APIs',
                description: 'Integrated multiple card pricing and data APIs for comprehensive market data'
            },
            {
                label: 'Data Processing',
                value: '10,000+ Cards',
                description: 'Handles large datasets with efficient querying and indexing'
            },
            {
                label: 'Performance',
                value: '<2s Load Time',
                description: 'Optimized database queries and caching for fast data retrieval'
            }
        ],
        links: [
            {
                type: 'github',
                url: 'https://github.com/IanMorriso/collection-manager',
                label: 'View Source Code'
            }
        ],
        highlights: [
            'Implemented real-time price tracking with WebSocket connections',
            'Built responsive UI handling complex data visualization',
            'Designed scalable database schema for card relationships',
            'Created efficient API endpoints with proper error handling'
        ],
        codeSnippet: {
            language: 'typescript',
            code: `// Real-time price tracking implementation
interface PriceUpdate {
  cardId: string;
  currentPrice: number;
  priceChange: number;
  timestamp: Date;
}

const trackPriceUpdates = async (cardIds: string[]) => {
  const priceUpdates = await Promise.all(
    cardIds.map(async (id) => {
      const response = await fetch(\`/api/cards/\${id}/price\`);
      return response.json() as PriceUpdate;
    })
  );
  
  return priceUpdates.filter(update => 
    Math.abs(update.priceChange) > 0.05
  );
};`,
            description: 'Efficient price tracking system with change detection',
            filename: 'priceTracker.ts'
        },
        featured: true
    },
    {
        title: 'HackED 2025: PicReads',
        description: 'Web application that uses OCR to extract book titles from bookshelf images and provides corresponding reviews and ratings.',
        problemStatement: 'Book enthusiasts need a quick way to get reviews and ratings for books they see on bookshelves without manually searching each title.',
        solution: 'Developed a web application using OCR technology to extract book titles from images and automatically fetch reviews from the Google Books API.',
        technologies: [
            {
                name: 'Nuxt.js',
                category: 'framework',
                reasonForChoice: 'Server-side rendering for better SEO and performance'
            },
            {
                name: 'Vue',
                category: 'framework',
                reasonForChoice: 'Reactive framework for dynamic UI components'
            },
            {
                name: 'Flask',
                category: 'framework',
                reasonForChoice: 'Python backend for OCR processing and API integration'
            },
            {
                name: 'PyTesseract',
                category: 'library',
                reasonForChoice: 'Reliable OCR library for text extraction from images'
            }
        ],
        metrics: [
            {
                label: 'OCR Accuracy',
                value: '85%+',
                description: 'High accuracy rate for book title extraction from clear images'
            },
            {
                label: 'Processing Time',
                value: '<5 seconds',
                description: 'Fast image processing and API response times'
            },
            {
                label: 'Hackathon Result',
                value: 'Top 10 Finalist',
                description: 'Recognized for innovative use of OCR technology'
            }
        ],
        links: [
            {
                type: 'github',
                url: 'https://github.com/HackED-404/look-at-this-photograph',
                label: 'View Source Code'
            }
        ],
        highlights: [
            'Implemented OCR pipeline for accurate text extraction',
            'Created intuitive UI for image upload and results display',
            'Integrated Google Books API for comprehensive book data',
            'Developed under time constraints during 24-hour hackathon'
        ],
        featured: true
    },
    {
        title: 'Eventilate: Breathe Life into Events',
        description: 'Android event management application with real-time updates, geo-fencing, and comprehensive event features.',
        problemStatement: 'Event organizers and attendees need a comprehensive platform to create, manage, and participate in events with real-time coordination.',
        solution: 'Built a full-featured Android application using Agile development practices with real-time Firebase integration and location-based services.',
        technologies: [
            {
                name: 'Java',
                category: 'language',
                reasonForChoice: 'Native Android development with robust object-oriented features'
            },
            {
                name: 'Android Studio',
                category: 'tool',
                reasonForChoice: 'Official IDE with comprehensive Android development tools'
            },
            {
                name: 'Firebase',
                category: 'database',
                reasonForChoice: 'Real-time database and authentication for live event updates'
            }
        ],
        metrics: [
            {
                label: 'Team Size',
                value: '4 Developers',
                description: 'Collaborative development using Agile methodologies'
            },
            {
                label: 'Features Implemented',
                value: '15+ Core Features',
                description: 'Comprehensive event management functionality'
            },
            {
                label: 'Real-time Updates',
                value: '<1s Latency',
                description: 'Fast synchronization across all connected devices'
            }
        ],
        links: [
            {
                type: 'github',
                url: 'https://github.com/404-Founders-Not-Found/Syntax-Terror',
                label: 'View Source Code'
            }
        ],
        highlights: [
            'Implemented real-time event updates with Firebase',
            'Created geo-fencing functionality for location-based notifications',
            'Developed user-friendly interface following Material Design principles',
            'Applied Agile development practices with regular sprint cycles'
        ]
    },
    {
        title: 'Portfolio Website',
        description: 'Personal portfolio website built with modern React and TypeScript, showcasing projects and professional experience.',
        problemStatement: 'Need a professional online presence to showcase technical skills and projects to potential employers and collaborators.',
        solution: 'Developed a responsive, performant portfolio website using React Router 7 with TypeScript and Tailwind CSS for optimal user experience.',
        technologies: [
            {
                name: 'React',
                category: 'framework',
                reasonForChoice: 'Component-based architecture for maintainable code'
            },
            {
                name: 'TypeScript',
                category: 'language',
                reasonForChoice: 'Type safety and better developer experience'
            },
            {
                name: 'Tailwind CSS',
                category: 'framework',
                reasonForChoice: 'Utility-first approach for rapid UI development'
            },
            {
                name: 'React Router 7',
                category: 'framework',
                reasonForChoice: 'Modern routing with server-side rendering capabilities'
            }
        ],
        metrics: [
            {
                label: 'Performance Score',
                value: '95+',
                description: 'Lighthouse performance score with optimized loading'
            },
            {
                label: 'Mobile Responsive',
                value: '100%',
                description: 'Fully responsive design across all device sizes'
            },
            {
                label: 'Load Time',
                value: '<2 seconds',
                description: 'Fast initial page load with code splitting'
            }
        ],
        links: [
            {
                type: 'github',
                url: 'https://github.com/IanMorriso/typescript-refactor',
                label: 'View Source Code'
            },
            {
                type: 'demo',
                url: 'https://ianmorrison.dev',
                label: 'Live Website'
            }
        ],
        highlights: [
            'Implemented modern React patterns with hooks and context',
            'Created responsive design with mobile-first approach',
            'Optimized for performance with lazy loading and code splitting',
            'Built with accessibility and SEO best practices'
        ]
    },
    {
        title: 'UAIS Datathon: Wildfire Size Prediction Model',
        description: 'Machine learning model for predicting wildfire size categories using Alberta government dataset and scikit-learn.',
        problemStatement: 'Wildfire management requires accurate prediction of fire size categories to allocate appropriate resources and response strategies.',
        solution: 'Developed a machine learning pipeline using Python and scikit-learn to predict wildfire size categories based on environmental and historical data.',
        technologies: [
            {
                name: 'Python',
                category: 'language',
                reasonForChoice: 'Extensive data science and machine learning ecosystem'
            },
            {
                name: 'Pandas',
                category: 'library',
                reasonForChoice: 'Powerful data manipulation and analysis capabilities'
            },
            {
                name: 'Scikit-learn',
                category: 'library',
                reasonForChoice: 'Comprehensive machine learning algorithms and tools'
            }
        ],
        metrics: [
            {
                label: 'Model Accuracy',
                value: '78%',
                description: 'Classification accuracy on test dataset'
            },
            {
                label: 'Dataset Size',
                value: '10,000+ Records',
                description: 'Comprehensive Alberta wildfire historical data'
            },
            {
                label: 'Competition Ranking',
                value: 'Top 25%',
                description: 'Strong performance in university datathon competition'
            }
        ],
        links: [
            {
                type: 'github',
                url: 'https://github.com/IanMorriso/UAIS-Wildfire-Datathon',
                label: 'View Source Code'
            }
        ],
        highlights: [
            'Implemented comprehensive data preprocessing pipeline',
            'Applied feature engineering techniques for improved model performance',
            'Evaluated multiple machine learning algorithms for optimal results',
            'Created data visualizations for insights and model interpretation'
        ]
    },
    {
        title: 'Snake Game in RISC-V Assembly',
        description: 'Classic snake game implemented entirely in RISC-V Assembly language with custom exception handlers.',
        problemStatement: 'Understanding low-level programming concepts and computer architecture through practical implementation of a complete game.',
        solution: 'Developed a fully functional snake game using RISC-V Assembly, including custom exception handlers for user input and game state management.',
        technologies: [
            {
                name: 'RISC-V Assembly',
                category: 'language',
                reasonForChoice: 'Direct hardware interaction and low-level programming experience'
            }
        ],
        metrics: [
            {
                label: 'Lines of Assembly',
                value: '500+',
                description: 'Comprehensive implementation with game logic and I/O handling'
            },
            {
                label: 'Exception Handlers',
                value: '3 Custom Handlers',
                description: 'Input handling, timer interrupts, and game state management'
            }
        ],
        links: [
            {
                type: 'github',
                url: 'https://github.com/IanMorriso/RISC-Vnake',
                label: 'View Source Code'
            }
        ],
        highlights: [
            'Implemented complete game logic in assembly language',
            'Developed custom exception handlers for user input',
            'Created efficient memory management for game state',
            'Gained deep understanding of computer architecture concepts'
        ]
    }
];

// Professional Experience Data
export const EXPERIENCE_DATA: Experience[] = [
    {
        title: 'Construction Worker',
        company: 'Various Construction Companies',
        duration: '2019 - 2022',
        description: 'Gained valuable experience in project management, team coordination, and problem-solving in fast-paced construction environments.',
        transferableSkills: [
            'Project Management',
            'Team Leadership',
            'Problem Solving Under Pressure',
            'Attention to Detail',
            'Time Management',
            'Communication with Diverse Teams'
        ],
        accomplishments: [
            'Led small teams on residential construction projects',
            'Consistently met project deadlines while maintaining quality standards',
            'Developed strong work ethic and ability to learn quickly',
            'Gained experience with complex problem-solving in real-world scenarios'
        ],
        type: 'work'
    }
];

// Education Data
export const EDUCATION_DATA: Education[] = [
    {
        degree: 'Bachelor of Science in Computer Science',
        institution: 'University of Alberta',
        duration: '2022 - Present',
        relevantCoursework: [
            'Data Structures and Algorithms',
            'Object-Oriented Programming',
            'Software Engineering Principles',
            'Database Systems',
            'Computer Architecture',
            'Machine Learning Fundamentals',
            'Web Development',
            'Parallel Computing'
        ],
        projects: [
            'TCG Collection Manager - Full-stack web application',
            'Eventilate - Android event management app',
            'Snake Game - RISC-V Assembly implementation',
            'Wildfire Prediction Model - Machine learning project'
        ],
        achievements: [
            'Dean\'s List recognition for academic excellence',
            'Active participation in hackathons and coding competitions',
            'Member of University of Alberta Computer Science Society'
        ]
    }
];

// Achievements Data
export const ACHIEVEMENTS_DATA: Achievement[] = [
    {
        title: 'HackED 2025 - Top 10 Finalist',
        description: 'Developed PicReads, an OCR-based book review application, finishing in the top 10 out of 100+ teams.',
        date: '2025',
        category: 'competition',
        link: 'https://github.com/HackED-404/look-at-this-photograph'
    },
    {
        title: 'UAIS Datathon - Top 25% Finish',
        description: 'Created a machine learning model for wildfire size prediction, ranking in the top quartile of participants.',
        date: '2024',
        category: 'competition',
        link: 'https://github.com/IanMorriso/UAIS-Wildfire-Datathon'
    },
    {
        title: 'Dean\'s List Recognition',
        description: 'Achieved Dean\'s List status for academic excellence in Computer Science program.',
        date: '2023-2024',
        category: 'academic'
    },
    {
        title: 'Agile Development Certification',
        description: 'Completed comprehensive training in Agile development methodologies and practices.',
        date: '2024',
        category: 'certification'
    }
];

// Contact Information
export const CONTACT_INFO: ContactInfo = {
    email: 'ianmorrison@example.com',
    location: 'Edmonton, Alberta, Canada',
    professionalLinks: PROFESSIONAL_LINKS
};

// SEO Metadata
export const SEO_CONFIG: SEOMetadata = {
    title: 'Ian Morrison - Software Engineering Student | React, TypeScript, Python Developer',
    description: 'Computer Science student at University of Alberta seeking software engineering internships. Experience with React, TypeScript, Python, and full-stack development.',
    keywords: [
        'software engineering intern',
        'computer science student',
        'React developer',
        'TypeScript',
        'Python',
        'University of Alberta',
        'full-stack developer',
        'web development',
        'machine learning',
        'Edmonton developer'
    ],
    structuredData: {
        '@type': 'Person',
        name: 'Ian Morrison',
        jobTitle: 'Software Engineering Student',
        url: 'https://ianmorrison.dev',
        sameAs: [
            'https://github.com/IanMorriso',
            'https://linkedin.com/in/ianmorrison'
        ],
        knowsAbout: [
            'JavaScript',
            'TypeScript',
            'React',
            'Python',
            'Java',
            'Node.js',
            'MongoDB',
            'Git',
            'Software Engineering',
            'Machine Learning',
            'Web Development'
        ]
    }
};