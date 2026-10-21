'use client';

import { Heart } from 'lucide-react';

const SCANZAA_INSTAGRAM_URL =
  'https://www.instagram.com/scanzaa_india?exln=MTRjeXZ0djR5bHZzbw==';

export default function PortalFooter({ restaurant }) {
  const instagramUrl =
    restaurant?.scanzaaInstagramUrl ||
    SCANZAA_INSTAGRAM_URL;

  return (
    <footer className="relative w-full pt-6 pb-0 flex flex-col items-center justify-center text-center overflow-hidden bg-[#FFFCF7]">
      {/* Centered Instagram Container with Thin Horizontal Dividers on Either Side */}
      <div className="flex items-center justify-center w-full max-w-[280px] gap-3.5 mb-3.5 z-10">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#E8EAF0] to-[#E8EAF0]" />

        {/* Centered Instagram Icon in White Rounded-Square Container */}
        <a
          href={instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group w-12 h-12 rounded-2xl bg-white border border-[#E8EAF0] shadow-2xs flex items-center justify-center hover:scale-105 hover:shadow-md hover:border-pink-200 transition-all active:scale-95 shrink-0"
          aria-label="Visit Scanzaa on Instagram"
        >
          {/* Authentic Colorful Instagram Gradient Camera Logo */}
          <svg className="w-6 h-6 transition-transform group-hover:scale-110" viewBox="0 0 24 24">
            <defs>
              <linearGradient id="scanzaa-ig" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#fdf497" />
                <stop offset="5%" stopColor="#fdf497" />
                <stop offset="45%" stopColor="#fd5949" />
                <stop offset="60%" stopColor="#d6249f" />
                <stop offset="90%" stopColor="#285AEB" />
              </linearGradient>
            </defs>
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" fill="none" stroke="url(#scanzaa-ig)" strokeWidth="2" />
            <circle cx="12" cy="12" r="4.2" fill="none" stroke="url(#scanzaa-ig)" strokeWidth="2" />
            <circle cx="17.5" cy="6.5" r="1.2" fill="url(#scanzaa-ig)" />
          </svg>
        </a>

        <div className="flex-1 h-px bg-gradient-to-l from-transparent via-[#E8EAF0] to-[#E8EAF0]" />
      </div>

      {/* Small Heart Icon & Powered by SCANZAA */}
      <a
        href={instagramUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 text-xs text-[#718096] font-sans tracking-wide hover:text-[#101B35] transition-colors z-10"
      >
        <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
        <span>
          Powered by <strong className="font-extrabold text-[#101B35]">SCANZAA</strong>
        </span>
      </a>

      {/* Tagline: SCAN · DISCOVER · DINE */}
      <p className="text-[10px] text-[#718096]/80 font-bold uppercase tracking-[0.24em] font-sans mt-1.5 mb-2 z-10">
        SCAN · DISCOVER · DINE
      </p>

      {/* Bottom Botanical Leaves & Warm Golden Wave */}
      <div className="relative w-full select-none pointer-events-none mt-1">
        <img
          src="/categories/bottom-waves-leaves.png"
          alt="Decorative leaves and golden waves"
          className="w-full h-auto object-cover block"
        />
      </div>
    </footer>
  );
}
