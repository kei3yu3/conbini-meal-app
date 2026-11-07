import { useState, useEffect, useCallback } from 'react';
import type { Product } from '../types';

export interface MealCombination {
  items: Product[];
  totalPrice: number;
  totalCalories: number;
  totalProtein: number;
  totalFat: number;
  totalCarbs: number;
}

export function useMealSuggest(products: Product[], budget: number, mode: 'protein' | 'healthy' | 'cospa') {
  const [currentSuggestion, setCurrentSuggestion] = useState<MealCombination | null>(null);
  const [hasResult, setHasResult] = useState<boolean>(true);

  // 組み合わせの計算関数
  const generateSuggestion = useCallback(() => {
    const candidates: MealCombination[] = [];
    const mainProducts = products.filter(p => p.category === 'main');
    const sideProducts = products.filter(p => p.category === 'side');
    const drinkProducts = products.filter(p => p.category === 'drink');

    // 裏側で100通りのランダムな組み合わせを作成して比較する
    for (let i = 0; i < 100; i++) {
      let currentItems: Product[] = [];
      let currentPrice = 0;

      // 1. 主食と飲料をランダムに1つずつ選ぶ
      const randomMain = mainProducts[Math.floor(Math.random() * mainProducts.length)];
      const randomDrink = drinkProducts[Math.floor(Math.random() * drinkProducts.length)];
      
      if (randomMain) {
        currentItems.push(randomMain);
        currentPrice += randomMain.price;
      }
      if (randomDrink && currentPrice + randomDrink.price <= budget) {
        currentItems.push(randomDrink);
        currentPrice += randomDrink.price;
      }

      // 2. 残りの予算が許す限り、おかず（side）をランダムに追加し続ける
      let shuffledSides = [...sideProducts].sort(() => 0.5 - Math.random());
      for (const side of shuffledSides) {
        if (currentPrice + side.price <= budget) {
          currentItems.push(side);
          currentPrice += side.price;
        }
      }

      // 予算を超えていない組み合わせだけを候補に残す
      if (currentPrice <= budget && currentItems.length > 0) {
        candidates.push({
          items: currentItems,
          totalPrice: currentPrice,
          totalCalories: currentItems.reduce((sum, item) => sum + item.calories, 0),
          totalProtein: currentItems.reduce((sum, item) => sum + item.protein, 0),
          totalFat: currentItems.reduce((sum, item) => sum + item.fat, 0),
          totalCarbs: currentItems.reduce((sum, item) => sum + item.carbs, 0),
        });
      }
    }

    if (candidates.length === 0) {
      setHasResult(false);
      setCurrentSuggestion(null);
      return;
    }

    // 3. 出来上がった100個の候補を「目的」と「予算消化率」で採点（スコアリング）して並び替える
    candidates.sort((a, b) => {
      let scoreA = 0;
      let scoreB = 0;

      // 【重要】予算の使い切り度合いを高く評価する（予算に近いほどスコアを加算）
      // 例: 500円予算で480円なら高得点、300円なら低得点
      scoreA += (a.totalPrice / budget) * 100;
      scoreB += (b.totalPrice / budget) * 100;

      // 目的（モード）別のボーナススコア
      if (mode === 'protein') {
        scoreA += a.totalProtein * 2; // タンパク質が多いほど有利
        scoreB += b.totalProtein * 2;
      } else if (mode === 'healthy') {
        scoreA += (1000 - a.totalCalories) * 0.1 - (a.totalFat * 2); // カロリーと脂質が低いほど有利
        scoreB += (1000 - b.totalCalories) * 0.1 - (b.totalFat * 2);
      } else if (mode === 'cospa') {
        scoreA += (a.totalCalories / a.totalPrice) * 50; // 1円あたりのカロリー（満腹度）が高いほど有利
        scoreB += (b.totalCalories / b.totalPrice) * 50;
      }

      // スコアが高い順（降順）にする
      return scoreB - scoreA;
    });

    // 一番スコアが高かった優秀な組み合わせを結果としてセットする
    setHasResult(true);
    // ランダム性を少し残すため、トップ3の中からランダムで1つ選んで提案する
    const topCandidates = candidates.slice(0, 3);
    setCurrentSuggestion(topCandidates[Math.floor(Math.random() * topCandidates.length)]);

  }, [products, budget, mode]);

  // 初回マウント時、または条件が変わった時に計算を実行
  useEffect(() => {
    generateSuggestion();
  }, [generateSuggestion]);

  return {
    currentSuggestion,
    reroll: generateSuggestion,
    hasResult
  };
}