import React from "react";
import {
  MapPin,
  Mail,
  Phone,
  MessageCircle,
  MoreVertical
} from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-serif font-bold">Contact Us</h2>
        <p className="mt-3 text-gray-600 text-lg">
          Got any questions? Get in touch with us!
        </p>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Left card */}
        <div className="bg-[#f8f5f1] rounded-2xl shadow-md p-10 text-center">
          <h3 className="text-2xl font-serif font-semibold mb-4">
            Ready to start learning?
          </h3>

          <p className="text-gray-700 mb-6">
            Book a <span className="text-red-600 font-semibold">free</span> demo
            class and experience our teaching style firsthand
          </p>

          <button className="bg-red-600 cursor-pointer hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-md shadow">
            <a href="https://wa.me/917696793453?text=Hello%20Welcome%20to%20my%20WhatsApp"target="_blank">

            Enroll Now
            Book Free Demo
            </a>
          </button>

          <p className="mt-6 text-sm text-gray-600">
            No commitment. 60 Minutes
          </p>
        </div>

        {/* Right card */}
        <div className="rounded-2xl border-2 border-blue-900 shadow-md p-10 relative">
          {/* Red outline effect */}
          <div className="absolute inset-0 rounded-2xl border-2 border-red-600 translate-x-1 translate-y-1 -z-10"></div>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <MapPin className="text-red-600" />
              <div>
                <h4 className="font-semibold text-red-600">Location</h4>
                <p className="text-gray-700">Online Classes</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Mail className="text-red-600" />
              <div>
                <h4 className="font-semibold text-red-600">Mail</h4>
                <p className="text-gray-700">tsasoft7@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="text-red-600" />
              <div>
                <h4 className="font-semibold text-red-600">Call Us</h4>
                <p className="text-gray-700">+91 76967 93453</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <MessageCircle className="text-red-600" />
              <div>
                <h4 className="font-semibold text-red-600">Whatsapp Support</h4>
                <p className="text-gray-700">+91 76967 93453</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
