import React from 'react';
import { Shield, Lock, Heart, Users } from 'lucide-react';

export const PremierSection: React.FC = () => {
  return (
    <section className="w-full py-10 px-4 sm:px-6 bg-[#faf5f5]">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        {/* Left Column: Featured Model Portrait */}
        <div className="md:col-span-5 flex justify-center">
          <div className="relative w-full max-w-sm rounded-2xl overflow-hidden shadow-lg border-2 border-red-200 bg-red-50/50 p-2">
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=700&q=80"
              alt="Elite Escort Chandigarh"
              referrerPolicy="no-referrer"
              className="w-full h-80 sm:h-96 object-cover rounded-xl shadow-inner"
            />
            {/* Dark bottom overlay with verified badge */}
            <div className="absolute bottom-4 left-4 right-4 bg-black/75 backdrop-blur-md rounded-lg p-2.5 text-white flex items-center justify-between border border-red-500/20">
              <div>
                <span className="text-xs font-semibold text-red-300 block">Featured Companion</span>
                <span className="text-sm font-bold">Verified Elite Model</span>
              </div>
              <span className="bg-[#e61924] text-white text-[10px] px-2.5 py-0.5 rounded-full font-bold uppercase tracking-wider">
                Available
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Title + Description + 4 Red Badges */}
        <div className="md:col-span-7 flex flex-col">
          <h2 className="font-script text-2xl sm:text-3xl lg:text-4xl text-[#b8101a] font-bold leading-snug mb-4">
            Premier Escorts Service: Unforgettable Experiences with Elite Call Girls Chandigarh
          </h2>

          <p className="text-xs sm:text-sm text-gray-700 leading-relaxed mb-6">
            Here is our warm welcome from <strong>Locantoz Escort Service</strong> to the finest escorts agency in Chandigarh in this great city of seduction, where class, charm and discretion are perfectly harmonized in moments that echo in your heart and mind. At our agency we are committed to providing you with the most outstanding companionship; a blend of class and thrill, to satisfy your innermost desires. Are you in need of a steamy night, an attractive face to escort to a luxury dinner, or a special private getaway, our high profile <strong>Chandigarh call girls</strong> are here just to make your experience unforgettable. With Locantoz, affordability, reliability, and full satisfaction are always guaranteed.
          </p>

          {/* 4 Locantoz Red Badges Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {/* Badge 1: 100% Privacy */}
            <div className="bg-[#e61924] hover:bg-[#c8141e] text-white rounded-lg p-3 flex flex-col items-center justify-center text-center shadow-md hover:scale-105 transition-transform">
              <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center mb-1.5">
                <Lock className="w-5 h-5 text-white" />
              </div>
              <span className="font-script text-base font-bold leading-tight">100%</span>
              <span className="text-xs font-semibold">Privacy</span>
            </div>

            {/* Badge 2: No Fake Profiles */}
            <div className="bg-[#e61924] hover:bg-[#c8141e] text-white rounded-lg p-3 flex flex-col items-center justify-center text-center shadow-md hover:scale-105 transition-transform">
              <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center mb-1.5">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <span className="font-script text-sm font-bold leading-tight">No Fake</span>
              <span className="text-xs font-semibold">Profiles</span>
            </div>

            {/* Badge 3: Best Communities */}
            <div className="bg-[#e61924] hover:bg-[#c8141e] text-white rounded-lg p-3 flex flex-col items-center justify-center text-center shadow-md hover:scale-105 transition-transform">
              <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center mb-1.5">
                <Heart className="w-5 h-5 text-white fill-current" />
              </div>
              <span className="font-script text-sm font-bold leading-tight">Best</span>
              <span className="text-xs font-semibold">Quality</span>
            </div>

            {/* Badge 4: 50000 Members */}
            <div className="bg-[#e61924] hover:bg-[#c8141e] text-white rounded-lg p-3 flex flex-col items-center justify-center text-center shadow-md hover:scale-105 transition-transform">
              <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center mb-1.5">
                <Users className="w-5 h-5 text-white" />
              </div>
              <span className="font-script text-base font-bold leading-tight">50,000+</span>
              <span className="text-xs font-semibold">Clients</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
