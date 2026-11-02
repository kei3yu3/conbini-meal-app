import { Beef, Leaf, Coins } from 'lucide-react';
import type { ReactNode } from 'react'; // ★1行追加

type Mode = 'protein' | 'healthy' | 'cospa';

interface ModeSelectorProps {
  selectedMode: Mode;
  onSelect: (mode: Mode) => void;
}

export function ModeSelector({ selectedMode, onSelect }: ModeSelectorProps) {
  // ★ icon: JSX.Element; を icon: ReactNode; に変更
  const modes: { id: Mode; label: string; icon: ReactNode; desc: string }[] = [
    { id: 'protein', label: '高タンパク', icon: <Beef size={24} />, desc: '筋肉合成を優先' },
    { id: 'healthy', label: 'ヘルシー', icon: <Leaf size={24} />, desc: 'カロリー・脂質制限' },
    { id: 'cospa', label: 'コスパ最大化', icon: <Coins size={24} />, desc: '満腹感と金額バランス' },
  ];

  return (
    <div className="flex flex-col gap-3">
      {modes.map((mode) => (
        <button
          key={mode.id}
          onClick={() => onSelect(mode.id)}
          className={`flex items-center p-4 rounded-xl border-2 transition-all ${
            selectedMode === mode.id
              ? 'border-orange-500 bg-orange-50'
              : 'border-gray-200 bg-white hover:border-orange-200'
          }`}
        >
          <div className={`p-3 rounded-full mr-4 transition-colors ${
            selectedMode === mode.id ? 'bg-orange-500 text-white' : 'bg-gray-100 text-gray-400'
          }`}>
            {mode.icon}
          </div>
          <div className="text-left">
            <div className="font-bold text-gray-800 text-lg">{mode.label}</div>
            <div className="text-sm text-gray-500 mt-1">{mode.desc}</div>
          </div>
        </button>
      ))}
    </div>
  );
}