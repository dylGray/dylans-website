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

  let text = 'Hey - I\'m Dylan!';

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

  console.log('App component rendered');

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Header />
      <main className="flex-grow p-4 flex flex-col items-center">
        <div className="text-left w-full max-w-xl">
          <img 
            src="/images/dylan-and-jillian.jpg" 
            className="rounded-full border-4 border-gray-300 dark:border-gray-700 bg-gray-200 dark:bg-gray-800 w-48 h-48 object-cover mb-4" 
          />
          <p 
            id="welcome-text" 
            className={`text-2xl md:text-3xl font-semibold mt-3 ${!isMobile ? 'mb-2' : '-mb-2'}`}
          ></p>
        </div>
        <section style={{ marginTop:"50px" }} className="about-me text-left mb-6 w-full max-w-xl">
          <h2 className="text-xl md:text-2xl mb-4 font-semibold">A little about me...</h2>
          <p className="text-sm md:text-base font-light">
            I'm currently in my senior year at <strong>Indiana University Bloomington</strong>, pursuing a degree in Informatics. In the informatics program, I'm focusing my studies on <strong>Web Development</strong> and <strong>Ethical Computing</strong>.
          </p>
          <p className="mt-3 text-sm md:text-base font-light">
            Post graduation, I will be joining <strong>Revenue Path Group</strong> as a software developer and consultant.
          </p>
        </section>
        <hr className="my-2 border-t-2 border-gray-300 dark:border-gray-700 w-full max-w-2xl" />
        <div className="w-full max-w-2xl px-4">
          <ProjectDropdown />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
