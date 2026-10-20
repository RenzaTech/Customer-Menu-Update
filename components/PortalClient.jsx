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
              <PortalHeader restaurant={restaurant} />

              <main className="w-full px-4 sm:px-5 pt-4 pb-6 space-y-3">
                <div className="text-center pb-1">
                  <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-gray-400">
                    Guest Dining Portal
                  </span>
                </div>

                {/* Action Card 1: View Menu */}
                <ActionCard
                  icon={BookOpen}
                  iconBgColor="bg-[#FFBB17]/20"
                  iconColor="text-[#92400E]"
                  iconBorderColor="border-[#FFBB17]/40"
                  title="VIEW MENU"
                  subtitle="Browse categories & freshly prepared dishes"
                  badgeText={`${categories.length} Categories`}
                  isPrimary={true}
                  onClick={handleOpenMenu}
                />

                {/* Action Card 2: Leave Anonymous Feedback (Opens full feedback page) */}
                <ActionCard
                  icon={MessageSquareHeart}
                  iconBgColor="bg-blue-50"
                  iconColor="text-blue-700"
                  iconBorderColor="border-blue-200/80"
                  title="LEAVE ANONYMOUS FEEDBACK"
                  subtitle="Direct & private note to the manager"
                  onClick={handleOpenFeedback}
                />

                {/* Action Card 3: Leave a Google Review */}
                <ActionCard
                  icon={Star}
                  iconBgColor="bg-[#FFF8E7]"
                  iconColor="text-[#92400E]"
                  iconBorderColor="border-[#FFBB17]/40"
                  title="LEAVE A GOOGLE REVIEW"
                  subtitle="Rate us 5 stars on Google Maps"
                  onClick={() => setReviewOpen(true)}
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
