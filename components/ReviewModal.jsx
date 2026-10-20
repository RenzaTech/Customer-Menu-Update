'use client';

import { X, Star, ExternalLink } from 'lucide-react';

export default function ReviewModal({ isOpen, onClose, restaurant }) {
  if (!isOpen) return null;

  const name = restaurant?.name || "Anbu'de Cafe";
  const address = restaurant?.address || '';
  // Construct a Google search/review direct intent or custom URL
  const googleReviewUrl =
    restaurant?.googleReviewUrl ||
    `https://www.google.com/search?q=${encodeURIComponent(
      `${name} ${address} reviews`
    )}`;

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/40 backdrop-blur-sm transition-opacity">
      <div
        className="w-full max-w-md bg-white rounded-t-3xl sm:rounded-2xl p-6 shadow-2xl border border-gray-200 text-gray-800 animate-in fade-in slide-in-from-bottom duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-gray-100">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-amber-50 border border-amber-200/80 flex items-center justify-center text-amber-600">
              <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
            </div>
            <div>
              <h2 className="text-base font-bold text-gray-900 font-sans">
                Review on Google
              </h2>
              <p className="text-[11px] text-gray-500 font-sans">
                Your feedback means the world to us
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full flex items-center justify-center text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Body */}
        <div className="py-6 text-center space-y-3">
          <div className="flex items-center justify-center gap-1 text-amber-500">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-amber-400 text-amber-400" />
            ))}
          </div>

          <p className="text-sm text-gray-600 px-4">
            If you enjoyed your time at <strong className="text-gray-900">{name}</strong>, please take a quick 15 seconds to leave us a 5-star review on Google!
          </p>
        </div>

        {/* Buttons */}
        <div className="flex gap-2">
          <button
            type="button"
            onClick={onClose}
            className="flex-1 py-3 px-4 rounded-xl border border-gray-200 text-gray-600 text-xs font-semibold hover:bg-gray-50 transition"
          >
            Maybe Later
          </button>
          <a
            href={googleReviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="flex-1 py-3 px-4 rounded-xl bg-amber-500 hover:bg-amber-600 text-white text-xs font-semibold transition flex items-center justify-center gap-1.5 shadow-sm"
          >
            <span>Rate on Google</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
}
