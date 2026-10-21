'use client';

import { useState, useEffect } from 'react';
import { BookOpen, MessageSquareHeart, Star } from 'lucide-react';
import PortalHeader from './PortalHeader';
import ActionCard from './ActionCard';
import FeedbackPage from './FeedbackPage';
import ReviewModal from './ReviewModal';
import PortalFooter from './PortalFooter';
import CategoryList from './CategoryList';
import CategoryDishes from './CategoryDishes';
import fallbackMenuData from '../data/anbude-cafe-menu.json';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

export default function PortalClient({ params, initialView = 'hub' }) {
  const slug = params?.slug || 'anbude-cafe';

  const [restaurant, setRestaurant] = useState(null);
  const [categories, setCategories] = useState([]);
  const [currentView, setCurrentView] = useState(initialView); // 'hub' | 'categories' | 'dishes' | 'feedback'
  const [selectedCategory, setSelectedCategory] = useState(null);

  const [reviewOpen, setReviewOpen] = useState(false);

  useEffect(() => {
    let isMounted = true;

    async function fetchRestaurantData() {
      try {
        const res = await fetch(`${API_URL}/api/menu/${slug}`, {
          cache: 'no-store',
        });
        if (res.ok) {
          const data = await res.json();
          if (isMounted && data) {
            setRestaurant(data.restaurant || data);
            setCategories(data.categories || []);
            return;
          }
        }
      } catch (err) {
        // Fallback silently if offline or API is down
      }

      // Use local fallback data
      if (isMounted) {
        setRestaurant(fallbackMenuData.restaurant || fallbackMenuData);
        setCategories(fallbackMenuData.categories || []);
      }
    }

    fetchRestaurantData();

    return () => {
      isMounted = false;
    };
  }, [slug]);

  const restaurantName = restaurant?.name || "Anbu'de Cafe";
  const googleReviewUrl =
    restaurant?.googleReviewUrl ||
    'https://maps.google.com/?q=Anbu+cafe+Maraimalai+Nagar';

  // Navigation handlers
  const handleOpenMenu = () => {
    setCurrentView('categories');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenFeedback = () => {
    setCurrentView('feedback');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
    setCurrentView('dishes');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToCategories = () => {
    setCurrentView('categories');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToHub = () => {
    setCurrentView('hub');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen w-full bg-[#F6F3EC] sm:py-6 sm:px-4 flex justify-center items-start text-slate-900 font-sans selection:bg-[#FFBB17]/30 selection:text-amber-950">
      {/* Mobile Device Viewport Mockup on Desktop, 100% Full-bleed on Mobile */}
      <div className="w-full max-w-[430px] bg-[#FFFDF9] min-h-screen sm:min-h-[850px] sm:rounded-[32px] sm:shadow-[0_12px_40px_rgba(0,0,0,0.08)] overflow-hidden border-0 sm:border sm:border-[#EBE5D8] flex flex-col justify-between transition-all">
        <div className="w-full">
          {/* VIEW 1: Main Dining Hub */}
          {currentView === 'hub' && (
            <>
              <PortalHeader restaurant={restaurant} googleReviewUrl={googleReviewUrl} />

              <main className="w-full px-4 sm:px-5 pt-2 pb-6 space-y-3">
                {/* Action Card 1: View Menu */}
                <ActionCard
                  icon={BookOpen}
                  variant="yellow"
                  title="View Menu"
                  subtitle="Browse categories & freshly prepared dishes"
                  badgeText={`${categories.length || 16} CATEGORIES`}
                  illustration={
                    <div className="relative w-15 h-15 sm:w-16 sm:h-16 shrink-0 rounded-full overflow-hidden border-2 border-white shadow-md">
                      <img
                        src="https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=260&q=80"
                        alt="View menu dishes"
                        className="w-full h-full object-cover scale-110"
                      />
                    </div>
                  }
                  onClick={handleOpenMenu}
                />

                {/* Action Card 2: Leave Anonymous Feedback */}
                <ActionCard
                  icon={MessageSquareHeart}
                  variant="blue"
                  title="Leave Anonymous Feedback"
                  subtitle="Direct & private note to the manager"
                  illustration={
                    <div className="relative w-14 h-14 sm:w-15 sm:h-15 shrink-0 flex items-center justify-center select-none">
                      <span className="absolute -top-1 left-1 text-amber-400 text-xs">✦</span>
                      <span className="absolute top-1 right-0 text-blue-400 text-[10px]">✨</span>
                      <svg className="w-12 h-12 drop-shadow-md -rotate-6" viewBox="0 0 64 64" fill="none">
                        <rect x="12" y="8" width="38" height="48" rx="4" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1.5" />
                        <rect x="23" y="5" width="16" height="6" rx="2" fill="#94A3B8" />
                        <line x1="18" y1="20" x2="44" y2="20" stroke="#E2E8F0" strokeWidth="2" strokeLinecap="round" />
                        <line x1="18" y1="26" x2="44" y2="26" stroke="#E2E8F0" strokeWidth="2" strokeLinecap="round" />
                        <line x1="18" y1="32" x2="44" y2="32" stroke="#E2E8F0" strokeWidth="2" strokeLinecap="round" />
                        <line x1="18" y1="38" x2="40" y2="38" stroke="#E2E8F0" strokeWidth="2" strokeLinecap="round" />
                        <line x1="18" y1="44" x2="34" y2="44" stroke="#E2E8F0" strokeWidth="2" strokeLinecap="round" />
                        <g transform="rotate(35 44 38)">
                          <rect x="42" y="14" width="4.5" height="34" rx="2" fill="#0F172A" />
                          <polygon points="42,48 46.5,48 44.25,54" fill="#94A3B8" />
                          <circle cx="44.25" cy="54" r="1" fill="#0F172A" />
                          <rect x="41.5" y="20" width="1" height="10" rx="0.5" fill="#E2E8F0" />
                        </g>
                      </svg>
                    </div>
                  }
                  onClick={handleOpenFeedback}
                />

                {/* Action Card 3: Leave a Google Review (Direct redirect on mobile) */}
                <ActionCard
                  icon={Star}
                  variant="green"
                  title="Leave a Google Review"
                  subtitle="Rate us 5 stars on Google Maps"
                  illustration={
                    <div className="relative w-14 h-14 sm:w-15 sm:h-15 shrink-0 flex items-center justify-center select-none">
                      <span className="absolute -top-1 left-1 text-amber-400 text-xs">✦</span>
                      <span className="absolute bottom-1 right-0 text-amber-400 text-[10px]">✨</span>
                      <svg className="w-12 h-12 drop-shadow-md" viewBox="0 0 64 64" fill="none">
                        <ellipse cx="32" cy="52" rx="14" ry="5" fill="#E2E8F0" />
                        <g transform="translate(18, 12)">
                          <path
                            d="M14 0 C6.268 0 0 6.268 0 14 C0 24.5 14 36 14 36 C14 36 28 24.5 28 14 C28 6.268 21.732 0 14 0 Z"
                            fill="#EA4335"
                          />
                          <path d="M0 14 C0 18.5 3 23 8 28 L14 36 L14 14 Z" fill="#FBBC04" opacity="0.9" />
                          <path d="M8 28 L14 36 C14 36 20 28 20 28 Z" fill="#34A853" />
                          <path d="M14 0 C21.732 0 28 6.268 28 14 C28 18.5 25 23 20 28 L14 14 Z" fill="#4285F4" opacity="0.95" />
                          <circle cx="14" cy="13" r="5" fill="#FFFFFF" />
                        </g>
                      </svg>
                    </div>
                  }
                  href={googleReviewUrl}
                />
              </main>

              {/* Scanzaa Footer: ONLY on first page (Hub) */}
              <PortalFooter restaurant={restaurant} />
            </>
          )}

          {/* VIEW 2: All Restaurant Categories */}
          {currentView === 'categories' && (
            <CategoryList
              categories={categories}
              restaurantName={restaurantName}
              onSelectCategory={handleSelectCategory}
              onBack={handleBackToHub}
            />
          )}

          {/* VIEW 3: Dishes of Selected Category Alone */}
          {currentView === 'dishes' && selectedCategory && (
            <CategoryDishes
              category={selectedCategory}
              onBackToCategories={handleBackToCategories}
            />
          )}

          {/* VIEW 4: Dedicated Anonymous Feedback Page */}
          {currentView === 'feedback' && (
            <FeedbackPage
              restaurant={restaurant}
              onBackToHub={handleBackToHub}
              onViewMenu={handleOpenMenu}
            />
          )}
        </div>
      </div>

      {/* Google Review Prompt */}
      <ReviewModal
        isOpen={reviewOpen}
        onClose={() => setReviewOpen(false)}
        restaurant={restaurant}
      />
    </div>
  );
}
