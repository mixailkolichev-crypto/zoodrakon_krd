import React from 'react';
import { Phone, MapPin, Star, Compass, Package, Newspaper, Image as ImageIcon, MessageSquare, ShieldCheck, Heart } from 'lucide-react';
import { StoreContacts, TabType } from '../types';

interface FooterProps {
  contacts: StoreContacts;
  onTabChange: (tab: TabType) => void;
  onOpenHotel: () => void;
  onOpenExcursion: () => void;
}

export const Footer: React.FC<FooterProps> = ({ contacts, onTabChange, onOpenHotel, onOpenExcursion }) => {
  return (
    <footer className="bg-[#050a07] border-t border-[#1b3829] text-[#a3c2b0] pt-12 pb-8 px-4 text-xs font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-[#1b3829]/50">
        
        {/* Бренд */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-3xl">🐉</span>
            <h4 className="text-lg font-black text-white uppercase tracking-tight">
              Зоо<span className="text-emerald-400">Дракон</span>
            </h4>
          </div>
          <p className="text-gray-400 leading-relaxed text-xs">
            Специализированный салон экзотических животных, авторская студия аквариумного и террариумного дизайна, и первая в Краснодаре гостиница для рептилий с полным климат-контролем.
          </p>
          <div className="flex items-center gap-2 text-amber-400 font-bold font-mono">
            <Star className="w-4 h-4 fill-amber-400" />
            <span>Рейтинг 5.0 из 5.0 (Яндекс Карты)</span>
          </div>
        </div>

        {/* Навигация сайта */}
        <div>
          <h5 className="font-bold text-white uppercase tracking-wider font-mono mb-4 text-[11px] text-emerald-400">Архитектура (Вкладки)</h5>
          <ul className="space-y-2">
            {[
              { id: 'overview', label: '1. Обзор магазина', icon: Compass },
              { id: 'catalog', label: '2. Товары и услуги', icon: Package },
              { id: 'news', label: '3. Новости поставок', icon: Newspaper },
              { id: 'photos', label: '4. Фотогалерея (230)', icon: ImageIcon },
              { id: 'reviews', label: '5. Отзывы клиентов (127)', icon: MessageSquare },
              { id: 'features', label: '6. Особенности салона', icon: ShieldCheck }
            ].map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => { window.scrollTo({top:0, behavior:'smooth'}); onTabChange(link.id as any); }}
                  className="hover:text-white transition-colors flex items-center gap-2"
                >
                  <link.icon className="w-3 h-3 text-emerald-500" />
                  <span>{link.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Услуги */}
        <div>
          <h5 className="font-bold text-white uppercase tracking-wider font-mono mb-4 text-[11px] text-emerald-400">Специализация</h5>
          <ul className="space-y-2.5 text-gray-400">
            <li>
              <button onClick={onOpenHotel} className="text-left hover:text-emerald-300 transition-colors">
                🏨 Передержка рептилий в гостинице (300 ₽/д)
              </button>
            </li>
            <li>
              <button onClick={onOpenExcursion} className="text-left hover:text-amber-300 transition-colors">
                ✨ Интерактивные экскурсии детям
              </button>
            </li>
            <li className="hover:text-white cursor-pointer" onClick={() => onTabChange('catalog')}>
              📦 Готовые биотопы Scaled под ключ
            </li>
            <li className="hover:text-white cursor-pointer" onClick={() => onTabChange('catalog')}>
              🦗 Банановые сверчки и тараканы без запаха
            </li>
            <li className="hover:text-white cursor-pointer" onClick={() => onTabChange('catalog')}>
              🦎 Реснитчатые бананоеды и агамы
            </li>
          </ul>
        </div>

        {/* Контакты */}
        <div className="space-y-3">
          <h5 className="font-bold text-white uppercase tracking-wider font-mono mb-4 text-[11px] text-emerald-400">Контакты и адрес</h5>
          <div className="space-y-2 text-gray-300">
            <p className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>{contacts.address}<br/><span className="text-[11px] text-gray-500">{contacts.addressNote}</span></span>
            </p>
            <p className="flex items-center gap-2 font-mono font-bold text-white text-sm">
              <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>{contacts.phone}</span>
            </p>
            <p className="text-[11px] font-mono text-gray-400">{contacts.workingHours}</p>
          </div>
          <div className="pt-2">
            <a
              href={`tel:${contacts.phone}`}
              className="inline-block px-4 py-2 bg-[#122419] hover:bg-emerald-600 hover:text-white transition-colors border border-emerald-500/40 rounded-xl font-semibold text-xs text-emerald-300"
            >
              Заказать обратный звонок
            </a>
          </div>
        </div>

      </div>

      <div className="max-w-7xl mx-auto pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-gray-500">
        <p>© 2026 ЗооДракон (г. Краснодар). Конверсионный макет структуры и текстов landing page.</p>
        <p className="flex items-center gap-1">
          Создано с любовью к экзотике и заботой об экосистеме <Heart className="w-3 h-3 text-red-500 fill-red-500" />
        </p>
      </div>
    </footer>
  );
};
