'use client';

import { Heart } from 'lucide-react';

const SCANZAA_INSTAGRAM_URL =
  'https://www.instagram.com/scanzaa_india?exln=MTRjeXZ0djR5bHZzbw==';

export default function PortalFooter({ restaurant }) {
  const instagramUrl =
    restaurant?.scanzaaInstagramUrl ||
    SCANZAA_INSTAGRAM_URL;

  return (
    <footer className="relative w-full pt-8 pb-12 flex flex-col items-center justify-center text-center overflow-hidden bg-[#FFFCF7]">
      {/* Decorative Cream-Colored Waves & Botanical Leaves Bottom-Left */}
      <div className="absolute -bottom-4 -left-6 pointer-events-none opacity-85 select-none">
        <svg className="w-24 h-24 text-emerald-600/70 rotate-15" viewBox="0 0 64 64" fill="currentColor">
          <path d="M12 48 C 12 24, 34 14, 52 14 C 48 32, 34 50, 12 48 Z" fill="#86EFAC" opacity="0.6" />
          <path d="M12 48 Q 30 32 52 14" stroke="#166534" strokeWidth="1.5" fill="none" opacity="0.5" />
          <path d="M2 38 C 2 20, 20 12, 34 12 C 30 26, 20 40, 2 38 Z" fill="#4ADE80" opacity="0.75" />
        </svg>
      </div>

      {/* Decorative Cream-Colored Waves & Botanical Leaves Bottom-Right */}
      <div className="absolute -bottom-4 -right-6 pointer-events-none opacity-85 select-none">
        <svg className="w-24 h-24 text-emerald-600/70 -rotate-15 scale-x-[-1]" viewBox="0 0 64 64" fill="currentColor">
          <path d="M12 48 C 12 24, 34 14, 52 14 C 48 32, 34 50, 12 48 Z" fill="#86EFAC" opacity="0.6" />
          <path d="M12 48 Q 30 32 52 14" stroke="#166534" strokeWidth="1.5" fill="none" opacity="0.5" />
          <path d="M2 38 C 2 20, 20 12, 34 12 C 30 26, 20 40, 2 38 Z" fill="#4ADE80" opacity="0.75" />
        </svg>
      </div>

      {/* Centered Instagram Container with Thin Horizontal Dividers on Either Side */}
      <div className="flex items-center justify-center w-full max-w-[280px] gap-3.5 mb-3.5 z-10">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#E8EAF0] to-[#E8EAF0]" />

        {/* Centered Instagram Icon in White Rounded-Square Container */}
        <a
          href={instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group w-12 h-12 rounded-2xl bg-white border border-[#E8EAF0] shadow-2xs flex items-center justify-center text-pink-600 hover:scale-105 hover:shadow-md hover:border-pink-200 transition-all active:scale-95 shrink-0"
          aria-label="Visit Scanzaa on Instagram"
        >
          {/* Instagram Crisp SVG */}
          <svg
            className="w-6 h-6 transition-transform group-hover:scale-110"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
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
      <p className="text-[10px] text-[#718096]/80 font-bold uppercase tracking-[0.24em] font-sans mt-2 z-10">
        SCAN · DISCOVER · DINE
      </p>
    </footer>
  );
}
