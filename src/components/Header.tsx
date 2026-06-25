import React from 'react';
import { ShoppingBag, Star, Phone, MapPin, Sparkles, Compass, Package, Newspaper, Image as ImageIcon, MessageSquare, ShieldCheck } from 'lucide-react';
import { TabType, StoreContacts } from '../types';

interface HeaderProps {
  contacts: StoreContacts;
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
  cartCount: number;
  onOpenCart: () => void;
  onOpenHotel: () => void;
  onOpenExcursion: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  contacts,
  activeTab,
  onTabChange,
  cartCount,
  onOpenCart,
  onOpenHotel,
  onOpenExcursion
}) => {
  const tabs: { id: TabType; label: string; icon: React.FC<{ className?: string }>; badge?: string }[] = [
    { id: 'overview', label: '1. Обзор', icon: Compass },
    { id: 'catalog', label: '2. Товары и услуги', icon: Package },
    { id: 'news', label: '3. Новости', icon: Newspaper },
    { id: 'photos', label: '4. Фото', icon: ImageIcon, badge: '230' },
    { id: 'reviews', label: '5. Отзывы', icon: MessageSquare, badge: '127' },
    { id: 'features', label: '6. Особенности', icon: ShieldCheck }
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#08120c]/95 border-b border-[#1b3829] backdrop-blur-md text-[#e1ede6]">
      
      {/* Верхний инфо-бар */}
      <div className="bg-[#0c1a12] border-b border-[#1b3829]/60 py-2 px-4 text-xs">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          
          <div className="flex items-center gap-4 text-gray-300">
            <div className="flex items-center gap-1.5 text-amber-400 font-semibold bg-amber-500/10 px-2.5 py-0.5 rounded-full border border-amber-500/20">
              <Star className="w-3.5 h-3.5 fill-amber-400" />
              <span>{contacts.rating.toFixed(1)}</span>
              <span className="text-gray-400 font-normal">({contacts.ratingCount} оценок / {contacts.reviewsCount} отзывов на Яндекс Картах)</span>
            </div>
            
            <div className="hidden md:flex items-center gap-1.5 text-gray-400 font-sans">
              <MapPin className="w-3.5 h-3.5 text-emerald-400" />
              <span>{contacts.address}</span>
            </div>
          </div>

          <div className="flex items-center gap-4 ml-auto">
            <a 
              href={`tel:${contacts.phone}`}
              className="flex items-center gap-1.5 font-mono font-bold text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{contacts.phone}</span>
            </a>
            <span className="hidden sm:inline text-gray-500">|</span>
            <span className="hidden sm:inline text-gray-400 font-mono text-[11px]">{contacts.workingHours}</span>
          </div>

        </div>
      </div>

      {/* Главный бар с логотипом и быстрыми CTA */}
      <div className="max-w-7xl mx-auto px-4 py-3.5 flex items-center justify-between gap-4">
        
        {/* Логотип */}
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => onTabChange('overview')}>
          <div className="w-10 h-10 bg-gradient-to-br from-emerald-600 to-[#0c1a12] rounded-xl border border-emerald-500/50 flex items-center justify-center shadow-lg shadow-emerald-950/50">
            <span className="text-2xl">🐉</span>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-xl font-black tracking-tight text-white font-sans uppercase">
                Зоо<span className="text-emerald-400">Дракон</span>
              </h1>
              <span className="hidden sm:inline text-[10px] font-mono bg-emerald-500/10 text-emerald-300 border border-emerald-500/30 px-2 py-0.5 rounded uppercase font-bold tracking-wider">
                Экзотика #1
              </span>
            </div>
            <p className="text-[11px] text-gray-400 font-sans">Студия террариумистики и отель в Краснодаре</p>
          </div>
        </div>

        {/* Быстрые действия справа */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={onOpenHotel}
            className="hidden lg:flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#0f2418] border border-emerald-500/40 text-emerald-300 text-xs font-bold hover:bg-emerald-900/40 transition-all"
          >
            <span>🏨 Гостиница (300 ₽/д)</span>
          </button>

          <button
            onClick={onOpenExcursion}
            className="hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-bold hover:bg-amber-500/20 transition-all"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Экскурсии детям</span>
          </button>

          <button
            onClick={onOpenCart}
            className="relative p-2.5 sm:px-4 sm:py-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl transition-all shadow-lg shadow-emerald-950 flex items-center gap-2 text-xs"
          >
            <ShoppingBag className="w-4 h-4" />
            <span className="hidden sm:inline">Корзина</span>
            {cartCount > 0 && (
              <span className="w-5 h-5 bg-amber-400 text-black font-mono font-black text-xs rounded-full flex items-center justify-center animate-pulse">
                {cartCount}
              </span>
            )}
          </button>
        </div>

      </div>

      {/* Панель вкладок (Tabs) */}
      <div className="bg-[#0c1a12] border-t border-[#1b3829] overflow-x-auto scrollbar-none">
        <div className="max-w-7xl mx-auto px-4 flex gap-1 sm:gap-2 py-1.5 min-w-max">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => onTabChange(tab.id)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all shrink-0 ${
                  isActive
                    ? 'bg-emerald-600/25 text-emerald-300 border border-emerald-500/60 shadow-md shadow-emerald-950/50'
                    : 'text-gray-400 hover:text-white hover:bg-[#13281b] border border-transparent'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-emerald-400' : 'text-gray-500'}`} />
                <span>{tab.label}</span>
                {tab.badge && (
                  <span className={`text-[10px] font-mono font-bold px-1.5 py-0.2 rounded-full ${
                    isActive ? 'bg-emerald-500 text-black font-black' : 'bg-[#183325] text-gray-400'
                  }`}>
                    {tab.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

    </header>
  );
};
