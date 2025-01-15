import React from 'react';
import { useEffect, useState } from 'react';

function Footer() {

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

  console.log('Footer component rendered');
  return (
    <footer style={{ marginTop: isMobile ? '250px' : '150px' }} className="bg-white dark:bg-gray-800 text-black dark:text-white rounded-lg shadow mt-auto mb-2 mr-2 ml-2">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a href="/index.html" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-black dark:text-white">Dylan Gray</span>
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-400 sm:mb-0">
            <li>
              <a href="https://github.com/dylGray" className="hover:underline me-4 md:me-6" target="_blank">GitHub</a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/dylan-gray-255107217/" className="hover:underline me-4 md:me-6" target="_blank">LinkedIn</a>
            </li>
            <li>
              <a href="https://www.aspca.org/ways-to-give" className="hover:underline me-4 md:me-6" target="_blank">Donate to ASPCA</a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-700 sm:mx-auto lg:my-8" />
        <p className="text-center text-black dark:text-white">Thank's for stopping by.</p>
      </div>
    </footer>
  );
}

export default Footer;
