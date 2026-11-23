import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocalStorage } from '../hooks/useLocalStorage';
import type { MealCombination } from '../hooks/useMealSuggest';
import { MacroSummary } from '../components/features/MacroSummary';
import { ProductCard } from '../components/features/ProductCard';
import { Button } from '../components/ui/Button';

export default function Favorites() {
  // 画面遷移用のフックとお気に入りデータの永続化フックを初期化
  const navigate = useNavigate();
  const [favorites, setFavorites] = useLocalStorage<MealCombination[]>('cvs-favorites', []);

  // 各保存済みセット（配列インデックス）ごとのチェック済み商品IDを管理するState
  const [checkedBySet, setCheckedBySet] = useState<Record<number, string[]>>({});

  // 指定したセット内の商品チェック状態をオン・オフ切り替えるハンドラ
  const handleToggleCheck = (setIndex: number, productId: string) => {
    setCheckedBySet((prev) => {
      const currentChecked = prev[setIndex] ?? [];
      const nextChecked = currentChecked.includes(productId)
        ? currentChecked.filter((id) => id !== productId)
        : [...currentChecked, productId];

      return { ...prev, [setIndex]: nextChecked };
    });
  };

  // 指定したセットのチェック状態をすべて解除するハンドラ
  const handleResetCheck = (setIndex: number) => {
    setCheckedBySet((prev) => ({ ...prev, [setIndex]: [] }));
  };

  // お気に入りセットを削除し、後続セットのチェック状態インデックスも詰める処理
  const removeFavorite = (indexToRemove: number) => {
    setFavorites(favorites.filter((_, index) => index !== indexToRemove));

    setCheckedBySet((prev) => {
      const next: Record<number, string[]> = {};
      Object.entries(prev).forEach(([key, ids]) => {
        const idx = Number(key);
        if (idx < indexToRemove) next[idx] = ids;
        if (idx > indexToRemove) next[idx - 1] = ids;
      });
      return next;
    });
  };

  return (
    // 下部ナビゲーション分の余白（128px）を確保するレイアウト
    <div className="min-h-screen bg-gray-50 pb-32">
      {/* 画面上部の固定ヘッダー */}
      <header className="sticky top-0 z-10 flex items-center px-4 py-4 bg-white border-b border-gray-200">
        <h1 className="text-base font-bold text-gray-900 mx-auto">お気に入り・履歴</h1>
      </header>

      {/* お気に入り一覧または空状態を表示するメイン領域 */}
      <main className="p-4 max-w-md mx-auto space-y-8">
        {favorites.length === 0 ? (
          // 保存データが0件のときの案内表示
          <div className="text-center py-16">
            <p className="text-gray-500 mb-8 font-medium">保存されたお気に入りがありません。</p>
            <Button variant="outline" onClick={() => navigate('/')}>条件を入力して探す</Button>
          </div>
        ) : (
          // 保存済みセットをカード形式で順番に描画
          favorites.map((fav, index) => {
            const checkedIds = checkedBySet[index] ?? [];
            const totalCount = fav.items.length;
            const checkedCount = checkedIds.length;
            const isAllChecked = totalCount > 0 && checkedCount === totalCount;

            return (
              <div
                key={index}
                className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm space-y-4"
              >
                {/* セット名・チェック解除・削除ボタンをまとめた上部ヘッダー行 */}
                <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                  <span className="text-sm font-bold text-gray-700">保存済みセット {index + 1}</span>
                  <div className="flex items-center gap-2">
                    {checkedCount > 0 && (
                      <button
                        type="button"
                        onClick={() => handleResetCheck(index)}
                        className="text-xs text-gray-600 font-medium px-2 py-2 bg-gray-100 rounded hover:bg-gray-200 transition-colors"
                      >
                        チェック解除
                      </button>
                    )}
                    <button
                      type="button"
                      onClick={() => removeFavorite(index)}
                      className="text-xs text-red-500 font-bold px-2 py-2 bg-red-50 rounded hover:bg-red-100 transition-colors"
                    >
                      削除
                    </button>
                  </div>
                </div>

                {/* 合計金額・カロリー・PFCを表示するサマリーカード */}
                <MacroSummary suggestion={fav} />

                {/* 店内でのカゴ入れ進捗とチェック可能な商品カードリスト */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between px-1">
                    <span className="text-xs font-bold text-gray-500">タップしてカゴ入れチェック</span>
                    <span
                      className={`text-xs font-medium px-2 py-1 rounded ${
                        isAllChecked
                          ? 'bg-gray-900 text-white'
                          : 'bg-gray-100 text-gray-600'
                      }`}
                    >
                      {isAllChecked ? 'すべてカゴに入れました' : `${checkedCount} / ${totalCount}`}
                    </span>
                  </div>

                  <div className="flex flex-col gap-2">
                    {fav.items.map((item) => (
                      <ProductCard
                        key={item.id}
                        product={item}
                        isChecked={checkedIds.includes(item.id)}
                        onToggle={() => handleToggleCheck(index, item.id)}
                      />
                    ))}
                  </div>
                </div>
              </div>
            );
          })
        )}
      </main>
    </div>
  );
}