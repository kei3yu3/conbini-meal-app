import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Minus, Plus } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { ModeSelector } from '../components/features/ModeSelector';

// 選択可能な目的モードの型定義
type Mode = 'protein' | 'healthy' | 'cospa';

// 予算入力の下限・上限・刻み幅の定数
const MIN_BUDGET = 300;
const MAX_BUDGET = 1500;
const BUDGET_STEP = 50;

export default function Home() {
  const navigate = useNavigate();

  // 予算・目的・飲み物有無の入力状態を管理するState
  const [budget, setBudget] = useState<number>(700);
  const [mode, setMode] = useState<Mode>('protein');
  const [includeDrink, setIncludeDrink] = useState<boolean>(true);

  // ワンタップで選べる予算プリセット一覧
  const budgetOptions = [500, 700, 1000];

  // 予算を上下限の範囲内で増減させるハンドラ
  const adjustBudget = (delta: number) => {
    setBudget((prev) => Math.min(MAX_BUDGET, Math.max(MIN_BUDGET, prev + delta)));
  };

  // 入力条件をクエリパラメータに付与して結果画面へ遷移する処理
  const handleSearch = () => {
    navigate(`/result?budget=${budget}&mode=${mode}&drink=${includeDrink}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-40">
      {/* 画面上部の固定ヘッダー */}
      <header className="sticky top-0 z-10 flex items-center justify-center px-4 py-4 bg-white border-b border-gray-200">
        <h1 className="text-base font-bold text-gray-900">条件入力</h1>
      </header>

      <main className="p-4 max-w-md mx-auto space-y-8">
        {/* 予算設定セクション（スライダー・微調整ボタン・クイック選択） */}
        <section className="space-y-4">
          <div className="flex items-baseline justify-between px-2">
            <h2 className="text-sm font-bold text-gray-700">予算はいくらですか？</h2>
            <span className="text-2xl font-bold text-gray-900 tabular-nums">¥{budget}</span>
          </div>

          {/* 50円刻みのスライダーと増減ボタンを収めるカード */}
          <div className="p-4 bg-white border border-gray-200 rounded-lg space-y-4">
            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={() => adjustBudget(-BUDGET_STEP)}
                disabled={budget <= MIN_BUDGET}
                aria-label="予算を50円減らす"
                className="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-200 text-gray-700 hover:bg-gray-50 disabled:opacity-30 transition-colors"
              >
                <Minus size={16} />
              </button>

              <input
                type="range"
                min={MIN_BUDGET}
                max={MAX_BUDGET}
                step={BUDGET_STEP}
                value={budget}
                onChange={(e) => setBudget(Number(e.target.value))}
                aria-label="予算スライダー"
                className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-gray-900"
              />

              <button
                type="button"
                onClick={() => adjustBudget(BUDGET_STEP)}
                disabled={budget >= MAX_BUDGET}
                aria-label="予算を50円増やす"
                className="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-200 text-gray-700 hover:bg-gray-50 disabled:opacity-30 transition-colors"
              >
                <Plus size={16} />
              </button>
            </div>

            <div className="flex justify-between text-xs text-gray-400">
              <span>¥{MIN_BUDGET}</span>
              <span>¥{MAX_BUDGET}</span>
            </div>
          </div>

          {/* 定番金額のクイック選択ボタン */}
          <div className="grid grid-cols-3 gap-2">
            {budgetOptions.map((amount) => {
              const isSelected = budget === amount;
              return (
                <button
                  key={amount}
                  type="button"
                  onClick={() => setBudget(amount)}
                  className={`py-2 rounded-lg font-bold text-sm border-2 transition-all duration-200 ${
                    isSelected
                      ? 'border-gray-900 bg-gray-900 text-white shadow-md'
                      : 'border-gray-200 bg-white text-gray-600 hover:border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  ¥{amount}
                </button>
              );
            })}
          </div>
        </section>

        {/* 飲み物を含めるかどうかのオプション切り替えセクション */}
        <section className="space-y-4">
          <h2 className="text-sm font-bold text-gray-700 ml-2">オプション</h2>
          <button
            type="button"
            role="switch"
            aria-checked={includeDrink}
            onClick={() => setIncludeDrink((prev) => !prev)}
            className="w-full flex items-center justify-between p-4 bg-white border border-gray-200 rounded-lg text-left hover:bg-gray-50 transition-colors"
          >
            <div>
              <div className="text-sm font-bold text-gray-900">飲み物を含める</div>
              <div className="text-xs text-gray-500 mt-1">
                水筒や持参ドリンクがある場合はオフ
              </div>
            </div>

            {/* モノトーンのトグルスイッチ表示 */}
            <div
              className={`w-12 h-6 rounded-full p-1 transition-colors duration-200 flex-shrink-0 ${
                includeDrink ? 'bg-gray-900' : 'bg-gray-200'
              }`}
            >
              <div
                className={`w-4 h-4 rounded-full bg-white transition-transform duration-200 ${
                  includeDrink ? 'translate-x-6' : 'translate-x-0'
                }`}
              />
            </div>
          </button>
        </section>

        {/* 今日の目的を選択するセクション */}
        <section className="space-y-4">
          <h2 className="text-sm font-bold text-gray-700 ml-2">今日の目的は？</h2>
          <ModeSelector selectedMode={mode} onSelect={setMode} />
        </section>
      </main>

      {/* 画面下部に固定配置する検索実行ボタン */}
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