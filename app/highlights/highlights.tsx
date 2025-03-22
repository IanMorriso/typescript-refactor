import React, { type JSX } from 'react';

interface HighlightCard {
    title: string;
    description: string;
    hasGradient?: boolean;
    badge?: string;
}

const highlightCards: HighlightCard[] = [
    {
        title: "Eventilate: Breath Life Into Events",
        description: "An event management application for the Andriod platform. Created in Android Studio using Java, my team and I followed Agile Development practices to develop a user-friendly application that allows users to create, manage, and attend events. The app features real-time updates with Google Firebase, event geo-fencing, event notifications, and much more.",
        hasGradient: true,
        badge: "New"
    },
    {
        title: "HackED 2023 Hackathon - Member Retention",
        description: "This project was created by our team to increase the memeber retention of financial institutions. We used machine learning to predict the likelihood of a member leaving the institution and created a user-friendly interface to display and interpert the results.",
        badge: "New"
    },
    {
        title: "Datathon - Predicting Alberta Wildfire Size Catagories",
        description: "A machine learning model created for a Datathon hosted by the University of Alberta Artificial Intelligence Society. This model predicts the size category of wildfires in Alberta using a government-created dataset.",
        hasGradient: true,
      
    },
    {
        title: "Wordle",
        description: "A clone of the popular puzzle game, Wordle designed and created to run in console.",
        badge: "New"
    },
    {
        title: "RISC-V Snake",
        description: "A clone of the popular game, Snake, designed and created to run on a RISC-V processor.",
        hasGradient: true,
       
    },
    {
        title: "Custom Domains",
        description: "Attach your own custom domain to your published projects or website on windframe",
    },
];

function Card({ title, description, hasGradient, badge }: HighlightCard) {
    const cardContent = (
        <div className={`${hasGradient ? 'relative' : ''} overflow-hidden bg-white shadow-md rounded-xl h-full`}>
            <div className="p-9">
                {(
                    <div className="flex justify-center sm:justify-start">
                        <span className="px-3 py-1.5 text-sm font-medium text-white bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg">
                            {badge}
                        </span>
                    </div>
                )}
                <h3 className="mt-6 text-2xl font-bold text-gray-900 sm:mt-10">{title}</h3>
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
                        We are just getting started!
                    </h2>
                    <p className="mb-4">
                        We are creating a tool that helps you be more productive and efficient when building websites and webapps
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