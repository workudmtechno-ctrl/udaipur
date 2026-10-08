import { Profile, Review } from '../types';

// High quality curated lifestyle, ethnic, and hotel portrait photography URLs
const portraitImages = [
  "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1548142813-c348350df52b?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1524638431109-93d95c968f03?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1534751516642-a171edd2521d?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1516726817505-f5ed825624d8?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1524502397800-2eeaad7c3fe5?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=600&q=80"
];

export const allProfiles: Profile[] = [
  // Grid 1 (Page 2)
  { id: "1", name: "Aarohi", age: 20, image: portraitImages[0], location: "Sector 17", category: "College Model", height: "5'5\"", languages: ["English", "Hindi", "Punjabi"], serviceType: "In-Call / Out-Call", rating: 4.9, reviewsCount: 48, bio: "Charming, elegant and vibrant companion offering warmth, beauty, and refined conversation." },
  { id: "2", name: "Bhoomi", age: 22, image: portraitImages[1], location: "Sector 22", category: "Elite Model", height: "5'6\"", languages: ["English", "Hindi"], serviceType: "In-Call / Out-Call", rating: 5.0, reviewsCount: 52, bio: "Friendly and sophisticated, perfect for luxury dinner dates and private relaxing evenings." },
  { id: "3", name: "Chandni", age: 19, image: portraitImages[2], location: "Sector 35", category: "VIP Escort", height: "5'4\"", languages: ["Hindi", "Punjabi"], serviceType: "In-Call / Out-Call", rating: 4.8, reviewsCount: 39, bio: "Radiant smile with enchanting personality to make every moment memorable and cheerful." },
  { id: "4", name: "Disha", age: 25, image: portraitImages[3], location: "Sector 43", category: "Celebrity Escort", height: "5'7\"", languages: ["English", "Hindi"], serviceType: "In-Call / Out-Call", rating: 4.9, reviewsCount: 64, bio: "High profile model with poise, intellect, and passionate companionship." },

  { id: "5", name: "Ekta", age: 27, image: portraitImages[4], location: "Manimajra", category: "Corporate Companion", height: "5'6\"", languages: ["English", "Hindi"], serviceType: "In-Call / Out-Call", rating: 4.9, reviewsCount: 41, bio: "Mature, alluring and poised for high-end events and hotel visits." },
  { id: "6", name: "Falak", age: 18, image: portraitImages[5], location: "Industrial Area", category: "College Model", height: "5'3\"", languages: ["Hindi", "Punjabi"], serviceType: "In-Call / Out-Call", rating: 5.0, reviewsCount: 33, bio: "Sweet, playful and lively companion ready to brighten your day." },
  { id: "7", name: "Gaurika", age: 23, image: portraitImages[6], location: "Sector 17", category: "Elite Model", height: "5'5\"", languages: ["English", "Hindi"], serviceType: "In-Call / Out-Call", rating: 4.8, reviewsCount: 57, bio: "Graceful and captivating conversationalist with irresistible charm." },
  { id: "8", name: "Harini", age: 29, image: portraitImages[7], location: "Sector 35", category: "VIP Escort", height: "5'6\"", languages: ["English", "Hindi", "Tamil"], serviceType: "In-Call / Out-Call", rating: 4.9, reviewsCount: 72, bio: "Experienced, passionate and discrete companion for unforgettable moments." },

  { id: "9", name: "Ipsita", age: 21, image: portraitImages[8], location: "Sector 22", category: "Fashion Model", height: "5'5\"", languages: ["English", "Hindi", "Bengali"], serviceType: "In-Call / Out-Call", rating: 4.9, reviewsCount: 29, bio: "Artistic, stylish, and engaging companion who loves fine dining and music." },
  { id: "10", name: "Jivika", age: 26, image: portraitImages[9], location: "Sector 43", category: "Elite Model", height: "5'7\"", languages: ["English", "Hindi"], serviceType: "In-Call / Out-Call", rating: 5.0, reviewsCount: 61, bio: "Stunning curves, sharp intellect, and exceptional attentiveness." },
  { id: "11", name: "Kashika", age: 18, image: portraitImages[10], location: "Industrial Area", category: "College Model", height: "5'4\"", languages: ["Hindi", "Punjabi"], serviceType: "In-Call / Out-Call", rating: 4.7, reviewsCount: 24, bio: "Bubbly spirit and youthful innocence designed to give you pure relaxation." },
  { id: "12", name: "Leena", age: 24, image: portraitImages[11], location: "Sector 17", category: "VIP Escort", height: "5'6\"", languages: ["English", "Hindi"], serviceType: "In-Call / Out-Call", rating: 4.9, reviewsCount: 45, bio: "Delightful blend of sensuality and warmth." },

  // Grid 2 (Page 3)
  { id: "13", name: "Mahika", age: 28, image: portraitImages[12], location: "Sector 35", category: "VIP Model", height: "5'6\"", languages: ["English", "Hindi"], serviceType: "In-Call / Out-Call", rating: 4.9, reviewsCount: 55, bio: "Sensational presence and passionate energy." },
  { id: "14", name: "Nandini", age: 19, image: portraitImages[13], location: "Sector 22", category: "College Model", height: "5'4\"", languages: ["Hindi", "Punjabi"], serviceType: "In-Call / Out-Call", rating: 4.8, reviewsCount: 38, bio: "Incredibly sweet and affectionate with authentic girl-next-door charm." },
  { id: "15", name: "Ojal", age: 23, image: portraitImages[14], location: "Manimajra", category: "Elite Model", height: "5'5\"", languages: ["English", "Hindi"], serviceType: "In-Call / Out-Call", rating: 4.9, reviewsCount: 43, bio: "Captivating look and tender demeanor." },
  { id: "16", name: "Poonam", age: 27, image: portraitImages[15], location: "Sector 43", category: "Corporate Companion", height: "5'6\"", languages: ["English", "Hindi"], serviceType: "In-Call / Out-Call", rating: 5.0, reviewsCount: 67, bio: "Sophisticated and glamorous with supreme discretion." },

  { id: "17", name: "Riddhi", age: 20, image: portraitImages[16], location: "Sector 17", category: "College Model", height: "5'4\"", languages: ["Hindi", "Punjabi"], serviceType: "In-Call / Out-Call", rating: 4.8, reviewsCount: 31, bio: "Energetic and spontaneous partner for fun evenings." },
  { id: "18", name: "Sanya", age: 26, image: portraitImages[17], location: "Sector 35", category: "Elite Model", height: "5'7\"", languages: ["English", "Hindi"], serviceType: "In-Call / Out-Call", rating: 4.9, reviewsCount: 59, bio: "Striking beauty with unmatched charisma." },
  { id: "19", name: "Tanvi", age: 18, image: portraitImages[18], location: "Sector 22", category: "College Model", height: "5'3\"", languages: ["Hindi", "Punjabi"], serviceType: "In-Call / Out-Call", rating: 4.7, reviewsCount: 22, bio: "Youthful, radiant and cheerful presence." },
  { id: "20", name: "Urvi", age: 29, image: portraitImages[19], location: "Industrial Area", category: "VIP Escort", height: "5'6\"", languages: ["English", "Hindi"], serviceType: "In-Call / Out-Call", rating: 5.0, reviewsCount: 78, bio: "Sensual, highly accommodating and experienced companion." },

  { id: "21", name: "Vidya", age: 21, image: portraitImages[2], location: "Sector 17", category: "Fashion Model", height: "5'5\"", languages: ["English", "Hindi"], serviceType: "In-Call / Out-Call", rating: 4.9, reviewsCount: 36, bio: "Traditional elegance meets modern cosmopolitan outlook." },
  { id: "22", name: "Yamini", age: 24, image: portraitImages[5], location: "Sector 35", category: "Elite Model", height: "5'6\"", languages: ["Hindi", "Punjabi"], serviceType: "In-Call / Out-Call", rating: 4.8, reviewsCount: 42, bio: "Alluring presence with magnetic charm." },
  { id: "23", name: "Zarina", age: 28, image: portraitImages[8], location: "Sector 43", category: "VIP Escort", height: "5'7\"", languages: ["English", "Hindi", "Urdu"], serviceType: "In-Call / Out-Call", rating: 5.0, reviewsCount: 83, bio: "Exquisite elegance and royal hospitality." },
  { id: "24", name: "Aarushi", age: 19, image: portraitImages[11], location: "Sector 22", category: "College Model", height: "5'4\"", languages: ["Hindi", "English"], serviceType: "In-Call / Out-Call", rating: 4.8, reviewsCount: 35, bio: "Sweet, affectionate and polite companionship." },

  { id: "25", name: "Bhavna", age: 23, image: portraitImages[14], location: "Manimajra", category: "Elite Model", height: "5'5\"", languages: ["Hindi", "Punjabi"], serviceType: "In-Call / Out-Call", rating: 4.9, reviewsCount: 47, bio: "Enchanting eyes and joyful demeanor." },
  { id: "26", name: "Chhavi", age: 27, image: portraitImages[17], location: "Sector 17", category: "Corporate Companion", height: "5'6\"", languages: ["English", "Hindi"], serviceType: "In-Call / Out-Call", rating: 4.9, reviewsCount: 51, bio: "Confident, cultured and pleasant conversationalist." },
  { id: "27", name: "Deepali", age: 20, image: portraitImages[1], location: "Sector 35", category: "College Model", height: "5'4\"", languages: ["Hindi", "Punjabi"], serviceType: "In-Call / Out-Call", rating: 4.8, reviewsCount: 33, bio: "Playful and attentive with a radiant glow." },
  { id: "28", name: "Eshwari", age: 26, image: portraitImages[4], location: "Industrial Area", category: "VIP Escort", height: "5'6\"", languages: ["English", "Hindi"], serviceType: "In-Call / Out-Call", rating: 5.0, reviewsCount: 65, bio: "Passionate and sophisticated companion." },

  { id: "29", name: "Fiza", age: 18, image: portraitImages[7], location: "Sector 22", category: "College Model", height: "5'3\"", languages: ["Hindi", "Urdu"], serviceType: "In-Call / Out-Call", rating: 4.8, reviewsCount: 27, bio: "Graceful and delicate with a very loving touch." },
  { id: "30", name: "Gauri", age: 25, image: portraitImages[10], location: "Sector 43", category: "Elite Model", height: "5'6\"", languages: ["English", "Hindi"], serviceType: "In-Call / Out-Call", rating: 4.9, reviewsCount: 58, bio: "Stunning features and warm hospitality." },
  { id: "31", name: "Aaradhya", age: 21, image: portraitImages[13], location: "Sector 17", category: "Fashion Model", height: "5'5\"", languages: ["English", "Hindi"], serviceType: "In-Call / Out-Call", rating: 4.9, reviewsCount: 44, bio: "Charming personality with keen interest in travel & dining." },
  { id: "32", name: "Bhavika", age: 19, image: portraitImages[16], location: "Sector 35", category: "College Model", height: "5'4\"", languages: ["Hindi", "Punjabi"], serviceType: "In-Call / Out-Call", rating: 4.7, reviewsCount: 30, bio: "Enthusiastic and eager to make your time unforgettable." },

  { id: "33", name: "Charvi", age: 23, image: portraitImages[19], location: "Manimajra", category: "Elite Model", height: "5'5\"", languages: ["English", "Hindi"], serviceType: "In-Call / Out-Call", rating: 4.9, reviewsCount: 49, bio: "Expressive and attentive to every detail." },
  { id: "34", name: "Divya", age: 25, image: portraitImages[3], location: "Sector 22", category: "VIP Escort", height: "5'6\"", languages: ["English", "Hindi", "Punjabi"], serviceType: "In-Call / Out-Call", rating: 5.0, reviewsCount: 71, bio: "Sensational companion for luxury stays." },
  { id: "35", name: "Eshika", age: 18, image: portraitImages[6], location: "Industrial Area", category: "College Model", height: "5'3\"", languages: ["Hindi", "Punjabi"], serviceType: "In-Call / Out-Call", rating: 4.8, reviewsCount: 26, bio: "Fresh, spirited, and very affectionate." },
  { id: "36", name: "Falguni", age: 22, image: portraitImages[9], location: "Sector 17", category: "Elite Model", height: "5'5\"", languages: ["English", "Hindi"], serviceType: "In-Call / Out-Call", rating: 4.9, reviewsCount: 39, bio: "Warm heart and stunning beauty." },

  // Grid 3 (Page 4)
  { id: "37", name: "Garima", age: 27, image: portraitImages[12], location: "Sector 35", category: "Corporate Companion", height: "5'6\"", languages: ["English", "Hindi"], serviceType: "In-Call / Out-Call", rating: 4.9, reviewsCount: 63, bio: "Poised and charismatic for fine society and private moments." },
  { id: "38", name: "Hiral", age: 20, image: portraitImages[15], location: "Sector 43", category: "College Model", height: "5'4\"", languages: ["Hindi", "Gujarati"], serviceType: "In-Call / Out-Call", rating: 4.8, reviewsCount: 34, bio: "Pleasant, cheerful, and full of positive vibes." },
  { id: "39", name: "Ishita", age: 24, image: portraitImages[18], location: "Sector 22", category: "Elite Model", height: "5'6\"", languages: ["English", "Hindi"], serviceType: "In-Call / Out-Call", rating: 5.0, reviewsCount: 52, bio: "Captivating and graceful companion." },
  { id: "40", name: "Jhanvi", age: 29, image: portraitImages[1], location: "Sector 17", category: "VIP Escort", height: "5'7\"", languages: ["English", "Hindi"], serviceType: "In-Call / Out-Call", rating: 4.9, reviewsCount: 77, bio: "Ultra-luxurious companion with elite taste." },

  { id: "41", name: "Kavya", age: 18, image: portraitImages[4], location: "Manimajra", category: "College Model", height: "5'3\"", languages: ["Hindi", "Punjabi"], serviceType: "In-Call / Out-Call", rating: 4.7, reviewsCount: 28, bio: "Innocent charm and affectionate personality." },
  { id: "42", name: "Lavanya", age: 26, image: portraitImages[7], location: "Industrial Area", category: "VIP Escort", height: "5'6\"", languages: ["English", "Hindi"], serviceType: "In-Call / Out-Call", rating: 5.0, reviewsCount: 68, bio: "Mesmerizing beauty with genuine warmth." },
  { id: "43", name: "Mahi", age: 22, image: portraitImages[10], location: "Sector 35", category: "Elite Model", height: "5'5\"", languages: ["Hindi", "Punjabi"], serviceType: "In-Call / Out-Call", rating: 4.9, reviewsCount: 46, bio: "Fun-loving, sweet and attentive partner." },
  { id: "44", name: "Niharika", age: 27, image: portraitImages[13], location: "Sector 43", category: "Corporate Companion", height: "5'6\"", languages: ["English", "Hindi"], serviceType: "In-Call / Out-Call", rating: 4.9, reviewsCount: 59, bio: "Sophisticated and well-spoken." },

  { id: "45", name: "Ojasvi", age: 19, image: portraitImages[16], location: "Sector 22", category: "College Model", height: "5'4\"", languages: ["Hindi", "English"], serviceType: "In-Call / Out-Call", rating: 4.8, reviewsCount: 32, bio: "Energetic and lively young companion." },
  { id: "46", name: "Pranavi", age: 24, image: portraitImages[19], location: "Sector 17", category: "Elite Model", height: "5'6\"", languages: ["English", "Hindi"], serviceType: "In-Call / Out-Call", rating: 4.9, reviewsCount: 51, bio: "Sensual, charming, and highly engaging." },
  { id: "47", name: "Riya", age: 20, image: portraitImages[2], location: "Sector 35", category: "College Model", height: "5'4\"", languages: ["Hindi", "Punjabi"], serviceType: "In-Call / Out-Call", rating: 4.8, reviewsCount: 37, bio: "Delightful company with an inviting smile." },
  { id: "48", name: "Saumya", age: 28, image: portraitImages[5], location: "Industrial Area", category: "VIP Escort", height: "5'6\"", languages: ["English", "Hindi"], serviceType: "In-Call / Out-Call", rating: 5.0, reviewsCount: 81, bio: "Glamorous and attentive companion." },

  { id: "49", name: "Tara", age: 21, image: portraitImages[8], location: "Manimajra", category: "Fashion Model", height: "5'5\"", languages: ["English", "Hindi"], serviceType: "In-Call / Out-Call", rating: 4.9, reviewsCount: 40, bio: "Stylish and passionate conversationalist." },
  { id: "50", name: "Vanya", age: 25, image: portraitImages[11], location: "Sector 43", category: "Elite Model", height: "5'6\"", languages: ["English", "Hindi"], serviceType: "In-Call / Out-Call", rating: 4.9, reviewsCount: 53, bio: "Graceful elegance and discrete service." },
  { id: "51", name: "Aditi", age: 19, image: portraitImages[14], location: "Sector 17", category: "College Model", height: "5'4\"", languages: ["Hindi", "Punjabi"], serviceType: "In-Call / Out-Call", rating: 4.7, reviewsCount: 29, bio: "Youthful sparkle and warm connection." },
  { id: "52", name: "Bhavya", age: 24, image: portraitImages[17], location: "Sector 22", category: "VIP Escort", height: "5'6\"", languages: ["English", "Hindi"], serviceType: "In-Call / Out-Call", rating: 5.0, reviewsCount: 62, bio: "Sensational beauty with captivating allure." },

  { id: "53", name: "Chitra", age: 22, image: portraitImages[0], location: "Sector 35", category: "Elite Model", height: "5'5\"", languages: ["Hindi", "Punjabi"], serviceType: "In-Call / Out-Call", rating: 4.8, reviewsCount: 45, bio: "Charming and easy-going nature." },
  { id: "54", name: "Diya", age: 27, image: portraitImages[3], location: "Industrial Area", category: "Corporate Companion", height: "5'6\"", languages: ["English", "Hindi"], serviceType: "In-Call / Out-Call", rating: 4.9, reviewsCount: 57, bio: "High profile presence and discrete meetings." },
  { id: "55", name: "Esha", age: 20, image: portraitImages[6], location: "Manimajra", category: "College Model", height: "5'4\"", languages: ["Hindi", "English"], serviceType: "In-Call / Out-Call", rating: 4.8, reviewsCount: 31, bio: "Sweet, caring and very attentive." },
  { id: "56", name: "Fariha", age: 26, image: portraitImages[9], location: "Sector 17", category: "VIP Escort", height: "5'7\"", languages: ["English", "Hindi", "Urdu"], serviceType: "In-Call / Out-Call", rating: 5.0, reviewsCount: 75, bio: "Exotic and enchanting luxury companion." },

  // Grid 4 (Page 5)
  { id: "57", name: "Gehna", age: 23, image: portraitImages[12], location: "Sector 22", category: "Elite Model", height: "5'5\"", languages: ["English", "Hindi"], serviceType: "In-Call / Out-Call", rating: 4.9, reviewsCount: 48, bio: "Alluring and charming personality." },
  { id: "58", name: "Hina", age: 28, image: portraitImages[15], location: "Sector 35", category: "VIP Escort", height: "5'6\"", languages: ["English", "Hindi"], serviceType: "In-Call / Out-Call", rating: 5.0, reviewsCount: 84, bio: "Passionate and experienced luxury model." },
  { id: "59", name: "Inaya", age: 18, image: portraitImages[18], location: "Sector 43", category: "College Model", height: "5'3\"", languages: ["Hindi", "Punjabi"], serviceType: "In-Call / Out-Call", rating: 4.8, reviewsCount: 25, bio: "Fresh face with delightful sweet attitude." },
  { id: "60", name: "Jiya", age: 25, image: portraitImages[1], location: "Industrial Area", category: "Elite Model", height: "5'6\"", languages: ["English", "Hindi"], serviceType: "In-Call / Out-Call", rating: 4.9, reviewsCount: 56, bio: "Captivating and ready for wonderful evenings." },

  { id: "61", name: "Kalyani", age: 21, image: portraitImages[4], location: "Sector 17", category: "Fashion Model", height: "5'5\"", languages: ["English", "Hindi"], serviceType: "In-Call / Out-Call", rating: 4.9, reviewsCount: 38, bio: "Elegant and traditional beauty." },
  { id: "62", name: "Lakshmi", age: 29, image: portraitImages[7], location: "Sector 22", category: "VIP Escort", height: "5'6\"", languages: ["English", "Hindi"], serviceType: "In-Call / Out-Call", rating: 5.0, reviewsCount: 79, bio: "Mature, alluring and deeply attentive." },
  { id: "63", name: "Manvi", age: 19, image: portraitImages[10], location: "Sector 35", category: "College Model", height: "5'4\"", languages: ["Hindi", "Punjabi"], serviceType: "In-Call / Out-Call", rating: 4.7, reviewsCount: 28, bio: "Affectionate and lively companion." },
  { id: "64", name: "Nisha", age: 24, image: portraitImages[13], location: "Manimajra", category: "Elite Model", height: "5'6\"", languages: ["English", "Hindi"], serviceType: "In-Call / Out-Call", rating: 4.9, reviewsCount: 52, bio: "Sophisticated and warm demeanor." },

  { id: "65", name: "Pari", age: 20, image: portraitImages[16], location: "Sector 43", category: "College Model", height: "5'4\"", languages: ["Hindi", "Punjabi"], serviceType: "In-Call / Out-Call", rating: 4.8, reviewsCount: 35, bio: "Fairy-tale sweetness with modern elegance." },
  { id: "66", name: "Ragini", age: 26, image: portraitImages[19], location: "Industrial Area", category: "Corporate Companion", height: "5'6\"", languages: ["English", "Hindi"], serviceType: "In-Call / Out-Call", rating: 4.9, reviewsCount: 60, bio: "Chic, eloquent, and confidential." },
  { id: "67", name: "Saanvi", age: 22, image: portraitImages[2], location: "Sector 17", category: "Elite Model", height: "5'5\"", languages: ["English", "Hindi"], serviceType: "In-Call / Out-Call", rating: 4.9, reviewsCount: 44, bio: "Graceful and sweet-tempered companion." },
  { id: "68", name: "Tanisha", age: 27, image: portraitImages[5], location: "Sector 22", category: "VIP Escort", height: "5'7\"", languages: ["English", "Hindi"], serviceType: "In-Call / Out-Call", rating: 5.0, reviewsCount: 73, bio: "Breathtaking presence and sensuality." },

  { id: "69", name: "Uma", age: 19, image: portraitImages[8], location: "Sector 35", category: "College Model", height: "5'4\"", languages: ["Hindi", "Punjabi"], serviceType: "In-Call / Out-Call", rating: 4.7, reviewsCount: 27, bio: "Natural beauty and relaxing conversation." },
  { id: "70", name: "Veda", age: 25, image: portraitImages[11], location: "Manimajra", category: "Elite Model", height: "5'6\"", languages: ["English", "Hindi"], serviceType: "In-Call / Out-Call", rating: 4.9, reviewsCount: 50, bio: "Intelligent and passionate companion." },
  { id: "71", name: "Zoya", age: 22, image: portraitImages[14], location: "Sector 43", category: "Fashion Model", height: "5'5\"", languages: ["English", "Hindi", "Urdu"], serviceType: "In-Call / Out-Call", rating: 4.9, reviewsCount: 46, bio: "Stunning eyes and vibrant energy." },
  { id: "72", name: "Aanya", age: 21, image: portraitImages[17], location: "Industrial Area", category: "College Model", height: "5'4\"", languages: ["Hindi", "English"], serviceType: "In-Call / Out-Call", rating: 4.8, reviewsCount: 36, bio: "Cheerful and charming personality." },

  { id: "73", name: "Bhumika", age: 19, image: portraitImages[0], location: "Sector 17", category: "College Model", height: "5'4\"", languages: ["Hindi", "Punjabi"], serviceType: "In-Call / Out-Call", rating: 4.8, reviewsCount: 30, bio: "Warm, gentle and delightful partner." },
  { id: "74", name: "Chetna", age: 27, image: portraitImages[3], location: "Sector 22", category: "Corporate Companion", height: "5'6\"", languages: ["English", "Hindi"], serviceType: "In-Call / Out-Call", rating: 4.9, reviewsCount: 62, bio: "Refined, mature and highly discrete." },
  { id: "75", name: "Diksha", age: 22, image: portraitImages[6], location: "Sector 35", category: "Elite Model", height: "5'5\"", languages: ["Hindi", "Punjabi"], serviceType: "In-Call / Out-Call", rating: 4.8, reviewsCount: 41, bio: "Charming companion for special evenings." },
  { id: "76", name: "Eshani", age: 25, image: portraitImages[9], location: "Sector 43", category: "VIP Escort", height: "5'6\"", languages: ["English", "Hindi"], serviceType: "In-Call / Out-Call", rating: 5.0, reviewsCount: 69, bio: "Exquisite beauty and passionate personality." },

  // Grid 5 (Page 6)
  { id: "77", name: "Gauri", age: 25, image: portraitImages[12], location: "Industrial Area", category: "Elite Model", height: "5'6\"", languages: ["English", "Hindi"], serviceType: "In-Call / Out-Call", rating: 4.9, reviewsCount: 54, bio: "Magnetic charm and warm company." },
  { id: "78", name: "Hansa", age: 18, image: portraitImages[15], location: "Manimajra", category: "College Model", height: "5'3\"", languages: ["Hindi", "Punjabi"], serviceType: "In-Call / Out-Call", rating: 4.7, reviewsCount: 23, bio: "Sweet, innocent and friendly companion." },
  { id: "79", name: "Ira", age: 26, image: portraitImages[18], location: "Sector 17", category: "VIP Escort", height: "5'6\"", languages: ["English", "Hindi"], serviceType: "In-Call / Out-Call", rating: 5.0, reviewsCount: 74, bio: "Sensual and captivating company." },
  { id: "80", name: "Jasmine", age: 23, image: portraitImages[1], location: "Sector 22", category: "Elite Model", height: "5'5\"", languages: ["English", "Hindi"], serviceType: "In-Call / Out-Call", rating: 4.9, reviewsCount: 47, bio: "Fragrant charm and radiant presence." },

  { id: "81", name: "Kiran", age: 21, image: portraitImages[4], location: "Sector 35", category: "College Model", height: "5'5\"", languages: ["Hindi", "Punjabi"], serviceType: "In-Call / Out-Call", rating: 4.8, reviewsCount: 35, bio: "Bright ray of sunshine to lighten your stress." },
  { id: "82", name: "Lila", age: 24, image: portraitImages[7], location: "Sector 43", category: "Elite Model", height: "5'6\"", languages: ["English", "Hindi"], serviceType: "In-Call / Out-Call", rating: 4.9, reviewsCount: 51, bio: "Playful, alluring and tender partner." },
  { id: "83", name: "Mira", age: 19, image: portraitImages[10], location: "Industrial Area", category: "College Model", height: "5'4\"", languages: ["Hindi", "Punjabi"], serviceType: "In-Call / Out-Call", rating: 4.8, reviewsCount: 29, bio: "Soft spoken and very romantic." },
  { id: "84", name: "Nandita", age: 27, image: portraitImages[13], location: "Manimajra", category: "Corporate Companion", height: "5'6\"", languages: ["English", "Hindi"], serviceType: "In-Call / Out-Call", rating: 5.0, reviewsCount: 66, bio: "Cultured, elegant and supportive." },

  { id: "85", name: "Oishi", age: 22, image: portraitImages[16], location: "Sector 17", category: "Fashion Model", height: "5'5\"", languages: ["English", "Hindi", "Bengali"], serviceType: "In-Call / Out-Call", rating: 4.9, reviewsCount: 42, bio: "Chic style and alluring demeanor." },
  { id: "86", name: "Preeti", age: 20, image: portraitImages[19], location: "Sector 22", category: "College Model", height: "5'4\"", languages: ["Hindi", "Punjabi"], serviceType: "In-Call / Out-Call", rating: 4.8, reviewsCount: 33, bio: "Affectionate and attentive companion." },
  { id: "87", name: "Rhea", age: 25, image: portraitImages[2], location: "Sector 35", category: "Elite Model", height: "5'6\"", languages: ["English", "Hindi"], serviceType: "In-Call / Out-Call", rating: 4.9, reviewsCount: 58, bio: "Stunning curves and glamorous charisma." },
  { id: "88", name: "Sia", age: 18, image: portraitImages[5], location: "Sector 43", category: "College Model", height: "5'3\"", languages: ["Hindi", "English"], serviceType: "In-Call / Out-Call", rating: 4.7, reviewsCount: 24, bio: "Youthful vibrancy and loving care." },

  { id: "89", name: "Tina", age: 26, image: portraitImages[8], location: "Industrial Area", category: "VIP Escort", height: "5'6\"", languages: ["English", "Hindi"], serviceType: "In-Call / Out-Call", rating: 5.0, reviewsCount: 71, bio: "Passionate, fun and discreet companion." },
  { id: "90", name: "Vani", age: 23, image: portraitImages[11], location: "Manimajra", category: "Elite Model", height: "5'5\"", languages: ["Hindi", "Punjabi"], serviceType: "In-Call / Out-Call", rating: 4.9, reviewsCount: 45, bio: "Melodious voice and warm touch." },
  { id: "91", name: "Zara", age: 21, image: portraitImages[14], location: "Sector 17", category: "Fashion Model", height: "5'5\"", languages: ["English", "Hindi", "Urdu"], serviceType: "In-Call / Out-Call", rating: 4.9, reviewsCount: 49, bio: "Trendy fashionista with sensual flair." },
  { id: "92", name: "Amrita", age: 24, image: portraitImages[17], location: "Sector 22", category: "Elite Model", height: "5'6\"", languages: ["English", "Hindi"], serviceType: "In-Call / Out-Call", rating: 4.9, reviewsCount: 55, bio: "Sweet, accommodating and lovely company." },

  { id: "93", name: "Bhawna", age: 19, image: portraitImages[0], location: "Sector 35", category: "College Model", height: "5'4\"", languages: ["Hindi", "Punjabi"], serviceType: "In-Call / Out-Call", rating: 4.8, reviewsCount: 31, bio: "Delightful warmth and playful banter." },
  { id: "94", name: "Chandrika", age: 27, image: portraitImages[3], location: "Sector 43", category: "Corporate Companion", height: "5'6\"", languages: ["English", "Hindi"], serviceType: "In-Call / Out-Call", rating: 5.0, reviewsCount: 68, bio: "Poised beauty for executive dinner dates." },
  { id: "95", name: "Deeksha", age: 26, image: portraitImages[6], location: "Industrial Area", category: "VIP Escort", height: "5'6\"", languages: ["English", "Hindi"], serviceType: "In-Call / Out-Call", rating: 4.9, reviewsCount: 63, bio: "Irresistible allure and heartfelt attentiveness." },
  { id: "96", name: "Eshita", age: 20, image: portraitImages[9], location: "Manimajra", category: "College Model", height: "5'4\"", languages: ["Hindi", "Punjabi"], serviceType: "In-Call / Out-Call", rating: 4.8, reviewsCount: 34, bio: "Cheerful, lively and eager to please." },

  { id: "97", name: "Fiza", age: 25, image: portraitImages[12], location: "Sector 17", category: "VIP Escort", height: "5'6\"", languages: ["English", "Hindi", "Urdu"], serviceType: "In-Call / Out-Call", rating: 5.0, reviewsCount: 76, bio: "Sultry look with exceptional hospitality." },
  { id: "98", name: "Gina", age: 18, image: portraitImages[15], location: "Sector 22", category: "College Model", height: "5'3\"", languages: ["Hindi", "English"], serviceType: "In-Call / Out-Call", rating: 4.7, reviewsCount: 26, bio: "Playful and very affectionate company." },
  { id: "99", name: "Hema", age: 26, image: portraitImages[18], location: "Sector 35", category: "Elite Model", height: "5'6\"", languages: ["English", "Hindi"], serviceType: "In-Call / Out-Call", rating: 4.9, reviewsCount: 57, bio: "Classic Indian beauty with soothing presence." },
  { id: "100", name: "Isha", age: 23, image: portraitImages[1], location: "Sector 43", category: "Elite Model", height: "5'5\"", languages: ["Hindi", "Punjabi"], serviceType: "In-Call / Out-Call", rating: 4.9, reviewsCount: 48, bio: "Enchanting charm and total dedication." }
];

export const clientReviews: Review[] = [
  {
    author: "Arjun",
    role: "Business Traveler",
    text: "The escort was stunning and professional, turning my trip into a night of passion I'll never forget.",
    rating: 5
  },
  {
    author: "Ravi",
    role: "Local Resident",
    text: "Everything was seamless, from booking to the encounter. My escort was charming and made the evening unforgettable.",
    rating: 5
  },
  {
    author: "Kunal",
    role: "Visitor",
    text: "Affordable yet luxurious—the service exceeded my expectations. I'm already planning my next visit.",
    rating: 5
  },
  {
    author: "Vikram",
    role: "Event Attendee",
    text: "My escort was the perfect date for a corporate event. Her elegance and wit made me the envy of the room.",
    rating: 5
  }
];

export const locationsList = [
  "Chandigarh",
  "Sector 17",
  "Sector 22",
  "Sector 35",
  "Sector 43",
  "Manimajra",
  "Industrial Area Phase 1"
];
