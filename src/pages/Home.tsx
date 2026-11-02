import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { ModeSelector } from '../components/features/ModeSelector';

type Mode = 'protein' | 'healthy' | 'cospa';

export default function Home() {
  const navigate = useNavigate();
  const [budget, setBudget] = useState<number>(700);
  const [mode, setMode] = useState<Mode>('protein');

  const budgetOptions = [500, 700, 1000];

  const handleSearch = () => {
    // 選択された条件をURLパラメータとしてResult画面に渡す
    navigate(`/result?budget=${budget}&mode=${mode}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-32">
      <header className="bg-white shadow-sm px-6 py-4 sticky top-0 z-10">
        <h1 className="text-xl font-extrabold text-gray-800 text-center">コンビニ栄養提案</h1>
      </header>

      <main className="p-6 max-w-md mx-auto space-y-10">
        {/* 予算設定 */}
        <section>
          <h2 className="text-lg font-bold text-gray-700 mb-4">予算はいくらですか？</h2>
          <div className="grid grid-cols-3 gap-3">
            {budgetOptions.map((amount) => (
              <button
                key={amount}
                onClick={() => setBudget(amount)}
                className={`py-4 rounded-xl font-bold text-lg border-2 transition-all ${
                  budget === amount
                    ? 'border-orange-500 bg-orange-500 text-white shadow-md'
                    : 'border-gray-200 bg-white text-gray-600 hover:border-orange-200'
                }`}
              >
                ¥{amount}
              </button>
            ))}
          </div>
        </section>

        {/* 目的設定 */}
        <section>
          <h2 className="text-lg font-bold text-gray-700 mb-4">今日の目的は？</h2>
          <ModeSelector selectedMode={mode} onSelect={setMode} />
        </section>
      </main>

      {/* 画面下部固定のフローティングボタン */}
      <div className="fixed bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-white via-white to-transparent pointer-events-none">
        <div className="max-w-md mx-auto pointer-events-auto">
          <Button size="lg" onClick={handleSearch}>
            この条件で探す
          </Button>
        </div>
      </div>
    </div>
  );
}