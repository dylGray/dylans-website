import React from 'react';

function Footer() {
  console.log('Footer component rendered');
  return (
    <footer className="bg-gray-900 rounded-lg shadow m-4">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
            <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">Flowbite</span>
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-400 sm:mb-0">
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">GitHub</a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">LinkedIn</a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">Donate to ASPCA</a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-700 sm:mx-auto lg:my-8" />
      </div>
    </footer>
  );
}

export default Footer;
