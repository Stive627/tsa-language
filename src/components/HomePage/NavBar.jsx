import React from "react";
import {
  Menu
} from "lucide-react";

const Navbar = () => {
  return (
    <div className="bg-[#1f5a8f]  text-[18px]  py-1.5 flex flex-row items-center justify-between w-full px-5 ">
          {/* Logo */}
          <div className="flex items-center gap-3 text-white font-serif text-xl font-semibold">
            <span className="text-lg">🇫🇷</span>
            <span>TSA language</span>
          </div>

          {/* Navigation */}
          <nav className=" text-white font-medium ">
              <div className="lg:flex hidden items-center gap-8">
              <a href="#home" className="hover:underline ">
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
<a 
  href="https://wa.me/237658182157?text=Bonjour%2C%20je%20suis%20int%C3%A9ress%C3%A9(e)%20par%20les%20cours%20de%20fran%C3%A7ais%20en%20ligne.%20J%E2%80%99aimerais%20me%20pr%C3%A9parer%20aux%20examens%20de%20langue.%20Merci."
  target="_blank"
>
                  Book Free Demo

                </a>

              </button>
            </div>

            <div className=" lg:hidden ">
              <button><Menu size={20} /></button>
            </div>
          </nav>
    </div>
  );
};

export default Navbar;
