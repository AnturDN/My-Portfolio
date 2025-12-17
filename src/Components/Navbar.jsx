import React, { useEffect, useRef, useState } from 'react';

const Header = () => {
  const menuToggleRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const menuToggle = menuToggleRef.current;
    const mobileMenu = mobileMenuRef.current;

    const handleClick = () => {
      if (mobileMenu.classList.contains("max-h-0")) {
        mobileMenu.classList.remove("max-h-0");
        mobileMenu.classList.add("max-h-96");
        setIsOpen(true);
      } else {
        mobileMenu.classList.remove("max-h-96");
        mobileMenu.classList.add("max-h-0");
        setIsOpen(false);
      }
    };

    menuToggle.addEventListener('click', handleClick);

    return () => {
      menuToggle.removeEventListener('click', handleClick);
    };
  }, []);

  const closeMenu = () => {
    const mobileMenu = mobileMenuRef.current;
    mobileMenu.classList.remove("max-h-96");
    mobileMenu.classList.add("max-h-0");
    setIsOpen(false);
  };

  return (
    <nav className="px-2 sm:px-4 py-2.5 backdrop-blur-sm fixed z-10 w-full border border-b-fuchsia-500 shadow-[0_0_20px_rgba(255,0,255,0.5)]">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        
        <a href="/" className="flex items-center">
          <span className="self-center text-4xl font-serif font-extrabold whitespace-nowrap bg-clip-text text-transparent bg-linear-to-r from-fuchsia-700 to-fuchsia-600">
            ADN
          </span>
        </a>

        {/* Toggle Button */}
        <div className="flex items-center md:hidden">
          <button
            ref={menuToggleRef}
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg hover:bg-gray-800 focus:outline-none"
          >
            {isOpen ? (
              // X ICON
              <svg className="h-7 w-7 text-fuchsia-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              // HAMBURGER ICON
              <svg className="h-7 w-7 text-fuchsia-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>

        {/* Menu */}
        <div
          ref={mobileMenuRef}
          className="backdrop-blur-lg w-full md:block md:w-auto max-h-0 overflow-hidden transition-all duration-500 ease-in-out md:max-h-none"
        >
          <ul className="flex flex-col md:flex-row md:space-x-8">
            <li><a onClick={closeMenu} href="#home" className="block py-2 px-3 text-gray-200 hover:text-fuchsia-500">Home</a></li>
            <li><a onClick={closeMenu} href="#about" className="block py-2 px-3 text-gray-200 hover:text-fuchsia-400">About</a></li>
            <li><a onClick={closeMenu} href="#skills" className="block py-2 px-3 text-gray-200 hover:text-fuchsia-400">Skills</a></li>
            <li><a onClick={closeMenu} href="#projects" className="block py-2 px-3 text-gray-200 hover:text-fuchsia-400">Projects</a></li>
            <li><a onClick={closeMenu} href="#contact" className="block py-2 px-3 text-gray-200 hover:text-fuchsia-400">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
