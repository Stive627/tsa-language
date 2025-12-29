import React from "react";
import { Mail, Phone } from "lucide-react";
import "./footer.css";

const words = [
  "Merci", "Salut", "Oui", "Non", "Bonjour", "Bonsoir", "Bienvenue",
  "Demain", "Enchanté", "Aujourd’hui", "Souvent", "Mardi",
  "S’il vous plaît", "Excusez-moi", "Pourquoi", "Homme",
  "Étudie", "Gâteau", "Ici", "Amour", "À bientôt", "Français",
];

const Footer = () => {
  return (
    <footer className="bg-[#0b3a63] text-white overflow-hidden">

      {/* 🔁 Marquee */}
      <div className="marquee-container">
        <div className="marquee">
          {[...words, ...words].map((word, index) => (
            <span key={index}>{word} •</span>
          ))}
        </div>
      </div>

      {/* Main footer */}
<div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-[2fr_auto_1fr] gap-8 items-center">

  {/* Bonjour French */}
  <div className="text-center md:text-left">
    <h2 className="text-2xl font-semibold">Bonjour French</h2>
    <p className="mt-2 text-sm text-white/80">
      Learn French <br />
      Get closer to excellence
    </p>
  </div>

  {/* Vertical divider */}
  <div className="footer-divider mx-auto"></div>

  {/* Contact */}
  <div className="text-center md:text-left">
    <h3 className="text-lg font-semibold mb-3">Contact</h3>
    <div className="flex items-center justify-center md:justify-start gap-2 text-sm">
      <Mail size={16} />
      <span>bonjourfrench@gmail.com</span>
    </div>
    <div className="flex items-center justify-center md:justify-start gap-2 text-sm mt-2">
      <Phone size={16} />
      <span>+91 76967 93453</span>
    </div>
  </div>

</div>


      <div className="text-center text-xs text-white/70 pb-4">
        © TSA language. All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
