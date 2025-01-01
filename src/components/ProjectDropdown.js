import React, { useState } from 'react';

const ProjectDropdown = ({ projects }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleDropdown = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 p-4">
      <div className="space-y-4">
        {projects.map((project, index) => (
          <div key={index} className="overflow-hidden">
            <button
              onClick={() => toggleDropdown(index)}
              className="w-full flex justify-between items-center p-4 transition duration-200 focus:outline-none bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
            >
              <span className="text-lg font-semibold">{project.title}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`w-5 h-5 transition-transform duration-200 ${
                  activeIndex === index ? 'rotate-180' : ''
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
                activeIndex === index ? 'max-h-96 scale-y-100 opacity-100' : 'max-h-0 scale-y-0 opacity-0'
              } origin-top bg-gray-100 dark:bg-gray-700`}
              style={{ overflow: 'hidden' }}
            >
              <div className="p-4">
                <p className="text-gray-900 dark:text-gray-300">{project.description}</p>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-block text-blue-500 dark:text-blue-300 hover:text-blue-700 dark:hover:text-blue-500 transition duration-200"
                  >
                    View Project
                  </a>
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
