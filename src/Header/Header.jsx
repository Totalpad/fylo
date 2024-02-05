import { useEffect, useState } from "react";

import DarkSvg from "./DarkSvg";
import LightSvg from "./LightSvg";

function Header() {
  const [isDarkMode, setIsDarkMode] = useState(
    window.matchMedia("(prefers-color-scheme: dark)").matches ? true : false,
  );

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <header className="container mx-auto mt-10 h-40 px-6 text-center md:h-20">
      {/* Dinamyc logo */}
      <div className="bg-logo-light-mode dark:bg-logo-dark-mode left-10 top-10 mx-auto h-20 w-48 bg-no-repeat md:absolute md:mx-0"></div>

      {/* Menu */}
      <div className="right-10 top-12 flex items-center justify-center space-x-4 md:absolute md:space-x-10">
        <a href="#features" className=" hover:text-accentCyan">
          Features
        </a>
        <a href="#testimonials" className=" hover:text-accentCyan">
          Testimonials
        </a>
        {/* dark/ligt mode button */}
        <button
          className="rounded-lg p-2.5 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
          onClick={() => {
            setIsDarkMode((prev) => !prev);
          }}
        >
          {isDarkMode ? <LightSvg /> : <DarkSvg />}
        </button>
      </div>
    </header>
  );
}

export default Header;
