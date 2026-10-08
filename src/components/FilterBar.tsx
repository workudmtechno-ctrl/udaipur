import React from 'react';
import { Filter, MapPin } from 'lucide-react';
import { locationsList } from '../data/profiles';

interface FilterBarProps {
  selectedLocation: string;
  onSelectLocation: (loc: string) => void;
  selectedAgeGroup: string;
  onSelectAgeGroup: (age: string) => void;
  totalCount: number;
}

export const FilterBar: React.FC<FilterBarProps> = ({
  selectedLocation,
  onSelectLocation,
  selectedAgeGroup,
  onSelectAgeGroup,
  totalCount
}) => {
  const ageOptions = ["All Ages", "18-20 yrs", "21-24 yrs", "25+ yrs"];

  return (
    <div className="w-full bg-white border-y border-red-200/80 py-3 px-4 sm:px-6 shadow-xs">
      <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-3">
        {/* Location Chips */}
        <div className="flex items-center gap-1.5 overflow-x-auto py-1 scrollbar-none max-w-full">
          <span className="text-xs font-bold text-gray-500 flex items-center gap-1 mr-1">
            <MapPin className="w-3.5 h-3.5 text-[#e61924]" /> Sector:
          </span>
          <button
            onClick={() => onSelectLocation("All")}
            className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
              selectedLocation === "All"
                ? "bg-[#e61924] text-white shadow-xs"
                : "bg-red-50/70 text-gray-700 hover:bg-red-100 border border-red-100"
            }`}
          >
            All Areas ({totalCount})
          </button>
          {locationsList.map((loc) => (
            <button
              key={loc}
              onClick={() => onSelectLocation(loc)}
              className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                selectedLocation === loc
                  ? "bg-[#e61924] text-white shadow-xs"
                  : "bg-red-50/70 text-gray-700 hover:bg-red-100 border border-red-100"
              }`}
            >
              {loc}
            </button>
          ))}
        </div>

        {/* Age Filter */}
        <div className="flex items-center gap-1 text-xs">
          <span className="text-gray-500 font-semibold mr-1">Age:</span>
          {ageOptions.map((opt) => (
            <button
              key={opt}
              onClick={() => onSelectAgeGroup(opt)}
              className={`px-2.5 py-1 rounded-md font-medium transition-all ${
                selectedAgeGroup === opt
                  ? "bg-[#e61924] text-white shadow-xs"
                  : "text-gray-600 hover:text-[#e61924] hover:bg-red-50"
              }`}
            >
              {opt}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
