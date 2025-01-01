import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  let text = 'Thanks for stopping by! Check out my work below.';

  const typingEffect = (text) => {
    const textArray = text.split('');
    const welcomeTextElement = document.getElementById('welcome-text');
    if (welcomeTextElement) {
      welcomeTextElement.innerHTML = '';
      textArray.forEach((letter, i) => {
        setTimeout(() => {
          welcomeTextElement.innerHTML += letter;
        }, 100 * i);
      });
    }
  };

  useEffect(() => {
    typingEffect(text);
    text = '';
  }, []);

  const projects = [
    {
      title: 'Personal Portfolio Website',
      description:
        'A personal website showcasing my skills, projects, and contact information. Built with React and Tailwind CSS.',
      link: 'https://example.com/portfolio',
    },
    {
      title: 'E-commerce Store',
      description:
        'An online store with dynamic product listings and a shopping cart. Features Stripe for payment processing.',
      link: 'https://example.com/store',
    },
    {
      title: 'Blog Platform',
      description:
        'A blogging platform where users can write and share posts. Includes a user authentication system.',
      link: 'https://example.com/blog',
    },
  ];

  const ProjectDropdown = ({ projects }) => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleDropdown = (index) => {
      setActiveIndex(activeIndex === index ? null : index);
    };

    return (
      <div className="max-w-4xl mx-auto mt-10 p-4">
        <div className="space-y-4">
          {projects.map((project, index) => (
            <div
              key={index}
              className="border rounded-lg shadow-lg bg-gray-800 overflow-hidden"
            >
              <button
                onClick={() => toggleDropdown(index)}
                className="w-full flex justify-between items-center p-4 bg-gray-700 hover:bg-gray-600 transition duration-200"
              >
                <span className="text-lg font-semibold text-gray-100">{project.title}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`w-5 h-5 text-gray-100 transition-transform duration-200 ${
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
              {activeIndex === index && (
                <div className="p-4 bg-gray-700">
                  <p className="text-gray-300">{project.description}</p>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-block text-blue-300 hover:text-blue-500 transition duration-200"
                    >
                      View Project
                    </a>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  };

  console.log('App component rendered');

  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-gray-100">
      <Header />
      <main className="p-4">
        <p id="welcome-text" className="text-center text-xl font-semibold mb-6"></p>
        <ProjectDropdown projects={projects} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
