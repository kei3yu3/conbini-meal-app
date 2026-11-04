import { NavLink } from 'react-router-dom';
import { Search, Heart } from 'lucide-react';

export function FloatingNav() {
  return (
    // fixed, bottom-0
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50">
      <div className="max-w-md mx-auto flex h-16">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex-1 flex flex-col items-center justify-center gap-2 transition-colors ${
              isActive ? 'text-gray-900' : 'text-gray-400 hover:text-gray-600'
            }`
          }
        >
          <Search size={24} />
          <span className="text-[10px] font-bold">探す</span>
        </NavLink>
        
        <NavLink
          to="/favorites"
          className={({ isActive }) =>
            `flex-1 flex flex-col items-center justify-center gap-2 transition-colors ${
              isActive ? 'text-gray-900' : 'text-gray-400 hover:text-gray-600'
            }`
          }
        >
          <Heart size={24} />
          <span className="text-[10px] font-bold">お気に入り</span>
        </NavLink>
      </div>
    </div>
  );
}