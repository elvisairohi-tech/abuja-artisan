export const ABUJA_AREAS = [
  "All Areas",
  "Wuse II",
  "Gwarinpa",
  "Maitama",
  "Apo",
  "Lugbe",
  "Jabi",
  "Utako",
  "Kubwa",
  "Asokoro",
  "Central Area",
  "Lokogoma",
  "Mpape",
  "Dawaki",
  "Life Camp",
  "Guzape",
  "Kado",
  "Galadimawa"
];

export const TRADES = [
  "All Trades",
  "Plumber",
  "Electrician",
  "Painter",
  "Tailor",
  "Carpenter",
  "AC Technician",
  "Welder",
  "POP Installer",
  "Tiler",
  "Auto Mechanic",
  "Generator Technician"
];

// Direct Pexels image references featuring real Black African men
const BLACK_MEN_PHOTOS = [
  "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&h=400&w=400&fit=crop",
  "https://images.pexels.com/photos/1212902/pexels-photo-1212902.jpeg?auto=compress&cs=tinysrgb&h=400&w=400&fit=crop",
  "https://images.pexels.com/photos/1121796/pexels-photo-1121796.jpeg?auto=compress&cs=tinysrgb&h=400&w=400&fit=crop",
  "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&h=400&w=400&fit=crop",
  "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&h=400&w=400&fit=crop",
  "https://images.pexels.com/photos/837358/pexels-photo-837358.jpeg?auto=compress&cs=tinysrgb&h=400&w=400&fit=crop",
  "https://images.pexels.com/photos/937481/pexels-photo-937481.jpeg?auto=compress&cs=tinysrgb&h=400&w=400&fit=crop",
  "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&h=400&w=400&fit=crop",
  "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&h=400&w=400&fit=crop"
];

// Direct Pexels image references featuring real Black African women
const BLACK_WOMEN_PHOTOS = [
  "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&h=400&w=400&fit=crop",
  "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&h=400&w=400&fit=crop",
  "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&h=400&w=400&fit=crop",
  "https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&h=400&w=400&fit=crop",
  "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&h=400&w=400&fit=crop",
  "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&h=400&w=400&fit=crop",
  "https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&h=400&w=400&fit=crop",
  "https://images.pexels.com/photos/1484794/pexels-photo-1484794.jpeg?auto=compress&cs=tinysrgb&h=400&w=400&fit=crop"
];

const MEN_FIRST_NAMES = [
  "Musa", "Emeka", "Sunday", "Kabir", "Samuel", "Chinedu",
  "Ibrahim", "Tunde", "Usman", "Babatunde", "Victor",
  "Emmanuel", "Yakubu", "Segun", "Chidi", "Hassan", "Adebayo",
  "Uche", "Bello", "Aliyu", "Suleiman", "Kelechi", "Osas", "David"
];

const WOMEN_FIRST_NAMES = [
  "Fatima", "Amina", "Blessing", "Ngozi", "Grace",
  "Precious", "Zainab", "Hadiza", "Chidinma", "Khadijah",
  "Folashade", "Halima", "Joy", "Chioma", "Aisha"
];

const LAST_NAMES = [
  "Ibrahim", "Okonkwo", "Aliyu", "Adeyemi", "Bello", "Eze", "Mohammed",
  "Danjuma", "Nwosu", "Adeleke", "Abubakar", "Okafor", "Sani", "Afolabi",
  "Shehu", "Balogun", "Ojo", "Garba", "Chukwu", "Haruna", "Akpan", "Lawal",
  "Danladi", "Momoh", "Yusuf", "Amodu", "Eshiemogie", "Oladipo"
];

const AREA_LIST = ABUJA_AREAS.filter((a) => a !== "All Areas");
const TRADE_LIST = TRADES.filter((t) => t !== "All Trades");

export const generateArtisans = (count = 3000) => {
  const artisans = [];

  for (let i = 1; i <= count; i++) {
    // Roughly 1 out of 3 profiles is female
    const isWoman = i % 3 === 0;
    const firstName = isWoman
      ? WOMEN_FIRST_NAMES[i % WOMEN_FIRST_NAMES.length]
      : MEN_FIRST_NAMES[i % MEN_FIRST_NAMES.length];

    const lastName = LAST_NAMES[(i * 3 + 7) % LAST_NAMES.length];
    const name = `${firstName} ${lastName}`;
    const trade = TRADE_LIST[i % TRADE_LIST.length];
    const area = AREA_LIST[(i * 5) % AREA_LIST.length];
    const basePrice = 3500 + ((i % 15) * 500);
    const rating = +(4.0 + ((i % 11) * 0.1)).toFixed(1);
    const reviewsCount = 10 + (i % 95);
    const completedJobs = 40 + (i % 380);
    const experience = `${3 + (i % 18)} years`;

    // Strictly assign gender-matched Black African human portraits using a secure index cycle
    const avatar = isWoman
      ? BLACK_WOMEN_PHOTOS[(i * 5) % BLACK_WOMEN_PHOTOS.length]
      : BLACK_MEN_PHOTOS[(i * 7) % BLACK_MEN_PHOTOS.length];

    const phone = `+23480${String(10000000 + ((i * 12345) % 89999999)).slice(0, 8)}`;
    const verified = i % 4 !== 0;

    artisans.push({
      id: i,
      name,
      trade,
      area,
      rating,
      reviewsCount,
      basePrice,
      phone,
      whatsapp: phone.replace("+", ""),
      verified,
      avatar,
      bio: `Professional ${trade} based in ${area}, Abuja with over ${experience} experience providing reliable residential and commercial services.`,
      experience,
      completedJobs,
      services: [
        { name: `Standard ${trade} Inspection & Diagnostic`, price: `₦${basePrice.toLocaleString()}` },
        { name: `Emergency ${trade} Repair Service`, price: `₦${(basePrice * 2).toLocaleString()} - ₦${(basePrice * 4).toLocaleString()}` },
        { name: `Complete Overhaul & Maintenance`, price: `₦${(basePrice * 5).toLocaleString()} - ₦${(basePrice * 10).toLocaleString()}` }
      ],
      reviews: [
        {
          name: "Chinedu O.",
          area,
          rating: 5,
          date: "Recently",
          comment: `Great craftsmanship! Quick response time in ${area}.`
        },
        {
          name: "Amina M.",
          area,
          rating: 4,
          date: "2 weeks ago",
          comment: "Punctual and very neat finish. Will recommend."
        }
      ]
    });
  }

  return artisans;
};

export const INITIAL_ARTISANS = generateArtisans(3000);
export const ARTISANS_DATA = INITIAL_ARTISANS;