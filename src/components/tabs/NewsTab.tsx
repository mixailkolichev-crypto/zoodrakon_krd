import React from 'react';
import { Newspaper, Calendar, ArrowRight, Bell, Sparkles } from 'lucide-react';
import { NewsItem } from '../../types';
import { CopywriterNote } from '../CopywriterNote';

interface NewsTabProps {
  news: NewsItem[];
}

export const NewsTab: React.FC<NewsTabProps> = ({ news }) => {
  return (
    <div className="space-y-10 py-6 animate-in fade-in duration-300">
      
      <div className="border-b border-[#1b3829] pb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest">Хроника ЗооДракона</span>
          <h2 className="text-3xl font-black text-white font-sans mt-1">Новости и поставки</h2>
          <p className="text-xs text-gray-400 mt-1">Оставайтесь в курсе поступления свежих кормовых насекомых и селекционных морф рептилий</p>
        </div>

        <div className="p-3 bg-[#122419] rounded-xl border border-emerald-500/30 flex items-center gap-3 self-start md:self-auto">
          <Bell className="w-5 h-5 text-emerald-400 animate-bounce" />
          <div className="text-xs">
            <p className="font-bold text-white">Телеграм-канал поставок</p>
            <p className="text-gray-400 text-[11px]">Ежедневные сторис из инсектария</p>
          </div>
        </div>
      </div>

      <CopywriterNote
        title="Копирайтинг новостной ленты для удержания повторных продаж"
        category="КОПИРАЙТИНГ"
        note="В нише экзотики самый высокий LTV (пожизненную ценность клиента) формируют регулярные покупки корма каждые 7-10 дней. Новость о свежей поставке живого бананового сверчка стимулирует постоянного покупателя сразу заехать на Яцкова 19/1 или оформить заказ."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {news.map((n) => (
          <article
            key={n.id}
            className="bg-[#0c1a12] border border-[#1b3829] rounded-2xl overflow-hidden shadow-lg hover:border-emerald-500/50 transition-all flex flex-col justify-between group"
          >
            <div>
              <div className="h-48 overflow-hidden relative">
                <img
                  src={n.imageUrl}
                  alt={n.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 px-2.5 py-1 bg-emerald-600 text-white font-mono text-[10px] font-bold rounded-lg shadow">
                  {n.category}
                </span>
              </div>

              <div className="p-6 space-y-3">
                <div className="flex items-center gap-1.5 text-xs font-mono text-gray-500">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{n.date}</span>
                </div>

                <h3 className="font-bold text-white text-lg leading-snug group-hover:text-emerald-300 transition-colors">
                  {n.title}
                </h3>

                <p className="text-xs text-gray-300 leading-relaxed">
                  {n.content}
                </p>
              </div>
            </div>

            <div className="p-6 pt-3 border-t border-[#1b3829]/60 flex items-center justify-between text-xs font-mono font-bold text-emerald-400 bg-[#0a140e]">
              <span>Читать отчет заводчика</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </article>
        ))}
      </div>

    </div>
  );
};
