import React, { useState } from 'react';
import { X, Calendar, ShieldCheck, Thermometer, Sun, CheckCircle2, AlertCircle } from 'lucide-react';

interface HotelModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const HotelModal: React.FC<HotelModalProps> = ({ isOpen, onClose }) => {
  const [days, setDays] = useState(7);
  const [petType, setPetType] = useState('эублефар');
  const [needUV, setNeedUV] = useState(true);
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const pricePerDay = 300;
  const totalPrice = days * pricePerDay;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone) return;
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-[#0c1a12] border border-[#1b3829] rounded-2xl shadow-2xl overflow-hidden text-[#e1ede6]">
        
        {/* Заголовок */}
        <div className="p-6 bg-gradient-to-r from-[#0f281b] to-[#0c1a12] border-b border-[#1b3829] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-emerald-500/10 border border-emerald-500/30 rounded-xl text-emerald-400">
              <Calendar className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Гостиница для рептилий</h3>
              <p className="text-xs text-emerald-400 font-mono">300 ₽ / сутки • Всё включено</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 rounded-lg hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6">
          {submitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-500/40">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-white">Бронь предварительно рассчитана!</h4>
              <p className="text-sm text-gray-300 max-w-sm mx-auto">
                Мы закрепили за вами оборудованный бокс на <span className="text-emerald-400 font-bold">{days} дн.</span> для питомца ({petType}). Герпетолог свяжется по номеру <span className="font-mono text-white">{phone}</span> в течение 15 минут.
              </p>
              <div className="pt-4">
                <button
                  onClick={() => { setSubmitted(false); onClose(); }}
                  className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-medium rounded-xl transition-colors text-sm shadow-lg shadow-emerald-900/30"
                >
                  Вернуться на сайт
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Преимущества плашка */}
              <div className="p-3.5 bg-[#122419] border border-[#1b3829] rounded-xl text-xs text-gray-300 space-y-2">
                <div className="flex items-center gap-2 text-emerald-400 font-semibold">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Привозите только питомца!</span>
                </div>
                <p className="text-[11px] leading-relaxed text-gray-400">
                  Мы предоставляем собственный стерильный стеклянный террариум, термоковрики, УФ-лампы Exo-Terra правильного спектра и питание по графику.
                </p>
              </div>

              {/* Выбор животного */}
              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-2">Вид вашего питомца</label>
                <div className="grid grid-cols-3 gap-2">
                  {['Эублефар', 'Агама', 'Хамелеон', 'Геккон бананоед', 'Змея', 'Другое'].map((type) => (
                    <button
                      type="button"
                      key={type}
                      onClick={() => setPetType(type.toLowerCase())}
                      className={`py-2 px-3 rounded-xl text-xs font-medium border transition-all text-center ${
                        petType === type.toLowerCase()
                          ? 'bg-emerald-600/20 border-emerald-500 text-white font-bold'
                          : 'bg-[#08120c] border-[#1b3829] text-gray-400 hover:border-gray-600'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Калькулятор дней */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-semibold text-gray-300">Длительность передержки</label>
                  <span className="font-mono text-sm font-bold text-emerald-400">{days} дней</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="30"
                  value={days}
                  onChange={(e) => setDays(Number(e.target.value))}
                  className="w-full h-2 bg-[#1b3829] rounded-lg appearance-none cursor-pointer accent-emerald-500"
                />
                <div className="flex justify-between text-[10px] text-gray-500 mt-1 font-mono">
                  <span>1 день</span>
                  <span>15 дней</span>
                  <span>30 дней</span>
                </div>
              </div>

              {/* Условия климата */}
              <div className="grid grid-cols-2 gap-3 pt-1">
                <div className="p-2.5 rounded-xl bg-[#08120c] border border-[#1b3829] flex items-center gap-2.5">
                  <Thermometer className="w-4 h-4 text-amber-400" />
                  <span className="text-xs text-gray-300">Обогрев 28-32°C</span>
                </div>
                <div className="p-2.5 rounded-xl bg-[#08120c] border border-[#1b3829] flex items-center gap-2.5">
                  <Sun className="w-4 h-4 text-emerald-400" />
                  <span className="text-xs text-gray-300">УФ-спектр UVB</span>
                </div>
              </div>

              {/* Итоговая цена */}
              <div className="p-4 rounded-xl bg-gradient-to-r from-emerald-950/60 to-[#0f281b] border border-emerald-500/30 flex items-center justify-between">
                <div>
                  <p className="text-xs text-gray-400">Расчетная стоимость</p>
                  <p className="text-2xl font-black text-white tracking-tight font-mono">{totalPrice.toLocaleString()} ₽</p>
                </div>
                <div className="text-right text-[11px] text-emerald-400 font-medium">
                  300 ₽ × {days} сут.<br/>
                  <span className="text-gray-400 text-[10px]">Корм включен</span>
                </div>
              </div>

              {/* Номер телефона */}
              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-1.5">Телефон для подтверждения брони</label>
                <input
                  type="tel"
                  required
                  placeholder="+7 (999) 000-00-00"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-3 bg-[#08120c] border border-[#1b3829] rounded-xl text-white text-sm focus:outline-none focus:border-emerald-500 transition-colors placeholder:text-gray-600"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl transition-all shadow-lg shadow-emerald-900/40 text-sm flex items-center justify-center gap-2"
              >
                <span>Забронировать место за {totalPrice} ₽</span>
              </button>

              <p className="text-[10px] text-center text-gray-500 flex items-center justify-center gap-1">
                <AlertCircle className="w-3 h-3" />
                Оплата производится при заселении питомца в салоне на Яцкова 19/1
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
