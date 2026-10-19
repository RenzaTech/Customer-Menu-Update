'use client';

import { Heart } from 'lucide-react';

export default function PortalFooter({ restaurant }) {
  const instagramUrl =
    restaurant?.instagramUrl ||
    (restaurant?.instagramHandle
      ? `https://instagram.com/${restaurant.instagramHandle.replace('@', '')}`
      : 'https://instagram.com');

  return (
    <footer className="w-full pt-8 pb-12 flex flex-col items-center justify-center text-center space-y-4">
      {/* Instagram Button */}
      {instagramUrl && (
        <a
          href={instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-2xl bg-white border border-gray-200/90 shadow-sm flex items-center justify-center text-pink-600 hover:scale-105 hover:shadow-md transition-all active:scale-95"
          aria-label="Instagram"
        >
          {/* Instagram Crisp SVG */}
          <svg
            className="w-6 h-6"
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
      )}

      {/* Powered by RENZA */}
      <div className="flex items-center gap-1.5 text-xs text-gray-500 font-sans tracking-wide">
        <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
        <span className="font-semibold text-gray-700">Powered by RENZA</span>
      </div>

      <p className="text-[10px] text-gray-400 uppercase tracking-widest font-sans">
        Scan • Discover • Dine
      </p>
    </footer>
  );
}
