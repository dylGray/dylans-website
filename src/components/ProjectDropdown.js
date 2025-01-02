import React, { useState } from 'react';

const projects = [
  {
    name: "Full Stack Web App",
    description: "Built with Python, Flask, Bootstrap, and MariaDB for the backend.",
    badges: [
      { label: "Python", color: "3776AB", logo: "python" },
      { label: "Flask", color: "000000", logo: "flask" },
      { label: "Bootstrap", color: "563D7C", logo: "bootstrap" },
      { label: "MariaDB", color: "003545", logo: "mariadb" }
    ]
  },
  {
    name: "Priority Media Group Website",
    description: "Built with WordPress, custom HTML and Bootstrap, and utilized GoDaddy for DNS management.",
    badges: [
      { label: "WordPress", color: "21759B", logo: "wordpress" },
      { label: "HTML", color: "E34F26", logo: "html5" },
      { label: "Bootstrap", color: "563D7C", logo: "bootstrap" },
      { label: "GoDaddy", color: "1B1B1B", logo: "godaddy" }
    ]
  },
  // ...existing projects...
];

const ProjectDropdown = () => {
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
              className="w-full flex justify-between items-center p-4 transition duration-200 focus:outline-none text-gray-900 dark:text-white"
            >
              <span className="text-lg font-semibold">{project.name}</span>
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
                <p className="text-gray-900 dark:text-gray-300 mb-5">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-2">
                  {project.badges.map((badge, idx) => (
                    <img
                      key={idx}
                      src={`https://img.shields.io/badge/${badge.label}-${badge.color}?style=for-the-badge&logo=${badge.logo}&logoColor=white`}
                      alt={`${badge.label} badge`}
                    />
                  ))}
                </div>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-block text-blue-500 dark:text-blue-300 hover:text-blue-700 dark:hover:text-blue-500 transition duration-200"
                  >View Project</a>
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
