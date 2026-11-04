import { useState, useEffect, useCallback } from 'react';
import type { Product } from '../types';

// アルゴリズムが計算して返す「1つの提案」のデータ構造
export interface MealCombination {
  items: Product[];
  totalPrice: number;
  totalCalories: number;
  totalProtein: number;
  totalFat: number;
  totalCarbs: number;
  score: number;
}

export function useMealSuggest(
  products: Product[],
  budget: number,
  mode: 'protein' | 'healthy' | 'cospa'
) {
  const [currentSuggestion, setCurrentSuggestion] = useState<MealCombination | null>(null);
  const [topCombinations, setTopCombinations] = useState<MealCombination[]>([]);

  // 予算、目的(mode)、商品リストのいずれかが変わるたびに再計算を実行する
  useEffect(() => {
    // Step 1: 単品の時点で予算オーバーするものを足切りし、カテゴリごとに分割
    const mains = products.filter(p => p.category === 'main' && p.price <= budget);
    const sides = products.filter(p => (p.category === 'side' || p.category === 'snack') && p.price <= budget);
    const drinks = products.filter(p => p.category === 'drink' && p.price <= budget);

    const validCombinations: MealCombination[] = [];

    // Step 2 & 3: 組み合わせの全探索（今回は 主食1 + おかず1 + 飲み物1 の基本パターン）
    for (const main of mains) {
      for (const side of sides) {
        for (const drink of drinks) {
          const totalPrice = main.price + side.price + drink.price;
          
          // 予算チェック
          if (totalPrice <= budget) {
            const totalCalories = main.calories + side.calories + drink.calories;
            const totalProtein = main.protein + side.protein + drink.protein;
            const totalFat = main.fat + side.fat + drink.fat;
            const totalCarbs = main.carbs + side.carbs + drink.carbs;

            // 評価関数によるスコアリング
            let score = 0;
            switch (mode) {
              case 'protein':
                score = totalProtein; // タンパク質の多さをそのまま点数に
                break;
              case 'healthy':
                score = 1000 - (totalFat * 10); // 脂質が低いほど高得点になるよう反転
                break;
              case 'cospa':
                score = totalCalories / totalPrice; // 1円あたりのカロリー
                break;
            }

            validCombinations.push({
              items: [main, side, drink],
              totalPrice,
              totalCalories,
              totalProtein,
              totalFat,
              totalCarbs,
              score,
            });
          }
        }
      }
    }

    // Step 4: スコア順に降順ソート
    validCombinations.sort((a, b) => b.score - a.score);

    // 上位10件を保持（マンネリ防止のガチャ用候補）
    const top10 = validCombinations.slice(0, 10);
    setTopCombinations(top10);

    // 初回の提案をセット
    if (top10.length > 0) {
      const randomIndex = Math.floor(Math.random() * top10.length);
      setCurrentSuggestion(top10[randomIndex]);
    } else {
      setCurrentSuggestion(null); // 予算内で組み合わせが見つからなかった場合
    }
  }, [products, budget, mode]);

  // マンネリ防止のための引き直し（ガチャ）関数
  const reroll = useCallback(() => {
    if (topCombinations.length > 0) {
      const randomIndex = Math.floor(Math.random() * topCombinations.length);
      setCurrentSuggestion(topCombinations[randomIndex]);
    }
  }, [topCombinations]);

  return { 
    currentSuggestion, 
    reroll, 
    hasResult: topCombinations.length > 0 
  };
}