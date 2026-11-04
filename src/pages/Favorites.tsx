import { useNavigate } from 'react-router-dom';
import { useLocalStorage } from '../hooks/useLocalStorage';
import type { MealCombination } from '../hooks/useMealSuggest';
import { MacroSummary } from '../components/features/MacroSummary';
import { Button } from '../components/ui/Button';

export default function Favorites() {
  const navigate = useNavigate();
  // 先ほど作成したフックを呼び出し、保存された配列を取得
  const [favorites, setFavorites] = useLocalStorage<MealCombination[]>('cvs-favorites', []);

  // 削除機能
  const removeFavorite = (indexToRemove: number) => {
    setFavorites(favorites.filter((_, index) => index !== indexToRemove));
  };

  return (
    // pb-32 (128px) 下部ナビゲーション用の余白
    <div className="min-h-screen bg-gray-50 pb-32">
      {/* px-4 (16px), py-4 (16px) */}
      <header className="sticky top-0 z-10 flex items-center px-4 py-4 bg-white border-b border-gray-200">
        <h1 className="text-base font-bold text-gray-900 mx-auto">お気に入り・履歴</h1>
      </header>

      {/* p-4 (16px), space-y-8 (32px) */}
      <main className="p-4 max-w-md mx-auto space-y-8">
        {favorites.length === 0 ? (
          // py-16 (64px), mb-8 (32px)
          <div className="text-center py-16">
            <p className="text-gray-500 mb-8 font-medium">保存されたお気に入りがありません。</p>
            <Button variant="outline" onClick={() => navigate('/')}>条件を入力して探す</Button>
          </div>
        ) : (
          favorites.map((fav, index) => (
            // p-4 (16px), space-y-4 (16px)
            <div key={index} className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm space-y-4">
              {/* pb-2 (8px) */}
              <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                <span className="text-sm font-bold text-gray-700">保存済みセット {index + 1}</span>
                <button 
                  onClick={() => removeFavorite(index)} 
                  className="text-xs text-red-500 font-bold p-2 bg-red-50 rounded"
                >
                  削除
                </button>
              </div>
              
              <MacroSummary suggestion={fav} />
              
              {/* 商品名をテキストでシンプルに列挙 */}
              <div className="text-sm text-gray-600 font-medium leading-relaxed bg-gray-50 p-4 rounded">
                {fav.items.map(item => item.name).join(' ／ ')}
              </div>
            </div>
          ))
        )}
      </main>
    </div>
  );
}