// カテゴリの型定義
export type ProductCategory = "main" | "side" | "drink" | "snack";

// 商品データの型定義
export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  price: number;
  calories: number;
  protein: number;
  fat: number;
  carbs: number;
  image_url: string;
}

// アプリ全体で使うダミーデータ
export const dummyProducts: Product[] = [
  {
    id: "p_001",
    name: "糖質0gのサラダチキン（プレーン）",
    category: "side",
    price: 235,
    calories: 114,
    protein: 24.1,
    fat: 1.2,
    carbs: 0.0,
    image_url: "https://via.placeholder.com/150?text=Chicken" // 画像がない場合のエラーを防ぐためプレースホルダー画像を設定
  },
  {
    id: "p_002",
    name: "手巻おにぎり 炭火焼熟成紅しゃけ",
    category: "main",
    price: 189,
    calories: 174,
    protein: 4.5,
    fat: 1.0,
    carbs: 37.5,
    image_url: "https://via.placeholder.com/150?text=Onigiri"
  },
  {
    id: "p_003",
    name: "たんぱく質が摂れる ローストチキン＆スパイシーチリ",
    category: "main",
    price: 410,
    calories: 260,
    protein: 25.0,
    fat: 9.0,
    carbs: 20.0,
    image_url: "https://via.placeholder.com/150?text=Sandwich"
  },
  {
    id: "p_004",
    name: "７プレミアム 千切りキャベツ",
    category: "side",
    price: 116,
    calories: 20,
    protein: 1.0,
    fat: 0.0,
    carbs: 4.0,
    image_url: "https://via.placeholder.com/150?text=Salad"
  },
  {
    id: "p_005",
    name: "ザバス ミルクプロテイン 脂肪0 ココア風味",
    category: "drink",
    price: 172,
    calories: 102,
    protein: 15.0,
    fat: 0.0,
    carbs: 10.5,
    image_url: "https://via.placeholder.com/150?text=Zavas"
  },
  {
    id: "p_006",
    name: "７プレミアム ゆでたまご",
    category: "side",
    price: 105,
    calories: 65,
    protein: 5.8,
    fat: 4.3,
    carbs: 0.6,
    image_url: "https://via.placeholder.com/150?text=Egg"
  },
  {
    id: "p_007",
    name: "特製牛めし",
    category: "main",
    price: 496,
    calories: 580,
    protein: 15.0,
    fat: 20.0,
    carbs: 85.0,
    image_url: "https://via.placeholder.com/150?text=Beef+Bowl"
  },
  {
    id: "p_008",
    name: "７プレミアム ゼロサイダートリプル",
    category: "drink",
    price: 127,
    calories: 0,
    protein: 0.0,
    fat: 0.0,
    carbs: 1.5,
    image_url: "https://via.placeholder.com/150?text=Drink"
  }
];