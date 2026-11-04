import { useSearchParams, useNavigate } from 'react-router-dom';
import { useMealSuggest } from '../hooks/useMealSuggest';
import type { MealCombination } from '../hooks/useMealSuggest';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { dummyProducts } from '../types';
import { MacroSummary } from '../components/features/MacroSummary';
import { ProductCard } from '../components/features/ProductCard';
import { Button } from '../components/ui/Button';

export default function Result() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  // URLから条件を取得（デフォルト値も設定）
  const budget = Number(searchParams.get('budget')) || 700;
  const mode = (searchParams.get('mode') as 'protein' | 'healthy' | 'cospa') || 'protein';

  // アルゴリズムの実行
  const { currentSuggestion, reroll, hasResult } = useMealSuggest(dummyProducts, budget, mode);

  // お気に入り保存用のフック
  const [favorites, setFavorites] = useLocalStorage<MealCombination[]>('cvs-favorites', []);

  // 決定して保存する処理
  const handleSave = () => {
    if (currentSuggestion) {
      setFavorites([currentSuggestion, ...favorites]); // 新しい組み合わせを先頭に追加
      navigate('/favorites'); // お気に入り画面へ遷移
    }
  };

  // 予算内で組み合わせが見つからなかった場合
  if (!hasResult || !currentSuggestion) {
    return (
      <div className="min-h-screen p-6 bg-gray-50 flex flex-col items-center justify-center pb-32">
        <p className="text-gray-600 mb-8">条件に合う組み合わせが見つかりませんでした。</p>
        <Button onClick={() => navigate('/')}>条件を変えてやり直す</Button>
      </div>
    );
  }

  return (
    // pb-40 (160px) 下部ボタン＋ナビゲーション用の余白を確保
    <div className="min-h-screen bg-gray-50 pb-40">
      <header className="sticky top-0 z-10 flex items-center px-4 py-4 bg-white border-b border-gray-200">
        <button onClick={() => navigate('/')} className="text-sm font-medium text-gray-500 mr-4">
          ← 戻る
        </button>
        <h1 className="text-base font-bold text-gray-900">提案結果</h1>
      </header>

      <main className="p-4 max-w-md mx-auto space-y-6">
        <MacroSummary suggestion={currentSuggestion} />

        <div className="space-y-4">
          <h2 className="text-sm font-bold text-gray-700 ml-2">商品の組み合わせ</h2>
          <div className="flex flex-col gap-2">
            {currentSuggestion.items.map(item => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        </div>
      </main>

      {/* bottom-16 (64px) を指定し、FloatingNavの上に配置するよう調整 */}
      <div className="fixed bottom-16 left-0 right-0 p-4 bg-white border-t border-gray-200 z-40">
        <div className="max-w-md mx-auto flex gap-4">
          <Button variant="outline" className="flex-1" onClick={reroll}>
            別の提案
          </Button>
          <Button className="flex-1 !bg-gray-900 !text-white hover:!bg-gray-800 border-none" onClick={handleSave}>
            決定・保存
          </Button>
        </div>
      </div>
    </div>
  );
}