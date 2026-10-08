import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { locationsList } from '../data/profiles';
import { Logo } from './Logo';

interface HeaderNavProps {
  selectedLocation: string;
  onSelectLocation: (loc: string) => void;
  onOpenBooking: () => void;
}

export const HeaderNav: React.FC<HeaderNavProps> = ({
  selectedLocation,
  onSelectLocation,
  onOpenBooking
}) => {
  return (
    <header className="sticky top-0 z-50 bg-[#121013] text-white shadow-xl border-b border-[#e61924]/30">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 py-2.5 flex flex-wrap items-center justify-between gap-3">
        {/* Brand Logo using official Locantoz styling */}
        <div 
          onClick={() => onSelectLocation("All")}
          className="cursor-pointer flex items-center select-none hover:opacity-90 transition-opacity"
        >
          <Logo size="md" />
        </div>

        {/* Location Links */}
        <nav className="flex items-center flex-wrap gap-x-3 sm:gap-x-5 gap-y-1 text-xs sm:text-sm font-medium">
          <button
            onClick={() => onSelectLocation("All")}
            className={`transition-colors hover:text-[#e61924] ${
              selectedLocation === "All"
                ? "text-[#e61924] font-bold border-b-2 border-[#e61924] pb-0.5"
                : "text-zinc-300"
            }`}
          >
            All Areas
          </button>
          {locationsList.map((loc) => (
            <button
              key={loc}
              onClick={() => onSelectLocation(loc)}
              className={`transition-colors hover:text-[#e61924] whitespace-nowrap ${
                selectedLocation === loc
                  ? "text-[#e61924] font-bold border-b-2 border-[#e61924] pb-0.5"
                  : "text-zinc-300"
              }`}
            >
              {loc}
            </button>
          ))}
        </nav>

        {/* Quick CTA */}
        <div className="hidden lg:flex items-center gap-2">
          <a
            href="tel:7696947516"
            className="flex items-center gap-1.5 bg-zinc-800 hover:bg-zinc-700 text-white px-3 py-1.5 rounded-full text-xs font-semibold border border-zinc-700 transition-all"
          >
            <Phone className="w-3.5 h-3.5 text-[#e61924]" />
            <span>7696947516</span>
          </a>
          <button
            onClick={onOpenBooking}
            className="bg-[#e61924] hover:bg-[#c8141e] text-white px-4 py-1.5 rounded-full text-xs font-bold transition-all shadow-md hover:shadow-red-600/30 cursor-pointer"
          >
            Book Now
          </button>
        </div>
      </div>
    </header>
  );
};
