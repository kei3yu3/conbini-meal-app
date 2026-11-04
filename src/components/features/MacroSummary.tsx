import type { MealCombination } from '../../hooks/useMealSuggest';

interface Props {
  suggestion: MealCombination;
}

export function MacroSummary({ suggestion }: Props) {
  return (
    // p-6 (24px)
    <div className="p-6 bg-white border border-gray-200 rounded-lg">
      {/* mb-6 (24px), pb-4 (16px) */}
      <div className="flex justify-between items-end mb-6 pb-4 border-b border-gray-100">
        <span className="text-sm font-medium text-gray-600">合計金額</span>
        <span className="text-3xl font-bold text-gray-900">¥{suggestion.totalPrice}</span>
      </div>
      
      {/* mb-4 (16px) */}
      <div className="flex justify-between items-center mb-4">
        <span className="text-sm text-gray-600">総カロリー</span>
        <span className="text-lg font-bold text-gray-900">{suggestion.totalCalories} kcal</span>
      </div>
      
      {/* gap-4 (16px), p-2 (8px) */}
      <div className="grid grid-cols-3 gap-4">
        <div className="p-2 bg-gray-50 rounded text-center">
          <div className="text-xs text-gray-500 mb-1">タンパク質</div>
          <div className="font-bold text-gray-900">{suggestion.totalProtein.toFixed(1)}g</div>
        </div>
        <div className="p-2 bg-gray-50 rounded text-center">
          <div className="text-xs text-gray-500 mb-1">脂質</div>
          <div className="font-bold text-gray-900">{suggestion.totalFat.toFixed(1)}g</div>
        </div>
        <div className="p-2 bg-gray-50 rounded text-center">
          <div className="text-xs text-gray-500 mb-1">炭水化物</div>
          <div className="font-bold text-gray-900">{suggestion.totalCarbs.toFixed(1)}g</div>
        </div>
      </div>
    </div>
  );
}