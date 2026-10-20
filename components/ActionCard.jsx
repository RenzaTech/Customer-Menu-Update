'use client';

import { ChevronRight } from 'lucide-react';

export default function ActionCard({
  icon: Icon,
  iconBgColor = 'bg-[#FFF8E7]',
  iconColor = 'text-[#92400E]',
  iconBorderColor = 'border-[#FFBB17]/40',
  title,
  subtitle,
  badgeText,
  badgeColor = 'bg-emerald-50 text-emerald-800 border-emerald-200',
  isPrimary = false,
  onClick,
  href,
}) {
  const content = (
    <div
      className={`group relative flex items-center justify-between p-4 sm:p-4.5 bg-white rounded-2xl transition-all duration-200 active:scale-[0.98] cursor-pointer ${
        isPrimary
          ? 'border-2 border-[#FFBB17] shadow-[0_4px_20px_rgba(255,187,23,0.15)] hover:shadow-[0_8px_28px_rgba(255,187,23,0.22)]'
          : 'border border-gray-200/90 shadow-[0_2px_10px_rgba(0,0,0,0.03)] hover:border-[#FFBB17]/70 hover:shadow-[0_6px_20px_rgba(255,187,23,0.12)]'
      }`}
    >
      <div className="flex items-center gap-3.5">
        {/* Soft rounded icon avatar with glow */}
        <div
          className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 border ${iconBgColor} ${iconColor} ${iconBorderColor} transition-transform duration-200 group-hover:scale-108 group-hover:rotate-1`}
        >
          {Icon && <Icon className="w-6 h-6 stroke-[2.2]" />}
        </div>

        {/* Text Details */}
        <div className="flex flex-col text-left">
          <div className="flex items-center gap-2">
            <span className="text-[13.5px] font-bold text-gray-950 font-sans tracking-tight">
              {title}
            </span>
            {badgeText && (
              <span
                className={`px-2 py-0.5 text-[9.5px] font-extrabold rounded-full border uppercase tracking-wider ${badgeColor}`}
              >
                {badgeText}
              </span>
            )}
          </div>
          {subtitle && (
            <span className="text-xs font-medium text-gray-500 font-sans mt-0.5">
              {subtitle}
            </span>
          )}
        </div>
      </div>

      {/* Right chevron pill */}
      <div className="w-8 h-8 rounded-full flex items-center justify-center text-gray-400 group-hover:text-gray-950 group-hover:bg-[#FFBB17] transition-all shrink-0 shadow-2xs">
        <ChevronRight className="w-4 h-4 stroke-[2.5]" />
      </div>
    </div>
  );

  if (href) {
    return (
      <a
        href={href}
        target={href.startsWith('http') ? '_blank' : '_self'}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
        className="block w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFBB17] rounded-2xl"
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className="block w-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFBB17] rounded-2xl"
    >
      {content}
    </button>
  );
}
