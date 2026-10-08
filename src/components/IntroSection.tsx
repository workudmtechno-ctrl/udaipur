import React from 'react';

export const IntroSection: React.FC = () => {
  return (
    <section className="w-full py-8 px-4 sm:px-6 bg-[#fcf5f5]">
      <div className="max-w-4xl mx-auto bg-white/95 border border-red-200/70 rounded-2xl p-6 sm:p-8 shadow-xs">
        {/* Section Heading in cursive script */}
        <h2 className="font-script text-2xl sm:text-3xl md:text-4xl text-[#b8101a] font-bold text-center mb-4">
          Chandigarh (The Gateway to the South)
        </h2>

        {/* Intro paragraph */}
        <p className="text-gray-700 text-sm sm:text-base leading-relaxed text-center max-w-3xl mx-auto mb-6">
          Chandigarh is a vibrant metropolis known for its deep-rooted cultural heritage, world-class architecture, and its massive corporate and IT sectors.
        </p>

        {/* Local Areas & Experience block */}
        <div className="bg-[#fff5f5] border-l-4 border-[#e61924] p-4 rounded-r-xl mb-6 text-xs sm:text-sm text-gray-700 leading-relaxed">
          <strong className="text-[#b8101a] font-bold block mb-1">Local Areas &amp; Experience:</strong>
          Our Locantoz Chandigarh call girls cater to the cosmopolitan crowd in Sector 17, Sector 22, Sector 35, Sector 43, Manimajra and Industrial Area. For those staying in the luxury hotels on Madhya Marg, Himalayan Marg or near the IT Park, our escorts in Chandigarh provide a professional and discreet presence that ensures your privacy in this beautiful city.
        </div>

        {/* Highlights List */}
        <ul className="space-y-3 text-xs sm:text-sm text-gray-700 max-w-3xl mx-auto">
          <li className="flex items-start gap-2.5">
            <span className="w-2 h-2 rounded-full bg-[#e61924] mt-1.5 flex-shrink-0" />
            <div>
              <strong className="text-gray-900 font-semibold">Cosmopolitan Standard:</strong> Educated and well-spoken models for the city's diverse and VIP clientele.
            </div>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="w-2 h-2 rounded-full bg-[#e61924] mt-1.5 flex-shrink-0" />
            <div>
              <strong className="text-gray-900 font-semibold">Luxury Hospitality:</strong> Private and secure companions available near Sukhna Lake, Sector 17 Plaza, and 5-star properties.
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
