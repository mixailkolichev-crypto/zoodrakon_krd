import React, { useState } from 'react';
import { Search, Filter, ShoppingBag, Eye, CheckCircle2, ArrowRight } from 'lucide-react';
import { Product } from '../../types';
import { CopywriterNote } from '../CopywriterNote';

interface CatalogTabProps {
  products: Product[];
  onSelectProduct: (p: Product) => void;
  onAddToCart: (p: Product) => void;
}

export const CatalogTab: React.FC<CatalogTabProps> = ({ products, onSelectProduct, onAddToCart }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', label: 'Все товары и услуги' },
    { id: 'reptiles', label: '🦎 Рептилии и амфибии' },
    { id: 'aquatics', label: '🐠 Аквариумистика' },
    { id: 'terrariums', label: '📦 Террариумы под ключ' },
    { id: 'equipment', label: '💡 Оборудование и декор' },
    { id: 'services', label: '🦗 Услуги и живые корма' }
  ];

  const filteredProducts = products.filter((p) => {
    const matchesCategory = selectedCategory === 'all' || p.category === selectedCategory;
    const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) || p.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-8 py-6 animate-in fade-in duration-300">
      
      {/* Шапка каталога */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#1b3829] pb-6">
        <div>
          <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest">Интерактивная база данных</span>
          <h2 className="text-3xl font-black text-white font-sans mt-1">Каталог товаров и услуг</h2>
          <p className="text-xs text-gray-400 mt-1">Актуальные цены в салоне на ул. Героя Яцкова И.В., 19к1</p>
        </div>

        {/* Поиск */}
        <div className="relative w-full md:w-80">
          <Search className="absolute left-3.5 top-3 w-4 h-4 text-gray-500" />
          <input
            type="text"
            placeholder="Поиск геккона, рыбки, сверчков..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-[#0c1a12] border border-[#1b3829] rounded-xl text-white text-xs placeholder:text-gray-600 focus:outline-none focus:border-emerald-500"
          />
        </div>
      </div>

      {/* Фильтры по категориям */}
      <div className="flex flex-wrap gap-2 pt-1">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-4 py-2.5 rounded-xl text-xs font-semibold transition-all border ${
              selectedCategory === cat.id
                ? 'bg-emerald-600 text-white border-emerald-500 shadow-lg shadow-emerald-950 font-bold'
                : 'bg-[#0c1a12] text-gray-400 border-[#1b3829] hover:border-gray-600 hover:text-white'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <CopywriterNote
        title="Структура категоризации каталога ЗооДракон"
        category="КОПИРАЙТИНГ"
        note="Категории разделены строго по логике покупательских интентов: новички ищут готовых питомцев («Рептилии» или «Биотопы под ключ»), а постоянные клиенты приходят за регулярными расходниками («Живые корма без запаха» и «Кальций»). Наличие фильтров позволяет мгновенно отсекать нерелевантный ассортимент."
      />

      {/* Сетка товаров */}
      {filteredProducts.length === 0 ? (
        <div className="py-20 text-center bg-[#0c1a12] rounded-3xl border border-[#1b3829]">
          <p className="text-sm font-semibold text-gray-400">По запросу «{searchQuery}» ничего не найдено</p>
          <button
            onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}
            className="mt-3 px-4 py-2 bg-emerald-600 text-white font-mono text-xs rounded-xl"
          >
            Сбросить фильтры поиска
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((p) => (
            <div
              key={p.id}
              className="group bg-[#0c1a12] border border-[#1b3829] hover:border-emerald-500/60 rounded-2xl overflow-hidden shadow-lg transition-all hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                <div 
                  className="relative h-52 bg-[#08120c] overflow-hidden cursor-pointer"
                  onClick={() => onSelectProduct(p)}
                >
                  <img
                    src={p.imageUrl}
                    alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {p.badge && (
                    <span className="absolute top-3 left-3 px-2.5 py-1 bg-emerald-600 text-white font-mono text-[10px] font-bold rounded-lg shadow uppercase">
                      {p.badge}
                    </span>
                  )}
                  
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                    <span className="px-3 py-1.5 bg-white/20 backdrop-blur-md rounded-xl text-white font-mono text-xs font-bold flex items-center gap-1.5 border border-white/30">
                      <Eye className="w-3.5 h-3.5" /> Быстрый просмотр
                    </span>
                  </div>
                </div>

                <div className="p-5 space-y-2.5">
                  <div className="flex items-center justify-between text-[11px] font-mono text-emerald-400">
                    <span>{p.category.toUpperCase()}</span>
                    <span className="flex items-center gap-1"><CheckCircle2 className="w-3 h-3" /> В наличии</span>
                  </div>

                  <h3 
                    onClick={() => onSelectProduct(p)}
                    className="font-bold text-white text-base leading-snug cursor-pointer hover:text-emerald-300 transition-colors"
                  >
                    {p.title}
                  </h3>

                  <p className="text-xs text-gray-400 line-clamp-2 leading-relaxed">
                    {p.description}
                  </p>
                </div>
              </div>

              {/* Футер карточки с ценой и кнопкой */}
              <div className="p-5 pt-3 border-t border-[#1b3829]/60 flex items-center justify-between gap-3 bg-[#0a140e]">
                <div>
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-xl font-black text-emerald-400 font-mono">
                      {p.price.toLocaleString()} ₽
                    </span>
                    {p.oldPrice && (
                      <span className="text-xs font-mono text-gray-500 line-through">
                        {p.oldPrice.toLocaleString()} ₽
                      </span>
                    )}
                  </div>
                  {p.category === 'services' && p.id === 'srv-2' && (
                    <span className="text-[10px] font-mono text-gray-400 block">Без неприятного запаха!</span>
                  )}
                </div>

                <button
                  onClick={() => onAddToCart(p)}
                  className="px-4 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl text-xs flex items-center gap-1.5 transition-all shadow-md shadow-emerald-950 shrink-0"
                >
                  <ShoppingBag className="w-3.5 h-3.5" />
                  <span>В корзину</span>
                </button>
              </div>

            </div>
          ))}
        </div>
      )}

    </div>
  );
};
