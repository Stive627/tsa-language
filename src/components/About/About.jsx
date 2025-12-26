import React from "react";

const About = () => {
  return (
    <section className="bg-[#0b3a63] py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Title */}
        <h2 className="text-white text-4xl font-serif mb-10 flex items-center gap-4">
          <span className="opacity-80">About Us</span>
        </h2>

        {/* Card */}
        <div className="relative bg-white rounded-2xl shadow-lg p-10 border-[12px] border-transparent"
          style={{
            borderImage:
              "repeating-linear-gradient(45deg, #c0392b 0 10px, #ffffff 10px 20px, #34495e 20px 30px) 12",
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            
            {/* Image */}
            <div className="flex justify-center">
              <img
                src="/stive.jpg" // place image in public folder
                alt="Stive Fossi"
                className="w-72 h-auto rounded-xl shadow-md object-cover"
              />
            </div>

            {/* Text */}
            <div>
              <h3 className="text-3xl font-serif font-bold text-red-600 mb-4">
                Stive Fossi
              </h3>

              <p className="text-gray-800 mb-4 leading-relaxed">
                <strong>Stive Fossi</strong>, our trainer here at{" "}
                <span className="text-red-600 italic">TSA language</span> is a
                native French speaker from Cameroon with over{" "}
                <strong>6 years of teaching experience</strong>.
              </p>

              <p className="text-gray-800 mb-4 leading-relaxed">
                He has taught French at various institutions, guiding students
                of all ages and levels—from beginners to advanced learners.
                Known for his engaging and personalized approach.
              </p>

              <p className="text-gray-800 leading-relaxed">
                Stive focuses on building confidence, improving fluency, and
                helping students achieve their academic, professional, and
                personal language goals.
              </p>
            </div>
          </div>

          {/* Experience badge */}
          <div className="absolute -bottom-8 -right-8 bg-white border-4 border-blue-900 rounded-full w-28 h-28 flex flex-col items-center justify-center shadow-lg">
            <span className="text-3xl font-bold text-blue-900">6+</span>
            <span className="text-xs text-center font-semibold text-blue-900">
              Years of Experience
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
