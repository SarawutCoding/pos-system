"use client";
import React, { useState } from "react";
import ProductCard from "./ProductCard";

const MainSale = ({ products, category }) => {
  return (
    <main>
      <ul className="flex flex-wrap items-center gap-3 p-4">
        <li className="cursor-pointer px-5 py-2 rounded-full border-2 border-emerald-600 bg-emerald-600 text-white font-medium transition-all hover:bg-emerald-700 hover:border-emerald-700 shadow-sm">
          ทั้งหมด
        </li>
        {category && category.length > 0 ? (
          category.map((val) => (
            <li
              key={val._id}
              className="cursor-pointer px-5 py-2 rounded-full border-2 border-emerald-100 bg-white text-emerald-800 font-medium transition-all hover:border-emerald-500 hover:text-emerald-600 hover:shadow-md active:scale-95"
            >
              {val.name}
            </li>
          ))
        ) : (
          <li className="text-gray-400 italic py-2">ไม่มีหมวดหมู่</li>
        )}
      </ul>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-5 overflow-y-auto">
        {products?.map((item) => (
          <ProductCard key={item._id} product={item} />
        ))}
      </div>
    </main>
  );
};

export default MainSale;
