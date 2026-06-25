import React, { useState } from 'react';
import { Image as ImageIcon, Heart, Eye, X, ZoomIn } from 'lucide-react';
import { CopywriterNote } from '../CopywriterNote';

interface PhotosTabProps {
  photos: { id: string; url: string; title: string; category: string }[];
}

export const PhotosTab: React.FC<PhotosTabProps> = ({ photos }) => {
  const [filter, setFilter] = useState('all');
  const [activePhoto, setActivePhoto] = useState<any | null>(null);

  const categories = [
    { id: 'all', label: 'Все фотографии (230 шт)' },
    { id: 'animals', label: '🦎 Питомцы вблизи' },
    { id: 'terrariums', label: '🌴 Террариумы Scaled' },
    { id: 'hotel', label: '🏨 Боксы гостиницы' },
    { id: 'store', label: '🏬 Торговый зал на Яцкова' }
  ];

  const filtered = filter === 'all' ? photos : photos.filter(p => p.category === filter);

  return (
    <div className="space-y-8 py-6 animate-in fade-in duration-300">
      
      <div className="border-b border-[#1b3829] pb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest">Визуальная документация</span>
          <h2 className="text-3xl font-black text-white font-sans mt-1">Фотогалерея салона</h2>
          <p className="text-xs text-gray-400 mt-1">Реальные кадры животных, стерильных условий содержания и готовых проектов</p>
        </div>

        <div className="px-4 py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-xl text-emerald-300 font-mono text-xs font-bold self-start md:self-auto">
          Всего в базе сайта: 230 HD фотографий
        </div>
      </div>

      {/* Фильтры фото */}
      <div className="flex flex-wrap gap-2">
        {categories.map((c) => (
          <button
            key={c.id}
            onClick={() => setFilter(c.id)}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all border ${
              filter === c.id
                ? 'bg-emerald-600 text-white border-emerald-500 font-bold'
                : 'bg-[#0c1a12] text-gray-400 border-[#1b3829] hover:text-white'
            }`}
          >
            {c.label}
          </button>
        ))}
      </div>

      <CopywriterNote
        title="Психология визуального доверия в зообизнесе"
        category="РАЗМЕЩЕНИЕ ФОТО"
        note="В нише экзотики ключевой барьер покупки — опасение за здоровье рептилии или наличие грязи/запахов в магазине. Фотогалерея на 230 снимков решает эту задачу в лоб: покупатель видит чистейшее стекло террариумов, здоровый блеск глаз хамелеонов и аккуратно уложенный грунт в боксах гостиницы."
      />

      {/* Сетка фото */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        {filtered.map((item) => (
          <div
            key={item.id}
            onClick={() => setActivePhoto(item)}
            className="group relative h-64 rounded-2xl overflow-hidden bg-[#08120c] border border-[#1b3829] cursor-pointer shadow-lg hover:border-emerald-500 transition-all"
          >
            <img
              src={item.url}
              alt={item.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
              <span className="text-white text-xs font-bold leading-tight">{item.title}</span>
              <span className="text-emerald-400 font-mono text-[10px] mt-1 flex items-center gap-1">
                <ZoomIn className="w-3 h-3" /> Нажмите для увеличения
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Модальное окно Lightbox */}
      {activePhoto && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setActivePhoto(null)}
        >
          <div className="relative max-w-4xl w-full bg-[#0c1a12] rounded-2xl border border-[#1b3829] overflow-hidden p-2" onClick={e => e.stopPropagation()}>
            <button 
              onClick={() => setActivePhoto(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-black/60 rounded-full text-white hover:bg-black transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <img
              src={activePhoto.url}
              alt={activePhoto.title}
              className="w-full max-h-[75vh] object-contain rounded-xl bg-black"
            />
            <div className="p-4 bg-[#0c1a12] flex items-center justify-between">
              <div>
                <h4 className="text-white font-bold text-sm">{activePhoto.title}</h4>
                <p className="text-xs text-gray-400 font-mono">Архив ЗооДракон Краснодар • Экзотические животные</p>
              </div>
              <button 
                onClick={() => setActivePhoto(null)}
                className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white font-mono text-xs rounded-xl font-bold"
              >
                Закрыть
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
