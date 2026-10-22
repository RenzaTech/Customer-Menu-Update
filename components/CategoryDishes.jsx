'use client';

import { useState, useMemo } from 'react';
import {
  ArrowLeft,
  Search,
  ChevronRight,
  X,
} from 'lucide-react';
import DishDetailModal, { getDishImagePair } from './DishDetailModal';

function VegBadge({ isVeg }) {
  if (isVeg === true || isVeg === 1 || isVeg === 'veg') {
    return (
      <span
        title="Vegetarian"
        className="w-4 h-4 rounded-sm border border-emerald-600 flex items-center justify-center shrink-0 bg-white shadow-2xs"
      >
        <span className="w-2 h-2 rounded-full bg-emerald-600" />
      </span>
    );
  }

  return (
    <span
      title="Non-Vegetarian"
      className="w-4 h-4 rounded-sm border border-rose-600 flex items-center justify-center shrink-0 bg-white shadow-2xs"
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
    <div className="relative w-full px-4 pt-3 pb-0 animate-in fade-in duration-200 selection:bg-[#FFBB17]/30 overflow-hidden">
      {/* 1. Header: Back to Categories + MENU ITEMS */}
      <div className="relative z-10 flex items-center justify-between pb-3 border-b border-[#E8EAF0] mb-3.5">
        <button
          type="button"
          onClick={onBackToCategories}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-[#E8EAF0] bg-white text-[#182238] text-xs font-semibold shadow-[0_1px_3px_rgba(24,34,56,0.04)] hover:bg-[#FFF5D9]/40 active:scale-95 transition"
        >
          <ArrowLeft className="w-3.5 h-3.5 text-[#182238] stroke-[2.2]" />
          <span>All Categories</span>
        </button>

        <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#9AA3B2] font-sans">
          MENU ITEMS
        </span>
      </div>

      {/* 2. Page Heading & Subtitle */}
      <div className="relative z-10 mb-3.5">
        <div className="flex items-center gap-2 flex-wrap">
          <h1 className="text-2xl sm:text-[26px] font-extrabold tracking-tight text-[#182238] leading-tight font-sans">
            {category?.name}
          </h1>
          <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-[#FFF5D9] text-[#A16207] border border-[#FFE3A0]/70 shrink-0">
            {items.length} {items.length === 1 ? 'dish' : 'dishes'}
          </span>
        </div>
        <p className="text-xs sm:text-[13px] text-[#737D8D] mt-1 leading-relaxed font-normal">
          Explore freshly prepared dishes available in {category?.name || 'this category'}.
        </p>
      </div>

      {/* 3. Search Bar with Signature Gold Border */}
      <div className="relative z-10 mb-3">
        <div className="relative w-full h-[46px] rounded-2xl bg-white border-2 border-[#FFE082] focus-within:border-[#FFBB17] shadow-[0_2px_8px_rgba(255,187,23,0.08)] transition flex items-center">
          <Search className="w-4 h-4 text-[#9AA3B2] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={`Search dishes in ${category?.name || 'this category'}...`}
            className="w-full h-full pl-10 pr-9 bg-transparent rounded-2xl text-xs sm:text-[13px] text-[#182238] placeholder-[#9AA3B2] focus:outline-none"
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
      </div>

      {/* 4. Dietary Filter Tabs (Signature SCANZAA Styling) */}
      <div className="relative z-10 flex items-center gap-2 mb-4">
        <button
          type="button"
          onClick={() => setDietaryFilter('all')}
          className={`h-[34px] px-3.5 rounded-xl text-xs font-bold border transition-all active:scale-95 font-sans shadow-[0_1px_3px_rgba(24,34,56,0.04)] ${
            dietaryFilter === 'all'
              ? 'bg-[#182238] text-white border-[#182238]'
              : 'bg-white text-[#737D8D] border-[#E8EAF0] hover:bg-[#FFF5D9]/30 hover:text-[#182238]'
          }`}
        >
          All Items
        </button>
        <button
          type="button"
          onClick={() => setDietaryFilter('veg')}
          className={`h-[34px] inline-flex items-center gap-1.5 px-3.5 rounded-xl text-xs font-bold border transition-all active:scale-95 font-sans shadow-[0_1px_3px_rgba(24,34,56,0.04)] ${
            dietaryFilter === 'veg'
              ? 'bg-[#F0FFF6] text-[#16B86A] border-[#16B86A]/40'
              : 'bg-white text-[#737D8D] border-[#E8EAF0] hover:bg-[#FFF5D9]/30 hover:text-[#182238]'
          }`}
        >
          <span className="w-2 h-2 rounded-full bg-[#16B86A]" />
          <span>Veg Only</span>
        </button>
        <button
          type="button"
          onClick={() => setDietaryFilter('non-veg')}
          className={`h-[34px] inline-flex items-center gap-1.5 px-3.5 rounded-xl text-xs font-bold border transition-all active:scale-95 font-sans shadow-[0_1px_3px_rgba(24,34,56,0.04)] ${
            dietaryFilter === 'non-veg'
              ? 'bg-[#FFF1F2] text-[#E11D48] border-[#E11D48]/30'
              : 'bg-white text-[#737D8D] border-[#E8EAF0] hover:bg-[#FFF5D9]/30 hover:text-[#182238]'
          }`}
        >
          <span className="w-2 h-2 rounded-full bg-[#E11D48]" />
          <span>Non-Veg</span>
        </button>
      </div>

      {/* 5. Dishes List */}
      {filteredDishes.length === 0 ? (
        <div className="relative z-10 py-12 text-center bg-white border border-[#E8EAF0] rounded-2xl p-6 shadow-[0_2px_8px_rgba(24,34,56,0.04)]">
          <p className="text-xs font-semibold text-[#182238] font-sans">No dishes match your selection</p>
          <p className="text-[11px] text-[#737D8D] mt-1 font-sans">
            Try resetting your filters or search keywords.
          </p>
          <button
            type="button"
            onClick={() => {
              setSearchQuery('');
              setDietaryFilter('all');
            }}
            className="mt-3 px-3 py-1 bg-[#FFF5D9] text-[#8A5700] text-xs font-semibold rounded-lg hover:bg-[#FFE3A0] transition"
          >
            Clear Filters
          </button>
        </div>
      ) : (
        <div className="relative z-10 space-y-2.5">
          {filteredDishes.map((dish, idx) => {
            const isAvailable = dish.isAvailable !== false;
            const isVeg = dish.isVeg === true || dish.isVeg === 1 || dish.dietary === 'veg';
            const { imageUrl } = getDishImagePair(dish);

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
                className="group p-3 sm:p-3.5 bg-white border border-[#E8EAF0] rounded-2xl shadow-[0_2px_8px_rgba(24,34,56,0.04)] hover:border-[#FFBB17] hover:shadow-[0_4px_14px_rgba(255,187,23,0.14)] active:scale-[0.98] transition-all duration-150 flex items-center justify-between gap-3 text-left select-none cursor-pointer"
              >
                {/* Left: Dish Thumbnail */}
                <div className="relative w-20 h-20 sm:w-22 sm:h-22 rounded-2xl overflow-hidden bg-[#FFF6E3] shrink-0 border border-[#FFE3A0]/60">
                  <img
                    src={imageUrl}
                    alt={dish.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-1.5 left-1.5 bg-white/95 backdrop-blur-xs rounded-sm p-0.5 shadow-2xs">
                    <VegBadge isVeg={isVeg} />
                  </div>
                </div>

                {/* Center: Dish Info */}
                <div className="flex-1 min-w-0 pr-1 flex flex-col justify-center">
                  <h3 className="text-sm sm:text-[15px] font-bold text-[#182238] font-sans tracking-tight truncate group-hover:text-black transition-colors">
                    {dish.name}
                  </h3>

                  {dish.description ? (
                    <p className="text-[11px] sm:text-xs text-[#737D8D] line-clamp-1 mt-0.5 font-sans leading-relaxed">
                      {dish.description}
                    </p>
                  ) : (
                    <p className="text-[11px] text-[#9AA3B2] mt-0.5 font-sans">
                      Freshly prepared on order
                    </p>
                  )}

                  <div className="mt-1.5 flex items-center gap-2">
                    <span className="text-[14.5px] sm:text-[15.5px] font-extrabold text-[#182238] font-sans">
                      {formatPrice(dish.price)}
                    </span>

                    {!isAvailable && (
                      <span className="text-[9.5px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-gray-100 text-[#737D8D] border border-[#E8EAF0]">
                        Sold Out
                      </span>
                    )}
                  </div>
                </div>

                {/* Right: View details chevron */}
                <div className="shrink-0 flex items-center pr-1 text-[#9AA3B2] group-hover:text-[#182238] transition-colors">
                  <ChevronRight className="w-4 h-4 stroke-[2.2] group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* 6. Bottom Decorative Waves & Botanical Leaves */}
      <div className="relative -mx-4 mt-8 -mb-1 select-none pointer-events-none overflow-hidden">
        <img
          src="/categories/bottom-waves-leaves.png"
          alt="Decorative leaves and golden waves"
          className="w-full h-auto object-cover block"
        />
      </div>

      {/* Dish Detail Modal */}
      <DishDetailModal
        dish={selectedDish}
        onClose={() => setSelectedDish(null)}
      />
    </div>
  );
}
