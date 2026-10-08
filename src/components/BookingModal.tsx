import React, { useState } from 'react';
import { X, CheckCircle2, MessageCircle, Phone } from 'lucide-react';
import { Profile } from '../types';
import { locationsList } from '../data/profiles';

interface BookingModalProps {
  isOpen: boolean;
  selectedProfile: Profile | null;
  onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  selectedProfile,
  onClose
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState(selectedProfile?.location || 'Sector 17');
  const [serviceType, setServiceType] = useState('Out-Call (Hotel / Residence)');
  const [date, setDate] = useState('Today');
  const [time, setTime] = useState('Tonight (ASAP)');
  const [submitted, setSubmitted] = useState(false);
  const [waUrl, setWaUrl] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = encodeURIComponent(
      `Hello Locantoz Escort Service, I would like to book an appointment:\n- Companion: ${
        selectedProfile ? selectedProfile.name : 'Any Available VIP'
      }${selectedProfile ? ` (Age: ${selectedProfile.age})` : ''}\n- Client Name: ${
        name || 'Private Client'
      }\n- Phone: ${phone || 'Not provided'}\n- Location: ${location}\n- Type: ${serviceType}\n- Date/Time: ${date}, ${time}`
    );
    
    const targetUrl = `https://wa.me/917696947516?text=${message}`;
    setWaUrl(targetUrl);
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-lg bg-[#141216] border border-red-600/40 rounded-2xl p-6 shadow-2xl text-white max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-white/10 hover:bg-[#e61924] text-white flex items-center justify-center transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        <h3 className="font-sans font-black text-2xl sm:text-3xl text-[#e61924] mb-1 uppercase tracking-wide">
          Locantoz Booking Desk
        </h3>
        <p className="text-xs text-zinc-300 mb-5">
          {selectedProfile 
            ? `Reserve your private rendezvous with ${selectedProfile.name} (${selectedProfile.age} yrs)`
            : "Reserve a verified escort in Chandigarh 24/7 with 100% discretion"}
        </p>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h4 className="text-xl font-bold text-white">Booking Request Initiated!</h4>
            <p className="text-xs text-zinc-300 max-w-sm mx-auto">
              Connecting you directly to our 24/7 WhatsApp dispatch desk for instant room dispatch &amp; verification.
            </p>
            <div className="pt-2 flex flex-col gap-2">
              <a
                href={waUrl || "https://wa.me/917696947516"}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] hover:bg-[#20ba59] text-white py-3 rounded-xl font-bold text-xs shadow flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-current" /> Open WhatsApp Chat (7696947516)
              </a>
              <a
                href="tel:7696947516"
                className="bg-[#e61924] hover:bg-[#c8141e] text-white py-2.5 rounded-xl font-bold text-xs shadow flex items-center justify-center gap-2 cursor-pointer"
              >
                <Phone className="w-4 h-4 fill-current" /> Call Dispatch Desk (7696947516)
              </a>
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="bg-zinc-800 hover:bg-zinc-700 text-white py-2 rounded-xl text-xs cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 text-xs">
            {/* Preferred Location */}
            <div>
              <label className="block text-zinc-300 font-semibold mb-1">Location / Sector</label>
              <select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-3 py-2.5 text-white focus:outline-none focus:border-[#e61924]"
              >
                {locationsList.map((loc) => (
                  <option key={loc} value={loc}>{loc}</option>
                ))}
                <option value="Hotel in Chandigarh">Hotel in Chandigarh (Out-call)</option>
                <option value="Private Apartment / In-Call">Private In-Call Studio</option>
              </select>
            </div>

            {/* Service Type */}
            <div>
              <label className="block text-zinc-300 font-semibold mb-1">Service Preference</label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setServiceType('Out-Call (Hotel / Home)')}
                  className={`py-2 px-3 rounded-xl border text-center font-medium transition-all cursor-pointer ${
                    serviceType.includes('Out-Call')
                      ? 'bg-[#e61924] border-red-500 text-white font-bold'
                      : 'bg-zinc-900 border-zinc-800 text-zinc-400'
                  }`}
                >
                  Out-Call (Hotel/Home)
                </button>
                <button
                  type="button"
                  onClick={() => setServiceType('In-Call (Discreet Apartment)')}
                  className={`py-2 px-3 rounded-xl border text-center font-medium transition-all cursor-pointer ${
                    serviceType.includes('In-Call')
                      ? 'bg-[#e61924] border-red-500 text-white font-bold'
                      : 'bg-zinc-900 border-zinc-800 text-zinc-400'
                  }`}
                >
                  In-Call (Discreet Place)
                </button>
              </div>
            </div>

            {/* Time / Timing */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-zinc-300 font-semibold mb-1">Date</label>
                <input
                  type="text"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  placeholder="e.g. Today / Tonight"
                  className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-[#e61924]"
                />
              </div>
              <div>
                <label className="block text-zinc-300 font-semibold mb-1">Time</label>
                <input
                  type="text"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  placeholder="e.g. 9:00 PM / ASAP"
                  className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-[#e61924]"
                />
              </div>
            </div>

            {/* Client Name & Phone */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-zinc-300 font-semibold mb-1">Your Name / Alias</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Optional"
                  className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-[#e61924]"
                />
              </div>
              <div>
                <label className="block text-zinc-300 font-semibold mb-1">Your Contact No.</label>
                <input
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="e.g. 9876543210"
                  className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-[#e61924]"
                />
              </div>
            </div>

            <div className="bg-zinc-900/90 p-3 rounded-xl border border-red-500/20 text-[11px] text-zinc-300 space-y-1">
              <p>🔒 <strong>100% Discretion:</strong> Cash on delivery accepted. No advance deposit required.</p>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#25D366] hover:bg-[#20ba59] text-white py-3 rounded-xl font-bold text-sm shadow-lg hover:shadow-green-500/30 flex items-center justify-center gap-2 transition-all cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Confirm &amp; Chat on WhatsApp (24/7)</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
