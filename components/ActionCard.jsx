'use client';

import { ChevronRight } from 'lucide-react';

export default function ActionCard({
  icon: Icon,
  variant = 'yellow', // 'yellow' | 'blue' | 'green'
  title,
  subtitle,
  badgeText,
  illustration,
  onClick,
  href,
}) {
  // Variant color definitions matching the mockup precisely
  const variantStyles = {
    yellow: {
      card: 'border-2 border-[#FCD34D] bg-[#FFFDF7] shadow-[0_4px_18px_rgba(252,211,77,0.16)] hover:shadow-[0_8px_26px_rgba(252,211,77,0.26)] hover:border-[#F59E0B]',
      iconBox: 'bg-[#FEF3C7] border border-[#FDE68A] text-[#D97706]',
      badge: 'bg-[#DCFCE7] text-[#15803D] border border-emerald-300',
      chevron: 'bg-[#FFBB17] text-gray-950',
    },
    blue: {
      card: 'border-2 border-[#BFDBFE] bg-[#F8FAFC] shadow-[0_4px_18px_rgba(191,219,254,0.18)] hover:shadow-[0_8px_26px_rgba(191,219,254,0.28)] hover:border-[#60A5FA]',
      iconBox: 'bg-[#DBEAFE] border border-blue-200 text-[#2563EB]',
      badge: 'bg-blue-100 text-blue-800 border border-blue-300',
      chevron: 'bg-[#DBEAFE] text-blue-600',
    },
    green: {
      card: 'border-2 border-[#BBF7D0] bg-[#F0FDF4] shadow-[0_4px_18px_rgba(187,247,208,0.18)] hover:shadow-[0_8px_26px_rgba(187,247,208,0.28)] hover:border-[#4ADE80]',
      iconBox: 'bg-[#DCFCE7] border border-emerald-200 text-[#16A34A]',
      badge: 'bg-emerald-100 text-emerald-800 border border-emerald-300',
      chevron: 'bg-[#DCFCE7] text-emerald-700',
    },
  };

  const style = variantStyles[variant] || variantStyles.yellow;

  const content = (
    <div
      className={`group relative flex items-center justify-between p-3.5 sm:p-4 rounded-[26px] transition-all duration-200 active:scale-[0.98] cursor-pointer overflow-hidden ${style.card}`}
    >
      {/* Left: Icon & Text Details */}
      <div className="flex items-center gap-3 sm:gap-3.5 flex-1 min-w-0 pr-1 z-10">
        {/* Rounded square icon box */}
        <div
          className={`w-12 h-12 sm:w-13 sm:h-13 rounded-2xl flex items-center justify-center shrink-0 border transition-transform duration-200 group-hover:scale-105 ${style.iconBox}`}
        >
          {Icon && <Icon className="w-6 h-6 stroke-[2.2]" />}
        </div>

        {/* Text Details */}
        <div className="flex flex-col text-left min-w-0 flex-1">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-[14px] sm:text-[15px] font-extrabold text-gray-950 font-sans tracking-tight">
              {title}
            </span>
            {badgeText && (
              <span
                className={`px-2 py-0.5 text-[9px] font-black rounded-full border uppercase tracking-wider ${style.badge}`}
              >
                {badgeText}
              </span>
            )}
          </div>
          {subtitle && (
            <span className="text-[11.5px] sm:text-xs text-gray-500 font-medium font-sans mt-0.5 line-clamp-1">
              {subtitle}
            </span>
          )}
        </div>
      </div>

      {/* Right: Circular Chevron Action & Optional Realistic Illustration Sticker */}
      <div className="flex items-center gap-2 shrink-0 z-10">
        {/* Circular Chevron Button */}
        <div
          className={`w-8 h-8 rounded-full flex items-center justify-center font-bold shadow-xs transition-transform duration-200 group-hover:scale-110 shrink-0 ${style.chevron}`}
        >
          <ChevronRight className="w-4 h-4 stroke-[3]" />
        </div>

        {/* Illustration Sticker (Food bowl, Notepad, or Google Maps pin) */}
        {illustration && (
          <div className="shrink-0 -mr-2 sm:-mr-1 flex items-center justify-center">
            {illustration}
          </div>
        )}
      </div>
    </div>
  );

  if (href) {
    return (
      <a
        href={href}
        target={href.startsWith('http') ? '_blank' : '_self'}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
        className="block w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFBB17] rounded-[26px]"
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className="block w-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFBB17] rounded-[26px]"
    >
      {content}
    </button>
  );
}
