import React from "react";

const Home = () => {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left content */}
        <div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-red-600 leading-tight mb-6">
            Learn French <br />
            from a Native Trainer
          </h1>

          <p className="text-lg text-blue-900 mb-8">
            Personalized online French classes. Real fluency.
            <br />
            Real results.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mb-10">
            <button className="bg-red-600 cursor-pointer hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-md shadow">
              <a href="https://wa.me/917696793453?text=Hello%20Welcome%20to%20my%20WhatsApp"target="_blank">

              Book Free Demo

              </a>
            </button>
            <a href="#courses">
              <button className="bg-blue-900 cursor-pointer hover:bg-blue-800 text-white font-semibold px-6 py-3 rounded-md shadow">
                
                View Our Courses
                
              </button>
            </a>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-3">
            <div className="flex text-yellow-400 text-xl">
              ★ ★ ★ ★ ★
            </div>
            <p className="text-blue-900 italic font-medium">
              Trusted by over 100+ Students
            </p>
          </div>
        </div>

        {/* Right illustration */}
        <div className="relative flex justify-center">
          <img
            src="/home.png"
            alt="French students illustration"
            className="w-full max-w-md opacity-90"
          />

          {/* Decorative vertical text */}
          <div className="absolute right-[-40px] top-1/2 -translate-y-1/2 rotate-90 text-xs text-gray-400 tracking-wide">
            Demain • Aujourd’hui • Souvent • Mardi • S’il vous plaît • Bonjour
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
