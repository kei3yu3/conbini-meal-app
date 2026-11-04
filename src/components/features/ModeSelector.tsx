import { Beef, Leaf, Coins } from 'lucide-react';
import type { ReactNode } from 'react';

type Mode = 'protein' | 'healthy' | 'cospa';

interface ModeSelectorProps {
  selectedMode: Mode;
  onSelect: (mode: Mode) => void;
}

export function ModeSelector({ selectedMode, onSelect }: ModeSelectorProps) {
  const modes: { id: Mode; label: string; icon: ReactNode; desc: string }[] = [
    { id: 'protein', label: '高タンパク', icon: <Beef size={20} />, desc: '筋肉合成を優先' },
    { id: 'healthy', label: 'ヘルシー', icon: <Leaf size={20} />, desc: 'カロリー・脂質制限' },
    { id: 'cospa', label: 'コスパ最大化', icon: <Coins size={20} />, desc: '満腹感と金額バランス' },
  ];

  return (
    <div className="flex flex-col gap-2">
      {modes.map((mode) => {
        const isSelected = selectedMode === mode.id;

        return (
          <button
            key={mode.id}
            type="button" // ★追加: 意図しないリロードを防ぐ
            onClick={() => onSelect(mode.id)}
            className={`flex items-center p-4 rounded-lg border-2 transition-all duration-200 text-left ${
              isSelected
                ? 'border-gray-900 bg-gray-900 shadow-md' // 選択時は黒背景
                : 'border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50' // 未選択時
            }`}
          >
            <div className={`p-3 rounded flex-shrink-0 mr-4 transition-colors ${
              isSelected 
                ? 'bg-white text-gray-900' // アイコン背景を白に反転
                : 'bg-gray-100 text-gray-400'
            }`}>
              {mode.icon}
            </div>
            <div>
              <div className={`font-bold text-sm ${isSelected ? 'text-white' : 'text-gray-900'}`}>
                {mode.label}
              </div>
              <div className={`text-xs mt-1 ${isSelected ? 'text-gray-300' : 'text-gray-500'}`}>
                {mode.desc}
              </div>
            </div>
          </button>
        );
      })}
    </div>
  );
}