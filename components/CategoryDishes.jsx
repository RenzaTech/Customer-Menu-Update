'use client';

import { useState, useMemo } from 'react';
import { ArrowLeft, Search, Eye, ChevronRight } from 'lucide-react';
import DishDetailModal from './DishDetailModal';

function VegBadge({ isVeg }) {
  if (isVeg === true || isVeg === 1 || isVeg === 'veg') {
    return (
      <span
        title="Vegetarian"
        className="w-4 h-4 rounded-sm border border-emerald-600 flex items-center justify-center shrink-0 bg-white"
      >
        <span className="w-2 h-2 rounded-full bg-emerald-600" />
      </span>
    );
  }

  return (
    <span
      title="Non-Vegetarian"
      className="w-4 h-4 rounded-sm border border-rose-600 flex items-center justify-center shrink-0 bg-white"
    >
      <span className="w-2 h-2 rounded-full bg-rose-600" />
    </span>
  );
}

function formatPrice(price) {
  if (price === undefined || price === null) return '';
  const num = Number(price);
  if (isNaN(num)) return price;
  return num % 1 === 0 ? `₹${num}` : `₹${num.toFixed(2)}`;
}

export default function CategoryDishes({
  category,
  onBackToCategories,
}) {
  const [searchQuery, setSearchQuery] = useState('');
  const [dietaryFilter, setDietaryFilter] = useState('all'); // 'all' | 'veg' | 'non-veg'
  const [selectedDish, setSelectedDish] = useState(null);

  const items = useMemo(() => {
    return category?.foodItems || category?.items || [];
  }, [category]);

  const filteredDishes = useMemo(() => {
    return items.filter((dish) => {
      // Search filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesName = (dish.name || '').toLowerCase().includes(q);
        const matchesDesc = (dish.description || '').toLowerCase().includes(q);
        if (!matchesName && !matchesDesc) return false;
      }

      // Dietary filter
      if (dietaryFilter === 'veg') {
        const isVeg = dish.isVeg === true || dish.isVeg === 1 || dish.dietary === 'veg';
        if (!isVeg) return false;
      } else if (dietaryFilter === 'non-veg') {
        const isVeg = dish.isVeg === true || dish.isVeg === 1 || dish.dietary === 'veg';
        if (isVeg) return false;
      }

      return true;
    });
  }, [items, searchQuery, dietaryFilter]);

  return (
    <div className="w-full max-w-lg mx-auto px-4 sm:px-5 py-4 animate-in fade-in duration-200">
      {/* Top Header / Back Button */}
      <div className="flex items-center justify-between pb-3.5 border-b border-gray-200/80 mb-4">
        <button
          type="button"
          onClick={onBackToCategories}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-gray-200 bg-white text-gray-700 text-xs font-semibold hover:bg-gray-50 active:scale-95 transition shadow-sm"
        >
          <ArrowLeft className="w-3.5 h-3.5 stroke-[2.5]" />
          <span>All Categories</span>
        </button>

        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 font-sans">
          Selected Category
        </span>
      </div>

      {/* Category Title & Stats */}
      <div className="mb-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl sm:text-2xl font-serif font-bold text-gray-900 tracking-tight">
            {category?.name}
          </h2>
          <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-gray-100 text-gray-700 border border-gray-200">
            {items.length} {items.length === 1 ? 'item' : 'items'}
          </span>
        </div>
        <p className="text-xs text-gray-500 mt-1 font-sans">
          Tap any dish to view top & side view photos, pricing, and details.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="space-y-2.5 mb-5">
        {/* Search */}
        <div className="relative">
          <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={`Search within ${category?.name || 'this category'}...`}
            className="w-full pl-10 pr-4 py-2 bg-white border border-gray-200 rounded-xl text-xs text-gray-800 placeholder-gray-400 focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-400 transition shadow-sm"
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

        {/* Dietary Pills (All / Veg / Non-Veg) */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setDietaryFilter('all')}
            className={`px-3 py-1 rounded-lg text-xs font-semibold border transition ${
              dietaryFilter === 'all'
                ? 'bg-gray-800 text-white border-gray-800'
                : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50'
            }`}
          >
            All Items
          </button>
          <button
            type="button"
            onClick={() => setDietaryFilter('veg')}
            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold border transition ${
              dietaryFilter === 'veg'
                ? 'bg-emerald-50 text-emerald-800 border-emerald-300'
                : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50'
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-emerald-600" />
            <span>Veg Only</span>
          </button>
          <button
            type="button"
            onClick={() => setDietaryFilter('non-veg')}
            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold border transition ${
              dietaryFilter === 'non-veg'
                ? 'bg-rose-50 text-rose-800 border-rose-300'
                : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50'
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-rose-600" />
            <span>Non-Veg</span>
          </button>
        </div>
      </div>

      {/* Dishes List */}
      {filteredDishes.length === 0 ? (
        <div className="py-12 text-center bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
          <p className="text-xs font-semibold text-gray-600">No dishes match your selection</p>
          <p className="text-[11px] text-gray-400 mt-1">
            Try resetting your filters or search keywords.
          </p>
        </div>
      ) : (
        <div className="space-y-2.5">
          {filteredDishes.map((dish, idx) => {
            const isAvailable = dish.isAvailable !== false;
            const isVeg = dish.isVeg === true || dish.isVeg === 1 || dish.dietary === 'veg';

            return (
              <div
                key={dish.id || dish._id || `${dish.name}-${idx}`}
                onClick={() => setSelectedDish(dish)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setSelectedDish(dish);
                  }
                }}
                className="group p-4 bg-white border border-gray-200/90 rounded-2xl shadow-[0_2px_8px_rgba(0,0,0,0.03)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] hover:border-gray-300 transition-all duration-200 active:scale-[0.99] flex items-center justify-between gap-3 cursor-pointer text-left select-none"
              >
                {/* Dish Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <VegBadge isVeg={isVeg} />
                    <h3 className="text-sm font-bold text-gray-900 font-sans tracking-tight truncate group-hover:text-black">
                      {dish.name}
                    </h3>
                  </div>

                  {dish.description && (
                    <p className="text-xs text-gray-500 line-clamp-1 mt-0.5 font-sans">
                      {dish.description}
                    </p>
                  )}

                  <div className="mt-2 flex items-center gap-2">
                    <span className="text-sm font-bold text-gray-900 font-sans">
                      {formatPrice(dish.price)}
                    </span>

                    {!isAvailable && (
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-gray-100 text-gray-500 border border-gray-200">
                        Sold Out
                      </span>
                    )}

                    <span className="text-[10px] text-gray-400 font-medium ml-auto flex items-center gap-1 group-hover:text-gray-600 transition-colors">
                      <span>Top & Side View</span>
                      <ChevronRight className="w-3 h-3 stroke-[2.5]" />
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Dish Top View & Side View Detail Modal */}
      <DishDetailModal
        dish={selectedDish}
        onClose={() => setSelectedDish(null)}
      />
    </div>
  );
}
