import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ProjectDropdown from './components/ProjectDropdown';
import Courses from './components/Courses';

function App() {
  const [isMobile, setIsMobile] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem('color-theme') || 'dark');

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
    
    if (!localStorage.getItem('color-theme')) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('color-theme', 'dark');
    }

    const themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
    const themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');
    const themeToggleBtn = document.getElementById('theme-toggle');

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
      setTheme(localStorage.getItem('color-theme'));
    };

    themeToggleBtn.addEventListener('click', handleThemeToggle);

    return () => {
      themeToggleBtn.removeEventListener('click', handleThemeToggle);
    };
  }, []);

  console.log('App component rendered');

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Header />
      <main className="flex-grow p-4 flex flex-col items-center">

        <div className={`w-full max-w-xl ${isMobile ? 'flex flex-col items-center' : 'flex items-center'}`}>
          <img 
            src="/images/dylan-and-jillian.jpg" 
            className={`rounded-full border-4 border-gray-300 dark:border-gray-700 bg-gray-200 dark:bg-gray-800 w-48 h-48 object-cover ${isMobile ? 'mb-4 mt-6' : 'mr-4'}`} 
            loading="lazy"
          />
          <div className="flex flex-col items-center">
            <p 
              id="welcome-text" 
              className={`text-2xl md:text-3xl font-semibold leading-relaxed ${isMobile ? 'mt-3 text-center' : 'mt-0 ml-5 text-right'}`}
            ></p>
          </div>
        </div>

        <section style={{ marginTop:"50px" }} className="about-me text-left mb-6 w-full max-w-4xl pr-2 pl-2 ">
          <h2 className="text-xl md:text-4xl mb-4 font-semibold">A little about me...</h2>
          <p style={{ lineHeight: isMobile ? '25px' : '30px' }} className="text-md md:text-xl font-light">
            I’m a senior at Indiana University pursuing a B.S. in Informatics. Beyond academics, I have a passion for learning about UI/UX design and system architecture. In my downtime, I enjoy fishing, snowboarding, and staying active at the gym!
          </p>
          <p style={{ lineHeight: isMobile ? '25px' : '30px' }} className="text-md md:text-xl font-light mt-3">
            Post graduation, I will be joining <strong>Revenue Path Group</strong> as the <strong>Director of Product Development & Engineering</strong>. I'm excited to be working with developers and clients to create innovative solutions that drive business growth.
          </p>
        </section>
        <hr style={{ marginTop: isMobile ? '10px': '50px' }} className="border-t-2 border-gray-300 dark:border-gray-700 w-full max-w-4xl" />
        <Courses theme={theme} />
        <div className="w-full max-w-4xl px-4">
          <ProjectDropdown />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;