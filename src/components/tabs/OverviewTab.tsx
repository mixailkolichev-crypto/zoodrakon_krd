import React from 'react';
import { Sparkles, ShieldCheck, Star, Calendar, ArrowRight, MapPin, Phone, Heart, Users } from 'lucide-react';
import { Product, StoreContacts } from '../../types';
import { CopywriterNote } from '../CopywriterNote';

interface OverviewTabProps {
  contacts: StoreContacts;
  products: Product[];
  onOpenHotel: () => void;
  onOpenExcursion: () => void;
  onSelectProduct: (p: Product) => void;
  onGoToTab: (tab: any) => void;
}

export const OverviewTab: React.FC<OverviewTabProps> = ({
  contacts,
  products,
  onOpenHotel,
  onOpenExcursion,
  onSelectProduct,
  onGoToTab
}) => {
  const highlights = products.filter(p => ['rep-1', 'rep-2', 'ter-1', 'srv-1', 'aq-1', 'srv-2'].includes(p.id));

  return (
    <div className="space-y-16 py-6 animate-in fade-in duration-300">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative rounded-3xl overflow-hidden border border-[#1b3829] bg-gradient-to-b from-[#0f2418] via-[#0a140e] to-[#070f0a] shadow-2xl">
        <div className="absolute inset-0 opacity-15 mix-blend-overlay bg-[url('https://images.unsplash.com/photo-1548546738-8509cb246ed3?auto=format&fit=crop&q=80&w=1600')] bg-cover bg-center"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 py-14 sm:py-20 lg:py-24 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Левая колонка с Текстом */}
          <div className="lg:col-span-7 space-y-6 text-[#e1ede6]">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-bold uppercase tracking-wider font-mono">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Студия экзотики №1 в Краснодаре</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1] font-sans">
              Мир экзотических рептилий и готовых террариумов <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-emerald-300 to-amber-400">под ключ</span>
            </h1>

            <p className="text-base sm:text-lg text-gray-300 font-normal leading-relaxed max-w-2xl">
              Профессиональное оформление аквариумов и биотопов <span className="text-white font-semibold">Scaled</span>, здоровые ручные рептилии собственного разведения, кормовая база <span className="text-emerald-400 font-bold underline decoration-emerald-500/50">без неприятного запаха</span> и специализированный отель передержки для вашего питомца.
            </p>

            {/* Главные CTA кнопки */}
            <div className="pt-2 flex flex-wrap gap-4 items-center">
              <button
                onClick={() => onGoToTab('catalog')}
                className="px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold rounded-2xl shadow-xl shadow-emerald-950/80 transition-all flex items-center gap-3 text-base group"
              >
                <span>Перейти в каталог рептилий</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onOpenHotel}
                className="px-7 py-4 bg-[#122419] hover:bg-[#183325] border border-emerald-500/40 text-emerald-300 font-bold rounded-2xl transition-all flex items-center gap-2.5 text-base"
              >
                <span>🏨 Гостиница (300 ₽/д)</span>
              </button>
            </div>

            {/* Соц доказательства под кнопками */}
            <div className="pt-6 flex flex-wrap items-center gap-6 text-xs text-gray-400 border-t border-[#1b3829]/80 font-mono">
              <div className="flex items-center gap-1.5 text-amber-400 font-bold">
                <Star className="w-4 h-4 fill-amber-400" />
                <span className="text-sm">5.0</span>
                <span className="text-gray-400 font-normal">(240 оценок на Яндекс Картах)</span>
              </div>
              <div className="flex items-center gap-1.5 text-emerald-400">
                <ShieldCheck className="w-4 h-4" />
                <span>Гарантия здоровья питомцев</span>
              </div>
            </div>

          </div>

          {/* Правая колонка: Визуальный акцент (Большое фото хамелеона/геккона) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none rounded-3xl overflow-hidden border-2 border-emerald-500/40 shadow-2xl shadow-emerald-950 bg-[#08120c]">
              <img
                src="https://images.unsplash.com/photo-1541414779316-956a5084c0d4?auto=format&fit=crop&q=80&w=900"
                alt="Йеменский хамелеон ЗооДракон Краснодар"
                className="w-full h-[340px] sm:h-[420px] object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a140e] via-transparent to-transparent opacity-60"></div>
              
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-[#0c1a12]/90 backdrop-blur-md border border-[#1b3829] space-y-1">
                <span className="px-2 py-0.5 bg-amber-500/20 text-amber-300 text-[10px] font-mono font-bold rounded">
                  В НАЛИЧИИ • ул. Яцкова 19/1
                </span>
                <h4 className="text-white font-bold text-sm">Йеменские хамелеоны малыши и подростки</h4>
                <p className="text-xs text-emerald-400 font-mono font-bold">5 500 ₽ • Консультация в подарок</p>
              </div>
            </div>
          </div>

        </div>

        {/* Копирайтерский разбор Hero */}
        <div className="max-w-7xl mx-auto px-6 pb-8">
          <CopywriterNote
            title="Копирайтинг и UX психология Главного экрана (Hero)"
            category="КОПИРАЙТИНГ"
            note="Главный заголовок объединяет эмоциональную мечту покупателя («Мир экзотических рептилий») и прагматичное снятие страха новичка («террариумы под ключ»). В подзаголовке сразу отработаны 3 сильнейших УТП магазина из отзывов: бренд Scaled, животные собственного разведения и «корм без запаха». Кнопки разделяют аудиторию на 2 главных потока покупки: покупка питомца и бронирование отеля на время отпуска."
          />
        </div>
      </section>

      {/* ================= CATALOG HIGHLIGHTS ================= */}
      <section className="space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-mono font-bold uppercase text-emerald-400 tracking-wider">Каталог и специализация</span>
            <h2 className="text-2xl sm:text-4xl font-bold text-white mt-1">Популярные питомцы и биотопы</h2>
          </div>
          <button
            onClick={() => onGoToTab('catalog')}
            className="text-xs font-mono font-bold text-emerald-400 hover:text-amber-400 flex items-center gap-1.5 self-start md:self-auto group"
          >
            <span>Смотреть всю базу товаров (с ценами)</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlights.map((item) => (
            <div
              key={item.id}
              onClick={() => onSelectProduct(item)}
              className="group bg-[#0c1a12] border border-[#1b3829] hover:border-emerald-500/60 rounded-2xl overflow-hidden shadow-lg transition-all hover:-translate-y-1 cursor-pointer flex flex-col"
            >
              <div className="relative h-48 bg-[#08120c] overflow-hidden">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {item.badge && (
                  <span className="absolute top-3 left-3 px-2.5 py-1 bg-emerald-600 text-white font-mono text-[10px] font-bold rounded-lg uppercase shadow">
                    {item.badge}
                  </span>
                )}
                <span className="absolute bottom-3 right-3 px-3 py-1 bg-black/80 backdrop-blur-md text-emerald-400 font-mono font-extrabold text-sm rounded-xl border border-emerald-500/40">
                  {item.price.toLocaleString()} ₽
                </span>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <h3 className="font-bold text-white text-base leading-snug group-hover:text-emerald-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-400 line-clamp-2 mt-1.5 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#1b3829]/60 flex items-center justify-between text-xs font-semibold text-emerald-400">
                  <span>Подробнее о содержании</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <CopywriterNote
          title="Размещение фотографий рептилий и карточек (UI Layout Note)"
          category="РАЗМЕЩЕНИЕ ФОТО"
          note="Карточки построены по принципу визуального доминирования: фото занимает верхние 50% блока. На темном изумрудном фоне чешуя агам, яркие гребни бананоедов и сочная зелень террариумов выглядят контрастно и дорого. Цена зафиксирована в правом нижнем углу фото на полупрозрачной плашке, чтобы глаз покупателя сначала считывал красоту животного, а затем комфортную цену."
        />
      </section>

      {/* ================= PET HOTEL PROMO BANNER ================= */}
      <section className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-emerald-950 via-[#0f281b] to-[#0c1a12] border-2 border-emerald-500/50 p-8 sm:p-12 text-[#e1ede6] shadow-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-emerald-500/20 text-emerald-300 font-mono text-xs font-bold uppercase">
              <span>Специализированная передержка рептилий</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
              Гостиница для рептилий «ЗооДракон»
            </h2>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed max-w-2xl">
              Отпуск без стресса! <span className="text-white font-bold">Привозите только питомца</span>, мы предоставляем индивидуальный оборудованный террариум с термоковриками, точными УФ-лампами и обогревом.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs font-mono text-emerald-300">
              <div className="p-3 rounded-xl bg-black/30 border border-emerald-500/30 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Терморегуляция 24/7</span>
              </div>
              <div className="p-3 rounded-xl bg-black/30 border border-emerald-500/30 flex items-center gap-2">
                <Calendar className="w-4 h-4 text-emerald-400" />
                <span>Фотоотчет хозяину</span>
              </div>
              <div className="p-3 rounded-xl bg-black/30 border border-emerald-500/30 flex items-center gap-2">
                <Star className="w-4 h-4 text-amber-400" />
                <span>Всего 300 ₽ в сутки</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col justify-center space-y-4">
            <button
              onClick={onOpenHotel}
              className="w-full py-4 px-6 bg-emerald-500 hover:bg-emerald-400 text-black font-black rounded-2xl text-base shadow-xl shadow-emerald-950 transition-transform hover:scale-102 text-center"
            >
              Рассчитать стоимость брони
            </button>
            <p className="text-[11px] text-center text-gray-400 font-mono">
              Осталось 4 свободных бокса на летний сезон
            </p>
          </div>
        </div>

        <div className="pt-6">
          <CopywriterNote
            title="Маркетинговая отработка оффера гостиницы (Овернайт)"
            category="UX ТРИГГЕР"
            note="Главный барьер владельца рептилии при отъезде в отпуск — страх везти огромный хрупкий стеклянный террариум со шнурами и лампами через весь город. Копирайтинг бьет прямо в эту боль: «Привозите только питомца!». Фиксация цены 300 ₽/день делает услугу импульсивно доступной."
          />
        </div>
      </section>

      {/* ================= EXCURSIONS PROMO ================= */}
      <section className="p-8 sm:p-10 rounded-3xl bg-[#0c1a12] border border-amber-500/30 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        <div className="md:col-span-2 space-y-3">
          <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest">Интерактивный досуг</span>
          <h3 className="text-2xl sm:text-3xl font-bold text-white">Экскурсии для детей и взрослых в магазине экзотики</h3>
          <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
            Подарите детям незабываемые впечатления! Герпетолог проведет увлекательный тур: покажет кормление рептилий, расскажет о жизни амфибий и разрешит безопасно подержать ручную австралийскую квакшу.
          </p>
        </div>
        <div>
          <button
            onClick={onOpenExcursion}
            className="w-full py-4 px-6 bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-black font-black rounded-2xl text-sm shadow-lg shadow-amber-950/50 flex items-center justify-center gap-2"
          >
            <Users className="w-4 h-4" />
            <span>Записаться на экскурсию</span>
          </button>
        </div>
      </section>

      {/* ================= REVIEWS PREVIEW ================= */}
      <section className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <span className="text-xs font-mono font-bold uppercase text-emerald-400">Социальные доказательства</span>
            <h2 className="text-2xl font-bold text-white mt-1">Что говорят клиенты на Яндекс Картах</h2>
          </div>
          <button onClick={() => onGoToTab('reviews')} className="text-xs font-mono text-emerald-400 hover:underline">
            Все 127 отзывов →
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            { name: 'Татьяна Чешская', quote: 'Единственный магазин в городе, где кормовые насекомые не пахнут! Сразу видно стерильную чистоту и заботу о животных.' },
            { name: 'Алёна Шиманская', quote: 'Преодолеваем 300+ км из другого района края именно в ЗооДракон! Помогли собрать экстренный заказ даже после закрытия.' }
          ].map((r, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-[#0c1a12] border border-[#1b3829] space-y-3">
              <div className="flex items-center gap-2 text-amber-400">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-amber-400" />)}
              </div>
              <p className="text-xs sm:text-sm text-gray-300 italic leading-relaxed">«{r.quote}»</p>
              <p className="text-xs font-bold text-white font-mono">— {r.name} (Подтвержденный отзыв)</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CONTACTS & MAP LOCATION ================= */}
      <section className="p-8 rounded-3xl bg-[#0a140e] border border-[#1b3829] grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="space-y-4 text-xs sm:text-sm">
          <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest">Локация</span>
          <h3 className="text-2xl font-bold text-white">Ждем вас в салоне на Яцкова 19/1</h3>
          <div className="space-y-2.5 text-gray-300 font-mono">
            <p className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>{contacts.address}<br/><span className="text-gray-500 text-xs">ул. Седина 118 / Яцкова (Парковка прямо у входа)</span></span>
            </p>
            <p className="flex items-center gap-2.5 text-white font-bold text-base">
              <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
              <a href={`tel:${contacts.phone}`}>{contacts.phone}</a>
            </p>
            <p className="text-gray-400">{contacts.workingHours}</p>
          </div>
        </div>

        {/* Симуляция карты */}
        <div className="h-64 rounded-2xl bg-[#050a07] border border-[#1b3829] relative overflow-hidden flex items-center justify-center">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:16px_16px]"></div>
          <div className="text-center space-y-2 z-10 p-6 bg-[#0c1a12]/90 border border-[#1b3829] rounded-2xl shadow-xl">
            <div className="w-10 h-10 bg-emerald-500 text-black rounded-full flex items-center justify-center mx-auto font-bold text-xl animate-pulse">
              📍
            </div>
            <p className="font-bold text-white text-sm">ЗооДракон на Яндекс Картах</p>
            <p className="text-xs font-mono text-emerald-400">ул. им. Героя Яцкова И.В., 19к1</p>
            <a
              href="https://yandex.ru/maps/-/CDu~5T~A"
              target="_blank"
              rel="noreferrer"
              className="inline-block mt-2 px-4 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white font-mono text-xs font-bold rounded-lg transition-colors"
            >
              Построить маршрут в навигаторе →
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};
