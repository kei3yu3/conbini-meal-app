import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { ModeSelector } from '../components/features/ModeSelector';

type Mode = 'protein' | 'healthy' | 'cospa';

export default function Home() {
  const navigate = useNavigate();
  // 初期値（最初は700円、高タンパクが選択された状態で描画されます）
  const [budget, setBudget] = useState<number>(700);
  const [mode, setMode] = useState<Mode>('protein');

  const budgetOptions = [500, 700, 1000];

  const handleSearch = () => {
    navigate(`/result?budget=${budget}&mode=${mode}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-40">
      <header className="sticky top-0 z-10 flex items-center justify-center px-4 py-4 bg-white border-b border-gray-200">
        <h1 className="text-base font-bold text-gray-900">条件入力</h1>
      </header>

      <main className="p-4 max-w-md mx-auto space-y-8">
        <section className="space-y-4">
          <h2 className="text-sm font-bold text-gray-700 ml-2">予算はいくらですか？</h2>
          <div className="grid grid-cols-3 gap-2">
            {budgetOptions.map((amount) => {
              const isSelected = budget === amount;
              return (
                <button
                  key={amount}
                  type="button" // ★追加: 意図しないリロードを防ぐ
                  onClick={() => setBudget(amount)}
                  className={`py-3 rounded-lg font-bold text-sm border-2 transition-all duration-200 ${
                    isSelected
                      ? 'border-gray-900 bg-gray-900 text-white shadow-md' // 選択時は黒背景
                      : 'border-gray-200 bg-white text-gray-600 hover:border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  ¥{amount}
                </button>
              );
            })}
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-sm font-bold text-gray-700 ml-2">今日の目的は？</h2>
          <ModeSelector selectedMode={mode} onSelect={setMode} />
        </section>
      </main>

      <div className="fixed bottom-16 left-0 right-0 p-4 bg-gradient-to-t from-gray-50 via-gray-50 to-transparent z-40 pointer-events-none">
        <div className="max-w-md mx-auto pointer-events-auto">
          <Button size="lg" onClick={handleSearch}>
            この条件で探す
          </Button>
        </div>
      </div>
    </div>
  );
}