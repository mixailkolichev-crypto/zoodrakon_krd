import React from 'react';
import { X, ShoppingBag, CheckCircle, Lightbulb, ShieldAlert, Sparkles } from 'lucide-react';
import { Product } from '../../types';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (p: Product) => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ product, onClose, onAddToCart }) => {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl max-h-[90vh] bg-[#0c1a12] border border-[#1b3829] rounded-2xl shadow-2xl overflow-hidden text-[#e1ede6] flex flex-col sm:flex-row animate-in zoom-in-95 duration-200">
        
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 hover:bg-black/80 text-gray-300 hover:text-white transition-all border border-[#1b3829]"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Фото */}
        <div className="w-full sm:w-1/2 h-64 sm:h-auto relative bg-[#08120c]">
          <img
            src={product.imageUrl}
            alt={product.title}
            className="w-full h-full object-cover"
          />
          {product.badge && (
            <span className="absolute top-4 left-4 px-3 py-1 bg-emerald-600 text-white font-mono font-bold text-xs rounded-lg shadow-lg">
              {product.badge}
            </span>
          )}
        </div>

        {/* Контент */}
        <div className="w-full sm:w-1/2 p-6 overflow-y-auto flex flex-col justify-between space-y-4">
          
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 font-semibold">
              <span>Арт: {product.id.toUpperCase()}</span>
              <span>•</span>
              <span className="flex items-center gap-1 text-emerald-400">
                <CheckCircle className="w-3.5 h-3.5" /> В наличии в Краснодаре
              </span>
            </div>

            <h3 className="text-xl font-bold text-white leading-tight">{product.title}</h3>

            <div className="flex items-baseline gap-2 pt-1">
              <span className="text-3xl font-black text-emerald-400 font-mono">
                {product.price.toLocaleString()} ₽
              </span>
              {product.oldPrice && (
                <span className="text-sm font-mono text-gray-500 line-through">
                  {product.oldPrice.toLocaleString()} ₽
                </span>
              )}
            </div>

            <p className="text-xs text-gray-300 leading-relaxed pt-2 border-t border-[#1b3829]">
              {product.description}
            </p>

            {product.specs && (
              <div className="space-y-1.5 pt-2">
                <p className="text-[11px] uppercase tracking-wider text-gray-500 font-mono font-bold">Характеристики и условия:</p>
                <ul className="space-y-1">
                  {product.specs.map((spec, i) => (
                    <li key={i} className="text-xs text-gray-300 flex items-center gap-2 font-mono">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0"></span>
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Копирайтерские заметки */}
          {product.copyNotes && (
            <div className="p-3 bg-amber-500/10 border border-amber-500/30 rounded-xl text-xs space-y-1 my-2">
              <p className="font-bold text-amber-300 flex items-center gap-1.5 text-[11px]">
                <Lightbulb className="w-3.5 h-3.5 text-amber-400" />
                UX-Копирайтинг заметка:
              </p>
              <p className="text-amber-200/90 text-[11px] leading-relaxed italic">
                {product.copyNotes}
              </p>
            </div>
          )}

          <div className="pt-4 space-y-3">
            <button
              onClick={() => { onAddToCart(product); onClose(); }}
              className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold rounded-xl transition-all shadow-lg shadow-emerald-950/60 text-sm flex items-center justify-center gap-2"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Добавить в корзину за {product.price} ₽</span>
            </button>

            <div className="p-2.5 bg-[#08120c] rounded-lg border border-[#1b3829] flex items-center gap-2 text-[10px] text-gray-400">
              <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>Бесплатная консультация герпетолога при покупке в ЗооДраконе</span>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
