import React from 'react';

export const DiscoverSection: React.FC = () => {
  return (
    <section className="w-full py-10 px-4 sm:px-6 bg-[#fcf5f5]">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        {/* Left Column: Text */}
        <div className="md:col-span-7 flex flex-col">
          <h2 className="font-script text-2xl sm:text-3xl lg:text-4xl text-[#b8101a] font-bold leading-tight mb-4">
            Discover Locantoz the Allure of the Call Girls in Chandigarh
          </h2>

          <div className="space-y-4 text-xs sm:text-sm text-gray-700 leading-relaxed">
            <p>
              It is a fascinating mix of history, culture and modern vitality, and this dynamic city is thus the best backdrop to memorable experiences with our <strong>Locantoz Call girls Chandigarh</strong>. Whether they are vibrant markets with colorful bazaars, or high-end sectors with bustling nightlife, Chandigarh has the charm to set the ultimate scene of romance and adventure.
            </p>

            <p>
              The exciting atmosphere in the city proves to be an added advantage to every hour that you spend with our companions, whether it is touring to the scenic attractions like Sukhna Lake, wining and dining in the popular Sector 26 lounges, or relaxing in your 5-star hotel suite. With Locantoz Escort Service, every moment is enriched with beauty, elegance, and utmost discretion.
            </p>
          </div>
        </div>

        {/* Right Column: Model Portrait Image */}
        <div className="md:col-span-5 flex justify-center">
          <div className="w-full max-w-sm rounded-2xl overflow-hidden shadow-lg border-2 border-red-200 bg-red-50/50 p-2">
            <img
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=700&q=80"
              alt="Discover Chandigarh Escorts"
              referrerPolicy="no-referrer"
              className="w-full h-80 sm:h-96 object-cover rounded-xl shadow-inner"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
