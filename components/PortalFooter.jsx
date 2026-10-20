'use client';

import { Heart } from 'lucide-react';

const SCANZAA_INSTAGRAM_URL =
  'https://www.instagram.com/scanzaa_india?exln=MTRjeXZ0djR5bHZzbw==';

export default function PortalFooter({ restaurant }) {
  const instagramUrl =
    restaurant?.scanzaaInstagramUrl ||
    SCANZAA_INSTAGRAM_URL;

  return (
    <footer className="w-full pt-8 pb-12 flex flex-col items-center justify-center text-center space-y-3.5">
      {/* Scanzaa Official Instagram Button */}
      <a
        href={instagramUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group w-12 h-12 rounded-2xl bg-white border border-gray-200/90 shadow-2xs flex items-center justify-center text-pink-600 hover:scale-105 hover:shadow-md hover:border-pink-200 transition-all active:scale-95"
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
        className="inline-flex items-center gap-1.5 text-xs text-gray-500 font-sans tracking-wide hover:text-gray-900 transition-colors"
      >
        <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
        <span>
          Powered by <strong className="font-bold text-gray-800">SCANZAA</strong>
        </span>
      </a>

      <p className="text-[10px] text-gray-400 uppercase tracking-widest font-sans">
        Scan • Discover • Dine
      </p>
    </footer>
  );
}
