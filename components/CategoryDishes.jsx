'use client';

import { useState, useMemo } from 'react';
import {
  ArrowLeft,
  Search,
  ChevronRight,
  ShoppingBag,
  Plus,
  Minus,
  Eye,
} from 'lucide-react';
import DishDetailModal, { getDishImagePair } from './DishDetailModal';
import CartDrawer from './CartDrawer';

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
  const [cart, setCart] = useState({});
  const [cartOpen, setCartOpen] = useState(false);

  const addToCart = (dish) => {
    const key = dish.id || dish._id || dish.name;
    setCart((current) => ({
      ...current,
      [key]: {
        dish,
        quantity: (current[key]?.quantity || 0) + 1,
      },
    }));
  };

  const changeQuantity = (key, amount) => {
    setCart((current) => {
      const quantity = (current[key]?.quantity || 0) + amount;
      if (quantity <= 0) {
        const next = { ...current };
        delete next[key];
        return next;
      }
      return { ...current, [key]: { ...current[key], quantity } };
    });
  };

  const clearCart = () => setCart({});

  const cartItems = Object.entries(cart);
  const cartCount = cartItems.reduce((sum, [, item]) => sum + item.quantity, 0);
  const cartTotal = cartItems.reduce(
    (sum, [, item]) => sum + (Number(item.dish.price) || 0) * item.quantity,
    0
  );

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
    <div className="relative w-full max-w-lg mx-auto px-4 sm:px-5 py-4 pb-24 animate-in fade-in duration-200">
      {/* Top Header / Back Button & Cart Indicator */}
      <div className="flex items-center justify-between pb-3.5 border-b border-gray-200/80 mb-4">
        <button
          type="button"
          onClick={onBackToCategories}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-gray-200 bg-white text-gray-800 text-xs font-semibold hover:bg-gray-50 active:scale-95 transition shadow-xs"
        >
          <ArrowLeft className="w-3.5 h-3.5 stroke-[2.5]" />
          <span>All Categories</span>
        </button>

        {/* Top Cart Shortcut Pill */}
        <button
          type="button"
          onClick={() => setCartOpen(true)}
          className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs font-bold transition shadow-xs ${
            cartCount > 0
              ? 'bg-[#FFBB17] text-gray-950 border-[#FFBB17] hover:bg-[#E5A710]'
              : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50'
          }`}
        >
          <ShoppingBag className="w-3.5 h-3.5 stroke-[2.2]" />
          <span>Cart</span>
          {cartCount > 0 && (
            <span className="w-5 h-5 rounded-full bg-gray-950 text-white text-[10px] flex items-center justify-center font-bold">
              {cartCount}
            </span>
          )}
        </button>
      </div>

      {/* Category Title & Stats */}
      <div className="mb-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl sm:text-2xl font-serif font-bold text-gray-900 tracking-tight">
            {category?.name}
          </h2>
          <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-[#FFF8E7] text-[#92400E] border border-[#FFBB17]/30">
            {items.length} {items.length === 1 ? 'item' : 'items'}
          </span>
        </div>
        <p className="text-xs text-gray-500 mt-1 font-sans">
          Tap any dish to inspect Top & Side views, or tap &ldquo;+ Add&rdquo; to order.
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
            className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-xl text-xs text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#FFBB17] focus:ring-2 focus:ring-[#FFBB17]/20 transition shadow-xs"
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
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold border transition ${
              dietaryFilter === 'all'
                ? 'bg-gray-900 text-white border-gray-900 shadow-xs'
                : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50'
            }`}
          >
            All Items
          </button>
          <button
            type="button"
            onClick={() => setDietaryFilter('veg')}
            className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold border transition ${
              dietaryFilter === 'veg'
                ? 'bg-emerald-50 text-emerald-800 border-emerald-400 shadow-xs'
                : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50'
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-emerald-600" />
            <span>Veg Only</span>
          </button>
          <button
            type="button"
            onClick={() => setDietaryFilter('non-veg')}
            className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold border transition ${
              dietaryFilter === 'non-veg'
                ? 'bg-rose-50 text-rose-800 border-rose-400 shadow-xs'
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
        <div className="py-12 text-center bg-white border border-gray-200 rounded-2xl p-6 shadow-xs">
          <p className="text-xs font-semibold text-gray-600">No dishes match your selection</p>
          <p className="text-[11px] text-gray-400 mt-1">
            Try resetting your filters or search keywords.
          </p>
        </div>
      ) : (
        <div className="space-y-3">
          {filteredDishes.map((dish, idx) => {
            const isAvailable = dish.isAvailable !== false;
            const isVeg = dish.isVeg === true || dish.isVeg === 1 || dish.dietary === 'veg';
            const image = getDishImagePair(dish).sideView;
            const key = dish.id || dish._id || dish.name;
            const quantity = cart[key]?.quantity || 0;

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
                className="group p-3 sm:p-3.5 bg-white border border-gray-200/90 rounded-2xl shadow-[0_2px_8px_rgba(0,0,0,0.03)] hover:shadow-[0_4px_16px_rgba(255,187,23,0.12)] hover:border-[#FFBB17]/60 transition-all duration-200 flex items-center gap-3 text-left select-none cursor-pointer"
              >
                {/* Dish Thumbnail */}
                <div className="relative w-20 h-20 sm:w-22 sm:h-22 rounded-xl overflow-hidden bg-gray-100 shrink-0 border border-gray-200/80">
                  <img
                    src={image}
                    alt={dish.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-1 left-1 bg-white/90 backdrop-blur-xs rounded-sm p-0.5">
                    <VegBadge isVeg={isVeg} />
                  </div>
                </div>

                {/* Dish Info */}
                <div className="flex-1 min-w-0 pr-1">
                  <h3 className="text-sm font-bold text-gray-900 font-sans tracking-tight truncate group-hover:text-black">
                    {dish.name}
                  </h3>

                  {dish.description && (
                    <p className="text-xs text-gray-500 line-clamp-1 mt-0.5 font-sans">
                      {dish.description}
                    </p>
                  )}

                  <div className="mt-2 flex items-center justify-between">
                    <span className="text-sm font-bold text-gray-900 font-sans">
                      {formatPrice(dish.price)}
                    </span>

                    {!isAvailable && (
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-gray-100 text-gray-500 border border-gray-200">
                        Sold Out
                      </span>
                    )}

                    <span className="text-[10px] font-medium text-amber-700 bg-[#FFF8E7] px-2 py-0.5 rounded-full border border-[#FFBB17]/30 flex items-center gap-0.5 group-hover:bg-[#FFBB17] group-hover:text-gray-950 transition-colors">
                      <span>Top & Side View</span>
                      <ChevronRight className="w-3 h-3 stroke-[2.5]" />
                    </span>
                  </div>
                </div>

                {/* Add to Cart / Quantity Stepper */}
                <div
                  className="shrink-0 flex items-center"
                  onClick={(e) => e.stopPropagation()}
                >
                  {quantity === 0 ? (
                    <button
                      type="button"
                      disabled={!isAvailable}
                      onClick={() => addToCart(dish)}
                      className="px-3.5 py-1.5 rounded-xl bg-[#FFBB17] hover:bg-[#E5A710] text-gray-950 font-bold text-xs shadow-xs transition active:scale-95 disabled:bg-gray-200 disabled:text-gray-400"
                    >
                      + ADD
                    </button>
                  ) : (
                    <div className="flex items-center gap-1.5 bg-[#FFF8E7] border border-[#FFBB17]/50 rounded-xl p-1 shadow-xs">
                      <button
                        type="button"
                        onClick={() => changeQuantity(key, -1)}
                        className="w-6 h-6 rounded-lg bg-white shadow-xs flex items-center justify-center text-gray-800 hover:bg-gray-100 transition active:scale-90"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3 stroke-[2.5]" />
                      </button>
                      <span className="text-xs font-bold text-gray-950 w-4 text-center font-sans">
                        {quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() => changeQuantity(key, 1)}
                        className="w-6 h-6 rounded-lg bg-[#FFBB17] text-gray-950 shadow-xs flex items-center justify-center hover:bg-[#E5A710] transition active:scale-90"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3 stroke-[2.5]" />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Modern Floating Sticky Bottom Cart Bar */}
      {cartCount > 0 && (
        <div className="fixed bottom-4 left-1/2 -translate-x-1/2 w-full max-w-[410px] px-3 z-40 animate-in slide-in-from-bottom duration-300">
          <div
            onClick={() => setCartOpen(true)}
            role="button"
            tabIndex={0}
            className="w-full p-3 bg-gray-950 text-white rounded-2xl shadow-2xl flex items-center justify-between cursor-pointer active:scale-[0.99] hover:bg-black transition border border-gray-800"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#FFBB17] text-gray-950 flex items-center justify-center font-bold shadow-xs">
                <ShoppingBag className="w-5 h-5 stroke-[2.2]" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="text-xs font-bold text-[#FFBB17] uppercase tracking-wider font-sans">
                    {cartCount} {cartCount === 1 ? 'item' : 'items'}
                  </span>
                  <span className="text-gray-500">•</span>
                  <span className="text-sm font-bold text-white font-sans">
                    {formatPrice(cartTotal)}
                  </span>
                </div>
                <span className="text-[10px] text-gray-400 font-sans block">
                  Tap to view order summary
                </span>
              </div>
            </div>

            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#FFBB17] text-gray-950 font-bold text-xs shadow-xs hover:bg-[#E5A710] transition">
              <span>View Cart</span>
              <ChevronRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </div>
          </div>
        </div>
      )}

      {/* Dish Top View & Side View Detail Modal */}
      <DishDetailModal
        dish={selectedDish}
        onClose={() => setSelectedDish(null)}
        onAddToCart={addToCart}
      />

      {/* Modern Cart Drawer */}
      <CartDrawer
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        cart={cart}
        onUpdateQuantity={changeQuantity}
        onClearCart={clearCart}
      />
    </div>
  );
}
