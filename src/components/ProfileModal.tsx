import React from 'react';
import { X, Phone, MessageCircle, Star, MapPin, CheckCircle, Shield, Sparkles, Calendar } from 'lucide-react';
import { Profile } from '../types';

interface ProfileModalProps {
  profile: Profile | null;
  onClose: () => void;
  onBook: (profile: Profile) => void;
}

export const ProfileModal: React.FC<ProfileModalProps> = ({ profile, onClose, onBook }) => {
  if (!profile) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl bg-[#131115] border border-red-600/30 rounded-2xl overflow-hidden shadow-2xl text-white max-h-[90vh] flex flex-col md:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-20 w-8 h-8 rounded-full bg-black/60 hover:bg-[#e61924] text-white flex items-center justify-center transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Left Side: Photo */}
        <div className="w-full md:w-1/2 relative bg-zinc-950 flex-shrink-0 min-h-[260px] md:min-h-[380px]">
          <img
            src={profile.image}
            alt={profile.name}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent md:hidden" />
          
          <div className="absolute top-3 left-3 bg-[#e61924] text-white text-xs font-bold px-2.5 py-1 rounded-full shadow flex items-center gap-1">
            <CheckCircle className="w-3.5 h-3.5" />
            <span>100% Verified Profile</span>
          </div>

          <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-red-200 md:hidden">
            <span className="font-bold text-lg text-white">{profile.name}, {profile.age}</span>
            <span className="bg-black/60 px-2 py-0.5 rounded">{profile.location}</span>
          </div>
        </div>

        {/* Right Side: Details & Actions */}
        <div className="w-full md:w-1/2 p-5 sm:p-6 overflow-y-auto flex flex-col justify-between space-y-4">
          <div>
            <div className="hidden md:block">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                  {profile.name}
                  <span className="text-sm font-normal text-red-300">({profile.age} yrs)</span>
                </h3>
              </div>
              <p className="text-xs text-[#ff4d5a] font-semibold mb-2 flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5" /> {profile.location || "Sector 17, Chandigarh"}
              </p>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 gap-2 text-xs bg-zinc-900/80 p-3 rounded-xl border border-red-900/40 my-3">
              <div>
                <span className="text-zinc-400 block text-[10px] uppercase">Height</span>
                <span className="font-semibold text-white">{profile.height || "5'5\""}</span>
              </div>
              <div>
                <span className="text-zinc-400 block text-[10px] uppercase">Category</span>
                <span className="font-semibold text-red-400">{profile.category || "VIP Escort"}</span>
              </div>
              <div>
                <span className="text-zinc-400 block text-[10px] uppercase">Service Type</span>
                <span className="font-semibold text-white">{profile.serviceType || "In-Call / Out-Call"}</span>
              </div>
              <div>
                <span className="text-zinc-400 block text-[10px] uppercase">Languages</span>
                <span className="font-semibold text-white">{profile.languages?.join(", ") || "English, Hindi"}</span>
              </div>
            </div>

            {/* Bio */}
            <div className="text-xs text-zinc-300 leading-relaxed mb-4">
              <span className="text-red-400 font-semibold block mb-1">About {profile.name}:</span>
              <p>{profile.bio || "Affectionate, educated and charming companion with Locantoz Escort Service, dedicated to ensuring your time together is memorable, discreet, and pleasurable."}</p>
            </div>

            {/* Guarantees */}
            <div className="flex items-center gap-3 text-[11px] text-zinc-300 py-2 border-t border-zinc-800">
              <span className="flex items-center gap-1">
                <Shield className="w-3.5 h-3.5 text-red-400" /> Safe &amp; Discreet
              </span>
              <span className="flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" /> Cash on Delivery
              </span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="space-y-2 pt-2">
            <div className="grid grid-cols-2 gap-2">
              <a
                href="tel:7696947516"
                className="flex items-center justify-center gap-1.5 bg-[#e61924] hover:bg-[#c8141e] text-white py-2.5 px-3 rounded-xl font-bold text-xs shadow transition-colors text-center cursor-pointer"
              >
                <Phone className="w-4 h-4 fill-current" />
                <span>Call Now</span>
              </a>

              <a
                href={`https://wa.me/917696947516?text=Hello%20Locantoz%20Escort%20Service,%20I%20want%20to%20book%20${profile.name}%20(Age%20${profile.age})%20in%20Chandigarh`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 bg-[#25D366] hover:bg-[#20ba59] text-white py-2.5 px-3 rounded-xl font-bold text-xs shadow transition-colors text-center cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>WhatsApp</span>
              </a>
            </div>

            <button
              onClick={() => {
                onClose();
                onBook(profile);
              }}
              className="w-full bg-zinc-800 hover:bg-zinc-700 text-white border border-red-500/30 py-2.5 rounded-xl font-bold text-xs shadow transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-[#e61924]" />
              <span>Book Appointment with {profile.name}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
