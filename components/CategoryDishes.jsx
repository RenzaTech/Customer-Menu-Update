'use client';

import { useState, useMemo } from 'react';
<<<<<<< HEAD
import { ArrowLeft, Search, ChevronRight, ShoppingCart, Plus, Minus, X } from 'lucide-react';
import DishDetailModal, { getDishImagePair } from './DishDetailModal';
=======
import { ArrowLeft, Search, Eye, ChevronRight } from 'lucide-react';
import DishDetailModal from './DishDetailModal';
>>>>>>> 7044eeac4e7623fa21490389e462adc2c613dc9d

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
<<<<<<< HEAD
  const [cart, setCart] = useState({});
  const [cartOpen, setCartOpen] = useState(false);

  const addToCart = (dish) => {
    setCart((current) => ({ ...current, [dish.id || dish._id || dish.name]: { dish, quantity: (current[dish.id || dish._id || dish.name]?.quantity || 0) + 1 } }));
  };
  const changeQuantity = (key, amount) => setCart((current) => {
    const quantity = (current[key]?.quantity || 0) + amount;
    if (quantity <= 0) { const next = { ...current }; delete next[key]; return next; }
    return { ...current, [key]: { ...current[key], quantity } };
  });
  const cartItems = Object.entries(cart);
  const cartCount = cartItems.reduce((sum, [, item]) => sum + item.quantity, 0);
  const cartTotal = cartItems.reduce((sum, [, item]) => sum + (Number(item.dish.price) || 0) * item.quantity, 0);
=======
>>>>>>> 7044eeac4e7623fa21490389e462adc2c613dc9d

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
<<<<<<< HEAD
          Browse dishes and add your choices to the cart.
        </p>
      </div>

      <button type="button" onClick={() => setCartOpen(true)} className="fixed bottom-5 right-5 z-30 inline-flex items-center gap-2 rounded-full bg-gray-900 px-4 py-3 text-sm font-semibold text-white shadow-xl hover:bg-black">
        <ShoppingCart className="w-4 h-4" /> Cart <span className="rounded-full bg-white px-2 py-0.5 text-xs text-gray-900">{cartCount}</span>
      </button>

=======
          Tap any dish to view top & side view photos, pricing, and details.
        </p>
      </div>

>>>>>>> 7044eeac4e7623fa21490389e462adc2c613dc9d
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

<<<<<<< HEAD
            const image = getDishImagePair(dish).sideView;
            const key = dish.id || dish._id || dish.name;
            const quantity = cart[key]?.quantity || 0;
=======
>>>>>>> 7044eeac4e7623fa21490389e462adc2c613dc9d
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
<<<<<<< HEAD
                className="group p-3 bg-white border border-gray-200/90 rounded-2xl shadow-[0_2px_8px_rgba(0,0,0,0.03)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] hover:border-gray-300 transition-all duration-200 flex items-center gap-3 text-left select-none"
              >
                <img src={image} alt={dish.name} className="h-20 w-20 shrink-0 rounded-xl object-cover" />
=======
                className="group p-4 bg-white border border-gray-200/90 rounded-2xl shadow-[0_2px_8px_rgba(0,0,0,0.03)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] hover:border-gray-300 transition-all duration-200 active:scale-[0.99] flex items-center justify-between gap-3 cursor-pointer text-left select-none"
              >
>>>>>>> 7044eeac4e7623fa21490389e462adc2c613dc9d
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
<<<<<<< HEAD
                      <span>Details</span>
=======
                      <span>Top & Side View</span>
>>>>>>> 7044eeac4e7623fa21490389e462adc2c613dc9d
                      <ChevronRight className="w-3 h-3 stroke-[2.5]" />
                    </span>
                  </div>
                </div>
<<<<<<< HEAD
                <button type="button" disabled={!isAvailable} onClick={(e) => { e.stopPropagation(); addToCart(dish); }} className="shrink-0 rounded-xl bg-amber-500 px-3 py-2 text-xs font-bold text-white hover:bg-amber-600 disabled:bg-gray-300">{quantity ? `Added ${quantity}` : 'Add'}</button>
=======
>>>>>>> 7044eeac4e7623fa21490389e462adc2c613dc9d
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
<<<<<<< HEAD
      {cartOpen && <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/40 sm:items-center sm:p-4" onClick={() => setCartOpen(false)}>
        <section className="w-full max-w-md rounded-t-3xl bg-white p-5 shadow-2xl sm:rounded-2xl" onClick={(e) => e.stopPropagation()}>
          <div className="mb-4 flex items-center justify-between"><h2 className="text-lg font-bold">Your cart</h2><button onClick={() => setCartOpen(false)} aria-label="Close cart"><X className="h-5 w-5" /></button></div>
          {cartItems.length === 0 ? <p className="py-8 text-center text-sm text-gray-500">Your cart is empty.</p> : <div className="max-h-[55vh] space-y-3 overflow-y-auto">{cartItems.map(([key, item]) => <div key={key} className="flex items-center gap-3 border-b border-gray-100 pb-3"><img src={getDishImagePair(item.dish).sideView} alt="" className="h-12 w-12 rounded-lg object-cover"/><div className="min-w-0 flex-1"><p className="truncate text-sm font-semibold">{item.dish.name}</p><p className="text-xs text-gray-500">{formatPrice(item.dish.price)}</p></div><div className="flex items-center gap-2"><button onClick={() => changeQuantity(key, -1)} aria-label="Remove one"><Minus className="h-4 w-4"/></button><span className="text-sm font-semibold">{item.quantity}</span><button onClick={() => changeQuantity(key, 1)} aria-label="Add one"><Plus className="h-4 w-4"/></button></div></div>)}</div>}
          {cartItems.length > 0 && <div className="mt-4 flex items-center justify-between border-t pt-4 font-bold"><span>Total</span><span>{formatPrice(cartTotal)}</span></div>}
          {cartItems.length > 0 && <p className="mt-4 rounded-xl bg-amber-50 px-4 py-3 text-center text-sm font-medium text-amber-900">Please call a waiter to take your order.</p>}
        </section>
      </div>}
=======
>>>>>>> 7044eeac4e7623fa21490389e462adc2c613dc9d
    </div>
  );
}
