'use client';

import { useState, useMemo } from 'react';
import {
  ArrowLeft,
  Search,
  ChevronRight,
  Layers,
  X,
} from 'lucide-react';
import CategoryIcon from './CategoryIcon';

export default function CategoryList({
  categories = [],
  restaurantName,
  onSelectCategory,
  onBack,
}) {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCategories = useMemo(() => {
    if (!searchQuery.trim()) return categories;
    const q = searchQuery.toLowerCase();
    return categories.filter((cat) => cat.name.toLowerCase().includes(q));
  }, [categories, searchQuery]);

  return (
    <div className="w-full px-4 pt-3 pb-12 animate-in fade-in duration-200 selection:bg-[#FFBB17]/30">
      {/* 1. Header: Back to Hub + MENU CATEGORIES */}
      <div className="flex items-center justify-between pb-3.5 border-b border-[#E8EAF0] mb-4">
        <button
          type="button"
          onClick={onBack}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-[#E8EAF0] bg-white text-[#182238] text-xs font-semibold shadow-[0_1px_3px_rgba(24,34,56,0.04)] hover:bg-[#FFF5D9]/40 active:scale-95 transition"
        >
          <ArrowLeft className="w-3.5 h-3.5 text-[#182238] stroke-[2.2]" />
          <span>Back to Hub</span>
        </button>

        <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#9AA3B2] font-sans">
          MENU CATEGORIES
        </span>
      </div>

      {/* 2. Page Heading & Subtitle */}
      <div className="mb-4">
        <h1 className="text-2xl sm:text-[26px] font-extrabold tracking-tight text-[#182238] leading-tight">
          Explore Our Menu
        </h1>
        <p className="text-xs sm:text-[13px] text-[#737D8D] mt-1.5 leading-relaxed font-normal">
          Select a category to view its freshly prepared dishes at {restaurantName || "Anbu'de Cafe"}.
        </p>
      </div>

      {/* 3. Search Bar */}
      <div className="relative mb-4">
        <Search className="w-4 h-4 text-[#9AA3B2] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search categories (e.g. Snacks, Fresh Juice)..."
          className="w-full h-[46px] pl-10 pr-9 bg-white border border-[#E8EAF0] rounded-2xl text-xs sm:text-[13px] text-[#182238] placeholder-[#9AA3B2] focus:outline-none focus:border-[#FFBB17] focus:ring-2 focus:ring-[#FFBB17]/20 transition shadow-[0_1px_4px_rgba(24,34,56,0.03)]"
        />
        {searchQuery && (
          <button
            type="button"
            onClick={() => setSearchQuery('')}
            className="w-6 h-6 rounded-full flex items-center justify-center absolute right-2.5 top-1/2 -translate-y-1/2 text-[#9AA3B2] hover:text-[#182238] hover:bg-[#FFF5D9] transition"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        )}
      </div>

      {/* 4. Category Cards (Strict 2-Column Mobile Grid) */}
      {filteredCategories.length === 0 ? (
        <div className="py-12 text-center bg-white border border-[#E8EAF0] rounded-2xl p-6 shadow-[0_2px_8px_rgba(24,34,56,0.04)]">
          <Layers className="w-8 h-8 text-[#9AA3B2] mx-auto mb-2 opacity-60" />
          <p className="text-xs font-semibold text-[#182238]">No categories found</p>
          <p className="text-[11px] text-[#737D8D] mt-0.5">Try searching for a different item.</p>
          <button
            type="button"
            onClick={() => setSearchQuery('')}
            className="mt-3 px-3 py-1 bg-[#FFF5D9] text-[#8A5700] text-xs font-semibold rounded-lg hover:bg-[#FFE3A0] transition"
          >
            Clear Search
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
          {filteredCategories.map((cat, index) => {
            const itemsCount = (cat.foodItems || cat.items || []).length;

            return (
              <button
                key={cat.id || cat.name || index}
                type="button"
                onClick={() => onSelectCategory(cat)}
                className="group w-full p-2.5 min-[380px]:p-3 min-h-[72px] min-[380px]:min-h-[76px] bg-white border border-[#E8EAF0] rounded-2xl shadow-[0_2px_6px_rgba(24,34,56,0.04)] hover:border-[#FFBB17] hover:shadow-[0_4px_14px_rgba(255,187,23,0.12)] active:scale-[0.98] transition-all duration-150 flex items-center justify-between text-left"
              >
                {/* Left: 48-52px Food Icon Container in Pale Gold */}
                <div className="w-11 h-11 min-[380px]:w-12 min-[380px]:h-12 rounded-2xl bg-[#FFF5D9] border border-[#FFE3A0] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-200">
                  <CategoryIcon
                    name={cat.name}
                    className="w-6 h-6 min-[380px]:w-7 min-[380px]:h-7"
                  />
                </div>

                {/* Middle: Category Title & Item Count Badge */}
                <div className="flex-1 min-w-0 px-2 min-[380px]:px-2.5">
                  <h3 className="text-xs min-[380px]:text-[13px] font-bold text-[#182238] leading-tight line-clamp-2 font-sans group-hover:text-black">
                    {cat.name}
                  </h3>
                  <div className="mt-1">
                    <span className="inline-flex items-center px-1.5 min-[380px]:px-2 py-0.5 rounded-full bg-[#FFF5D9] border border-[#FFE3A0]/70 text-[9.5px] min-[380px]:text-[10.5px] font-semibold text-[#8A5700] whitespace-nowrap">
                      {itemsCount} {itemsCount === 1 ? 'item' : 'items'}
                    </span>
                  </div>
                </div>

                {/* Right: Small chevron */}
                <ChevronRight className="w-3.5 h-3.5 text-[#9AA3B2] group-hover:text-[#182238] shrink-0 stroke-[2.2] transition-colors" />
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
