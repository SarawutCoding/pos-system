import React from 'react';
import { Search, SlidersHorizontal } from 'lucide-react';

const SearchBar = () => {
  return (
    <div className="flex items-center gap-2 w-full max-w-2xl">
      <div className="relative flex-1">
        <div className="absolute inset-y-0 left-0 flex items-center pl-4">
          <Search className="w-5 h-5 text-slate-400" />
        </div>
        <input
          type="text"
          className="w-full pl-11 pr-4 py-2.5 bg-white border border-slate-200 rounded-2xl shadow-smfocus:ring-4 focus:ring-sky-500/10 focus:border-sky-500 focus:outline-none transition-all"
          placeholder="ค้นหาข้อมูล..."
        />
      </div>
      
      {/* ปุ่ม Filter เสริม */}
      <button className="p-2.5 bg-white border border-slate-200 rounded-2xl hover:bg-slate-50 transition-colors shadow-sm text-slate-600">
        <SlidersHorizontal className="w-5 h-5" />
      </button>

      {/* ปุ่ม Search หลัก */}
      <button className="px-6 py-2.5 bg-green-500 hover:bg-green-600 text-white font-medium rounded-2xl shadow-lg shadow-sky-200 transition-all active:scale-95">
        Search
      </button>
    </div>
  );
};

export default SearchBar;