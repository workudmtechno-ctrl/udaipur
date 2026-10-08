import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { Profile } from '../types';

interface ProfileCardProps {
  profile: Profile;
  onSelect: (profile: Profile) => void;
  onCall: (e: React.MouseEvent, profile: Profile) => void;
  onWhatsapp: (e: React.MouseEvent, profile: Profile) => void;
}

export const ProfileCard: React.FC<ProfileCardProps> = ({
  profile,
  onSelect,
  onCall,
  onWhatsapp
}) => {
  return (
    <div
      onClick={() => onSelect(profile)}
      className="group relative bg-[#181519] rounded-xl overflow-hidden shadow-md hover:shadow-2xl hover:shadow-red-950/40 transition-all duration-300 transform hover:-translate-y-1 cursor-pointer border border-red-900/40 hover:border-[#e61924]/60 flex flex-col"
    >
      {/* Top Image Container */}
      <div className="relative w-full aspect-[4/5] overflow-hidden bg-zinc-900">
        <img
          src={profile.image}
          alt={profile.name}
          referrerPolicy="no-referrer"
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {/* Floating Top Badges */}
        <div className="absolute top-2 left-2 flex items-center gap-1">
          <span className="bg-[#e61924] text-white text-[10px] font-bold px-2 py-0.5 rounded shadow backdrop-blur-xs">
            {profile.location || "Sector 17"}
          </span>
        </div>

        {/* Subtle dark gradient at bottom of image */}
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#181519] via-[#181519]/70 to-transparent" />
      </div>

      {/* Bottom Info Bar */}
      <div className="bg-[#1e1a20] text-white p-2.5 sm:p-3 flex flex-col items-center justify-center text-center border-t border-red-500/20">
        {/* Name */}
        <h3 className="font-bold text-sm sm:text-base text-white group-hover:text-red-400 transition-colors">
          {profile.name}
        </h3>

        {/* Age */}
        <p className="text-[11px] sm:text-xs text-red-200/80 mb-2 font-medium">
          {profile.age} years old
        </p>

        {/* Action Icons Row: Phone & WhatsApp */}
        <div className="flex items-center justify-center gap-4 w-full pt-1.5 border-t border-white/10">
          {/* Call Icon Link */}
          <a
            href="tel:7696947516"
            onClick={(e) => e.stopPropagation()}
            title={`Call for ${profile.name}`}
            className="w-7 h-7 rounded-full bg-white/15 hover:bg-[#e61924] text-white flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 shadow-sm"
          >
            <Phone className="w-3.5 h-3.5 fill-current" />
          </a>

          {/* WhatsApp Icon Link */}
          <a
            href={`https://wa.me/917696947516?text=${encodeURIComponent(
              `Hello Locantoz Escort Service, I am interested in booking ${profile.name} (${profile.age} yrs) in Chandigarh.`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            title={`WhatsApp chat for ${profile.name}`}
            className="w-7 h-7 rounded-full bg-white/15 hover:bg-[#25D366] text-white flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 shadow-sm"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-current" />
          </a>
        </div>
      </div>
    </div>
  );
};
