"use client";

import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleResumeClick = () => {
    // Add your logic for the resume button click here
    console.log("Resume button clicked");
    window.open("./resume.pdf", "_blank");
  };

  return (
    <>
      <nav className="flex justify-between items-center max-w-full mx-6 md:mx-16 h-[10vh]">
        <div className="text-[#e6f1ff] font-bold mt-8">Siddharth Kumar</div>
        <div className="hidden md:flex items-center gap-7 mt-8 text-[#e6f1ff] font-mono text-sm opacity-80">
          <div>
            <Link href="/about">
              <span className="text-[#64ffda]">01.</span> About
            </Link>
          </div>
          <div>
            <Link href="/experience">
              <span className="text-[#64ffda]">02.</span> Experience
            </Link>
          </div>
          <div>
            <Link href="/work">
              <span className="text-[#64ffda]">03.</span> Work
            </Link>
          </div>
          <div>
            <Link href="/contacts">
              <span className="text-[#64ffda]">04.</span> Contacts
            </Link>
          </div>
          <div>
            <button
              className="border border-[#64ffda] px-4 py-2 rounded text-[#64ffda] hover:bg-[#64ffda] hover:text-black hover:font-semibold transition duration-300 ease-in-out"
              onClick={handleResumeClick}
            >
              Resume
            </button>
          </div>
        </div>
        <div className="md:hidden">
          <button
            onClick={handleToggleMenu}
            className="text-[#e6f1ff] focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
      </nav>
      {isMenuOpen && (
        <div className="md:hidden mt-4">
          {/* Render your responsive navigation items here */}
          <Link href="/about">
            <div className="text-[#64ffda]">01. About</div>
          </Link>
          <Link href="/experience">
            <div className="text-[#64ffda]">02. Experience</div>
          </Link>
          <Link href="/work">
            <div className="text-[#64ffda]">03. Work</div>
          </Link>
          <Link href="/contacts">
            <div className="text-[#64ffda]">04. Contacts</div>
          </Link>
          <button
            className="text-[#64ffda] mt-2"
            onClick={handleResumeClick}
          >
            Resume
          </button>
        </div>
      )}
    </>
  );
};

export default Navbar;
