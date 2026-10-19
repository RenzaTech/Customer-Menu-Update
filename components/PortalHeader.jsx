'use client';

import { MapPin, Star } from 'lucide-react';

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
    <header className="relative w-full bg-white border-b border-gray-200/80 pb-5">
      {/* Cover Ambiance Photo */}
      <div
        className="relative w-full overflow-hidden bg-gray-100"
        style={{ width: '100%', height: '180px', maxHeight: '200px' }}
      >
        <img
          src={coverImage}
          alt={name}
          className="w-full h-full object-cover object-center"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        {/* Subtle white vignette overlay for soft light appearance */}
        <div className="absolute inset-0 bg-black/10" />
      </div>

      {/* Header Content Container */}
      <div className="relative max-w-sm mx-auto px-4 -mt-12 flex flex-col items-center text-center">
        {/* Circular Logo Badge */}
        <div
          className="relative rounded-full bg-white p-1 shadow-md border border-gray-200 flex items-center justify-center overflow-hidden"
          style={{ width: '84px', height: '84px' }}
        >
          {logoUrl ? (
            <img
              src={logoUrl}
              alt={name}
              className="w-full h-full object-cover rounded-full"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          ) : (
            <div className="w-full h-full rounded-full bg-amber-50 border border-amber-200/70 flex flex-col items-center justify-center p-1 text-amber-900">
              <span className="font-serif text-2xl font-bold tracking-tight">
                {name.slice(0, 2).toUpperCase()}
              </span>
              <span className="text-[8px] uppercase tracking-widest text-amber-700 font-sans font-semibold">
                Cafe
              </span>
            </div>
          )}
        </div>

        {/* Restaurant Name */}
        <h1 className="mt-3 font-serif text-2xl font-bold tracking-[0.06em] text-gray-900 uppercase">
          {name}
        </h1>

        {/* Cuisine / Concept Subtitle */}
        <p className="mt-0.5 text-xs font-medium tracking-wide text-gray-500 font-sans">
          {cuisineType}
        </p>

        {/* Status & Rating Pill Row */}
        <div className="mt-2.5 flex flex-wrap items-center justify-center gap-1.5">
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10.5px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Open Now
          </span>

          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10.5px] font-semibold bg-amber-50 text-amber-800 border border-amber-200">
            <Star className="w-3 h-3 fill-amber-500 text-amber-500" />
            {rating}
          </span>

          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10.5px] font-medium bg-gray-50 text-gray-600 border border-gray-200">
            <MapPin className="w-3 h-3 text-gray-400" />
            {address.split(',')[0]}
          </span>
        </div>
      </div>
    </header>
  );
}
