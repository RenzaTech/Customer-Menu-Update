'use client';

import { Heart } from 'lucide-react';

const SCANZAA_INSTAGRAM_URL =
  'https://www.instagram.com/scanzaa_india?exln=MTRjeXZ0djR5bHZzbw==';

export default function PortalFooter({ restaurant }) {
  const instagramUrl =
    restaurant?.scanzaaInstagramUrl ||
    SCANZAA_INSTAGRAM_URL;

  return (
    <footer className="relative w-full pt-6 pb-10 flex flex-col items-center justify-center text-center overflow-hidden">
      {/* Decorative Botanical Leaves Bottom-Left */}
      <div className="absolute -bottom-4 -left-6 pointer-events-none opacity-80 select-none">
        <svg className="w-20 h-20 text-emerald-600/70 rotate-15" viewBox="0 0 64 64" fill="currentColor">
          <path d="M12 48 C 12 24, 34 14, 52 14 C 48 32, 34 50, 12 48 Z" fill="#86EFAC" opacity="0.6" />
          <path d="M12 48 Q 30 32 52 14" stroke="#166534" strokeWidth="1.5" fill="none" opacity="0.5" />
          <path d="M2 38 C 2 20, 20 12, 34 12 C 30 26, 20 40, 2 38 Z" fill="#4ADE80" opacity="0.7" />
        </svg>
      </div>

      {/* Decorative Botanical Leaves Bottom-Right */}
      <div className="absolute -bottom-4 -right-6 pointer-events-none opacity-80 select-none">
        <svg className="w-20 h-20 text-emerald-600/70 -rotate-15 scale-x-[-1]" viewBox="0 0 64 64" fill="currentColor">
          <path d="M12 48 C 12 24, 34 14, 52 14 C 48 32, 34 50, 12 48 Z" fill="#86EFAC" opacity="0.6" />
          <path d="M12 48 Q 30 32 52 14" stroke="#166534" strokeWidth="1.5" fill="none" opacity="0.5" />
          <path d="M2 38 C 2 20, 20 12, 34 12 C 30 26, 20 40, 2 38 Z" fill="#4ADE80" opacity="0.7" />
        </svg>
      </div>

      {/* Subtle Divider Line with Soft Watercolor Glow */}
      <div className="w-48 h-px bg-gradient-to-r from-transparent via-amber-200/80 to-transparent mb-5" />

      {/* Scanzaa Official Instagram Button */}
      <a
        href={instagramUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative w-12 h-12 rounded-2xl bg-white border border-gray-200/90 shadow-2xs flex items-center justify-center text-pink-600 hover:scale-105 hover:shadow-md hover:border-pink-200 transition-all active:scale-95 z-10"
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

      {/* Powered by SCANZAA */}
      <a
        href={instagramUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 text-xs text-gray-500 font-sans tracking-wide hover:text-gray-900 transition-colors mt-3 z-10"
      >
        <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
        <span>
          Powered by <strong className="font-extrabold text-gray-800">SCANZAA</strong>
        </span>
      </a>

      <p className="text-[10px] text-gray-400 uppercase tracking-widest font-sans mt-1.5 z-10">
        Scan • Discover • Dine
      </p>
    </footer>
  );
}
