import React from 'react';
import { Profile } from '../types';
import { ProfileCard } from './ProfileCard';

interface ProfileGridProps {
  profiles: Profile[];
  title?: string;
  onSelectProfile: (profile: Profile) => void;
  onCallProfile: (e: React.MouseEvent, profile: Profile) => void;
  onWhatsappProfile: (e: React.MouseEvent, profile: Profile) => void;
}

export const ProfileGrid: React.FC<ProfileGridProps> = ({
  profiles,
  title = "Browse Charming Chandigarh Call Girls - Select from Our Exclusive Profiles",
  onSelectProfile,
  onCallProfile,
  onWhatsappProfile
}) => {
  return (
    <section className="w-full py-10 px-3 sm:px-6 bg-[#fcf5f5]">
      <div className="max-w-6xl mx-auto">
        {/* Cursive Section Heading in Locantoz Red */}
        <h2 className="font-script text-2xl sm:text-3xl md:text-4xl text-[#b8101a] font-bold text-center mb-8 px-2 max-w-3xl mx-auto">
          {title}
        </h2>

        {/* 4-column Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 md:gap-5">
          {profiles.map((profile) => (
            <ProfileCard
              key={profile.id}
              profile={profile}
              onSelect={onSelectProfile}
              onCall={onCallProfile}
              onWhatsapp={onWhatsappProfile}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
