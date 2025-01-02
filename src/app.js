import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ProjectDropdown from './components/ProjectDropdown';

function App() {
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

  let text = 'Welcome!';

  const typingEffect = (text) => {
    const textArray = text.split('');
    const welcomeTextElement = document.getElementById('welcome-text');
    if (welcomeTextElement) {
      welcomeTextElement.innerHTML = '';
      textArray.forEach((letter, i) => {
        setTimeout(() => {
          welcomeTextElement.innerHTML += letter;
          if (i === textArray.length - 1) {
            setTimeout(() => {
              welcomeTextElement.innerHTML += ' <span class="wave">👋</span>';
            }, 75);
          }
        }, 75 * i); 
      });
    }
  };

  useEffect(() => {
    typingEffect(text);
    text = '';

    const themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
    const themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');
    const themeToggleBtn = document.getElementById('theme-toggle');

    // Change the icons inside the button based on previous settings
    if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        themeToggleLightIcon.classList.remove('hidden');
    } else {
        themeToggleDarkIcon.classList.remove('hidden');
    }

    const handleThemeToggle = () => {
      // toggle icons inside button
      themeToggleDarkIcon.classList.toggle('hidden');
      themeToggleLightIcon.classList.toggle('hidden');

      // if set via local storage previously
      if (localStorage.getItem('color-theme')) {
          if (localStorage.getItem('color-theme') === 'light') {
              document.documentElement.classList.add('dark');
              localStorage.setItem('color-theme', 'dark');
          } else {
              document.documentElement.classList.remove('dark');
              localStorage.setItem('color-theme', 'light');
          }
      // if NOT set via local storage previously
      } else {
          if (document.documentElement.classList.contains('dark')) {
              document.documentElement.classList.remove('dark');
              localStorage.setItem('color-theme', 'light');
          } else {
              document.documentElement.classList.add('dark');
              localStorage.setItem('color-theme', 'dark');
          }
      }
    };

    themeToggleBtn.addEventListener('click', handleThemeToggle);

    // Cleanup event listener on component unmount
    return () => {
      themeToggleBtn.removeEventListener('click', handleThemeToggle);
    };
  }, []);

  const projects = [
    {
      title: 'Full-Stack Web Application',
      description:
        'This is a web application I developed during my core informatics class, Information Infrastructure II. In this course, I learned to design, develop, and deploy a full-stack web application. ',
      link: 'https://example.com/portfolio',
    },
    {
      title: 'Priority Media Group Website',
      description:
        'Designed, developed, and deployed an internal project for Revenue Path Group (RPG). This website is designed around advertising The Priority Media Group and The Priority Sale Agent program.',
      link: 'https://example.com/store',
    },
  ];

  console.log('App component rendered');

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Header />
      <main className="flex-grow p-4 flex flex-col items-center">
        <img 
          src="/images/dylan-and-jillian.jpg" 
          className="rounded-full border-4 border-gray-300 dark:border-gray-700 bg-gray-200 dark:bg-gray-800 w-48 h-48 object-cover mb-4" 
        />
        <p 
          id="welcome-text" 
          className={`text-center text-2xl md:text-3xl font-semibold mt-3 ${!isMobile ? '' : '-mb-6'}`}
        ></p>
        <section style={{ marginTop:"50px" }} className="about-me text-left mb-6 w-full max-w-xl">
          <h2 className="text-xl md:text-2xl mb-4 font-semibold">A little about me...</h2>
          <p className="text-sm md:text-base font-light">
            Hi, I'm Dylan! I'm currently in my senior year at Indiana University Bloomington, pursuing a degree in Informatics. In the informatics program, I'm focusing my studies on Web Development and Ethical Computing.
          </p>
          <p className="mt-3 text-sm md:text-base font-light">
            Post graduation, I will be joining Revenue Path Group as a software developer and consultant.
          </p>
        </section>
        <hr className="my-2 border-t-2 border-gray-300 dark:border-gray-700 w-full max-w-2xl" />
        <div className="w-full max-w-2xl px-4">
          <ProjectDropdown projects={projects} />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
