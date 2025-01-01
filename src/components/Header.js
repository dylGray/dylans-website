import React, { useEffect } from 'react';

function Header() {
  useEffect(() => {
    const toggle = document.getElementsByClassName("toggle")[0];

    const toggleDarkMode = () => {
      const footer = document.getElementsByTagName("footer")[0];
      
      if (toggle.textContent === "Dark mode OFF") {
        toggle.textContent = "Dark mode ON";
        document.body.style.transition = 'background-color 300ms, color 300ms';
        document.body.style.backgroundColor = '#000';
        document.body.style.color = '#fff';
        toggle.style.backgroundColor = '#fff';
        toggle.style.color = '#000';
        footer.style.backgroundColor = '#000';
        footer.style.color = '#fff';
      } else {
        toggle.textContent = "Dark mode OFF";
        document.body.style.transition = 'background-color 300ms, color 300ms';
        document.body.style.backgroundColor = '#fff';
        document.body.style.color = '#000';
        toggle.style.backgroundColor = '#000';
        toggle.style.color = '#fff';
        footer.style.backgroundColor = '#fff';
        footer.style.color = '#000';
      }
    };

    toggle.addEventListener("click", toggleDarkMode);

    toggle.addEventListener("mouseover", () => {
      toggle.style.backgroundColor = '#a9b9c1';
      toggle.style.color = '#000';
    });

    toggle.addEventListener("mouseout", () => {
      if (toggle.textContent === "Dark mode OFF") {
        toggle.style.backgroundColor = '#000';
        toggle.style.color = '#fff';
      } else {
        toggle.style.backgroundColor = '#fff';
        toggle.style.color = '#000';
      }
    });

    return () => {
      toggle.removeEventListener("click", toggleDarkMode);
    };
  }, []);

  return (
    <header className="text-white p-4 flex justify-between items-center transition-colors duration-300">
      <button className="toggle bg-black text-white p-2 rounded">Dark mode OFF</button>
    </header>
  );
}

export default Header;
