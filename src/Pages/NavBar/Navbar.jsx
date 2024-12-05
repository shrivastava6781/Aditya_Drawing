import React from 'react';
import logo from "../../img/logo.png"

const Navbar = () => {
  return (
    <nav className="fixed z-10 w-full px-10">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left side - Logo and Name */}
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-20 w-20 mr-3" />
          <span className="text-white text-xl font-bold">Aditya Shrivastava</span >
        </div>
        {/* Right side - Nav Links */}
        <div className="space-x-6">
          <a href="#home" className="text-white hover:text-gray-400">Home</a>
          <a href="#contact" className="text-white hover:text-gray-400">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
