"use client";
import React, { useState } from "react";
import ProductCard from "./ProductCard";

const MainSale = ({ products, category }) => {
  const [achiveCategory, setAcgiveCategory] = useState("ทั้งหมด");
  const [cart, setCart] = useState([]); // 1. สร้าง State สำหรับตะกร้า

  // ฟังก์ชันเพิ่มสินค้า (ใช้ spread operator ตามที่คุยกัน)
  const addToCart = (product) => {
    setCart((prev) => {
      const isExist = prev.find((item) => item._id === product._id);
      if (isExist) {
        return prev.map((item) =>
          item._id === product._id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  // ฟังก์ชันลบสินค้า (แถมให้)
  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item._id !== id));
  };

  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  // กรองสินค้าตามหมวดหมู่
  const filteredProducts = products.filter(
    (p) => achiveCategory === "ทั้งหมด" || p.category_id?.name === achiveCategory
  );

  return (
    <div className="flex flex-1 overflow-hidden"> 
      {/* --- ฝั่งซ้าย: รายการสินค้า (ใช้ flex-1 เพื่อให้กินพื้นที่ที่เหลือ) --- */}
      <div className="flex-1 flex flex-col overflow-y-auto">
        {/* หมวดหมู่ */}
        <ul className="flex flex-wrap items-center gap-3 p-4">
          <li
            className={`cursor-pointer px-5 py-2 rounded-full border-2 transition-all ${
              achiveCategory === "ทั้งหมด"
                ? "bg-emerald-700 border-emerald-700 text-white"
                : "bg-white border-emerald-100 text-emerald-800"
            }`}
            onClick={() => setAcgiveCategory("ทั้งหมด")}
          >
            ทั้งหมด
          </li>
          {category?.map((val) => (
            <li
              key={val._id}
              className={`cursor-pointer px-5 py-2 rounded-full border-2 transition-all ${
                achiveCategory === val.name
                  ? "bg-emerald-700 border-emerald-700 text-white"
                  : "bg-white border-emerald-100 text-emerald-800"
              }`}
              onClick={() => setAcgiveCategory(val.name)}
            >
              {val.name}
            </li>
          ))}
        </ul>

        {/* สินค้า */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 p-5">
          {filteredProducts.map((item) => (
            <div key={item._id} onClick={() => addToCart(item)} className="cursor-pointer">
              <ProductCard product={item} />
            </div>
          ))}
        </div>
      </div>

      {/* --- ฝั่งขวา: ตะกร้าสินค้า (Fix ความกว้างไว้) --- */}
      <div className="w-96 bg-white border-l border-gray-200 flex flex-col shadow-xl">
        <div className="p-4 border-b border-gray-100 bg-gray-50">
          <h2 className="text-xl font-bold text-gray-800">ตะกร้าสินค้า</h2>
        </div>

        {/* รายการในตะกร้า */}
        <div className="flex-1 overflow-y-auto p-4">
          {cart.length === 0 ? (
            <div className="text-center text-gray-400 mt-10">ไม่มีสินค้าในตะกร้า</div>
          ) : (
            cart.map((item) => (
              <div key={item._id} className="flex justify-between items-center mb-4 pb-2 border-b border-gray-50">
                <div className="flex-1">
                  <p className="font-semibold text-gray-700">{item.name}</p>
                  <p className="text-xs text-gray-500">{item.price} x {item.qty}</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-emerald-700">{(item.price * item.qty).toLocaleString()}.-</p>
                  <button onClick={() => removeFromCart(item._id)} className="text-xs text-red-400 hover:text-red-600">ลบ</button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* ยอดรวมและปุ่มชำระเงิน */}
        <div className="p-4 bg-gray-50 border-t border-gray-200">
          <div className="flex justify-between items-center mb-4">
            <span className="text-gray-600 font-medium">รวมทั้งสิ้น</span>
            <span className="text-2xl font-bold text-emerald-800">{totalPrice.toLocaleString()}.-</span>
          </div>
          <button 
            disabled={cart.length === 0}
            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-xl font-bold transition disabled:bg-gray-300"
          >
            ชำระเงิน
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainSale;