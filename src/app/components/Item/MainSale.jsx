"use client";
import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import Cart from "./Cart";

const MainSale = ({ products, category }) => {
  const [achiveCategory, setAcgiveCategory] = useState("ทั้งหมด");
  const checkProduct = [];
  for (let i = 0; i < products.length; i++) {
    if (achiveCategory === "ทั้งหมด" || products[i].category_id?.name === achiveCategory) {
      checkProduct.push(products[i]);
    }
  }
  return (
    <main>
      <ul className="flex flex-wrap items-center gap-3 p-4">
        <li
          className={`cursor-pointer px-5 py-2 rounded-full border-2 transition-all ${
            achiveCategory === "ทั้งหมด"
              ? "bg-emerald-700 border-emerald-700 text-white shadow-inner"
              : "bg-white border-emerald-100 text-emerald-800 hover:border-emerald-500"
          }`}
          onClick={() => setAcgiveCategory("ทั้งหมด")}
        >
          ทั้งหมด
        </li>
        {category && category.length > 0 ? (
          category.map((val) => (
            <li
              key={val._id}
              className={`cursor-pointer px-5 py-2 rounded-full border-2 transition-all ${
                achiveCategory === val.name
                  ? "bg-emerald-700 border-emerald-700 text-white shadow-inner"
                  : "bg-white border-emerald-100 text-emerald-800 hover:border-emerald-500"
              }`}
              onClick={() => setAcgiveCategory(val.name)}
            >
              {val.name}
            </li>
          ))
        ) : (
          <li className="text-gray-400 italic py-2">ไม่มีหมวดหมู่</li>
        )}
      </ul>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-5 overflow-y-auto w-">
        {checkProduct?.map((item) => (
          <ProductCard key={item._id} product={item} />
        ))}
        <Cart/>
      </div>
      
    </main>
  );
};

export default MainSale;
