import React, { useState } from 'react';
import { Lightbulb, ChevronDown, ChevronUp } from 'lucide-react';

interface CopywriterNoteProps {
  title?: string;
  note: string;
  category?: 'UX ТРИГГЕР' | 'КОПИРАЙТИНГ' | 'РАЗМЕЩЕНИЕ ФОТО';
}

export const CopywriterNote: React.FC<CopywriterNoteProps> = ({
  title = 'Принцип конверсии в блоке',
  note,
  category = 'КОПИРАЙТИНГ'
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const getBadgeColor = () => {
    switch(category) {
      case 'UX ТРИГГЕР': return 'bg-amber-500/20 text-amber-300 border-amber-500/30';
      case 'РАЗМЕЩЕНИЕ ФОТО': return 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30';
      default: return 'bg-blue-500/20 text-blue-300 border-blue-500/30';
    }
  };

  return (
    <div className="my-3 border border-[#1b3829] bg-[#0c1a12]/80 rounded-xl overflow-hidden backdrop-blur-sm transition-all shadow-lg shadow-black/20">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-2.5 flex items-center justify-between text-left hover:bg-[#13281b] transition-colors"
      >
        <div className="flex items-center gap-2.5">
          <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded border ${getBadgeColor()}`}>
            {category}
          </span>
          <span className="text-xs font-semibold text-[#a3c2b0] flex items-center gap-1.5">
            <Lightbulb className="w-3.5 h-3.5 text-amber-400" />
            {title}
          </span>
        </div>
        <div className="text-[#648873]">
          {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </div>
      </button>

      {isOpen && (
        <div className="px-4 pb-3.5 pt-1 text-xs text-[#d0e0d7] leading-relaxed border-t border-[#1b3829]/60 font-sans bg-[#08120c]">
          <p className="opacity-90">{note}</p>
        </div>
      )}
    </div>
  );
};
