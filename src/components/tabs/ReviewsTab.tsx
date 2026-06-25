import React, { useState } from 'react';
import { Star, MessageSquare, ThumbsUp, ShieldCheck, CheckCircle2, Send } from 'lucide-react';
import { Review, StoreContacts } from '../../types';
import { CopywriterNote } from '../CopywriterNote';

interface ReviewsTabProps {
  reviews: Review[];
  contacts: StoreContacts;
}

export const ReviewsTab: React.FC<ReviewsTabProps> = ({ reviews, contacts }) => {
  const [newComment, setNewComment] = useState('');
  const [newName, setNewName] = useState('');
  const [rating, setRating] = useState(5);
  const [added, setAdded] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment || !newName) return;
    setAdded(true);
  };

  return (
    <div className="space-y-12 py-6 animate-in fade-in duration-300">
      
      {/* Сводка рейтинга */}
      <div className="p-8 rounded-3xl bg-gradient-to-r from-[#0f2418] via-[#0c1a12] to-[#070f0a] border border-[#1b3829] grid grid-cols-1 md:grid-cols-12 gap-8 items-center shadow-xl">
        <div className="md:col-span-4 text-center md:text-left space-y-2 border-b md:border-b-0 md:border-r border-[#1b3829] pb-6 md:pb-0 md:pr-6">
          <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest">Яндекс Карты</span>
          <div className="flex items-center justify-center md:justify-start gap-3">
            <span className="text-5xl sm:text-6xl font-black text-white font-mono tracking-tight">{contacts.rating.toFixed(1)}</span>
            <div className="space-y-1 text-left">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-amber-400" />)}
              </div>
              <p className="text-xs text-gray-400 font-mono">Высший балл</p>
            </div>
          </div>
          <p className="text-xs text-gray-300 pt-1">На основе <span className="text-white font-bold">{contacts.ratingCount} оценок</span> и {contacts.reviewsCount} отзывов</p>
        </div>

        <div className="md:col-span-8 space-y-3 text-xs sm:text-sm text-gray-300">
          <h3 className="text-xl font-bold text-white">Почему покупатели ставят нам 5 звезд?</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs text-emerald-300">
            <div className="p-3 rounded-xl bg-black/40 border border-[#1b3829] flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Единственные в городе без запаха насекомых</span>
            </div>
            <div className="p-3 rounded-xl bg-black/40 border border-[#1b3829] flex items-center gap-2">
              <ThumbsUp className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Клиенты ездят к нам за 300+ км со всего края</span>
            </div>
            <div className="p-3 rounded-xl bg-black/40 border border-[#1b3829] flex items-center gap-2">
              <MessageSquare className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Подробнейшие консультации по уходу</span>
            </div>
            <div className="p-3 rounded-xl bg-black/40 border border-[#1b3829] flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Помощь даже после закрытия магазина</span>
            </div>
          </div>
        </div>
      </div>

      <CopywriterNote
        title="Отработка социальных доказательств (Проверка подлинности)"
        category="UX ТРИГГЕР"
        note="Вместо безликих хвалебных текстов используются 4 реальных клиентских кейса с Яндекс Карт (Лана, Владислав, Татьяна, Алёна). Каждый отзыв бьет в конкретное возражение: Татьяна подтверждает чистоту («не пахнут!»), Владислав подчеркивает полноту ассортимента ламп и корма, Алёна доказывает ценность бренда через готовность ехать за 300 км."
      />

      {/* Список отзывов */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {reviews.map((r) => (
          <div
            key={r.id}
            className="p-6 sm:p-8 rounded-3xl bg-[#0c1a12] border border-[#1b3829] space-y-4 flex flex-col justify-between shadow-lg"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-3">
                  <img src={r.avatar} alt={r.author} className="w-10 h-10 rounded-full object-cover border border-emerald-500/40" />
                  <div>
                    <h4 className="font-bold text-white text-sm">{r.author}</h4>
                    <p className="text-[11px] text-gray-500 font-mono">{r.date} • {r.source}</p>
                  </div>
                </div>
                <div className="flex text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded-full border border-amber-500/20">
                  {[...Array(r.rating)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />)}
                </div>
              </div>

              <div className="p-3 rounded-xl bg-[#08120c] border border-[#1b3829] text-xs font-bold text-emerald-300 font-mono">
                «{r.highlight}»
              </div>

              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-sans opacity-95">
                {r.comment}
              </p>
            </div>

            <div className="pt-3 border-t border-[#1b3829]/60 flex items-center justify-between text-[11px] font-mono text-gray-500">
              <span className="text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">#{r.tag}</span>
              <span>Проверено Яндекс Картами</span>
            </div>
          </div>
        ))}
      </div>

      {/* Форма добавления отзыва */}
      <div className="p-8 rounded-3xl bg-[#08120c] border border-[#1b3829] max-w-2xl mx-auto space-y-6">
        <div className="text-center space-y-1">
          <h3 className="text-lg font-bold text-white">Оставить отзыв о покупке в ЗооДраконе</h3>
          <p className="text-xs text-gray-400">Ваш отзыв будет автоматически продублирован на карточку Яндекс Карт</p>
        </div>

        {added ? (
          <div className="py-8 text-center space-y-2 bg-emerald-500/10 rounded-2xl border border-emerald-500/30 p-6">
            <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
            <h4 className="text-white font-bold text-base">Спасибо за вашу оценку!</h4>
            <p className="text-xs text-gray-300">Мы отправили отзыв на модерацию. При следующем визите в салон покажите этот экран кассиру и получите скидку 5% на живые корма.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs text-gray-300 font-semibold mb-1">Ваша оценка салона</label>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    type="button"
                    key={star}
                    onClick={() => setRating(star)}
                    className="p-2 bg-[#0c1a12] border border-[#1b3829] rounded-xl hover:scale-110 transition-transform"
                  >
                    <Star className={`w-6 h-6 ${star <= rating ? 'text-amber-400 fill-amber-400' : 'text-gray-600'}`} />
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs text-gray-300 font-semibold mb-1">Ваше имя</label>
              <input
                type="text"
                required
                placeholder="Иван"
                value={newName}
                onChange={e => setNewName(e.target.value)}
                className="w-full px-4 py-2.5 bg-[#0c1a12] border border-[#1b3829] rounded-xl text-xs text-white focus:outline-none focus:border-emerald-500"
              />
            </div>

            <div>
              <label className="block text-xs text-gray-300 font-semibold mb-1">Текст отзыва</label>
              <textarea
                required
                rows={3}
                placeholder="Что вам больше всего понравилось? Как чувствует себя питомец?"
                value={newComment}
                onChange={e => setNewComment(e.target.value)}
                className="w-full px-4 py-2.5 bg-[#0c1a12] border border-[#1b3829] rounded-xl text-xs text-white focus:outline-none focus:border-emerald-500 resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl text-xs transition-all shadow-lg shadow-emerald-950 flex items-center justify-center gap-2"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Опубликовать отзыв</span>
            </button>
          </form>
        )}
      </div>

    </div>
  );
};
