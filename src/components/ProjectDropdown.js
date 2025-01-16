import React, { useState, useEffect } from 'react';
import { Globe } from 'lucide-react';

const projects = [
  {
    name: "Full Stack Web App",
    description: "Designed and deployed a full-stack web application for the i211 course, featuring a Python Flask backend and MariaDB database.",
    link: "https://cgi.luddy.indiana.edu/~graydc/i211_project/index.cgi/",
    badges: [
      { label: "Python", color: "3776AB", logo: "python" },
      { label: "Flask", color: "000000", logo: "flask" },
      { label: "Bootstrap", color: "563D7C", logo: "bootstrap" },
      { label: "MariaDB", color: "003545", logo: "mariadb" }
    ]
  },
  {
    name: "Priority Media Group Website",
    description: "Created a WordPress site for RPG to promote The Priority Media Group and its agent program, focusing on design and usability.",
    link: "https://theprioritymediagroup.com/",
    badges: [
      { label: "WordPress", color: "21759B", logo: "wordpress" },
      { label: "HTML", color: "E34F26", logo: "html5" },
      { label: "Bootstrap", color: "563D7C", logo: "bootstrap" },
      { label: "GoDaddy", color: "1B1B1B", logo: "godaddy" }
    ]
  },
  {
    name: "TeamLink: Capstone Project",
    description: "Senior capstone project focused on developing a data-driven application, with contributions to front-end development and API integration.",
    badges: [
      { label: "HTML", color: "E34F26", logo: "html5" },
      { label: "TailwindCSS", color: "06B6D4", logo: "tailwindcss" },
      { label: "JavaScript", color: "F7DF1E", logo: "javascript" },
      { label: "PHP", color: "777BB4", logo: "php" },
      { label: "MariaDB", color: "003545", logo: "mariadb" }
    ]
  },
  {
    name: "Navi: AI Sales Assistant",
    description: "Developing Navi, an AI sales assistant, with a focus on refactoring the front-end codebase and implementing new features.",
    badges: [
      { label: "TypeScript", color: "3178C6", logo: "typescript" },
      { label: "React", color: "61DAFB", logo: "react" },
      { label: "TailwindCSS", color: "06B6D4", logo: "tailwindcss" }
    ]
  }
];

const ProjectDropdown = () => {
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

  const [activeIndices, setActiveIndices] = useState([]);

  const toggleDropdown = (index) => {
    setActiveIndices((prevIndices) =>
      prevIndices.includes(index)
        ? prevIndices.filter((i) => i !== index)
        : [...prevIndices, index]
    );
  };

  return (
    <div className="max-w-4xl mx-auto p-4 mt-16">
      <div className="space-y-4">
        <h2 className={`text-xl md:text-2xl mb-4 ${isMobile ? 'mt-8' : 'mt-4'} flex items-center font-semibold`}>
          Past, present, and future web projects.
          {!isMobile && <Globe size={24} className="ml-2" />}
        </h2>
        <p className="text-sm md:text-xl mb-4">These are web-based projects I've completed during my time at IU, and throughout my journey as an incoming Developer at RPG.</p>
        {projects.map((project, index) => (
          <div key={index} className="overflow-hidden">
            <button
              onClick={() => toggleDropdown(index)}
              className="w-full flex justify-between items-center p-4 transition duration-200 focus:outline-none text-gray-900 dark:text-white text-left"
            >
              <span className="text-md md:text-lg">{project.name}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`w-5 h-5 transition-transform duration-200 ${
                  activeIndices.includes(index) ? 'rotate-180' : ''
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div
              className={`transition-all duration-500 ease-in-out transform ${
                activeIndices.includes(index) ? 'max-h-96 scale-y-100 opacity-100' : 'max-h-0 scale-y-0 opacity-0'
              } origin-top bg-gray-100 dark:bg-gray-700`}
              style={{ overflow: 'hidden' }}
            >
              <div className="p-4">
                <p className="text-md md:text-base text-gray-900 dark:text-gray-300 mb-5">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-2">
                  {project.badges.map((badge, index) => (
                    <img
                      key={index}
                      src={`https://img.shields.io/badge/${badge.label}-${badge.color}?style=for-the-badge&logo=${badge.logo}&logoColor=white`}
                      alt={`${badge.label} badge`}
                    />
                  ))}
                </div>
                {index < 2 && project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center text-sm md:text-base text-blue-500 dark:text-blue-300 hover:underline transition duration-200"
                  >
                    View Project
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 ml-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </a>
                ) : (
                  <div className="mt-2 inline-flex items-center text-sm md:text-base text-gray-500 dark:text-gray-400">
                    Working on it...
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 ml-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectDropdown;
