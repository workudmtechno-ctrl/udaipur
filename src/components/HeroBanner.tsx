import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { Logo } from './Logo';

interface HeroBannerProps {
  onOpenBooking: () => void;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative w-full overflow-hidden bg-[#0d0b0e] text-white">
      {/* Background with Dark Ambience & Red Accent Glow */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-35 mix-blend-luminosity scale-105 transform duration-1000 ease-out"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&w=1600&q=80')`
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0d0b0e]/90 via-[#0d0b0e]/75 to-[#0d0b0e]" />
      
      {/* Subtle top red glow radial */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[240px] bg-[#e61924]/15 blur-3xl pointer-events-none rounded-full" />

      {/* Content Container */}
      <div className="relative max-w-5xl mx-auto px-4 py-14 sm:py-20 text-center flex flex-col items-center justify-center min-h-[400px]">
        {/* Prominent Official Locantoz Logo */}
        <div className="mb-6 transform hover:scale-105 transition-transform duration-300">
          <Logo size="xl" />
        </div>

        {/* Tagline / Sub-breadcrumb */}
        <div className="mb-3 text-xs sm:text-sm text-zinc-300 font-medium tracking-wide">
          <span>Premium Chandigarh Escorts &amp; VIP Companion Agency</span>
        </div>

        {/* Main Headline */}
        <h1 className="font-script text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-bold leading-tight drop-shadow-md max-w-4xl px-2">
          Hot Call Girls in Chandigarh Escorts Service Free Home Delivery
        </h1>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          {/* Call Us Button (Locantoz Red) */}
          <a
            href="tel:7696947516"
            className="flex items-center justify-center gap-2 bg-[#e61924] hover:bg-[#c8141e] text-white font-bold text-base sm:text-lg px-8 py-3.5 rounded-full shadow-lg shadow-red-600/30 transform hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 min-w-[150px]"
          >
            <Phone className="w-5 h-5 fill-current" />
            <span>Call Us</span>
          </a>

          {/* Whatsapp Button */}
          <a
            href="https://wa.me/917696947516?text=Hello%20Locantoz%20Escort%20Service,%20I%20want%20to%20book%20an%20escort%20in%20Chandigarh"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-base sm:text-lg px-8 py-3.5 rounded-full shadow-lg shadow-green-500/30 transform hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 min-w-[150px]"
          >
            <MessageCircle className="w-5 h-5 fill-current" />
            <span>Whatsapp</span>
          </a>
        </div>

        {/* 24/7 Service Pill */}
        <div className="mt-7 inline-flex items-center gap-2 bg-zinc-900/90 border border-red-500/40 px-4 py-2 rounded-full text-xs text-zinc-200 backdrop-blur-sm shadow-md">
          <span className="w-2 h-2 rounded-full bg-[#e61924] animate-pulse" />
          <span>Available 24/7 In Chandigarh &amp; Nearby Sectors | Cash on Delivery Available</span>
        </div>
      </div>
    </section>
  );
};
