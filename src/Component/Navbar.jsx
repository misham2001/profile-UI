import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { RiMenuFoldFill } from 'react-icons/ri';
import { MdClose } from 'react-icons/md';


const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-black text-white shadow-md">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        
        {/* <img src={logo} alt="Logo" className="h-8" /> */}

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <Link
            activeClass="text-red-500 font-bold border-b-2 border-red-500"
            to="homepage"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-gray-400 cursor-pointer transition-all"
          >
            Home
          </Link>
          <Link
            activeClass="text-red-500 font-bold border-b-2 border-red-500"
            to="skillsSection"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-gray-400 cursor-pointer transition-all"
          >
            Skills
          </Link>
          <Link
            activeClass="text-red-500 font-bold border-b-2 border-red-500"
            to="portfolioSection"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-gray-400 cursor-pointer transition-all"
          >
            Portfolio
          </Link>
          <Link
            activeClass="text-red-500 font-bold border-b-2 border-red-500"
            to="contactSection"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-gray-400 cursor-pointer transition-all"
          >
            Contact
          </Link>
          <button
            onClick={() =>
              document.getElementById('contactSection').scrollIntoView({ behavior: 'smooth' })
            }
            className="bg-white text-black px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-gray-200 transition-all"
          >
            {/* <img src={contactImg} alt="Contact" className="h-5" /> */}
            <span className="font-semibold">Let’s Connect</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          {showMenu ? (
            <MdClose
              className="h-6 w-6 cursor-pointer"
              onClick={() => setShowMenu(false)}
            />
          ) : (
            <RiMenuFoldFill
              className="h-6 w-6 cursor-pointer"
              onClick={() => setShowMenu(true)}
            />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {showMenu && (
        <div className="md:hidden bg-black text-white px-6 py-8 space-y-4">
          <Link
            to="homepage"
            spy={true}
            smooth={true}
            duration={500}
            className="block text-center hover:text-gray-400 transition-all"
            onClick={() => setShowMenu(false)}
          >
            Home
          </Link>
          <Link
            to="skillsSection"
            spy={true}
            smooth={true}
            duration={500}
            className="block text-center hover:text-gray-400 transition-all"
            onClick={() => setShowMenu(false)}
          >
            Skills
          </Link>
          <Link
            to="portfolioSection"
            spy={true}
            smooth={true}
            duration={500}
            className="block text-center hover:text-gray-400 transition-all"
            onClick={() => setShowMenu(false)}
          >
            Portfolio
          </Link>
          <Link
            to="contactSection"
            spy={true}
            smooth={true}
            duration={500}
            className="block text-center hover:text-gray-400 transition-all"
            onClick={() => setShowMenu(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
