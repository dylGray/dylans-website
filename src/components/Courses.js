import React from 'react';
import { BookOpen } from 'lucide-react';
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useState, useEffect } from "react";


const courses = [
    { 
        id: 1, 
        title: 'Information Infrastructure I and II', 
        description: 'The core intro to programming courses as an Informatics major, I210 and I211. I currently TA for I210, where we learn the fundementals of Python programming. I211 is where we put all the pieces together and build + deploy a full-stack web-based application.', 
        image: './images/python-logo.png' 
    },
    { 
        id: 2, 
        title: 'Programming in JavaScript', 
        description: 'The course for those pursuing a Web Development minor, I365 teaches you the fundementals of web-based programming. From this course, you gain a good understandind of making dynamic, accessible, and responsive web interfaces.', 
        image: './images/javascript.png' 
    },
    { 
        id: 3, 
        title: 'Application Development', 
        description: 'An Informatics elective that most students take who are interested in learning new programming langauges. I311 gives students a good understanding of OOP, version control tools, and working with others in a development environment.', 
        image: './images/java.webp' 
    },
];

const Courses = () => {

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
        <div style={{ marginTop: isMobile ? '100px' : '200px' }}>
            <div className="flex mb-8">
                <h2 className="text-2xl md:text-3xl font-semibold text-left mr-2">Relevant coursework at IU.</h2>
                <BookOpen className="w-6 h-6 mt-2 text-white hidden md:block" />
            </div>

            {/* Centered container for consistent width */}
            <div className="max-w-4xl mx-auto" ref={ref}>
                {courses.map((course, index) => (
                    <motion.div 
                        key={course.id} 
                        className="flex items-start space-x-6 p-4 border border-gray-200 rounded-lg shadow-md mb-6 bg-gray-800"
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
                            <h3 className="text-lg md:text-xl font-semibold mb-2 text-white">{course.title}</h3>
                            <p className="text-xs md:text-lg text-gray-300">{course.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Courses;
