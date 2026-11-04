import type { Product } from '../../types';

interface Props {
  product: Product;
}

export function ProductCard({ product }: Props) {
  return (
    <div className="flex p-4 bg-white border border-gray-200 rounded-lg">
      {/* overflow-hidden を追加し、画像を親の角丸(rounded)に合わせて切り抜く */}
      <div className="w-16 h-16 bg-gray-100 rounded flex-shrink-0 mr-4 flex items-center justify-center overflow-hidden">
        {product.imageUrl ? (
          <img src={product.imageUrl} alt={product.name} className="w-full h-full object-cover" />
        ) : (
          <span className="text-xs text-gray-400">No Image</span>
        )}
      </div>
      
      <div className="flex-1 flex flex-col justify-between">
        <div className="text-sm font-medium text-gray-900 leading-tight">
          {product.name}
        </div>
        
        <div className="flex justify-between items-end mt-2">
          <div className="text-xs text-gray-500">
            P:{product.protein.toFixed(1)} F:{product.fat.toFixed(1)} C:{product.carbs.toFixed(1)}
          </div>
          <div className="font-bold text-gray-900">
            ¥{product.price}
          </div>
        </div>
      </div>
    </div>
  );
}