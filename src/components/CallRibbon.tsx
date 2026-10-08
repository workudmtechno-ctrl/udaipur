import React from 'react';
import { PhoneCall } from 'lucide-react';

export const CallRibbon: React.FC = () => {
  return (
    <section className="w-full bg-gradient-to-r from-[#e61924] via-[#dc1c25] to-[#c4141e] text-white py-6 px-4 text-center shadow-lg border-y border-red-500/30">
      <div className="max-w-4xl mx-auto flex flex-col items-center justify-center">
        <p className="font-sans font-bold text-xs sm:text-sm tracking-wider uppercase mb-1 text-red-100">
          SO HURRY UP AND GET IN TOUCH WITH LOCANTOZ ESCORT SERVICE NOW!
        </p>
        <a
          href="tel:7696947516"
          className="inline-flex items-center gap-3 font-sans font-black text-3xl sm:text-4xl md:text-5xl tracking-wider text-white hover:text-red-100 hover:scale-105 active:scale-95 transition-all drop-shadow-md"
        >
          <PhoneCall className="w-8 h-8 sm:w-10 sm:h-10 animate-bounce" />
          <span>7696947516</span>
        </a>
      </div>
    </section>
  );
};
