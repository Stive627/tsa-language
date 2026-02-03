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
            <button className="bg-red-600 cursor-pointer hover:bg-red-700 text-white font-semibold px-6 py-3 w-full lg:w-max rounded-md shadow">
<a 
  href="https://wa.me/237658182157?text=Bonjour%2C%20je%20suis%20int%C3%A9ress%C3%A9(e)%20par%20les%20cours%20de%20fran%C3%A7ais%20en%20ligne.%20J%E2%80%99aimerais%20me%20pr%C3%A9parer%20aux%20examens%20de%20langue.%20Merci."
  target="_blank"
>
              Book Free Demo

              </a>
            </button>
            <button className="bg-blue-900 cursor-pointer hover:bg-blue-800 text-white font-semibold px-6 py-3 rounded-md w-full lg:w-max shadow">

            <a href="#courses">
                
                View Our Courses 
            </a>
            </button>
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
          <div className=" hidden lg:flex">
            <img
              src="/home.png"
              alt="French students illustration"
              className="w-full max-w-md opacity-90"
            />

            <div className="absolute right-[-40px] top-1/2 -translate-y-1/2 rotate-90 text-xs text-gray-400 tracking-wide">
              Demain • Aujourd’hui • Souvent • Mardi • S’il vous plaît • Bonjour
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
