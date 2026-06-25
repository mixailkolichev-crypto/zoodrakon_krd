import React from 'react';
import { ShieldCheck, HeartHandshake, Home, Sparkles, GraduationCap, Users, CheckCircle2, ArrowRight } from 'lucide-react';
import { CopywriterNote } from '../CopywriterNote';

interface FeaturesTabProps {
  features: { icon: string; title: string; description: string }[];
  onOpenHotel: () => void;
  onOpenExcursion: () => void;
  onGoToTab: (tab: any) => void;
}

export const FeaturesTab: React.FC<FeaturesTabProps> = ({
  features,
  onOpenHotel,
  onOpenExcursion,
  onGoToTab
}) => {
  const getIcon = (name: string) => {
    switch(name) {
      case 'ShieldCheck': return ShieldCheck;
      case 'HeartHandshake': return HeartHandshake;
      case 'Home': return Home;
      case 'Sparkles': return Sparkles;
      case 'GraduationCap': return GraduationCap;
      default: return Users;
    }
  };

  return (
    <div className="space-y-12 py-6 animate-in fade-in duration-300">
      
      <div className="border-b border-[#1b3829] pb-6">
        <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest">Анализ конкурентных преимуществ</span>
        <h2 className="text-3xl font-black text-white font-sans mt-1">Особенности и стандарты ЗооДракона</h2>
        <p className="text-xs text-gray-400 mt-1">Почему террариумисты Краснодара и ЮФО выбирают наш салон постоянным местом покупки</p>
      </div>

      <CopywriterNote
        title="Отработка страхов покупателя через УТП (Особенности)"
        category="КОПИРАЙТИНГ"
        note="Каждое из 6 преимуществ напрямую закрывает сильное возражение: 1. Возражение «Дома будет вонять тараканами» -> УТП «Корм без запаха». 2. Возражение «Куплю рептилию, а она умрет от неправильной лампы» -> УТП «Пожизненное кураторство». 3. Возражение «Не с кем оставить змею в отпуске» -> УТП «Отель под ключ за 300 ₽»."
      />

      {/* Сетка преимуществ */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {features.map((f, i) => {
          const IconComponent = getIcon(f.icon);
          return (
            <div
              key={i}
              className="p-8 rounded-3xl bg-[#0c1a12] border border-[#1b3829] hover:border-emerald-500/50 transition-all shadow-lg flex flex-col justify-between space-y-4 group"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-transparent border border-emerald-500/40 text-emerald-400 flex items-center justify-center group-hover:scale-110 transition-transform shadow-md">
                  <IconComponent className="w-6 h-6" />
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors">
                  {f.title}
                </h3>

                <p className="text-xs text-gray-300 leading-relaxed font-sans opacity-90">
                  {f.description}
                </p>
              </div>

              <div className="pt-3 border-t border-[#1b3829]/60 flex items-center gap-2 text-[11px] font-mono font-bold text-emerald-400">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                <span>Стандарт качества ЗооДракон</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Баннер индивидуального заказа террариумов */}
      <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#0f2418] via-[#0a140e] to-[#0c1a12] border-2 border-emerald-500/40 shadow-2xl grid grid-cols-1 lg:grid-cols-3 gap-8 items-center text-[#e1ede6]">
        <div className="lg:col-span-2 space-y-4">
          <span className="px-3 py-1 bg-emerald-500/20 text-emerald-300 font-mono text-xs font-bold rounded-full uppercase">
            Студийная мастерская
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
            Изготовление биотопных террариумов под заказ по вашим размерам
          </h3>
          <p className="text-xs sm:text-sm text-gray-300 leading-relaxed max-w-xl">
            Встраиваем в ниши мебели, проектируем вентиляцию из нержавеющей сетки, декорируем натуральным корой железного дерева и запускаем живой водопад. Срок от 5 дней.
          </p>
        </div>

        <div className="flex flex-col space-y-3">
          <button
            onClick={() => onGoToTab('catalog')}
            className="w-full py-4 px-6 bg-emerald-600 hover:bg-emerald-500 text-white font-black rounded-2xl transition-all shadow-xl shadow-emerald-950 text-sm text-center flex items-center justify-center gap-2"
          >
            <span>Выбрать базовый Scaled 90х45х90</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <button
            onClick={onOpenHotel}
            className="w-full py-3.5 px-6 bg-[#08120c] hover:bg-white/5 border border-[#1b3829] text-emerald-300 font-bold rounded-2xl transition-all text-xs text-center"
          >
            Или забронировать отель питомцу (300 ₽/д)
          </button>
        </div>
      </div>

    </div>
  );
};
