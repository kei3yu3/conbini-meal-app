// カテゴリの型定義（元のアルゴリズムに合わせて修正）
export type ProductCategory = "main" | "side" | "drink" | "snack";

export interface Product {
  id: string;
  name: string;
  price: number;
  calories: number;
  protein: number;
  fat: number;
  carbs: number;
  category: ProductCategory;
  imageUrl?: string;
}

// プレースホルダー用URL生成関数
const getPlaceholder = (text: string) => `https://placehold.co/150x150/f8fafc/64748b?text=${text}`;

export const dummyProducts: Product[] = [
  // --- 主食 (category: "main") ---
  { id: 's1', name: 'ツナマヨネーズおにぎり', price: 150, calories: 230, protein: 4.5, fat: 6.0, carbs: 38.0, category: 'main', imageUrl: getPlaceholder('Onigiri') },
  { id: 's2', name: '紅しゃけおにぎり', price: 170, calories: 175, protein: 5.0, fat: 1.5, carbs: 35.0, category: 'main', imageUrl: getPlaceholder('Onigiri') },
  { id: 's3', name: '紀州南高梅おにぎり', price: 140, calories: 165, protein: 3.0, fat: 0.5, carbs: 36.0, category: 'main', imageUrl: getPlaceholder('Onigiri') },
  { id: 's4', name: '納豆手巻き寿司', price: 160, calories: 185, protein: 6.0, fat: 2.5, carbs: 33.0, category: 'main', imageUrl: getPlaceholder('Sushi') },
  { id: 's5', name: 'ざるそば', price: 420, calories: 310, protein: 12.0, fat: 2.0, carbs: 58.0, category: 'main', imageUrl: getPlaceholder('Noodle') },
  { id: 's6', name: 'ペペロンチーノ', price: 480, calories: 520, protein: 18.0, fat: 22.0, carbs: 55.0, category: 'main', imageUrl: getPlaceholder('Pasta') },
  { id: 's7', name: '鶏五目ごはん弁当', price: 500, calories: 480, protein: 15.0, fat: 12.0, carbs: 75.0, category: 'main', imageUrl: getPlaceholder('Bento') },
  { id: 's8', name: '全粒粉入りサンドイッチ（ツナ＆たまご）', price: 320, calories: 280, protein: 11.0, fat: 14.0, carbs: 26.0, category: 'main', imageUrl: getPlaceholder('Sandwich') },
  { id: 's9', name: '冷やし中華', price: 550, calories: 410, protein: 16.0, fat: 8.0, carbs: 65.0, category: 'main', imageUrl: getPlaceholder('Noodle') },
  { id: 's10', name: 'カレーライス', price: 530, calories: 650, protein: 14.0, fat: 25.0, carbs: 88.0, category: 'main', imageUrl: getPlaceholder('Curry') },

  // --- おかず・スナック (category: "side") ---
  { id: 'm1', name: 'サラダチキン（プレーン）', price: 240, calories: 115, protein: 24.0, fat: 1.5, carbs: 0.5, category: 'side', imageUrl: getPlaceholder('Chicken') },
  { id: 'm2', name: 'サラダチキン（ハーブ）', price: 240, calories: 110, protein: 23.5, fat: 1.2, carbs: 1.0, category: 'side', imageUrl: getPlaceholder('Chicken') },
  { id: 'm3', name: '半熟ゆで卵（1個）', price: 110, calories: 65, protein: 6.0, fat: 4.5, carbs: 0.5, category: 'side', imageUrl: getPlaceholder('Egg') },
  { id: 'm4', name: '半熟ゆで卵（2個入）', price: 210, calories: 130, protein: 12.0, fat: 9.0, carbs: 1.0, category: 'side', imageUrl: getPlaceholder('Eggs') },
  { id: 'm5', name: '炭火焼き鳥（もも塩）', price: 160, calories: 100, protein: 11.0, fat: 6.0, carbs: 0.2, category: 'side', imageUrl: getPlaceholder('Yakitori') },
  { id: 'm6', name: '千切りキャベツサラダ', price: 120, calories: 25, protein: 1.0, fat: 0.2, carbs: 5.5, category: 'side', imageUrl: getPlaceholder('Salad') },
  { id: 'm7', name: '豚しゃぶのサラダ', price: 420, calories: 180, protein: 14.0, fat: 11.0, carbs: 6.0, category: 'side', imageUrl: getPlaceholder('Salad') },
  { id: 'm8', name: '豆腐とわかめのサラダ', price: 330, calories: 95, protein: 7.0, fat: 5.0, carbs: 4.5, category: 'side', imageUrl: getPlaceholder('Salad') },
  { id: 'm9', name: '塩ゆで枝豆', price: 200, calories: 120, protein: 11.0, fat: 6.0, carbs: 7.0, category: 'side', imageUrl: getPlaceholder('Edamame') },
  { id: 'm10', name: 'さばの塩焼き', price: 350, calories: 280, protein: 18.0, fat: 22.0, carbs: 0.5, category: 'side', imageUrl: getPlaceholder('Fish') },
  { id: 'm11', name: 'ホットスナック（フライドチキン）', price: 220, calories: 260, protein: 13.0, fat: 16.0, carbs: 14.0, category: 'side', imageUrl: getPlaceholder('Fried') },
  { id: 'm12', name: 'プロテインバー（ビターチョコ）', price: 180, calories: 160, protein: 15.0, fat: 7.0, carbs: 11.0, category: 'side', imageUrl: getPlaceholder('Bar') },
  { id: 'm13', name: 'ギリシャヨーグルト（無糖）', price: 190, calories: 70, protein: 10.0, fat: 0.0, carbs: 5.0, category: 'side', imageUrl: getPlaceholder('Yogurt') },
  { id: 'm14', name: '笹かまぼこ', price: 150, calories: 80, protein: 10.0, fat: 1.0, carbs: 7.0, category: 'side', imageUrl: getPlaceholder('Kamaboko') },
  { id: 'm15', name: '素焼きミックスナッツ', price: 380, calories: 320, protein: 9.0, fat: 28.0, carbs: 11.0, category: 'side', imageUrl: getPlaceholder('Nuts') },

  // --- 飲料 (category: "drink") ---
  { id: 'd1', name: 'プロテイン飲料（ココア）', price: 170, calories: 105, protein: 15.0, fat: 1.5, carbs: 8.0, category: 'drink', imageUrl: getPlaceholder('Drink') },
  { id: 'd2', name: 'プロテイン飲料（バナナ）', price: 170, calories: 100, protein: 15.0, fat: 1.0, carbs: 7.5, category: 'drink', imageUrl: getPlaceholder('Drink') },
  { id: 'd3', name: 'ブラックコーヒー', price: 110, calories: 5, protein: 0.2, fat: 0.0, carbs: 0.8, category: 'drink', imageUrl: getPlaceholder('Coffee') },
  { id: 'd4', name: '緑茶', price: 100, calories: 0, protein: 0.0, fat: 0.0, carbs: 0.0, category: 'drink', imageUrl: getPlaceholder('Tea') },
  { id: 'd5', name: '麦茶', price: 100, calories: 0, protein: 0.0, fat: 0.0, carbs: 0.0, category: 'drink', imageUrl: getPlaceholder('Tea') },
];