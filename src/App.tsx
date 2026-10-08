/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { HeaderNav } from './components/HeaderNav';
import { HeroBanner } from './components/HeroBanner';
import { IntroSection } from './components/IntroSection';
import { VideoSection } from './components/VideoSection';
import { PremierSection } from './components/PremierSection';
import { CallRibbon } from './components/CallRibbon';
import { DiscoverSection } from './components/DiscoverSection';
import { ProfileGrid } from './components/ProfileGrid';
import { FilterBar } from './components/FilterBar';
import {
  EnchantingSection,
  SeductiveServicesSection,
  PricingAndFantasiesSection,
  HotelBookingGuideSection,
  IndependentAndSafetySection
} from './components/ContentSections';
import { Footer } from './components/Footer';
import { ProfileModal } from './components/ProfileModal';
import { BookingModal } from './components/BookingModal';
import { allProfiles } from './data/profiles';
import { Profile } from './types';

export default function App() {
  const [selectedLocation, setSelectedLocation] = useState<string>('All');
  const [selectedAgeGroup, setSelectedAgeGroup] = useState<string>('All Ages');
  const [activeProfile, setActiveProfile] = useState<Profile | null>(null);
  const [isBookingOpen, setIsBookingOpen] = useState<boolean>(false);
  const [bookingProfile, setBookingProfile] = useState<Profile | null>(null);

  // Filter profiles
  const filteredProfiles = useMemo(() => {
    return allProfiles.filter((p) => {
      const matchLoc =
        selectedLocation === 'All' ||
        (p.location && p.location.toLowerCase().includes(selectedLocation.toLowerCase()));

      let matchAge = true;
      if (selectedAgeGroup === '18-20 yrs') {
        matchAge = p.age >= 18 && p.age <= 20;
      } else if (selectedAgeGroup === '21-24 yrs') {
        matchAge = p.age >= 21 && p.age <= 24;
      } else if (selectedAgeGroup === '25+ yrs') {
        matchAge = p.age >= 25;
      }

      return matchLoc && matchAge;
    });
  }, [selectedLocation, selectedAgeGroup]);

  // Profile chunks for interleaved layout as shown in the original 11 pages
  const isFiltering = selectedLocation !== 'All' || selectedAgeGroup !== 'All Ages';

  const chunk1 = useMemo(() => isFiltering ? filteredProfiles : allProfiles.slice(0, 12), [isFiltering, filteredProfiles]);
  const chunk2 = useMemo(() => isFiltering ? [] : allProfiles.slice(12, 36), [isFiltering]);
  const chunk3 = useMemo(() => isFiltering ? [] : allProfiles.slice(36, 56), [isFiltering]);
  const chunk4 = useMemo(() => isFiltering ? [] : allProfiles.slice(56, 76), [isFiltering]);
  const chunk5 = useMemo(() => isFiltering ? [] : allProfiles.slice(76, 100), [isFiltering]);

  const handleSelectProfile = (profile: Profile) => {
    setActiveProfile(profile);
  };

  const handleCall = (e: React.MouseEvent, profile: Profile) => {
    e.stopPropagation();
    window.location.href = 'tel:7696947516';
  };

  const handleWhatsapp = (e: React.MouseEvent, profile: Profile) => {
    e.stopPropagation();
    const text = encodeURIComponent(
      `Hello Locantoz Escort Service, I am interested in booking ${profile.name} (${profile.age} yrs) in Chandigarh.`
    );
    const link = document.createElement('a');
    link.href = `https://wa.me/917696947516?text=${text}`;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.click();
  };

  const handleOpenBooking = (profile?: Profile) => {
    setBookingProfile(profile || null);
    setIsBookingOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#faf5f5] text-[#1a1a1e] flex flex-col selection:bg-[#e61924] selection:text-white">
      {/* 1. Header Navigation */}
      <HeaderNav
        selectedLocation={selectedLocation}
        onSelectLocation={setSelectedLocation}
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* 2. Hero Banner */}
      <HeroBanner onOpenBooking={() => handleOpenBooking()} />

      {/* Quick Filter Bar for exploring sectors */}
      <FilterBar
        selectedLocation={selectedLocation}
        onSelectLocation={setSelectedLocation}
        selectedAgeGroup={selectedAgeGroup}
        onSelectAgeGroup={setSelectedAgeGroup}
        totalCount={allProfiles.length}
      />

      {/* 3. Intro Section */}
      <IntroSection />

      {/* 4. Video Player Section */}
      <VideoSection />

      {/* 5. Premier Escorts Service + 4 Badges */}
      <PremierSection />

      {/* 6. Call Ribbon Banner */}
      <CallRibbon />

      {/* 7. Discover Section */}
      <DiscoverSection />

      {/* 8. Profile Grid 1 */}
      <ProfileGrid
        profiles={chunk1}
        title={
          isFiltering
            ? `Exclusive Profiles in ${selectedLocation} (${filteredProfiles.length} available)`
            : "Browse Charming Chandigarh Call Girls - Select from Our Exclusive Profiles"
        }
        onSelectProfile={handleSelectProfile}
        onCallProfile={handleCall}
        onWhatsappProfile={handleWhatsapp}
      />

      {/* If not filtering, show complete full structure as in 11-page original document */}
      {!isFiltering && (
        <>
          {/* 9. Enchanting Chandigarh Service */}
          <EnchantingSection />

          {/* 10. Profile Grid 2 */}
          <ProfileGrid
            profiles={chunk2}
            onSelectProfile={handleSelectProfile}
            onCallProfile={handleCall}
            onWhatsappProfile={handleWhatsapp}
          />

          {/* 11. Seductive Services Section */}
          <SeductiveServicesSection />

          {/* 12. Profile Grid 3 */}
          <ProfileGrid
            profiles={chunk3}
            onSelectProfile={handleSelectProfile}
            onCallProfile={handleCall}
            onWhatsappProfile={handleWhatsapp}
          />

          {/* 13. Pricing & Fantasies Section */}
          <PricingAndFantasiesSection />

          {/* 14. Profile Grid 4 */}
          <ProfileGrid
            profiles={chunk4}
            onSelectProfile={handleSelectProfile}
            onCallProfile={handleCall}
            onWhatsappProfile={handleWhatsapp}
          />

          {/* 15. Hotel Booking Guide Section */}
          <HotelBookingGuideSection />

          {/* 16. Profile Grid 5 */}
          <ProfileGrid
            profiles={chunk5}
            onSelectProfile={handleSelectProfile}
            onCallProfile={handleCall}
            onWhatsappProfile={handleWhatsapp}
          />

          {/* 17. Independent & Safety & Reviews Section */}
          <IndependentAndSafetySection />
        </>
      )}

      {/* 18. Footer and Fixed Call Bar */}
      <Footer onOpenBooking={() => handleOpenBooking()} />

      {/* Interactive Modals */}
      <ProfileModal
        profile={activeProfile}
        onClose={() => setActiveProfile(null)}
        onBook={(profile) => handleOpenBooking(profile)}
      />

      <BookingModal
        isOpen={isBookingOpen}
        selectedProfile={bookingProfile}
        onClose={() => {
          setIsBookingOpen(false);
          setBookingProfile(null);
        }}
      />
    </div>
  );
}
