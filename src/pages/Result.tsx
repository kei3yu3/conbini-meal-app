import { useSearchParams, useNavigate } from 'react-router-dom';
import { useMealSuggest } from '../hooks/useMealSuggest';
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

  // 予算内で組み合わせが見つからなかった場合
  if (!hasResult || !currentSuggestion) {
    return (
      <div className="min-h-screen p-6 bg-gray-50 flex flex-col items-center justify-center">
        <p className="text-gray-600 mb-8">条件に合う組み合わせが見つかりませんでした。</p>
        <Button onClick={() => navigate('/')}>条件を変えてやり直す</Button>
      </div>
    );
  }

  return (
    // pb-32 (128px) 下部ボタン用の余白
    <div className="min-h-screen bg-gray-50 pb-32">
      {/* px-4 (16px), py-4 (16px) */}
      <header className="sticky top-0 z-10 flex items-center px-4 py-4 bg-white border-b border-gray-200">
        <button onClick={() => navigate('/')} className="text-sm font-medium text-gray-500 mr-4">
          ← 戻る
        </button>
        <h1 className="text-base font-bold text-gray-900">提案結果</h1>
      </header>

      {/* p-4 (16px), space-y-6 (24px) */}
      <main className="p-4 max-w-md mx-auto space-y-6">
        <MacroSummary suggestion={currentSuggestion} />

        {/* space-y-4 (16px) */}
        <div className="space-y-4">
          <h2 className="text-sm font-bold text-gray-700 ml-2">商品の組み合わせ</h2>
          {/* gap-2 (8px) */}
          <div className="flex flex-col gap-2">
            {currentSuggestion.items.map(item => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        </div>
      </main>

      {/* p-4 (16px), gap-4 (16px) */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-200">
        <div className="max-w-md mx-auto flex gap-4">
          <Button variant="outline" className="flex-1" onClick={reroll}>
            別の提案
          </Button>
          <Button className="flex-1 !bg-gray-900 !text-white hover:!bg-gray-800 border-none">
            決定する
          </Button>
        </div>
      </div>
    </div>
  );
}