import React from 'react';
import { BookOpen } from 'lucide-react';
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useState, useEffect } from "react";


const courses = [
    { 
        id: 1, 
        title: 'Information Infrastructure I and II', 
        description: 'Core intro programming courses (I210/I211) for Informatics majors. I TA for I210, teaching Python fundamentals. I211 focuses on building and deploying full-stack web apps.', 
        image: './images/python-logo.png' 
    },
    { 
        id: 2, 
        title: 'Programming in JavaScript', 
        description: 'A Web Development minor course (I365) covering the fundamentals of web programming, including creating dynamic, accessible, and responsive web interfaces.', 
        image: './images/javascript.png' 
    },
    { 
        id: 3, 
        title: 'Application Development', 
        description: 'An Informatics elective (I311) teaching OOP, version control tools, and collaboration in development environments, ideal for learning new programming languages.', 
        image: './images/java.webp' 
    },
];

const Courses = ({ theme }) => {

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkScreenSize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);

        return () => {
            window.removeEventListener('resize', checkScreenSize);
        };
    }, []);

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <div className={`mt-${isMobile ? '24' : '48'}`}>
            <div className="mb-8">
                <h2 className="text-xl md:text-4xl font-semibold text-left mr-2">Some of my favorite courses!</h2>
                <p className={`text-sm md:text-lg ${isMobile ? 'mt-1' : 'mt-3'}`}>These are course I've taken while at Indiana University.</p>
            </div>

            {/* Centered container for consistent width */}
            <div className="max-w-4xl mx-auto" ref={ref}>
                {courses.map((course, index) => (
                    <motion.div 
                        key={course.id} 
                        className={`flex items-start space-x-6 p-4 border rounded-lg shadow-md mb-6 ${theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}
                        initial={{ opacity: 0, x: 100 }} // Start off-screen
                        animate={isInView ? { opacity: 1, x: 0 } : {}} // Animate to visible
                        transition={{ 
                            duration: 0.8, 
                            delay: index * 0.3 // Delay based on index
                        }}
                    >
                        <img 
                            src={course.image} 
                            alt={course.title} 
                            className="w-24 h-24 sm:w-32 sm:h-32 lg:w-48 lg:h-48 object-cover rounded-md"
                            loading="lazy"
                        />
                        <div className="flex-1 text-left">
                            <h3 className={`text-lg md:text-xl font-semibold mb-2 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>{course.title}</h3>
                            <p className={`text-xs md:text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>{course.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Courses;
