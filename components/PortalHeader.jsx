'use client';

import { MapPin, Star, Sparkles, CheckCircle } from 'lucide-react';

export default function PortalHeader({ restaurant }) {
  const name = restaurant?.name || "Anbu'de Cafe";
  const cuisineType = restaurant?.cuisineType || 'Artisan Cafe · Fast Food · Beverages';
  const address = restaurant?.address || 'Maraimalai Nagar, Chennai';
  const rating = restaurant?.rating || '5.0 (Google Reviews)';

  // Fallback high quality cafe cover photo (bright, light, inviting dining space)
  const coverImage =
    restaurant?.coverImage ||
    'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=80';

  // Restaurant logo or fallback stylish monogram
  const logoUrl = restaurant?.logoUrl || null;

  return (
    <header className="relative w-full bg-white border-b border-gray-100 pb-5">
      {/* Cover Ambiance Photo */}
      <div
        className="relative w-full overflow-hidden bg-gray-100"
        style={{ width: '100%', height: '185px', maxHeight: '200px' }}
      >
        <img
          src={coverImage}
          alt={name}
          className="w-full h-full object-cover object-center"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        {/* Soft light vignette */}
        <div className="absolute inset-0 bg-black/15" />
      </div>

      {/* Header Content Container */}
      <div className="relative max-w-sm mx-auto px-4 -mt-12 flex flex-col items-center text-center">
        {/* Circular Logo Badge */}
        <div
          className="relative rounded-full bg-white p-1.5 shadow-lg border-2 border-white flex items-center justify-center overflow-hidden ring-4 ring-[#FFBB17]/30 transition-transform hover:scale-105 duration-200"
          style={{ width: '92px', height: '92px' }}
        >
          {logoUrl ? (
            <img
              src={logoUrl}
              alt={name}
              className="w-full h-full object-cover rounded-full"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          ) : (
            <div className="w-full h-full rounded-full bg-[#FFF8E7] border border-[#FFBB17]/60 flex flex-col items-center justify-center p-1.5 text-[#92400E]">
              {/* Coffee / Cafe Emblem */}
              <svg className="w-5 h-5 text-[#FFBB17]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M2,21H20V19H2M20,8H18V5H20M20,3H4V13A4,4 0 0,0 8,17H14A4,4 0 0,0 18,13V10H20A2,2 0 0,0 22,8V5A2,2 0 0,0 20,3Z" />
              </svg>
              <span className="text-[11px] font-black tracking-tight text-gray-950 mt-0.5">
                {name.slice(0, 4).toUpperCase()}
              </span>
              <span className="text-[7.5px] uppercase tracking-widest text-[#B45309] font-bold">
                Cafe
              </span>
            </div>
          )}
        </div>

        {/* Restaurant Name with Verified Badge */}
        <div className="mt-3 flex items-center justify-center gap-1.5">
          <h1 className="text-2xl font-extrabold tracking-tight text-gray-950 font-sans">
            {name}
          </h1>
          <span
            className="w-5 h-5 rounded-full bg-[#FFBB17] text-gray-950 flex items-center justify-center text-[10px] font-bold shadow-2xs"
            title="Verified Restaurant"
          >
            ✓
          </span>
        </div>

        {/* Cuisine / Concept Subtitle */}
        <p className="mt-1 text-xs font-semibold text-gray-500 font-sans tracking-wide">
          {cuisineType}
        </p>

        {/* Status & Rating Pill Row - Perfectly Aligned */}
        <div className="mt-3 flex items-center justify-center gap-1.5 flex-wrap">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold bg-emerald-50 text-emerald-800 border border-emerald-200 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Open Now
          </span>

          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold bg-[#FFF8E7] text-[#92400E] border border-[#FFBB17]/40 shadow-2xs">
            <Star className="w-3.5 h-3.5 fill-[#FFBB17] text-[#FFBB17]" />
            {rating.replace('Google reviews', 'Google')}
          </span>

          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold bg-gray-50 text-gray-600 border border-gray-200">
            <MapPin className="w-3.5 h-3.5 text-gray-400" />
            {address.split(',')[0]}
          </span>
        </div>
      </div>
    </header>
  );
}
