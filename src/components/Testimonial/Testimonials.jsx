import React from "react";

const Testimonials = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-serif font-bold mb-4">
            Student Testimonials
          </h2>
          <p className="text-lg underline underline-offset-4">
            See what our students say about their French journey.
          </p>
        </div>

        {/* Stats box */}
        <div className="border-2 rounded-2xl p-8 mb-16
          border-l-blue-500 border-t-blue-500
          border-r-red-500 border-b-red-500">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <h3 className="text-4xl font-bold text-red-600">100+</h3>
              <p className="mt-2 font-medium">Satisfied Students</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-red-600">4.9/5</h3>
              <p className="mt-2 font-medium">Successful Ratings</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-red-600">6+</h3>
              <p className="mt-2 font-medium">Years Experience</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-red-600">98%</h3>
              <p className="mt-2 font-medium">Exam pass rate</p>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-red-100 rounded-xl shadow-md p-8">
            <h4 className="text-lg font-semibold text-red-600 mb-4">
              Sue – B1 Canada
            </h4>
            <p className="text-gray-800 leading-relaxed text-sm">
              Such a supportive teacher! Grammar finally makes sense now.
              Stive explains things in a way that's easy to understand and
              remember. The cultural insights make every class interesting.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-blue-100 rounded-xl shadow-md p-8">
            <h4 className="text-lg font-semibold text-blue-800 mb-4">
              Loïc – B2 France
            </h4>
            <p className="text-gray-800 leading-relaxed text-sm">
              Such a supportive teacher! Grammar finally makes sense now.
              Stive explains things in a way that's easy to understand and
              remember. The cultural insights make every class interesting.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-red-100 rounded-xl shadow-md p-8">
            <h4 className="text-lg font-semibold text-red-600 mb-4">
              Stephane – B2 Canada
            </h4>
            <p className="text-gray-800 leading-relaxed text-sm">
              Such a supportive teacher! Grammar finally makes sense now.
              Stive explains things in a way that's easy to understand and
              remember. The cultural insights make every class interesting.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
