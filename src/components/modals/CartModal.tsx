import React, { useState } from 'react';
import { X, ShoppingBag, Trash2, ArrowRight, ShieldCheck, PhoneCall, CheckCircle2 } from 'lucide-react';
import { CartItem } from '../../types';

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onUpdateQuantity: (productId: string, delta: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearCart: () => void;
}

export const CartModal: React.FC<CartModalProps> = ({
  isOpen,
  onClose,
  cart,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart
}) => {
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const [ordered, setOrdered] = useState(false);

  if (!isOpen) return null;

  const totalSum = cart.reduce((acc, item) => acc + (item.product.price * item.quantity), 0);

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone) return;
    setOrdered(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-end bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-md h-full bg-[#0a140e] border-l border-[#1b3829] shadow-2xl flex flex-col text-[#e1ede6] animate-in slide-in-from-right duration-300">
        
        {/* Заголовок */}
        <div className="p-5 bg-[#0f1f17] border-b border-[#1b3829] flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <ShoppingBag className="w-5 h-5 text-emerald-400" />
            <h3 className="font-bold text-white text-base">Корзина заказа</h3>
            <span className="px-2 py-0.5 bg-emerald-500/20 text-emerald-300 font-mono text-xs font-bold rounded-full">
              {cart.reduce((a, b) => a + b.quantity, 0)} шт
            </span>
          </div>
          <button onClick={onClose} className="p-1 rounded hover:bg-white/10 text-gray-400 hover:text-white transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Тело корзины */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {ordered ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-500/40 animate-bounce">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-lg font-bold text-white">Заказ успешно оформлен!</h4>
              <p className="text-xs text-gray-300 leading-relaxed max-w-xs mx-auto">
                Спасибо, {name || 'покупатель'}! Мы забронировали выбранные товары на сумму <span className="text-emerald-400 font-mono font-bold">{totalSum.toLocaleString()} ₽</span>. Менеджер салона ЗооДракон перезвонит по номеру <span className="font-mono text-white">{phone}</span> для подтверждения наличия и времени самовывоза.
              </p>
              <div className="pt-6">
                <button
                  onClick={() => { setOrdered(false); onClearCart(); onClose(); }}
                  className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-medium rounded-xl text-xs transition-colors"
                >
                  Вернуться в магазин
                </button>
              </div>
            </div>
          ) : cart.length === 0 ? (
            <div className="py-20 text-center space-y-3">
              <ShoppingBag className="w-12 h-12 text-gray-600 mx-auto stroke-1" />
              <p className="text-sm font-semibold text-gray-400">Ваша корзина пока пуста</p>
              <p className="text-xs text-gray-500 max-w-xs mx-auto">
                Перейдите во вкладку «Товары и услуги», чтобы выбрать рептилий, рыбок, кормовых насекомых или террариумы под ключ.
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              {cart.map((item) => (
                <div key={item.product.id} className="p-3 bg-[#0f1f17] border border-[#1b3829] rounded-xl flex gap-3 items-center">
                  <img
                    src={item.product.imageUrl}
                    alt={item.product.title}
                    className="w-14 h-14 object-cover rounded-lg border border-[#1b3829]"
                  />
                  <div className="flex-1 min-w-0">
                    <h5 className="text-xs font-semibold text-white truncate">{item.product.title}</h5>
                    <p className="text-xs font-mono text-emerald-400 font-bold mt-1">
                      {item.product.price.toLocaleString()} ₽
                    </p>
                  </div>
                  
                  {/* Счетчик */}
                  <div className="flex items-center gap-1.5 bg-[#0a140e] px-2 py-1 rounded-lg border border-[#1b3829]">
                    <button
                      onClick={() => onUpdateQuantity(item.product.id, -1)}
                      className="text-gray-400 hover:text-white text-xs font-bold w-4 h-4 flex items-center justify-center"
                    >
                      -
                    </button>
                    <span className="font-mono text-xs text-white px-1">{item.quantity}</span>
                    <button
                      onClick={() => onUpdateQuantity(item.product.id, 1)}
                      className="text-gray-400 hover:text-white text-xs font-bold w-4 h-4 flex items-center justify-center"
                    >
                      +
                    </button>
                  </div>

                  <button
                    onClick={() => onRemoveItem(item.product.id)}
                    className="p-1.5 text-gray-500 hover:text-red-400 transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Подвал корзины с оформлением */}
        {!ordered && cart.length > 0 && (
          <div className="p-5 bg-[#0f1f17] border-t border-[#1b3829] space-y-4">
            <div className="flex justify-between items-center text-sm font-bold">
              <span className="text-gray-400">Итого к оплате:</span>
              <span className="text-xl text-emerald-400 font-mono font-black">{totalSum.toLocaleString()} ₽</span>
            </div>

            <form onSubmit={handleSubmitOrder} className="space-y-3 pt-1">
              <input
                type="text"
                placeholder="Ваше имя (необязательно)"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-[#0a140e] border border-[#1b3829] rounded-xl text-xs text-white focus:outline-none focus:border-emerald-500"
              />
              <input
                type="tel"
                required
                placeholder="+7 (999) 000-00-00 (для связи)"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-[#0a140e] border border-[#1b3829] rounded-xl text-xs text-white focus:outline-none focus:border-emerald-500 font-mono"
              />
              <button
                type="submit"
                className="w-full py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl transition-all shadow-lg shadow-emerald-950/50 text-xs flex items-center justify-center gap-2"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>Оформить быстрый заказ</span>
              </button>
            </form>

            <div className="pt-1 flex items-center gap-2 text-[10px] text-gray-500">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
              <span>Оплата при получении на ул. Героя Яцкова И.В., 19/1</span>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
