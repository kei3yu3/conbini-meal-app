import { Check } from 'lucide-react';
import type { Product } from '../../types';

// 商品カードが受け取るプロパティの型定義
interface Props {
  product: Product;
  isChecked?: boolean;
  onToggle?: () => void;
}

export function ProductCard({ product, isChecked = false, onToggle }: Props) {
  // チェック操作が有効かどうかを判定するフラグ
  const isCheckable = Boolean(onToggle);

  // カード内部の共通レイアウト（チェック枠・商品画像・商品情報）
  const content = (
    <>
      {/* チェック機能が有効な場合のみ左端にモノトーンのチェック枠を表示 */}
      {isCheckable && (
        <div
          className={`w-6 h-6 rounded-md border-2 flex-shrink-0 mr-4 flex items-center justify-center transition-colors ${
            isChecked
              ? 'bg-gray-900 border-gray-900 text-white'
              : 'bg-white border-gray-300 text-transparent'
          }`}
        >
          <Check size={14} strokeWidth={3} />
        </div>
      )}

      {/* 商品サムネイル画像（チェック済み時は彩度と透過度を落とす） */}
      <div
        className={`w-16 h-16 bg-gray-100 rounded flex-shrink-0 mr-4 flex items-center justify-center overflow-hidden transition-opacity ${
          isChecked ? 'opacity-40 grayscale' : 'opacity-100'
        }`}
      >
        {product.imageUrl ? (
          <img src={product.imageUrl} alt={product.name} className="w-full h-full object-cover" />
        ) : (
          <span className="text-xs text-gray-400">No Image</span>
        )}
      </div>

      {/* 商品名・PFC・価格のテキスト情報領域 */}
      <div className="flex-1 flex flex-col justify-between min-w-0">
        <div
          className={`text-sm font-medium leading-tight transition-colors ${
            isChecked ? 'text-gray-400 line-through' : 'text-gray-900'
          }`}
        >
          {product.name}
        </div>

        <div className="flex justify-between items-end mt-2">
          <div className={`text-xs ${isChecked ? 'text-gray-400' : 'text-gray-500'}`}>
            P:{product.protein.toFixed(1)} F:{product.fat.toFixed(1)} C:{product.carbs.toFixed(1)}
          </div>
          <div className={`font-bold ${isChecked ? 'text-gray-400' : 'text-gray-900'}`}>
            ¥{product.price}
          </div>
        </div>
      </div>
    </>
  );

  // チェック機能ありの場合はカード全体をタップ可能なボタンとして描画
  if (isCheckable) {
    return (
      <button
        type="button"
        role="checkbox"
        aria-checked={isChecked}
        onClick={onToggle}
        className={`w-full flex items-center p-4 border rounded-lg text-left transition-all active:scale-[0.99] ${
          isChecked
            ? 'bg-gray-100 border-gray-200'
            : 'bg-white border-gray-200 hover:border-gray-300'
        }`}
      >
        {content}
      </button>
    );
  }

  // チェック機能なしの場合は通常の静的なカードとして描画
  return (
    <div className="flex items-center p-4 bg-white border border-gray-200 rounded-lg">
      {content}
    </div>
  );
}