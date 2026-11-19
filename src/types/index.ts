// 商品のカテゴリ種別を定義する型
export type ProductCategory = "main" | "side" | "drink" | "snack";

// 商品1件あたりのデータ構造を定義するインターフェース
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

// Tailwindのグレー配色に合わせたプレースホルダー画像URLを生成する関数
const getPlaceholder = (text: string) =>
  `https://placehold.co/150x150/f8fafc/64748b?text=${text}`;

// アプリ全体で使用する85件の商品マスターデータ配列
export const dummyProducts: Product[] = [
  // 主食：おにぎり・手巻き寿司系（140円〜180円）
  { id: 'main_01', name: 'ツナマヨネーズおにぎり', price: 150, calories: 230, protein: 4.5, fat: 6.0, carbs: 38.0, category: 'main', imageUrl: getPlaceholder('Onigiri') },
  { id: 'main_02', name: '紅しゃけおにぎり', price: 170, calories: 175, protein: 5.0, fat: 1.5, carbs: 35.0, category: 'main', imageUrl: getPlaceholder('Onigiri') },
  { id: 'main_03', name: '紀州南高梅おにぎり', price: 140, calories: 165, protein: 3.0, fat: 0.5, carbs: 36.0, category: 'main', imageUrl: getPlaceholder('Onigiri') },
  { id: 'main_04', name: '辛子明太子おにぎり', price: 175, calories: 175, protein: 4.8, fat: 1.0, carbs: 36.5, category: 'main', imageUrl: getPlaceholder('Onigiri') },
  { id: 'main_05', name: '日高昆布おにぎり', price: 145, calories: 170, protein: 3.2, fat: 0.6, carbs: 37.5, category: 'main', imageUrl: getPlaceholder('Onigiri') },
  { id: 'main_06', name: 'もち麦梅こんぶおにぎり', price: 155, calories: 160, protein: 3.5, fat: 0.8, carbs: 34.0, category: 'main', imageUrl: getPlaceholder('Onigiri') },
  { id: 'main_07', name: '鶏五目おにぎり', price: 155, calories: 195, protein: 4.5, fat: 2.5, carbs: 38.5, category: 'main', imageUrl: getPlaceholder('Onigiri') },
  { id: 'main_08', name: '納豆手巻き寿司', price: 160, calories: 185, protein: 6.0, fat: 2.5, carbs: 33.0, category: 'main', imageUrl: getPlaceholder('Sushi') },
  { id: 'main_09', name: 'ネギトロ手巻き寿司', price: 180, calories: 195, protein: 6.5, fat: 4.5, carbs: 31.5, category: 'main', imageUrl: getPlaceholder('Sushi') },

  // 主食：麺類系（390円〜550円）
  { id: 'main_10', name: 'ざるそば', price: 420, calories: 310, protein: 12.0, fat: 2.0, carbs: 58.0, category: 'main', imageUrl: getPlaceholder('Soba') },
  { id: 'main_11', name: '冷やしぶっかけうどん', price: 390, calories: 320, protein: 9.0, fat: 1.5, carbs: 66.0, category: 'main', imageUrl: getPlaceholder('Udon') },
  { id: 'main_12', name: '冷やし中華', price: 550, calories: 410, protein: 16.0, fat: 8.0, carbs: 65.0, category: 'main', imageUrl: getPlaceholder('Noodle') },
  { id: 'main_13', name: 'ペペロンチーノ', price: 480, calories: 520, protein: 18.0, fat: 22.0, carbs: 55.0, category: 'main', imageUrl: getPlaceholder('Pasta') },
  { id: 'main_14', name: 'ミートソーススパゲッティ', price: 490, calories: 580, protein: 20.0, fat: 16.0, carbs: 86.0, category: 'main', imageUrl: getPlaceholder('Pasta') },
  { id: 'main_15', name: 'とんこつラーメン', price: 540, calories: 550, protein: 22.0, fat: 20.0, carbs: 68.0, category: 'main', imageUrl: getPlaceholder('Ramen') },
  { id: 'main_16', name: '醤油ラーメン', price: 490, calories: 440, protein: 19.0, fat: 11.0, carbs: 64.0, category: 'main', imageUrl: getPlaceholder('Ramen') },

  // 主食：弁当・丼・パン系（160円〜620円）
  { id: 'main_17', name: '鶏五目ごはん弁当', price: 500, calories: 480, protein: 15.0, fat: 12.0, carbs: 75.0, category: 'main', imageUrl: getPlaceholder('Bento') },
  { id: 'main_18', name: '幕の内弁当', price: 580, calories: 620, protein: 22.0, fat: 18.0, carbs: 90.0, category: 'main', imageUrl: getPlaceholder('Bento') },
  { id: 'main_19', name: 'チキン南蛮弁当', price: 620, calories: 780, protein: 28.0, fat: 34.0, carbs: 88.0, category: 'main', imageUrl: getPlaceholder('Bento') },
  { id: 'main_20', name: '親子丼', price: 490, calories: 590, protein: 24.0, fat: 13.0, carbs: 92.0, category: 'main', imageUrl: getPlaceholder('Don') },
  { id: 'main_21', name: 'カレーライス', price: 530, calories: 650, protein: 14.0, fat: 25.0, carbs: 88.0, category: 'main', imageUrl: getPlaceholder('Curry') },
  { id: 'main_22', name: '全粒粉サンド（ツナ＆たまご）', price: 320, calories: 280, protein: 11.0, fat: 14.0, carbs: 26.0, category: 'main', imageUrl: getPlaceholder('Sandwich') },
  { id: 'main_23', name: 'ハム＆レタスサンド', price: 310, calories: 260, protein: 10.0, fat: 12.0, carbs: 28.0, category: 'main', imageUrl: getPlaceholder('Sandwich') },
  { id: 'main_24', name: '照り焼きチキンとたまごサンド', price: 350, calories: 340, protein: 15.0, fat: 16.0, carbs: 33.0, category: 'main', imageUrl: getPlaceholder('Sandwich') },
  { id: 'main_25', name: 'くるみパン（2個入）', price: 160, calories: 290, protein: 8.0, fat: 11.0, carbs: 40.0, category: 'main', imageUrl: getPlaceholder('Bread') },

  // おかず：高タンパクメイン系（肉・魚・大豆）
  { id: 'side_01', name: 'サラダチキン（プレーン）', price: 240, calories: 115, protein: 24.0, fat: 1.5, carbs: 0.5, category: 'side', imageUrl: getPlaceholder('Chicken') },
  { id: 'side_02', name: 'サラダチキン（ハーブ）', price: 240, calories: 110, protein: 23.5, fat: 1.2, carbs: 1.0, category: 'side', imageUrl: getPlaceholder('Chicken') },
  { id: 'side_03', name: 'サラダチキン（スモーク）', price: 240, calories: 120, protein: 24.5, fat: 1.8, carbs: 0.8, category: 'side', imageUrl: getPlaceholder('Chicken') },
  { id: 'side_04', name: 'サラダチキンバー（プレーン）', price: 170, calories: 75, protein: 14.0, fat: 1.0, carbs: 2.0, category: 'side', imageUrl: getPlaceholder('Chicken') },
  { id: 'side_05', name: 'サラダチキンバー（バジル）', price: 170, calories: 80, protein: 13.5, fat: 1.5, carbs: 2.5, category: 'side', imageUrl: getPlaceholder('Chicken') },
  { id: 'side_06', name: '豆腐バー（和風だし）', price: 150, calories: 105, protein: 10.0, fat: 5.5, carbs: 3.5, category: 'side', imageUrl: getPlaceholder('TofuBar') },
  { id: 'side_07', name: '豆腐バー（枝豆ひじき）', price: 160, calories: 110, protein: 10.5, fat: 5.0, carbs: 5.0, category: 'side', imageUrl: getPlaceholder('TofuBar') },
  { id: 'side_08', name: 'ローストビーフ（パック）', price: 430, calories: 145, protein: 20.0, fat: 6.0, carbs: 2.0, category: 'side', imageUrl: getPlaceholder('Beef') },
  { id: 'side_09', name: '炭火焼き鳥（もも塩）', price: 160, calories: 100, protein: 11.0, fat: 6.0, carbs: 0.2, category: 'side', imageUrl: getPlaceholder('Yakitori') },
  { id: 'side_10', name: '炭火焼き鳥（むね塩）', price: 160, calories: 85, protein: 13.0, fat: 3.0, carbs: 0.5, category: 'side', imageUrl: getPlaceholder('Yakitori') },
  { id: 'side_11', name: 'さばの塩焼き', price: 350, calories: 280, protein: 18.0, fat: 22.0, carbs: 0.5, category: 'side', imageUrl: getPlaceholder('Fish') },
  { id: 'side_12', name: 'ほっけの塩焼き', price: 370, calories: 210, protein: 21.0, fat: 13.0, carbs: 0.5, category: 'side', imageUrl: getPlaceholder('Fish') },
  { id: 'side_13', name: '銀鮭の塩焼き', price: 380, calories: 190, protein: 20.0, fat: 11.0, carbs: 0.5, category: 'side', imageUrl: getPlaceholder('Fish') },
  { id: 'side_14', name: 'たこぶつ（わさび付き）', price: 360, calories: 70, protein: 15.0, fat: 0.6, carbs: 0.2, category: 'side', imageUrl: getPlaceholder('Octopus') },
  { id: 'side_15', name: '砂肝の黒胡椒焼き', price: 290, calories: 130, protein: 21.0, fat: 4.0, carbs: 2.0, category: 'side', imageUrl: getPlaceholder('Meat') },

  // おかず：予算の隙間を埋めやすい低価格帯（100円〜210円）
  { id: 'side_16', name: '半熟ゆで卵（1個）', price: 110, calories: 65, protein: 6.0, fat: 4.5, carbs: 0.5, category: 'side', imageUrl: getPlaceholder('Egg') },
  { id: 'side_17', name: '半熟ゆで卵（2個入）', price: 210, calories: 130, protein: 12.0, fat: 9.0, carbs: 1.0, category: 'side', imageUrl: getPlaceholder('Eggs') },
  { id: 'side_18', name: '味付き半熟ゆで卵', price: 120, calories: 70, protein: 6.2, fat: 4.8, carbs: 0.6, category: 'side', imageUrl: getPlaceholder('Egg') },
  { id: 'side_19', name: 'カニカマバー（1本）', price: 130, calories: 65, protein: 8.5, fat: 0.5, carbs: 6.5, category: 'side', imageUrl: getPlaceholder('Kanikama') },
  { id: 'side_20', name: '笹かまぼこ', price: 150, calories: 80, protein: 10.0, fat: 1.0, carbs: 7.0, category: 'side', imageUrl: getPlaceholder('Kamaboko') },
  { id: 'side_21', name: 'ちくわ（4本入）', price: 130, calories: 115, protein: 11.0, fat: 2.0, carbs: 13.0, category: 'side', imageUrl: getPlaceholder('Chikuwa') },
  { id: 'side_22', name: '魚肉ソーセージ', price: 110, calories: 115, protein: 6.5, fat: 5.0, carbs: 10.5, category: 'side', imageUrl: getPlaceholder('Sausage') },
  { id: 'side_23', name: '6Pチーズ（2個分）', price: 120, calories: 110, protein: 7.0, fat: 9.0, carbs: 0.5, category: 'side', imageUrl: getPlaceholder('Cheese') },
  { id: 'side_24', name: 'さけるチーズ', price: 140, calories: 80, protein: 6.8, fat: 5.7, carbs: 0.4, category: 'side', imageUrl: getPlaceholder('Cheese') },
  { id: 'side_25', name: '納豆（1パック）', price: 100, calories: 95, protein: 8.0, fat: 4.8, carbs: 5.5, category: 'side', imageUrl: getPlaceholder('Natto') },
  { id: 'side_26', name: '冷奴（絹ごし豆腐）', price: 110, calories: 85, protein: 7.5, fat: 4.5, carbs: 3.0, category: 'side', imageUrl: getPlaceholder('Tofu') },
  { id: 'side_27', name: '味付きもずく酢', price: 140, calories: 25, protein: 0.6, fat: 0.1, carbs: 5.5, category: 'side', imageUrl: getPlaceholder('Mozuku') },
  { id: 'side_28', name: '味付けめかぶ', price: 150, calories: 20, protein: 0.8, fat: 0.3, carbs: 3.5, category: 'side', imageUrl: getPlaceholder('Mekabu') },
  { id: 'side_29', name: 'ギリシャヨーグルト（無糖）', price: 190, calories: 70, protein: 10.0, fat: 0.0, carbs: 5.0, category: 'side', imageUrl: getPlaceholder('Yogurt') },
  { id: 'side_30', name: 'プロテインバー（ビターチョコ）', price: 180, calories: 160, protein: 15.0, fat: 7.0, carbs: 11.0, category: 'side', imageUrl: getPlaceholder('Bar') },
  { id: 'side_31', name: 'プロテインバー（ウェファー）', price: 180, calories: 185, protein: 10.5, fat: 9.5, carbs: 14.5, category: 'side', imageUrl: getPlaceholder('Bar') },
  { id: 'side_32', name: 'バナナ（1本）', price: 120, calories: 90, protein: 1.1, fat: 0.2, carbs: 22.5, category: 'side', imageUrl: getPlaceholder('Banana') },
  { id: 'side_33', name: 'カップ味噌汁（豆腐・わかめ）', price: 130, calories: 35, protein: 2.2, fat: 1.0, carbs: 4.2, category: 'side', imageUrl: getPlaceholder('Soup') },

  // おかず：サラダ・副菜・ホットスナック・おつまみ系
  { id: 'side_34', name: '千切りキャベツサラダ', price: 120, calories: 25, protein: 1.0, fat: 0.2, carbs: 5.5, category: 'side', imageUrl: getPlaceholder('Salad') },
  { id: 'side_35', name: '豚しゃぶのサラダ', price: 420, calories: 180, protein: 14.0, fat: 11.0, carbs: 6.0, category: 'side', imageUrl: getPlaceholder('Salad') },
  { id: 'side_36', name: '豆腐とわかめのサラダ', price: 330, calories: 95, protein: 7.0, fat: 5.0, carbs: 4.5, category: 'side', imageUrl: getPlaceholder('Salad') },
  { id: 'side_37', name: 'コールスローサラダ', price: 220, calories: 110, protein: 1.5, fat: 7.5, carbs: 9.0, category: 'side', imageUrl: getPlaceholder('Salad') },
  { id: 'side_38', name: '塩ゆで枝豆', price: 200, calories: 120, protein: 11.0, fat: 6.0, carbs: 7.0, category: 'side', imageUrl: getPlaceholder('Edamame') },
  { id: 'side_39', name: 'ひじきの煮物', price: 160, calories: 95, protein: 4.5, fat: 3.5, carbs: 11.5, category: 'side', imageUrl: getPlaceholder('SideDish') },
  { id: 'side_40', name: 'ホットスナック（フライドチキン）', price: 220, calories: 260, protein: 13.0, fat: 16.0, carbs: 14.0, category: 'side', imageUrl: getPlaceholder('Fried') },
  { id: 'side_41', name: '鶏のからあげ（3個）', price: 210, calories: 240, protein: 16.0, fat: 15.0, carbs: 10.0, category: 'side', imageUrl: getPlaceholder('Fried') },
  { id: 'side_42', name: '素焼きミックスナッツ', price: 380, calories: 320, protein: 9.0, fat: 28.0, carbs: 11.0, category: 'side', imageUrl: getPlaceholder('Nuts') },
  { id: 'side_43', name: 'ビーフジャーキー', price: 350, calories: 110, protein: 19.0, fat: 2.5, carbs: 3.0, category: 'side', imageUrl: getPlaceholder('Jerky') },
  { id: 'side_44', name: 'あたりめ（するめ）', price: 260, calories: 95, protein: 20.0, fat: 1.2, carbs: 0.5, category: 'side', imageUrl: getPlaceholder('Squid') },
  { id: 'side_45', name: 'ポテトサラダ', price: 150, calories: 165, protein: 2.5, fat: 10.5, carbs: 15.0, category: 'side', imageUrl: getPlaceholder('Salad') },

  // 飲料：プロテイン・乳飲料・豆乳系（110円〜180円）
  { id: 'drink_01', name: 'プロテイン飲料（ココア）', price: 170, calories: 105, protein: 15.0, fat: 1.5, carbs: 8.0, category: 'drink', imageUrl: getPlaceholder('Protein') },
  { id: 'drink_02', name: 'プロテイン飲料（バナナ）', price: 170, calories: 100, protein: 15.0, fat: 1.0, carbs: 7.5, category: 'drink', imageUrl: getPlaceholder('Protein') },
  { id: 'drink_03', name: 'プロテイン飲料（カフェラテ）', price: 175, calories: 110, protein: 15.0, fat: 1.5, carbs: 9.0, category: 'drink', imageUrl: getPlaceholder('Protein') },
  { id: 'drink_04', name: 'プロテイン飲料（ストロベリー）', price: 180, calories: 90, protein: 15.0, fat: 0.0, carbs: 7.5, category: 'drink', imageUrl: getPlaceholder('Protein') },
  { id: 'drink_05', name: '無調整豆乳（200ml）', price: 110, calories: 115, protein: 9.5, fat: 6.5, carbs: 4.5, category: 'drink', imageUrl: getPlaceholder('SoyMilk') },
  { id: 'drink_06', name: '調製豆乳（200ml）', price: 110, calories: 125, protein: 7.0, fat: 6.5, carbs: 9.5, category: 'drink', imageUrl: getPlaceholder('SoyMilk') },
  { id: 'drink_07', name: '飲むヨーグルト（プレーン）', price: 140, calories: 130, protein: 6.5, fat: 1.5, carbs: 22.5, category: 'drink', imageUrl: getPlaceholder('Yogurt') },

  // 飲料：お茶・コーヒー・炭酸・野菜ジュース系（100円〜160円）
  { id: 'drink_08', name: 'ブラックコーヒー', price: 110, calories: 5, protein: 0.2, fat: 0.0, carbs: 0.8, category: 'drink', imageUrl: getPlaceholder('Coffee') },
  { id: 'drink_09', name: 'カフェラテ（無糖）', price: 160, calories: 85, protein: 4.5, fat: 4.5, carbs: 6.5, category: 'drink', imageUrl: getPlaceholder('Latte') },
  { id: 'drink_10', name: '緑茶', price: 100, calories: 0, protein: 0.0, fat: 0.0, carbs: 0.0, category: 'drink', imageUrl: getPlaceholder('Tea') },
  { id: 'drink_11', name: '麦茶', price: 100, calories: 0, protein: 0.0, fat: 0.0, carbs: 0.0, category: 'drink', imageUrl: getPlaceholder('Tea') },
  { id: 'drink_12', name: '烏龍茶', price: 110, calories: 0, protein: 0.0, fat: 0.0, carbs: 0.0, category: 'drink', imageUrl: getPlaceholder('Tea') },
  { id: 'drink_13', name: '強炭酸水（プレーン）', price: 100, calories: 0, protein: 0.0, fat: 0.0, carbs: 0.0, category: 'drink', imageUrl: getPlaceholder('Soda') },
  { id: 'drink_14', name: 'ゼロカロリーコーラ', price: 160, calories: 0, protein: 0.0, fat: 0.0, carbs: 0.0, category: 'drink', imageUrl: getPlaceholder('Cola') },
  { id: 'drink_15', name: '1日分の野菜ジュース', price: 130, calories: 75, protein: 2.0, fat: 0.0, carbs: 16.5, category: 'drink', imageUrl: getPlaceholder('Juice') },
];