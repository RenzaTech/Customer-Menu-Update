'use client';

import { useState } from 'react';
import { X, Check, Sparkles, Eye, Layers, Plus, ShoppingBag } from 'lucide-react';

// Curated high quality photographic pairs (Top View & Side View) for cafe categories
export const FOOD_IMAGE_PAIRS = {
  omelette: {
    side: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80',
    top: 'https://images.unsplash.com/photo-1510693206972-df098062cb71?auto=format&fit=crop&w=800&q=80',
    desc: 'Fluffy eggs beaten with diced red onions, fresh green chillies, aromatic coriander, and served hot with golden toasted bread.',
  },
  sandwich: {
    side: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=800&q=80',
    top: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80',
    desc: 'Crisp toasted bread layered with fresh garden vegetables, creamy spread, herbs, and melted cheese toasted to golden perfection.',
  },
  toast: {
    side: 'https://images.unsplash.com/photo-1584776296944-ab6fb57b0bdd?auto=format&fit=crop&w=800&q=80',
    top: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80',
    desc: 'Thick sliced artisan bread toasted with buttery spread, herbs, and rich melted cheese.',
  },
  fries: {
    side: 'https://images.unsplash.com/photo-1576107232684-1279f3908594?auto=format&fit=crop&w=800&q=80',
    top: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=800&q=80',
    desc: 'Golden crisp hand-cut potato fries lightly salted and seasoned with cafe spices.',
  },
  maggi: {
    side: 'https://images.unsplash.com/photo-1612927601601-6638404737ce?auto=format&fit=crop&w=800&q=80',
    top: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=800&q=80',
    desc: 'Classic masala noodles tossed with seasoned vegetables, butter, and cafe spice mix.',
  },
  momos: {
    side: 'https://images.unsplash.com/photo-1625220194771-7ebdea0b70b9?auto=format&fit=crop&w=800&q=80',
    top: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=800&q=80',
    desc: 'Delicate steamed dumplings stuffed with finely minced fillings and served with fiery red chutney.',
  },
  juice: {
    side: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=800&q=80',
    top: 'https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&w=800&q=80',
    desc: '100% freshly pressed seasonal fruit juice served chilled with zero artificial preservatives.',
  },
  shake: {
    side: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=800&q=80',
    top: 'https://images.unsplash.com/photo-1579954115545-a95591f28bfc?auto=format&fit=crop&w=800&q=80',
    desc: 'Thick, creamy blend of rich ice cream, whole milk, and decadent flavor syrups.',
  },
  lassi: {
    side: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=800&q=80',
    top: 'https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&w=800&q=80',
    desc: 'Traditional chilled churned yogurt beverage flavored with cardamom and sweet cream.',
  },
  mojito: {
    side: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80',
    top: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80',
    desc: 'Refreshing muddled mint leaves, zesty lime wedges, sparkling soda, and crushed ice.',
  },
  iceCream: {
    side: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=800&q=80',
    top: 'https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?auto=format&fit=crop&w=800&q=80',
    desc: 'Velvety artisanal ice cream crafted with fresh dairy and natural flavors.',
  },
  falooda: {
    side: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=800&q=80',
    top: 'https://images.unsplash.com/photo-1579954115545-a95591f28bfc?auto=format&fit=crop&w=800&q=80',
    desc: 'Royal dessert beverage layered with rose syrup, vermicelli, sabja seeds, chilled milk, and ice cream.',
  },
  default: {
    side: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80',
    top: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80',
    desc: 'Freshly prepared specialty dish crafted with premium ingredients and authentic cafe recipe.',
  },
};

export function getDishImagePair(dish = {}) {
  const name = (dish.name || '').toLowerCase();
  const desc = (dish.description || '').toLowerCase();
  const combined = `${name} ${desc}`;

  let pair = FOOD_IMAGE_PAIRS.default;

  if (combined.includes('omelette') || combined.includes('egg')) pair = FOOD_IMAGE_PAIRS.omelette;
  else if (combined.includes('sandwich')) pair = FOOD_IMAGE_PAIRS.sandwich;
  else if (combined.includes('toast')) pair = FOOD_IMAGE_PAIRS.toast;
  else if (combined.includes('fries') || combined.includes('nugget')) pair = FOOD_IMAGE_PAIRS.fries;
  else if (combined.includes('maggi') || combined.includes('noodle')) pair = FOOD_IMAGE_PAIRS.maggi;
  else if (combined.includes('momo')) pair = FOOD_IMAGE_PAIRS.momos;
  else if (combined.includes('juice')) pair = FOOD_IMAGE_PAIRS.juice;
  else if (combined.includes('shake')) pair = FOOD_IMAGE_PAIRS.shake;
  else if (combined.includes('lassi')) pair = FOOD_IMAGE_PAIRS.lassi;
  else if (combined.includes('mojito')) pair = FOOD_IMAGE_PAIRS.mojito;
  else if (combined.includes('falooda')) pair = FOOD_IMAGE_PAIRS.falooda;
  else if (combined.includes('ice cream')) pair = FOOD_IMAGE_PAIRS.iceCream;

  // Use dish's own topViewImageUrl and imageUrl/sideImageUrl if available
  const topView = dish.topViewImageUrl || dish.top_view_image_url || pair.top;
  const sideView = dish.sideImageUrl || dish.side_view_image_url || dish.imageUrl || pair.side;
  const description = dish.description || pair.desc;

  return { topView, sideView, description };
}

function formatPrice(price) {
  if (price === undefined || price === null) return '';
  const num = Number(price);
  if (isNaN(num)) return price;
  return num % 1 === 0 ? `₹${num}` : `₹${num.toFixed(2)}`;
}

export default function DishDetailModal({ dish, onClose, onAddToCart }) {
  const [activeView, setActiveView] = useState('side'); // 'side' | 'top'
  const [justAdded, setJustAdded] = useState(false);

  if (!dish) return null;

  const isVeg = dish.isVeg === true || dish.isVeg === 1 || dish.dietary === 'veg';
  const { topView, sideView, description } = getDishImagePair(dish);
  const currentImageUrl = activeView === 'top' ? topView : sideView;

  const handleAdd = () => {
    if (onAddToCart) {
      onAddToCart(dish);
      setJustAdded(true);
      setTimeout(() => setJustAdded(false), 1200);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/45 backdrop-blur-sm transition-opacity"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md bg-white rounded-t-3xl sm:rounded-2xl overflow-hidden shadow-2xl border border-gray-200 text-gray-800 animate-in fade-in slide-in-from-bottom duration-200 max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Image Showcase with View Angle Toggle */}
        <div className="relative w-full h-64 sm:h-72 bg-gray-100 shrink-0 overflow-hidden">
          <img
            key={currentImageUrl}
            src={currentImageUrl}
            alt={`${dish.name} - ${activeView} view`}
            className="w-full h-full object-cover transition-all duration-300"
          />

          {/* Close Button Floating on Image */}
          <button
            type="button"
            onClick={onClose}
            className="absolute top-3.5 right-3.5 w-9 h-9 rounded-full bg-white/95 text-gray-700 shadow-md flex items-center justify-center hover:bg-white hover:text-black transition"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          {/* View Angle Pill Switcher Floating at Bottom of Image with #FFBB17 */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 p-1 bg-white/95 backdrop-blur-md rounded-full shadow-lg border border-gray-200/90">
            <button
              type="button"
              onClick={() => setActiveView('side')}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold transition-all ${
                activeView === 'side'
                  ? 'bg-[#FFBB17] text-gray-950 shadow-xs'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
              }`}
            >
              <span>Side View</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveView('top')}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold transition-all ${
                activeView === 'top'
                  ? 'bg-[#FFBB17] text-gray-950 shadow-xs'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
              }`}
            >
              <span>Top View</span>
            </button>
          </div>
        </div>

        {/* Dish Content Body */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-4">
          {/* Header Row: Title & Veg badge */}
          <div>
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-2">
                {/* Standard Veg / Non-Veg Indicator */}
                <span
                  title={isVeg ? 'Vegetarian' : 'Non-Vegetarian'}
                  className={`w-4 h-4 rounded-sm border flex items-center justify-center shrink-0 bg-white ${
                    isVeg ? 'border-emerald-600' : 'border-rose-600'
                  }`}
                >
                  <span
                    className={`w-2 h-2 rounded-full ${
                      isVeg ? 'bg-emerald-600' : 'bg-rose-600'
                    }`}
                  />
                </span>

                <h2 className="text-lg sm:text-xl font-serif font-bold text-gray-900 tracking-tight">
                  {dish.name}
                </h2>
              </div>

              {/* Price */}
              <div className="text-right shrink-0">
                <span className="text-lg sm:text-xl font-bold text-gray-900 font-sans">
                  {formatPrice(dish.price)}
                </span>
              </div>
            </div>

            {/* Availability Pill */}
            <div className="mt-2 flex items-center gap-2">
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#FFF8E7] text-[#92400E] border border-[#FFBB17]/40">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FFBB17]" />
                Freshly Prepared
              </span>
              <span className="text-xs text-gray-400 font-sans">
                Active Angle: <strong className="text-gray-800 capitalize font-bold">{activeView} View</strong>
              </span>
            </div>
          </div>

          {/* Description Section */}
          <div className="pt-2 border-t border-gray-100">
            <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400 block mb-1 font-sans">
              About this dish
            </span>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-sans">
              {description}
            </p>
          </div>

          {/* Action Buttons: Add to Cart + Close */}
          <div className="pt-3 flex items-center gap-2">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 py-3 px-4 rounded-xl border border-gray-200 text-gray-700 text-xs font-bold hover:bg-gray-50 transition"
            >
              Back
            </button>

            {onAddToCart && (
              <button
                type="button"
                onClick={handleAdd}
                className="flex-2 py-3 px-4 rounded-xl bg-[#FFBB17] hover:bg-[#E5A710] text-gray-950 text-xs font-bold transition shadow-xs flex items-center justify-center gap-1.5 active:scale-95"
              >
                {justAdded ? (
                  <>
                    <Check className="w-4 h-4 stroke-[2.5]" />
                    <span>Added to Order!</span>
                  </>
                ) : (
                  <>
                    <Plus className="w-4 h-4 stroke-[2.5]" />
                    <span>Add to Order ({formatPrice(dish.price)})</span>
                  </>
                )}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
