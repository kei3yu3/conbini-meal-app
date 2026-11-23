import { useState, useEffect, useCallback } from 'react';
import type { Product } from '../types';

// 提案する食事セットのデータ構造
export interface MealCombination {
  items: Product[];
  totalPrice: number;
  totalCalories: number;
  totalProtein: number;
  totalFat: number;
  totalCarbs: number;
}

// 予算・目的・飲み物有無の条件から最適な組み合わせを算出するカスタムフック
export function useMealSuggest(
  products: Product[],
  budget: number,
  mode: 'protein' | 'healthy' | 'cospa',
  includeDrink: boolean = true
) {
  // 現在の提案結果と結果の有無を管理するState
  const [currentSuggestion, setCurrentSuggestion] = useState<MealCombination | null>(null);
  const [hasResult, setHasResult] = useState<boolean>(true);

  // 条件に合う組み合わせ候補を生成・採点するメイン関数
  const generateSuggestion = useCallback(() => {
    const candidates: MealCombination[] = [];

    // 予算内に収まる主食と、おかず・飲料をカテゴリごとに抽出
    const mainProducts = products.filter(p => p.category === 'main' && p.price <= budget);
    const sideProducts = products.filter(p => p.category === 'side');
    const drinkProducts = products.filter(p => p.category === 'drink');

    // 裏側で300通りのランダムな組み合わせを生成して候補を集める
    for (let i = 0; i < 300; i++) {
      const currentItems: Product[] = [];
      let currentPrice = 0;

      // 主食をランダムに1品選択
      const randomMain = mainProducts[Math.floor(Math.random() * mainProducts.length)];
      if (randomMain) {
        currentItems.push(randomMain);
        currentPrice += randomMain.price;
      }

      // 飲み物あり設定の場合のみ、予算内の飲料をランダムに1品追加
      if (includeDrink && drinkProducts.length > 0) {
        const randomDrink = drinkProducts[Math.floor(Math.random() * drinkProducts.length)];
        if (randomDrink && currentPrice + randomDrink.price <= budget) {
          currentItems.push(randomDrink);
          currentPrice += randomDrink.price;
        }
      }

      // 残りの予算が許す限り、おかずをランダム順に追加して金額を詰める
      const shuffledSides = [...sideProducts].sort(() => 0.5 - Math.random());
      for (const side of shuffledSides) {
        if (currentPrice + side.price <= budget) {
          currentItems.push(side);
          currentPrice += side.price;
        }
      }

      // 予算内に収まり1品以上選ばれた組み合わせを候補リストに追加
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

    // 候補が1件も作れなかった場合は結果なしとして終了
    if (candidates.length === 0) {
      setHasResult(false);
      setCurrentSuggestion(null);
      return;
    }

    // 予算消化率と目的別ボーナスで全候補を採点して降順に並び替え
    candidates.sort((a, b) => {
      let scoreA = (a.totalPrice / budget) * 100;
      let scoreB = (b.totalPrice / budget) * 100;

      if (mode === 'protein') {
        scoreA += a.totalProtein * 2;
        scoreB += b.totalProtein * 2;
      } else if (mode === 'healthy') {
        scoreA += (1000 - a.totalCalories) * 0.1 - (a.totalFat * 2);
        scoreB += (1000 - b.totalCalories) * 0.1 - (b.totalFat * 2);
      } else if (mode === 'cospa') {
        scoreA += (a.totalCalories / a.totalPrice) * 50;
        scoreB += (b.totalCalories / b.totalPrice) * 50;
      }

      return scoreB - scoreA;
    });

    // 上位3件からランダムに1件を選んで最終提案としてセット
    setHasResult(true);
    const topCandidates = candidates.slice(0, 3);
    setCurrentSuggestion(topCandidates[Math.floor(Math.random() * topCandidates.length)]);
  }, [products, budget, mode, includeDrink]);

  // 初回表示時および検索条件の変更時に再計算を実行
  useEffect(() => {
    generateSuggestion();
  }, [generateSuggestion]);

  return {
    currentSuggestion,
    reroll: generateSuggestion,
    hasResult
  };
}