import React from "react";
import { Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#0b3a63] text-white">
      {/* Top vocabulary bar */}
      <div className="border-b border-white/20 px-4 py-3 text-sm text-center flex flex-wrap justify-center gap-x-3 gap-y-1">
        <span>Merci</span> • <span>Salut</span> • <span>Oui</span> • <span>Non</span> •
        <span> Bonjour</span> • <span>Bonsoir</span> • <span>Bienvenue</span> •
        <span> Demain</span> • <span>Enchanté</span> • <span>Aujourd’hui</span> •
        <span> Souvent</span> • <span>Mardi</span> • <span>S’il vous plaît</span> •
        <span> Excusez-moi</span> • <span>Pourquoi</span> • <span>Homme</span> •
        <span> Étudie</span> • <span>Gâteau</span> • <span>Ici</span> •
        <span> Amour</span> • <span>À bientôt</span> • <span>Français</span>
      </div>

      {/* Main footer content */}
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        {/* Center brand */}
        <div className="md:col-span-2 text-center md:text-left">
          <h2 className="text-2xl font-semibold">Bonjour French</h2>
          <p className="mt-2 text-sm text-white/80">
            Learn French <br />
            Get closer to excellence
          </p>
        </div>

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

      {/* Bottom copyright */}
      <div className="text-center text-xs text-white/70 pb-4">
        © Bonjour French. All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
