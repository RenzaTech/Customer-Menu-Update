'use client';

import { useState, useMemo } from 'react';
import {
  ArrowLeft,
  Search,
  ChevronRight,
  Utensils,
  Coffee,
  IceCream,
  Sparkles,
  Layers,
  Pizza,
  Salad,
  Flame,
} from 'lucide-react';

function getCategoryIcon(name = '') {
  const lower = name.toLowerCase();
  if (lower.includes('coffee') || lower.includes('tea') || lower.includes('juice') || lower.includes('lassi') || lower.includes('mojito') || lower.includes('shake') || lower.includes('beverage')) {
    return Coffee;
  }
  if (lower.includes('ice cream') || lower.includes('falooda') || lower.includes('dessert')) {
    return IceCream;
  }
  if (lower.includes('salad') || lower.includes('fruit')) {
    return Salad;
  }
  if (lower.includes('special') || lower.includes('combo')) {
    return Sparkles;
  }
  if (lower.includes('pizza') || lower.includes('wrap') || lower.includes('roll')) {
    return Pizza;
  }
  if (lower.includes('momos') || lower.includes('fries') || lower.includes('maggi') || lower.includes('snack')) {
    return Flame;
  }
  return Utensils;
}

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
    return categories.filter((cat) =>
      cat.name.toLowerCase().includes(q)
    );
  }, [categories, searchQuery]);

  return (
    <div className="w-full max-w-lg mx-auto px-4 sm:px-6 py-4 animate-in fade-in duration-200">
      {/* Top Navigation Bar */}
      <div className="flex items-center justify-between pb-4 border-b border-gray-200/80 mb-5">
        <button
          type="button"
          onClick={onBack}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-gray-200 bg-white text-gray-700 text-xs font-semibold hover:bg-gray-50 active:scale-95 transition shadow-sm"
        >
          <ArrowLeft className="w-3.5 h-3.5 stroke-[2.5]" />
          <span>Back to Hub</span>
        </button>

        <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-gray-400 font-sans">
          Menu Categories
        </span>
      </div>

      {/* Title & Restaurant Info */}
      <div className="mb-4">
        <h2 className="text-xl sm:text-2xl font-serif font-bold tracking-tight text-gray-900">
          Explore Our Menu
        </h2>
        <p className="text-xs text-gray-500 mt-1 font-sans">
          Select a category to view its freshly prepared dishes at {restaurantName || "our cafe"}.
        </p>
      </div>

      {/* Category Search Bar */}
      <div className="relative mb-5">
        <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search categories (e.g. Snacks, Fresh Juice)..."
          className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-xl text-xs text-gray-800 placeholder-gray-400 focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-400 transition shadow-sm"
        />
        {searchQuery && (
          <button
            type="button"
            onClick={() => setSearchQuery('')}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-medium text-gray-400 hover:text-gray-600"
          >
            Clear
          </button>
        )}
      </div>

      {/* Categories Grid */}
      {filteredCategories.length === 0 ? (
        <div className="py-12 text-center bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
          <Layers className="w-8 h-8 text-gray-300 mx-auto mb-2" />
          <p className="text-xs font-semibold text-gray-600">No categories found</p>
          <p className="text-[11px] text-gray-400 mt-0.5">Try searching for a different item.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {filteredCategories.map((cat, index) => {
            const itemsCount = (cat.foodItems || cat.items || []).length;
            const Icon = getCategoryIcon(cat.name);

            return (
              <button
                key={cat.id || cat.name || index}
                type="button"
                onClick={() => onSelectCategory(cat)}
                className="group w-full p-3.5 sm:p-4 bg-white border border-gray-200/90 rounded-2xl shadow-[0_2px_8px_rgba(0,0,0,0.03)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.07)] hover:border-gray-300 transition-all duration-200 active:scale-[0.99] flex items-center justify-between text-left"
              >
                <div className="flex items-center gap-3">
                  {/* Category icon avatar */}
                  <div className="w-10 h-10 rounded-xl bg-gray-50 border border-gray-200/80 flex items-center justify-center text-gray-700 shrink-0 group-hover:scale-105 transition-transform">
                    <Icon className="w-4 h-4 stroke-[2]" />
                  </div>

                  <div>
                    <h3 className="text-xs sm:text-sm font-bold text-gray-900 group-hover:text-black transition-colors font-sans">
                      {cat.name}
                    </h3>
                    <span className="text-[11px] text-gray-500 font-sans">
                      {itemsCount} {itemsCount === 1 ? 'item' : 'items'}
                    </span>
                  </div>
                </div>

                <div className="w-7 h-7 rounded-full flex items-center justify-center text-gray-400 group-hover:text-gray-700 group-hover:bg-gray-100 transition-colors shrink-0">
                  <ChevronRight className="w-4 h-4 stroke-[2.5]" />
                </div>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
