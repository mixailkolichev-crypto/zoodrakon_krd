import React, { useState } from 'react';
import { X, Users, Sparkles, CheckCircle2, Heart } from 'lucide-react';

interface ExcursionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ExcursionModal: React.FC<ExcursionModalProps> = ({ isOpen, onClose }) => {
  const [format, setFormat] = useState<'family' | 'school' | 'individual'>('family');
  const [guests, setGuests] = useState(3);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone) return;
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-[#0c1a12] border border-[#1b3829] rounded-2xl shadow-2xl overflow-hidden text-[#e1ede6]">
        
        <div className="p-6 bg-gradient-to-r from-[#1b3829] to-[#0c1a12] border-b border-[#1b3829] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-amber-500/10 border border-amber-500/30 rounded-xl text-amber-400">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Живая экскурсия в мир экзотики</h3>
              <p className="text-xs text-amber-400">Для детей и взрослых • г. Краснодар</p>
            </div>
          </div>
          <button onClick={onClose} className="p-1.5 rounded-lg hover:bg-white/10 text-gray-400 hover:text-white transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6">
          {submitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 bg-amber-500/20 text-amber-400 rounded-full flex items-center justify-center mx-auto border border-amber-500/40">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-white">Заявка на экскурсию принята!</h4>
              <p className="text-sm text-gray-300 max-w-sm mx-auto">
                Отлично, {name || 'друзья'}! Мы забронировали для вас время познавательной встречи в ЗооДраконе. Наш администратор перезвонит по номеру <span className="font-mono text-white">{phone}</span> для согласования удобного дня.
              </p>
              <button
                onClick={() => { setSubmitted(false); onClose(); }}
                className="mt-4 px-6 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-medium rounded-xl transition-colors text-sm"
              >
                Вернуться в каталог
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              
              <div className="p-3.5 bg-[#08120c] border border-[#1b3829] rounded-xl text-xs text-gray-300 space-y-1.5">
                <p className="text-emerald-400 font-semibold flex items-center gap-1.5">
                  <Heart className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                  Тактильный контакт под защитой герпетолога
                </p>
                <p className="text-gray-400 text-[11px] leading-relaxed">
                  Дети узнают, почему улыбается австралийская квакша, как хамелеон ловит добычу языком за 0.07 секунды, и смогут сфотографироваться с добрым бородатым драконом.
                </p>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-2">Формат программы</label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'family', label: 'Семейная' },
                    { id: 'school', label: 'Детская группа' },
                    { id: 'individual', label: 'Индивидуальная' }
                  ].map(f => (
                    <button
                      type="button"
                      key={f.id}
                      onClick={() => setFormat(f.id as any)}
                      className={`py-2 px-2 rounded-xl text-xs font-medium border transition-all text-center ${
                        format === f.id
                          ? 'bg-amber-500/20 border-amber-500 text-amber-300 font-bold'
                          : 'bg-[#08120c] border-[#1b3829] text-gray-400 hover:border-gray-600'
                      }`}
                    >
                      {f.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-1.5">Примерное количество участников</label>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setGuests(Math.max(1, guests - 1))}
                    className="w-10 h-10 rounded-xl bg-[#08120c] border border-[#1b3829] text-white font-bold flex items-center justify-center hover:bg-[#13281b]"
                  >
                    -
                  </button>
                  <span className="flex-1 text-center font-mono text-lg font-bold text-amber-400 bg-[#08120c] py-2 rounded-xl border border-[#1b3829]">
                    {guests} чел.
                  </span>
                  <button
                    type="button"
                    onClick={() => setGuests(guests + 1)}
                    className="w-10 h-10 rounded-xl bg-[#08120c] border border-[#1b3829] text-white font-bold flex items-center justify-center hover:bg-[#13281b]"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1">Ваше имя</label>
                  <input
                    type="text"
                    placeholder="Иван"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-[#08120c] border border-[#1b3829] rounded-xl text-white text-xs focus:outline-none focus:border-amber-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1">Телефон *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+7 (999) 000-00-00"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-[#08120c] border border-[#1b3829] rounded-xl text-white text-xs focus:outline-none focus:border-amber-500 font-mono"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-black font-extrabold rounded-xl transition-all shadow-lg shadow-amber-950/40 text-sm flex items-center justify-center gap-2"
              >
                <Users className="w-4 h-4" />
                <span>Записаться на экскурсию</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
