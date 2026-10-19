'use client';

import { ChevronRight } from 'lucide-react';

export default function ActionCard({
  icon: Icon,
  iconBgColor = 'bg-orange-50',
  iconColor = 'text-orange-600',
  iconBorderColor = 'border-orange-100',
  title,
  subtitle,
  badgeText,
  onClick,
  href,
}) {
  const content = (
    <div className="group relative flex items-center justify-between p-4 sm:p-5 bg-white border border-gray-200/90 rounded-2xl shadow-[0_2px_8px_rgba(0,0,0,0.03)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.08)] hover:border-gray-300 transition-all duration-200 active:scale-[0.99] cursor-pointer">
      <div className="flex items-center gap-4">
        {/* Soft solid rounded icon container */}
        <div
          className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 border ${iconBgColor} ${iconColor} ${iconBorderColor} transition-transform duration-200 group-hover:scale-105`}
        >
          {Icon && <Icon className="w-5 h-5 stroke-[2.2]" />}
        </div>

        {/* Text Details */}
        <div className="flex flex-col text-left">
          <div className="flex items-center gap-2">
            <span className="text-[13px] sm:text-sm font-semibold tracking-wide text-gray-800 uppercase font-sans">
              {title}
            </span>
            {badgeText && (
              <span className="px-1.5 py-0.5 text-[10px] font-bold rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 uppercase tracking-wider">
                {badgeText}
              </span>
            )}
          </div>
          {subtitle && (
            <span className="text-xs text-gray-500 font-sans tracking-normal mt-0.5">
              {subtitle}
            </span>
          )}
        </div>
      </div>

      {/* Right chevron */}
      <div className="w-8 h-8 rounded-full flex items-center justify-center text-gray-400 group-hover:text-gray-700 group-hover:bg-gray-100 transition-all shrink-0">
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
        className="block w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 rounded-2xl"
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className="block w-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 rounded-2xl"
    >
      {content}
    </button>
  );
}
