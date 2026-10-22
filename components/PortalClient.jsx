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
            const rData = data.restaurant || data;
            const tableData = data.table || rData?.table || null;
            if (tableData) {
              rData.table = tableData;
            } else {
              const match = slug?.match(/-t(\d+)$/i);
              if (match) {
                rData.table = { label: `Table ${parseInt(match[1], 10)}` };
              }
            }
            setRestaurant(rData);
            setCategories(data.categories || []);
            return;
          }
        }
      } catch (err) {
        // Fallback silently if offline or API is down
      }

      // Use local fallback data
      if (isMounted) {
        const rData = fallbackMenuData.restaurant || fallbackMenuData;
        const match = slug?.match(/-t(\d+)$/i);
        if (match) {
          rData.table = { label: `Table ${parseInt(match[1], 10)}` };
        }
        setRestaurant(rData);
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
    <div className="min-h-screen w-full bg-[#FFFCF7] sm:bg-[#F6F3EC] sm:py-6 sm:px-4 flex justify-center items-start text-[#101B35] font-sans selection:bg-[#FFB800]/30 selection:text-amber-950 overflow-x-hidden">
      {/* Mobile Device Viewport Mockup on Desktop, 100% Full-bleed on Mobile */}
      <div
        className="w-full max-w-[430px] min-w-0 mx-auto bg-[#FFFCF7] min-h-screen sm:min-h-[850px] sm:rounded-[32px] sm:shadow-[0_16px_50px_rgba(0,0,0,0.08)] overflow-hidden border-0 sm:border sm:border-[#E8EAF0] flex flex-col justify-between transition-all"
        style={{ maxWidth: '430px' }}
      >
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
                  illustration="/hub/card-noodle-bowl.png"
                  onClick={handleOpenMenu}
                />

                {/* Action Card 2: Leave Anonymous Feedback */}
                <ActionCard
                  icon={MessageSquareHeart}
                  variant="blue"
                  title="Leave Anonymous Feedback"
                  subtitle="Direct & private note to the manager"
                  illustration="/hub/card-notepad.png"
                  onClick={handleOpenFeedback}
                />

                {/* Action Card 3: Leave a Google Review (Direct redirect on mobile) */}
                <ActionCard
                  icon={Star}
                  variant="green"
                  title="Leave a Google Review"
                  subtitle="Rate us 5 stars on Google Maps"
                  illustration="/hub/card-map-pin.png"
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
