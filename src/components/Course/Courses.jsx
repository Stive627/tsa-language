import React from "react";

const Courses = () => {
  return (
    <section id="courses" className="relative bg-[#0b3a63] py-24 text-white overflow-hidden">
      {/* Side vocabulary (decorative) */}
      {/* LEFT vertical scrolling words */}
      {/* <div className="absolute left-0 top-0 h-full w-10 overflow-hidden flex justify-center">
        <div className="vertical-marquee writing-mode-vertical-rl text-xs opacity-60 text-white">
          Bonjour • Bonsoir • Bienvenue • Demain • Enchanté • Aujourd’hui • Souvent • 
          Mardi • S’il vous plaît • Excusez-moi • Pourquoi • Bonjour • Bonsoir • 
          Bienvenue • Demain • Enchanté • Aujourd’hui • Souvent • Mardi •
        </div>
      </div> */}

      {/* RIGHT vertical scrolling words */}
      <div className="absolute right-0 top-0 h-full w-10 overflow-hidden flex justify-center">
        <div className="vertical-marquee writing-mode-vertical-lr text-xs opacity-60 text-white">
          Bonjour • Bonsoir • Bienvenue • Demain • Enchanté • Aujourd’hui • Souvent • 
          Mardi • S’il vous plaît • Excusez-moi • Pourquoi • Bonjour • Bonsoir • 
          Bienvenue • Demain • Enchanté • Aujourd’hui • Souvent • Mardi •
        </div>
      </div>


      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Our Courses – We cover all your needs
          </h2>
          <p className="text-lg text-white/80">
            Everything you need to learn, speak, and excel in French.
          </p>
        </div>

        {/* Courses grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
          {/* A1 */}
          <div className="bg-white text-black rounded-xl shadow-md p-8 border-l-4 border-red-600">
            <h3 className="text-red-600 text-2xl font-serif font-bold mb-1">
              A1
            </h3>
            <h4 className="text-xl font-semibold mb-3">Beginner</h4>
            <p className="text-gray-600 text-sm leading-relaxed">
              Learn the fundamentals of French, including basic vocabulary,
              pronunciation, and simple sentence structures.
            </p>
          </div>

          {/* A2 */}
          <div className="bg-white text-black rounded-xl shadow-md p-8 border-l-4 border-red-600">
            <h3 className="text-red-600 text-2xl font-serif font-bold mb-1">
              A2
            </h3>
            <h4 className="text-xl font-semibold mb-3">Elementary</h4>
            <p className="text-gray-600 text-sm leading-relaxed">
              Develop the ability to communicate in common daily situations.
            </p>
          </div>

          {/* B1 */}
          <div className="bg-white text-black rounded-xl shadow-md p-8 border-l-4 border-red-600">
            <h3 className="text-red-600 text-2xl font-serif font-bold mb-1">
              B1
            </h3>
            <h4 className="text-xl font-semibold mb-3">Intermediate</h4>
            <p className="text-gray-600 text-sm leading-relaxed">
              Gain confidence in speaking and expressing opinions clearly.
            </p>
          </div>

          {/* B2 */}
          <div className="bg-white text-black rounded-xl shadow-md p-8 border-l-4 border-red-600">
            <h3 className="text-red-600 text-2xl font-serif font-bold mb-1">
              B2
            </h3>
            <h4 className="text-xl font-semibold mb-3">Upper-Intermediate</h4>
            <p className="text-gray-600 text-sm leading-relaxed">
              Achieve strong fluency, accuracy, and confidence in French.
            </p>
          </div>

          {/* TCF */}
          <div className="bg-white text-black rounded-xl shadow-md p-8 border-l-4 border-red-600">
            <h3 className="text-red-600 text-2xl font-serif font-bold mb-1">
              TCF
            </h3>
            <h4 className="text-xl font-semibold mb-3">
              Test de Connaissance du Français
            </h4>
            <p className="text-gray-600 text-sm leading-relaxed">
              Targeted training and exam-focused practice to help you succeed.
            </p>
          </div>

          {/* TEF */}
          <div className="bg-white text-black rounded-xl shadow-md p-8 border-l-4 border-red-600">
            <h3 className="text-red-600 text-2xl font-serif font-bold mb-1">
              TEF
            </h3>
            <h4 className="text-xl font-semibold mb-3">
              Test d’Évaluation de Français
            </h4>
            <p className="text-gray-600 text-sm leading-relaxed">
              Focused training and exam-oriented practice to help you score
              higher.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mb-10">
          <button className="bg-red-600 cursor-pointer hover:bg-red-700 transition text-white font-semibold px-8 py-3 rounded-md shadow">
            <a href="https://wa.me/917696793453?text=Hello%20Welcome%20to%20my%20WhatsApp"target="_blank">Enroll Now</a>
          </button>
        </div>

        {/* Bottom link */}
        <div className="text-center text-white/90">
          ⭐ Got something else in mind?{" "}
          <a href="#contact">
            <span className="underline cursor-pointer">Contact us</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Courses;
