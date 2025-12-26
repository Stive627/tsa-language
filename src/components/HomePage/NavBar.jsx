import React from "react";

const Navbar = () => {
  return (
    <div className="bg-[#1f5a8f] border text-[18px]  py-1.5 flex flex-row items-center justify-between w-full">
          {/* Logo */}
          <div className="flex items-center gap-3 text-white font-serif text-xl font-semibold">
            <span className="text-lg">🇫🇷</span>
            <span>TSA language</span>
          </div>

          {/* Navigation */}
          <nav className=" flex items-center gap-8 text-white font-medium ">
            <a href="#home" className="hover:underline">
              Home
            </a>
            <a href="#courses" className="hover:underline">
              Courses
            </a>
            <a href="#testimonials" className="hover:underline">
              Testimonials
            </a>
            <a href="#contact" className="hover:underline">
              Contact
            </a>

            {/* CTA */}
            <button className="ml-4 cursor-pointer bg-red-600 hover:bg-red-700 transition text-white px-5 py-2 rounded-md shadow font-semibold">
              Book Free Demo
            </button>
          </nav>
    </div>
  );
};

export default Navbar;
