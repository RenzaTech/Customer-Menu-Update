'use client';

import { MapPin, Star, Coffee, Utensils, Users, Sparkles } from 'lucide-react';

export default function PortalHeader({ restaurant, googleReviewUrl }) {
  const name = restaurant?.name || "Anbu'de Cafe";
  const cuisineType = restaurant?.cuisineType || 'Café · Fast Food · Beverages';
  const address = restaurant?.address || 'Vallal MGR Salai, Maraimalai Nagar';
  const shortAddress = address.split(',')[0].trim() || 'Vallal MGR Salai';
  const ratingText = '5.0 (12 Google)';
  const hoursText = restaurant?.hours || 'Open daily · closes 11:00 PM';
  const closesAt = hoursText.toLowerCase().includes('11:00')
    ? 'Closes at 11:00 PM'
    : hoursText.toLowerCase().includes('10:30')
    ? 'Closes at 10:30 PM'
    : 'Closes at 11:00 PM';

  // Warm, inviting cozy cafe cover photo exactly matching the mockup aesthetic
  const coverImage =
    restaurant?.coverImage ||
    'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=80';

  return (
    <header className="relative w-full bg-[#FFFDF9] pb-4">
      {/* Cover Ambiance Photo with Organic Curved Wave Cutout */}
      <div className="relative w-full h-[210px] sm:h-[230px] overflow-hidden bg-stone-900">
        <img
          src={coverImage}
          alt={name}
          className="w-full h-full object-cover object-center scale-105"
        />
        {/* Soft warm vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/15 to-transparent" />

        {/* Smooth Organic Scalloped Wave Cutout Transition */}
        <svg
          viewBox="0 0 500 80"
          preserveAspectRatio="none"
          className="absolute bottom-0 left-0 w-full h-12 sm:h-14 text-[#FFFDF9] fill-current pointer-events-none"
        >
          <path d="M0,45 C150,85 180,10 250,10 C320,10 350,85 500,45 L500,80 L0,80 Z" />
        </svg>
      </div>

      {/* Center Monogram Logo with Botanical Leaves & Coffee Beans Flanking */}
      <div className="relative max-w-sm mx-auto px-4 -mt-16 sm:-mt-18 flex flex-col items-center text-center z-10">
        {/* Decorative Row: Leaves & Coffee Beans surrounding Logo */}
        <div className="relative flex items-center justify-center">
          {/* Left Decorative Botanical Leaves & Coffee Beans */}
          <div className="absolute -left-16 sm:-left-20 -bottom-2 flex items-center pointer-events-none select-none">
            {/* Green Leaves Left */}
            <svg
              className="w-12 h-12 -rotate-25 text-emerald-600/80 drop-shadow-xs"
              viewBox="0 0 64 64"
              fill="currentColor"
            >
              <path d="M12 48 C 12 24, 34 14, 52 14 C 48 32, 34 50, 12 48 Z" fill="#4ADE80" opacity="0.9" />
              <path d="M12 48 Q 30 32 52 14" stroke="#166534" strokeWidth="2" fill="none" opacity="0.7" />
              <path d="M2 38 C 2 20, 20 12, 34 12 C 30 26, 20 40, 2 38 Z" fill="#22C55E" opacity="0.75" />
            </svg>
            {/* Floating Roasted Coffee Beans Left */}
            <div className="relative -ml-2 -mt-4">
              <svg className="w-5 h-5 -rotate-12 drop-shadow-sm text-[#451a03]" viewBox="0 0 24 24" fill="currentColor">
                <ellipse cx="12" cy="12" rx="9" ry="6" fill="#582914" />
                <path d="M12 6 Q 14 12 12 18" stroke="#2c140a" strokeWidth="1.6" fill="none" />
              </svg>
              <svg className="w-4 h-4 rotate-35 -mt-1 ml-1 drop-shadow-sm text-[#451a03]" viewBox="0 0 24 24" fill="currentColor">
                <ellipse cx="12" cy="12" rx="9" ry="6" fill="#6d351b" />
                <path d="M12 6 Q 10 12 12 18" stroke="#371b0d" strokeWidth="1.5" fill="none" />
              </svg>
            </div>
          </div>

          {/* Center Circular Monogram Emblem */}
          <div className="relative rounded-full bg-white p-1.5 shadow-[0_10px_28px_rgba(255,187,23,0.22)] border-2 border-amber-100 flex items-center justify-center overflow-hidden ring-6 ring-[#FEF3C7]/90 transition-transform duration-200 hover:scale-105 w-[100px] h-[100px] sm:w-[106px] sm:h-[106px]">
            <div className="w-full h-full rounded-full bg-gradient-to-b from-white to-[#FFFDF5] border border-[#FDE68A] flex flex-col items-center justify-center p-2 text-[#92400E]">
              {/* Steaming Coffee Cup Icon */}
              <div className="relative flex flex-col items-center">
                <svg
                  className="w-6 h-6 text-[#FFBB17] drop-shadow-2xs"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M2,21H20V19H2M20,8H18V5H20M20,3H4V13A4,4 0 0,0 8,17H14A4,4 0 0,0 18,13V10H20A2,2 0 0,0 22,8V5A2,2 0 0,0 20,3Z" />
                </svg>
                {/* Steam squiggles */}
                <span className="absolute -top-1.5 left-1.5 text-[8px] text-[#FFBB17]/80 font-bold">~</span>
                <span className="absolute -top-2 right-1.5 text-[8px] text-[#FFBB17]/80 font-bold">~</span>
              </div>

              {/* Monogram Brand Name */}
              <span className="text-[14px] font-black tracking-tight text-gray-950 mt-1 leading-none font-sans">
                ANBU
              </span>
              <span className="text-[8.5px] uppercase tracking-[0.24em] text-[#92400E] font-extrabold mt-0.5">
                CAFÉ
              </span>
            </div>
          </div>

          {/* Right Decorative Botanical Leaves & Coffee Beans */}
          <div className="absolute -right-16 sm:-right-20 -bottom-2 flex items-center pointer-events-none select-none">
            {/* Floating Roasted Coffee Beans Right */}
            <div className="relative -mr-2 -mt-4">
              <svg className="w-5 h-5 rotate-45 drop-shadow-sm text-[#451a03]" viewBox="0 0 24 24" fill="currentColor">
                <ellipse cx="12" cy="12" rx="9" ry="6" fill="#582914" />
                <path d="M12 6 Q 14 12 12 18" stroke="#2c140a" strokeWidth="1.6" fill="none" />
              </svg>
              <svg className="w-4 h-4 -rotate-20 -mt-1 mr-1 drop-shadow-sm text-[#451a03]" viewBox="0 0 24 24" fill="currentColor">
                <ellipse cx="12" cy="12" rx="9" ry="6" fill="#6d351b" />
                <path d="M12 6 Q 10 12 12 18" stroke="#371b0d" strokeWidth="1.5" fill="none" />
              </svg>
            </div>
            {/* Green Leaves Right */}
            <svg
              className="w-12 h-12 rotate-25 text-emerald-600/80 drop-shadow-xs scale-x-[-1]"
              viewBox="0 0 64 64"
              fill="currentColor"
            >
              <path d="M12 48 C 12 24, 34 14, 52 14 C 48 32, 34 50, 12 48 Z" fill="#4ADE80" opacity="0.9" />
              <path d="M12 48 Q 30 32 52 14" stroke="#166534" strokeWidth="2" fill="none" opacity="0.7" />
              <path d="M2 38 C 2 20, 20 12, 34 12 C 30 26, 20 40, 2 38 Z" fill="#22C55E" opacity="0.75" />
            </svg>
          </div>
        </div>

        {/* Restaurant Name with Golden Verified Checkmark */}
        <div className="mt-3.5 flex items-center justify-center gap-1.5">
          <h1 className="text-2xl sm:text-[26px] font-black tracking-tight text-gray-950 font-sans">
            {name}
          </h1>
          <span
            className="w-5 h-5 rounded-full bg-[#FFBB17] text-gray-950 flex items-center justify-center text-[10px] font-bold shadow-2xs"
            title="Verified Restaurant"
          >
            ✓
          </span>
        </div>

        {/* Cuisine Concept Subtitle */}
        <p className="mt-1 text-xs font-semibold text-slate-500 font-sans tracking-wide">
          {cuisineType}
        </p>

        {/* Dual Cards: Open Now (Mint Green) + 5.0 Google Reviews (Amber Yellow) */}
        <div className="grid grid-cols-2 gap-2.5 w-full mt-3.5">
          {/* Card 1: Open Now */}
          <div className="bg-[#F0FDF4] border border-[#BBF7D0] rounded-2xl p-2.5 sm:p-3 text-center shadow-2xs">
            <div className="flex items-center justify-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#16A34A] animate-pulse" />
              <span className="text-sm font-extrabold text-[#15803D] font-sans">
                Open Now
              </span>
            </div>
            <p className="text-[10.5px] font-medium text-slate-500 mt-0.5 font-sans">
              {closesAt}
            </p>
          </div>

          {/* Card 2: 5.0 Google Reviews (Direct link on mobile) */}
          {googleReviewUrl ? (
            <a
              href={googleReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#FEFCE8] border border-[#FDE68A] hover:border-[#F59E0B] rounded-2xl p-2.5 sm:p-3 text-center shadow-2xs transition-all active:scale-95 group cursor-pointer"
              title="Rate us on Google Maps"
            >
              <div className="flex items-center justify-center gap-1.5">
                <Star className="w-4 h-4 fill-[#EAB308] text-[#EAB308]" />
                <span className="text-sm font-extrabold text-[#854D0E] font-sans group-hover:text-amber-950">
                  {ratingText}
                </span>
              </div>
              <p className="text-[10.5px] font-medium text-slate-500 mt-0.5 font-sans">
                Customer Reviews
              </p>
            </a>
          ) : (
            <div className="bg-[#FEFCE8] border border-[#FDE68A] rounded-2xl p-2.5 sm:p-3 text-center shadow-2xs">
              <div className="flex items-center justify-center gap-1.5">
                <Star className="w-4 h-4 fill-[#EAB308] text-[#EAB308]" />
                <span className="text-sm font-extrabold text-[#854D0E] font-sans">
                  {ratingText}
                </span>
              </div>
              <p className="text-[10.5px] font-medium text-slate-500 mt-0.5 font-sans">
                Customer Reviews
              </p>
            </div>
          )}
        </div>

        {/* Location Pill */}
        <div className="mt-3">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-slate-200/90 shadow-2xs text-xs font-semibold text-slate-700 font-sans">
            <MapPin className="w-3.5 h-3.5 text-slate-500" />
            <span>{shortAddress}</span>
          </span>
        </div>

        {/* Cozy Tagline */}
        <p className="mt-2.5 text-xs text-slate-500 max-w-[290px] mx-auto leading-relaxed font-sans">
          A cozy place to enjoy great coffee, freshly prepared food and a relaxing atmosphere.
        </p>

        {/* 4 Feature Highlights Row with Subtle Dividers */}
        <div className="w-full mt-4 pt-3.5 border-t border-slate-200/60 grid grid-cols-4 items-center text-center">
          {/* Feature 1: Great Coffee */}
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#FAF0E6] flex items-center justify-center text-[#9A3412] shadow-2xs">
              <Coffee className="w-5 h-5 stroke-[2.2]" />
            </div>
            <span className="text-[10px] sm:text-[10.5px] font-bold text-slate-600 mt-1.5 leading-tight font-sans">
              Great Coffee
            </span>
          </div>

          {/* Divider */}
          <div className="flex flex-col items-center border-l border-slate-200/70">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#FFF1E6] flex items-center justify-center text-[#EA580C] shadow-2xs">
              <Utensils className="w-5 h-5 stroke-[2.2]" />
            </div>
            <span className="text-[10px] sm:text-[10.5px] font-bold text-slate-600 mt-1.5 leading-tight font-sans">
              Tasty Food
            </span>
          </div>

          {/* Divider */}
          <div className="flex flex-col items-center border-l border-slate-200/70">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#F5EBE1] flex items-center justify-center text-[#78350F] shadow-2xs">
              <Users className="w-5 h-5 stroke-[2.2]" />
            </div>
            <span className="text-[10px] sm:text-[10.5px] font-bold text-slate-600 mt-1.5 leading-tight font-sans">
              Cozy Ambience
            </span>
          </div>

          {/* Divider */}
          <div className="flex flex-col items-center border-l border-slate-200/70">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#E8F5E9] flex items-center justify-center text-[#16A34A] shadow-2xs">
              {/* Leaf Icon SVG */}
              <svg className="w-5 h-5 stroke-[2.2]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918" />
              </svg>
            </div>
            <span className="text-[10px] sm:text-[10.5px] font-bold text-slate-600 mt-1.5 leading-tight font-sans">
              Fresh Ingredients
            </span>
          </div>
        </div>

        {/* Section Header: Guest Dining Portal with Tiny Coffee Icon */}
        <div className="mt-5 pt-3 w-full flex flex-col items-center text-center">
          <div className="flex items-center gap-1.5 text-amber-500 mb-1">
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M2,21H20V19H2M20,8H18V5H20M20,3H4V13A4,4 0 0,0 8,17H14A4,4 0 0,0 18,13V10H20A2,2 0 0,0 22,8V5A2,2 0 0,0 20,3Z" />
            </svg>
          </div>
          <h2 className="text-[11px] font-bold uppercase tracking-[0.24em] text-slate-600 font-sans">
            GUEST DINING PORTAL
          </h2>
          <p className="text-xs text-slate-400 font-normal mt-0.5 font-sans">
            Explore our menu, give feedback and help us improve!
          </p>
        </div>
      </div>
    </header>
  );
}
