import React from 'react';
import { Phone, MessageCircle, Send } from 'lucide-react';
import { Logo } from './Logo';

interface FooterProps {
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  return (
    <>
      {/* Main Footer Container */}
      <footer className="w-full bg-[#0d0b0e] text-white pt-12 pb-24 px-4 sm:px-6 border-t border-red-900/40">
        <div className="max-w-4xl mx-auto flex flex-col items-center justify-center text-center">
          {/* Official Locantoz Logo */}
          <div className="mb-4 transform hover:scale-105 transition-transform duration-300">
            <Logo size="lg" />
          </div>

          {/* Slogan */}
          <p className="text-sm sm:text-base text-zinc-300 font-semibold tracking-wide mb-6">
            So hurry up and get in touch with Locantoz Escort Service now!
          </p>

          {/* Big Call Now Button (Locantoz Red) */}
          <a
            href="tel:7696947516"
            className="inline-flex items-center gap-2 bg-[#e61924] hover:bg-[#c8141e] text-white font-bold text-base sm:text-lg px-8 py-3 rounded-full shadow-lg hover:shadow-red-600/30 transform hover:scale-105 active:scale-95 transition-all mb-8 cursor-pointer"
          >
            <Phone className="w-5 h-5 fill-current" />
            <span>Call Now: 7696947516</span>
          </a>

          {/* Quick Info & Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-zinc-400 mb-6">
            <span className="text-[#e61924] font-semibold">24/7 Available</span>
            <span>•</span>
            <span>Sector 17, 22, 35, 43</span>
            <span>•</span>
            <span>Manimajra</span>
            <span>•</span>
            <span>Industrial Area</span>
            <span>•</span>
            <span className="text-emerald-400 font-semibold">Cash on Delivery</span>
          </div>

          <p className="text-[11px] text-zinc-500 max-w-xl leading-relaxed">
            © {new Date().getFullYear()} Locantoz Escort Service Chandigarh. All rights reserved. 100% Privacy and Discretion Guaranteed. Genuine &amp; Verified Companionship.
          </p>
        </div>
      </footer>

      {/* Fixed Sticky Bottom Mobile Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 flex items-center h-12 sm:h-14 shadow-2xl bg-zinc-950 font-bold text-sm sm:text-base">
        {/* Left Call Half (Locantoz Red) */}
        <a
          href="tel:7696947516"
          className="flex-1 h-full bg-[#e61924] hover:bg-[#c8141e] text-white flex items-center justify-center gap-2 transition-colors px-2 cursor-pointer"
        >
          <Phone className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />
          <span className="tracking-wide text-xs sm:text-sm md:text-base">7696947516</span>
        </a>

        {/* Right WhatsApp Half (Green) */}
        <a
          href="https://wa.me/917696947516?text=Hello%20Locantoz%20Escort%20Service,%20I%20am%20interested%20in%20booking%20an%20escort%20in%20Chandigarh"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 h-full bg-[#25D366] hover:bg-[#20ba59] text-white flex items-center justify-center gap-2 transition-colors px-2 cursor-pointer"
        >
          <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />
          <span className="tracking-wide text-xs sm:text-sm md:text-base">WhatsApp</span>
        </a>
      </div>

      {/* Floating Telegram / Quick Action Button */}
      <a
        href="https://t.me/share/url?url=https://locantoz-chandigarh.com&text=Locantoz%20Escort%20Service%20Chandigarh"
        target="_blank"
        rel="noopener noreferrer"
        title="Contact on Telegram"
        className="fixed bottom-16 right-4 sm:right-6 z-40 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#29b6f6] hover:bg-[#039be5] text-white flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all cursor-pointer"
      >
        <Send className="w-6 h-6 sm:w-7 sm:h-7 -translate-x-0.5 translate-y-0.5 fill-current" />
      </a>
    </>
  );
};
