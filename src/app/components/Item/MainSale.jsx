"use client";
import React, { useState } from "react";
import ProductCard from "./ProductCard";
import { Plus, Minus, Trash2, ShoppingBag } from "lucide-react"; // แนะนำให้ลง lucide-react เพื่อความสวยงาม

const MainSale = ({ products, category }) => {
  const [achiveCategory, setAcgiveCategory] = useState("ทั้งหมด");
  const [cart, setCart] = useState([]);

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

  const updateQty = (id, delta) => {
    setCart((prev) =>
      prev.map((item) => {
        if (item._id === id) {
          const newQty = (item.qty || 1) + delta;
          return newQty > 0 ? { ...item, qty: newQty } : item;
        }
        return item;
      })
    );
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item._id !== id));
  };

  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  const filteredProducts = products.filter(
    (p) => achiveCategory === "ทั้งหมด" || p.category_id?.name === achiveCategory
  );

  return (
    <div className="flex flex-1 h-full overflow-hidden bg-gray-50">
      {/* --- ฝั่งซ้าย: รายการสินค้า --- */}
      <div className="flex-1 flex flex-col min-w-0">
        <div className="px-6 py-4 bg-white/50 backdrop-blur-sm border-b border-gray-200">
          <ul className="flex flex-wrap items-center gap-2">
            <li
              className={`cursor-pointer px-6 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                achiveCategory === "ทั้งหมด"
                  ? "bg-emerald-600 text-white shadow-lg shadow-emerald-200"
                  : "bg-white text-gray-600 hover:bg-emerald-50 border border-gray-100"
              }`}
              onClick={() => setAcgiveCategory("ทั้งหมด")}
            >
              ทั้งหมด
            </li>
            {category?.map((val) => (
              <li
                key={val._id}
                className={`cursor-pointer px-6 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                  achiveCategory === val.name
                    ? "bg-emerald-600 text-white shadow-lg shadow-emerald-200"
                    : "bg-white text-gray-600 hover:bg-emerald-50 border border-gray-100"
                }`}
                onClick={() => setAcgiveCategory(val.name)}
              >
                {val.name}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex-1 overflow-y-auto p-6 scrollbar-hide">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {filteredProducts.map((item) => (
              <div 
                key={item._id} 
                onClick={() => addToCart(item)} 
                className="transform transition-transform duration-200 hover:scale-105"
              >
                <ProductCard product={item} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* --- ฝั่งขวา: ตะกร้าสินค้าแบบ Full-Height --- */}
      <aside className="w-[400px] bg-white border-l border-gray-200 flex flex-col shadow-2xl z-10">
        {/* ส่วนหัวตะกร้า */}
        <div className="p-6 border-b border-gray-100 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShoppingBag className="text-emerald-600" size={24} />
            <h2 className="text-xl font-bold text-gray-800">รายการสั่งซื้อ</h2>
          </div>
          <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-xs font-bold">
            {cart.length} รายการ
          </span>
        </div>

        {/* รายการสินค้าในตะกร้า */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-gray-400 space-y-3">
              <div className="p-4 bg-gray-50 rounded-full">
                <ShoppingBag size={48} className="opacity-20" />
              </div>
              <p className="text-sm font-medium">ยังไม่มีสินค้าในตะกร้า</p>
            </div>
          ) : (
            cart.map((item) => (
              <div key={item._id} className="group flex gap-4 p-3 rounded-2xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100">
                <div className="w-16 h-16 bg-gray-100 rounded-xl overflow-hidden flex-shrink-0">
                  <img src={item.imgUrl} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <p className="font-bold text-gray-800 text-sm line-clamp-1">{item.name}</p>
                    <button onClick={() => removeFromCart(item._id)} className="text-gray-300 hover:text-red-500 transition-colors">
                      <Trash2 size={16} />
                    </button>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="text-emerald-600 font-bold">{item.price.toLocaleString()}.-</p>
                    <div className="flex items-center bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                      <button onClick={() => updateQty(item._id, -1)} className="p-1 hover:bg-gray-100 text-gray-500"><Minus size={14} /></button>
                      <span className="px-3 text-xs font-bold text-gray-700">{item.qty}</span>
                      <button onClick={() => updateQty(item._id, 1)} className="p-1 hover:bg-gray-100 text-gray-500"><Plus size={14} /></button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* ส่วนสรุปเงิน */}
        <div className="p-6 bg-white border-t border-gray-100 shadow-[0_-10px_20px_rgba(0,0,0,0.02)]">
          <div className="space-y-3 mb-6">
            <div className="flex justify-between text-gray-500 text-sm">
              <span>ราคารวม</span>
              <span>{totalPrice.toLocaleString()}.-</span>
            </div>
            <div className="flex justify-between text-gray-500 text-sm">
              <span>ภาษี (7%)</span>
              <span>{(totalPrice * 0.07).toLocaleString()}.-</span>
            </div>
            <div className="flex justify-between items-center pt-3 border-t border-dashed">
              <span className="text-lg font-bold text-gray-800">ยอดสุทธิ</span>
              <span className="text-3xl font-black text-emerald-600 italic">
                {(totalPrice * 1.07).toLocaleString()}.-
              </span>
            </div>
          </div>
          <button 
            disabled={cart.length === 0}
            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-4 rounded-2xl font-bold text-lg shadow-lg shadow-emerald-100 transition-all active:scale-95 disabled:bg-gray-200 disabled:shadow-none"
          >
            ชำระเงินตอนนี้
          </button>
        </div>
      </aside>
    </div>
  );
};

export default MainSale;