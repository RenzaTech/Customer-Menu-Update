'use client';

export default function CategoryIcon({ name = '', className = 'w-7 h-7' }) {
  const lower = name.toLowerCase().trim();

  // 1. FRIES
  if (lower.includes('fries')) {
    return (
      <svg className={className} viewBox="0 0 36 36" fill="none">
        {/* Fries Carton */}
        <path d="M9 16L12 32H24L27 16H9Z" fill="#E11D48" />
        <path d="M11 16C13 19 23 19 25 16L24 32H12L11 16Z" fill="#BE123C" />
        {/* Golden Fries */}
        <rect x="11" y="8" width="3" height="11" rx="1.5" fill="#FFBB17" />
        <rect x="15" y="5" width="3.2" height="14" rx="1.5" fill="#FBBF24" />
        <rect x="19" y="7" width="3" height="12" rx="1.5" fill="#F59E0B" />
        <rect x="22.5" y="10" width="2.8" height="9" rx="1.4" fill="#FFBB17" />
        {/* Carton Logo / Star */}
        <circle cx="18" cy="24" r="3" fill="#FFBB17" />
        <path d="M18 22.5L18.7 23.9L20.2 24.1L19.1 25.2L19.4 26.7L18 26L16.6 26.7L16.9 25.2L15.8 24.1L17.3 23.9L18 22.5Z" fill="#FFFFFF" />
      </svg>
    );
  }

  // 2. MAGGI / NOODLES
  if (lower.includes('maggi') || lower.includes('noodle')) {
    return (
      <svg className={className} viewBox="0 0 36 36" fill="none">
        {/* Steam */}
        <path d="M14 6C13.5 8 14.5 9 14 11" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M18 5C17.5 7.5 18.5 8.5 18 11" stroke="#FFBB17" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M22 6C21.5 8 22.5 9 22 11" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" />
        {/* Bowl */}
        <path d="M6 15C6 24 11 29 18 29C25 29 30 24 30 15H6Z" fill="#DC2626" />
        <ellipse cx="18" cy="15" rx="12" ry="3" fill="#EF4444" />
        {/* Noodles in bowl */}
        <path d="M9 15C10 13 14 13 15 15C16 17 20 17 21 15C22 13 26 13 27 15" stroke="#FFBB17" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M11 17C12 15 16 15 17 17C18 19 22 19 23 17" stroke="#FDE047" strokeWidth="2" strokeLinecap="round" />
        {/* Chopsticks */}
        <line x1="22" y1="9" x2="33" y2="4" stroke="#78350F" strokeWidth="1.8" strokeLinecap="round" />
        <line x1="21" y1="12" x2="32" y2="7" stroke="#92400E" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }

  // 3. MOMOS / DUMPLINGS
  if (lower.includes('momo') || lower.includes('dumpling')) {
    return (
      <svg className={className} viewBox="0 0 36 36" fill="none">
        {/* Bamboo steamer lid / plate */}
        <ellipse cx="18" cy="27" rx="14" ry="4" fill="#E2E8F0" />
        <ellipse cx="18" cy="26" rx="13" ry="3.5" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="1" />
        {/* Momo 1 (Left) */}
        <path d="M11 25C9 23 9 19 13 18C15 17.5 16 20 16 22C16 24 13 26 11 25Z" fill="#F5F5F4" stroke="#D6D3D1" strokeWidth="1.2" />
        {/* Momo 2 (Center - prominent) */}
        <path d="M18 13C16 13 13 16 13 21C13 24 16 25 18 25C20 25 23 24 23 21C23 16 20 13 18 13Z" fill="#FFFDF8" stroke="#E7E5E4" strokeWidth="1.2" />
        {/* Top pleats */}
        <path d="M18 13V16M16 14L17.5 16.5M20 14L18.5 16.5" stroke="#D6D3D1" strokeWidth="1" strokeLinecap="round" />
        {/* Momo 3 (Right) */}
        <path d="M25 25C27 23 27 19 23 18C21 17.5 20 20 20 22C20 24 23 26 25 25Z" fill="#F5F5F4" stroke="#D6D3D1" strokeWidth="1.2" />
        {/* Red Chutney Dot */}
        <circle cx="18" cy="21.5" r="1.5" fill="#EF4444" />
      </svg>
    );
  }

  // 4. SNACKS (Toasted Sandwich / Omelette)
  if (lower.includes('snack') || lower.includes('sandwich') || lower.includes('toast') || lower.includes('omelette')) {
    return (
      <svg className={className} viewBox="0 0 36 36" fill="none">
        {/* Bottom toasted bread */}
        <path d="M6 25L24 7L30 13L12 31L6 25Z" fill="#D97706" />
        {/* Filling layers */}
        <path d="M8 24.5L25 7.5L29 11.5L12 28.5L8 24.5Z" fill="#16A34A" />
        <path d="M10 24L26 8L28 10L12 26L10 24Z" fill="#FFBB17" />
        <path d="M10 25L26 9L27 10L11 26L10 25Z" fill="#DC2626" />
        {/* Top golden toasted bread */}
        <path d="M8 22L24 6L29 11L13 27L8 22Z" fill="#F59E0B" stroke="#B45309" strokeWidth="1" />
        {/* Crust marks / grill lines */}
        <line x1="13" y1="18" x2="16" y2="13" stroke="#B45309" strokeWidth="1.2" strokeLinecap="round" />
        <line x1="18" y1="18" x2="21" y2="13" stroke="#B45309" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    );
  }

  // 5. WRAP / ROLL
  if (lower.includes('wrap') || lower.includes('burrito')) {
    return (
      <svg className={className} viewBox="0 0 36 36" fill="none">
        {/* Rolled tortilla body */}
        <rect x="8" y="11" width="20" height="15" rx="7.5" transform="rotate(-25 18 18)" fill="#FDE68A" stroke="#D97706" strokeWidth="1.2" />
        {/* Cut surface on right showing fillings */}
        <ellipse cx="25" cy="14" rx="4" ry="6" transform="rotate(-25 25 14)" fill="#16A34A" />
        <ellipse cx="25" cy="14" rx="2.8" ry="4.5" transform="rotate(-25 25 14)" fill="#EF4444" />
        <circle cx="25" cy="14" r="1.5" fill="#FFBB17" />
        {/* Grill marks */}
        <line x1="12" y1="16" x2="15" y2="22" stroke="#B45309" strokeWidth="1.2" strokeLinecap="round" />
        <line x1="16" y1="14" x2="19" y2="20" stroke="#B45309" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    );
  }

  // 6. ROLL & NUGGETS
  if (lower.includes('nugget') || lower.includes('roll')) {
    return (
      <svg className={className} viewBox="0 0 36 36" fill="none">
        {/* Golden crispy nuggets */}
        <rect x="7" y="15" width="10" height="8" rx="4" transform="rotate(-15 12 19)" fill="#F59E0B" stroke="#B45309" strokeWidth="1" />
        <rect x="17" y="17" width="11" height="9" rx="4.5" transform="rotate(20 22 21)" fill="#FFBB17" stroke="#D97706" strokeWidth="1" />
        <rect x="12" y="8" width="11" height="8" rx="4" fill="#FBBF24" stroke="#B45309" strokeWidth="1" />
        {/* Crisp crumbs */}
        <circle cx="16" cy="12" r="0.8" fill="#92400E" />
        <circle cx="11" cy="19" r="0.8" fill="#92400E" />
        <circle cx="23" cy="22" r="0.8" fill="#92400E" />
        {/* Dipping cup */}
        <path d="M13 28H23L24 33H12L13 28Z" fill="#DC2626" />
        <ellipse cx="18" cy="28" rx="5" ry="1.5" fill="#EF4444" />
      </svg>
    );
  }

  // 7. PUFFS / PASTRY
  if (lower.includes('puff') || lower.includes('pastry') || lower.includes('samosa')) {
    return (
      <svg className={className} viewBox="0 0 36 36" fill="none">
        {/* Triangular Golden Flaky Puff */}
        <path d="M18 7L31 27C31 29 29 30 27 30H9C7 30 5 29 5 27L18 7Z" fill="#F59E0B" stroke="#B45309" strokeWidth="1.2" />
        {/* Flaky layered crimps */}
        <path d="M18 10L28 26C28 27 27 28 25 28H11C9 28 8 27 8 26L18 10Z" fill="#FFBB17" />
        <path d="M18 14L25 25H11L18 14Z" fill="#FDE68A" />
        {/* Crust vents */}
        <line x1="16" y1="20" x2="20" y2="20" stroke="#B45309" strokeWidth="1.2" strokeLinecap="round" />
        <line x1="17" y1="23" x2="19" y2="23" stroke="#B45309" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    );
  }

  // 8. ICE CREAM
  if (lower === 'ice cream' || (lower.includes('ice') && lower.includes('cream') && !lower.includes('shake'))) {
    return (
      <svg className={className} viewBox="0 0 36 36" fill="none">
        {/* Waffle Cone */}
        <path d="M12 18L18 33L24 18H12Z" fill="#D97706" stroke="#92400E" strokeWidth="1" />
        <path d="M13.5 21L21 27M16 27L22.5 19" stroke="#92400E" strokeWidth="0.8" />
        {/* Bottom Ice cream scoop (Vanilla/Butterscotch) */}
        <circle cx="18" cy="16" r="7" fill="#FFBB17" />
        {/* Top Ice cream scoop (Strawberry pink) */}
        <circle cx="18" cy="11" r="5.5" fill="#FB7185" />
        {/* Drizzle & Cherry */}
        <path d="M14 11C15 13 17 13 18 11C19 13 21 13 22 11" stroke="#E11D48" strokeWidth="1.2" strokeLinecap="round" />
        <circle cx="18" cy="5.5" r="2.2" fill="#BE123C" />
        <path d="M19 4C21 3 22 2 23 2" stroke="#4ADE80" strokeWidth="1" strokeLinecap="round" />
      </svg>
    );
  }

  // 9. ICE CREAM SHAKE / MILKSHAKE
  if (lower.includes('shake')) {
    return (
      <svg className={className} viewBox="0 0 36 36" fill="none">
        {/* Tall Shake Glass */}
        <path d="M11 15L13 32H23L25 15H11Z" fill="#FCE7F3" stroke="#DB2777" strokeWidth="1.2" />
        {/* Layered chocolate/strawberry blend */}
        <path d="M11.5 19L12.7 30H23.3L24.5 19H11.5Z" fill="#F472B6" />
        <path d="M12 25L12.5 30H23.5L24 25H12Z" fill="#9D174D" />
        {/* Whipped Cream Top */}
        <path d="M11 15C11 11 14 9 18 9C22 9 25 11 25 15H11Z" fill="#FFFFFF" stroke="#E5E7EB" strokeWidth="1" />
        <circle cx="18" cy="8" r="2.5" fill="#FFFFFF" />
        {/* Cherry */}
        <circle cx="18" cy="6" r="1.8" fill="#E11D48" />
        {/* Straw */}
        <line x1="20" y1="12" x2="26" y2="3" stroke="#FFBB17" strokeWidth="2.2" strokeLinecap="round" />
      </svg>
    );
  }

  // 10. FRUIT SALAD
  if (lower.includes('fruit') || lower.includes('salad')) {
    return (
      <svg className={className} viewBox="0 0 36 36" fill="none">
        {/* Glass Bowl */}
        <path d="M7 16C7 24 12 28 18 28C24 28 29 24 29 16H7Z" fill="#E0F2FE" stroke="#38BDF8" strokeWidth="1.2" />
        {/* Watermelon Slice */}
        <path d="M11 16C11 12 15 10 18 10C21 10 25 12 25 16H11Z" fill="#EF4444" />
        <path d="M10 16H26" stroke="#22C55E" strokeWidth="2" strokeLinecap="round" />
        {/* Seeds */}
        <circle cx="15" cy="13" r="0.7" fill="#000000" />
        <circle cx="18" cy="12" r="0.7" fill="#000000" />
        <circle cx="21" cy="13" r="0.7" fill="#000000" />
        {/* Orange slice & Mint */}
        <circle cx="22" cy="9" r="3.5" fill="#FFBB17" stroke="#F59E0B" strokeWidth="1" />
        <path d="M14 8C14 6 16 5 17 6C16 8 15 8 14 8Z" fill="#16A34A" />
      </svg>
    );
  }

  // 11. LASSI
  if (lower.includes('lassi')) {
    return (
      <svg className={className} viewBox="0 0 36 36" fill="none">
        {/* Clay Matka / Earthen Kulhad */}
        <path d="M12 14C9 18 9 26 12 30C14 32 22 32 24 30C27 26 27 18 24 14H12Z" fill="#C2410C" stroke="#9A3412" strokeWidth="1.2" />
        {/* Earthen Rim */}
        <ellipse cx="18" cy="14" rx="6" ry="2" fill="#EA580C" />
        {/* Frothy Thick Lassi */}
        <ellipse cx="18" cy="13.5" rx="5.5" ry="1.8" fill="#FFFBEB" />
        <circle cx="18" cy="12" r="3" fill="#FFFDF5" />
        {/* Saffron Strands & Pistachio garnish */}
        <path d="M17 11L19 13M16 13L18 12" stroke="#FFBB17" strokeWidth="1.2" strokeLinecap="round" />
        <circle cx="19.5" cy="11.5" r="0.8" fill="#15803D" />
        <circle cx="16.5" cy="12" r="0.8" fill="#15803D" />
      </svg>
    );
  }

  // 12. FRESH JUICE
  if (lower.includes('juice')) {
    return (
      <svg className={className} viewBox="0 0 36 36" fill="none">
        {/* Highball Juice Glass */}
        <path d="M11 12L13 32H23L25 12H11Z" fill="#FEF3C7" stroke="#D97706" strokeWidth="1.2" />
        {/* Vibrant Orange Juice */}
        <path d="M11.8 16L13 31H23L24.2 16H11.8Z" fill="#FFBB17" />
        {/* Bubbles */}
        <circle cx="16" cy="22" r="1.2" fill="#FFFDF8" opacity="0.8" />
        <circle cx="20" cy="25" r="1" fill="#FFFDF8" opacity="0.8" />
        <circle cx="18" cy="19" r="0.8" fill="#FFFDF8" opacity="0.8" />
        {/* Lemon/Orange Slice on Rim */}
        <circle cx="13" cy="10" r="4.5" fill="#FBBF24" stroke="#F59E0B" strokeWidth="1" />
        <circle cx="13" cy="10" r="3.2" fill="#FEF08A" />
        <line x1="13" y1="7" x2="13" y2="13" stroke="#F59E0B" strokeWidth="0.8" />
        <line x1="10" y1="10" x2="16" y2="10" stroke="#F59E0B" strokeWidth="0.8" />
        {/* Straw */}
        <line x1="19" y1="14" x2="25" y2="4" stroke="#10B981" strokeWidth="2.2" strokeLinecap="round" />
      </svg>
    );
  }

  // 13. FALOODA
  if (lower.includes('falooda')) {
    return (
      <svg className={className} viewBox="0 0 36 36" fill="none">
        {/* Sundae Tulip Glass */}
        <path d="M11 8L13 24C13 27 16 29 18 29C20 29 23 27 23 24L25 8H11Z" fill="#FFF1F2" stroke="#E11D48" strokeWidth="1.2" />
        {/* Stem & Base */}
        <path d="M17 29V32H13V33H23V32H19V29" stroke="#E11D48" strokeWidth="1.2" />
        {/* Rose syrup bottom layer */}
        <path d="M13 22C13 25 15 27 18 27C21 27 23 25 23 22H13Z" fill="#E11D48" />
        {/* Vermicelli / Sev middle layer */}
        <path d="M12.5 17H23.5L23.2 22H12.8L12.5 17Z" fill="#FEF08A" />
        <line x1="14" y1="19" x2="22" y2="19" stroke="#CA8A04" strokeWidth="1" strokeDasharray="1 1" />
        {/* Sabja seeds */}
        <circle cx="15" cy="21" r="0.6" fill="#1E293B" />
        <circle cx="18" cy="20.5" r="0.6" fill="#1E293B" />
        <circle cx="21" cy="21" r="0.6" fill="#1E293B" />
        {/* Ice cream top scoop */}
        <circle cx="18" cy="8" r="4.5" fill="#FFBB17" />
        <circle cx="18" cy="3.5" r="1.5" fill="#BE123C" />
      </svg>
    );
  }

  // 14. MOJITO / COOLER
  if (lower.includes('mojito') || lower.includes('mint') || lower.includes('soda')) {
    return (
      <svg className={className} viewBox="0 0 36 36" fill="none">
        {/* Tall Cooler Glass */}
        <path d="M11 12L13 32H23L25 12H11Z" fill="#ECFDF5" stroke="#10B981" strokeWidth="1.2" />
        {/* Mint Cooler Liquid */}
        <path d="M11.8 16L13 31H23L24.2 16H11.8Z" fill="#A7F3D0" />
        {/* Ice Cubes */}
        <rect x="14" y="23" width="3.5" height="3.5" rx="0.8" fill="#FFFFFF" opacity="0.7" />
        <rect x="18" y="20" width="3.5" height="3.5" rx="0.8" fill="#FFFFFF" opacity="0.7" />
        <rect x="15" y="17" width="3.5" height="3.5" rx="0.8" fill="#FFFFFF" opacity="0.7" />
        {/* Fresh Mint Leaves */}
        <path d="M19 12C20 9 22 8 23 9C23 11 21 13 19 12Z" fill="#059669" />
        <path d="M16 14C15 12 13 12 13 14C14 15 16 15 16 14Z" fill="#10B981" />
        {/* Lime Wedge on Rim */}
        <circle cx="12" cy="11" r="4" fill="#84CC16" stroke="#4D7C0F" strokeWidth="1" />
        <circle cx="12" cy="11" r="2.8" fill="#BEF264" />
        {/* Straw */}
        <line x1="20" y1="13" x2="26" y2="4" stroke="#047857" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }

  // 15. COMBOS / MEALS
  if (lower.includes('combo') || lower.includes('meal')) {
    return (
      <svg className={className} viewBox="0 0 36 36" fill="none">
        {/* Burger bottom & top */}
        <path d="M7 25C7 26.5 8.5 28 10 28H20C21.5 28 23 26.5 23 25H7Z" fill="#D97706" />
        <rect x="6" y="23" width="18" height="2" fill="#16A34A" />
        <rect x="6" y="21" width="18" height="2" fill="#DC2626" />
        <path d="M7 21C7 16 11 14 15 14C19 14 23 16 23 21H7Z" fill="#FFBB17" stroke="#B45309" strokeWidth="0.8" />
        <circle cx="12" cy="17" r="0.6" fill="#FFFFFF" />
        <circle cx="15" cy="16" r="0.6" fill="#FFFFFF" />
        <circle cx="18" cy="17" r="0.6" fill="#FFFFFF" />
        {/* Beverage Drink Cup in Combo */}
        <path d="M21 16L22.5 28H29L30.5 16H21Z" fill="#E11D48" stroke="#BE123C" strokeWidth="1" />
        <ellipse cx="25.7" cy="16" rx="4.8" ry="1.2" fill="#FFFFFF" />
        <line x1="26" y1="16" x2="28" y2="9" stroke="#FFBB17" strokeWidth="1.8" strokeLinecap="round" />
        {/* Star Badge */}
        <circle cx="28" cy="11" r="3.5" fill="#FFBB17" />
        <path d="M28 9.5L28.6 10.6L29.8 10.8L28.9 11.7L29.1 12.9L28 12.3L26.9 12.9L27.1 11.7L26.2 10.8L27.4 10.6L28 9.5Z" fill="#78350F" />
      </svg>
    );
  }

  // 16. SPECIAL / CHEF SPECIAL
  if (lower.includes('special')) {
    return (
      <svg className={className} viewBox="0 0 36 36" fill="none">
        {/* Golden Chef's Toque Hat */}
        <path d="M12 25H24V28C24 29 23 30 22 30H14C13 30 12 29 12 28V25Z" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="1.2" />
        {/* Chef Hat Puffs */}
        <circle cx="13" cy="19" r="4.5" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1" />
        <circle cx="23" cy="19" r="4.5" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1" />
        <circle cx="18" cy="15" r="5.5" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1" />
        {/* Golden Ribbon on Hat */}
        <rect x="12" y="25" width="12" height="2" fill="#FFBB17" />
        {/* Sparkle Stars */}
        <path d="M8 12L9 8L10 12L14 13L10 14L9 18L8 14L4 13L8 12Z" fill="#FFBB17" />
        <path d="M26 10L26.7 7L27.4 10L30.4 10.7L27.4 11.4L26.7 14.4L26 11.4L23 10.7L26 10Z" fill="#F59E0B" />
      </svg>
    );
  }

  // DEFAULT / BEVERAGE / COFFEE
  return (
    <svg className={className} viewBox="0 0 36 36" fill="none">
      {/* Coffee/Tea Cup */}
      <path d="M8 13V24C8 28 12 30 18 30C24 30 28 28 28 24V13H8Z" fill="#FFBB17" stroke="#D97706" strokeWidth="1.2" />
      <ellipse cx="18" cy="13" rx="10" ry="2.5" fill="#78350F" />
      {/* Cup Handle */}
      <path d="M28 16C31 16 32 18 32 20C32 22 30 24 27 24" stroke="#D97706" strokeWidth="2" strokeLinecap="round" />
      {/* Steam */}
      <path d="M15 6C14.5 8 15.5 9 15 10" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M19 5C18.5 7 19.5 8 19 10" stroke="#FFBB17" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M23 6C22.5 8 23.5 9 23 10" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
