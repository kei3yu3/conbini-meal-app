import type { Product } from '../../types';

interface Props {
  product: Product;
}

export function ProductCard({ product }: Props) {
  return (
    // p-4 (16px), mb-2 (8px), rounded-lg (8px角丸)
    <div className="flex p-4 bg-white border border-gray-200 rounded-lg">
      {/* w-16 h-16 (64px = 8の倍数), mr-4 (16px) */}
      <div className="w-16 h-16 bg-gray-100 rounded flex-shrink-0 mr-4 flex items-center justify-center">
        <span className="text-xs text-gray-400">No Image</span>
      </div>
      
      <div className="flex-1 flex flex-col justify-between">
        <div className="text-sm font-medium text-gray-900 leading-tight">
          {product.name}
        </div>
        
        {/* mt-2 (8px) */}
        <div className="flex justify-between items-end mt-2">
          <div className="text-xs text-gray-500">
            P:{product.protein} F:{product.fat} C:{product.carbs}
          </div>
          <div className="font-bold text-gray-900">
            ¥{product.price}
          </div>
        </div>
      </div>
    </div>
  );
}