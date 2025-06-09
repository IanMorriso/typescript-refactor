import React, { useState, useEffect } from 'react';

export function ScrollHeader() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            setIsVisible(scrollPosition > 100);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-850 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
            <header className="bg-gray-800 bg-opacity-90 backdrop-blur-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                    <div className="text-xl font-bold text-gray-100">Your Logo</div>
                    <nav className="hidden md:flex space-x-8">
                        <a href="#home" className="text-gray-300 hover:text-gray-100 transition-colors duration-300">Home</a>
                        <a href="#about" className="text-gray-300 hover:text-gray-100 transition-colors duration-300">About</a>
                        <a href="#contact" className="text-gray-300 hover:text-gray-100 transition-colors duration-300">Contact</a>
                    </nav>
                </div>
            </header>
        </div>
    );
}

export function ScrollSidebars() {
    const [isVisible, setIsVisible] = useState(false);
    const [expandedButton, setExpandedButton] = useState<number | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            setIsVisible(scrollPosition > 100);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleExpand = (index: number) => {
        setExpandedButton(expandedButton === index ? null : index);
    };

    return (
        <>
            {/* Left Sidebar */}
            <div className={`fixed left-0 top-1/2 -translate-y-1/2 w-16 transition-all duration-700 ease-in-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full'}`}>
                <div className="bg-gray-800 bg-opacity-90 backdrop-blur-sm shadow-lg rounded-r-lg p-4">
                    <div className="space-y-4">
                        {[1, 2, 3].map((index) => (
                            <div key={index}>
                            <div
                                className="w-8 h-8 bg-gray-700 rounded-full hover:bg-gray-600 transition-colors duration-300 cursor-pointer"
                                onClick={() => toggleExpand(index)}
                            ></div>
                            {expandedButton === index && (
                                <div className="mt-2 bg-gray-700 p-2 rounded-md text-gray-100">
                                    <ul className="space-y-2">
                                        <li>Item 1</li>
                                        <li>Item 2</li>
                                        <li>Item 3</li>
                                    </ul>
                                </div>
                            )}
                            </div>
                        ))}

                        <div className="w-8 h-8 bg-gray-700 rounded-full hover:bg-gray-600 transition-colors duration-300"></div>
                        <div className="w-8 h-8 bg-gray-700 rounded-full hover:bg-gray-600 transition-colors duration-300"></div>
                        <div className="w-8 h-8 bg-gray-700 rounded-full hover:bg-gray-600 transition-colors duration-300"></div>
                    </div>
                </div>
            </div>

            {/* Right Sidebar */}
            <div className={`fixed right-0 top-1/2 -translate-y-1/2 w-16 transition-all duration-700 ease-in-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'}`}>
                <div className="bg-gray-800 bg-opacity-90 backdrop-blur-sm shadow-lg rounded-l-lg p-4">
                    <div className="space-y-4">
                        <div className="w-8 h-8 bg-gray-700 rounded-full hover:bg-gray-600 transition-colors duration-300"></div>
                        <div className="w-8 h-8 bg-gray-700 rounded-full hover:bg-gray-600 transition-colors duration-300"></div>
                        <div className="w-8 h-8 bg-gray-700 rounded-full hover:bg-gray-600 transition-colors duration-300"></div>
                    </div>
                </div>
            </div>
        </>
    );
} 