import React from 'react';
import { Globe, Bell } from 'lucide-react';

export const Topbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 h-[72px] bg-white border-b border-primary flex items-center justify-between px-8 z-50">
      <div className="w-72"> {/* Align logo with sidebar width */}
        <span className="text-xl font-serif font-bold text-[#7c602e] tracking-tight">FlashbackAI</span>
      </div>
      
      <div className="flex items-center gap-6">
        <button className="text-gray-700 hover:text-[#7c602e] transition-colors">
          <Globe size={20} />
        </button>
        <button className="text-gray-700 hover:text-[#7c602e] transition-colors relative">
          <Bell size={20} />
          <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
        </button>
        
        {/* Coins Badge */}
        <div className="bg-[#f2ede4] px-4 py-2 rounded-full flex items-center gap-2 border border-[#7c602e]/10">
          <span className="text-sm text-gray-500 font-medium">Coins:</span>
          <span className="text-sm text-[#7c602e] font-bold">3</span>
        </div>
      </div>
    </header>
  );
};