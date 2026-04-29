"use client";
import React, { useEffect } from "react";

const Cart = ({ listCart }) => {
  return (
    <div className="flex flex-col h-screen bg-slate-50 rounded-2xl shadow-lg border border-slate-200 overflow-hidden absolute right-2 top-3">
      {/* 1. Header: หัวข้อตะกร้า */}
      <div className="p-4 bg-white border-b border-slate-100 flex justify-between items-center">
        <h2 className="text-lg font-bold text-slate-800 flex items-center gap-2">
          Current Order
        </h2>
        <span className="bg-slate-100 text-slate-600 text-xs font-bold px-2 py-1 rounded-full">
          Items
        </span>
      </div>

      {/* 2. Body: รายการสินค้า (Scrollable) */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {/* --- ส่วนที่ต้อง Loop เริ่มตรงนี้ --- */}
        <div className="flex gap-3 bg-white p-3 rounded-xl border border-slate-100 shadow-sm">
          {/* รูปสินค้า */}
          <div className="w-16 h-16 bg-slate-200 rounded-lg flex-shrink-0 overflow-hidden">
            <img
              src="/api/placeholder/64/64"
              alt="Product"
              className="w-full h-full object-cover"
            />
          </div>

          {/* รายละเอียด และ ปุ่มเพิ่ม/ลด */}
          <div className="flex-1 flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <h3 className="text-sm font-semibold text-slate-800 line-clamp-1">
                Product Name
              </h3>
              <button className="text-slate-400 hover:text-rose-500 transition-colors">
              </button>
            </div>

            <div className="flex justify-between items-center mt-2">
              <span className="text-green-600 font-bold">$120.00</span>

              <div className="flex items-center gap-2 bg-slate-50 rounded-lg p-1 border border-slate-100">
                <button className="w-6 h-6 flex items-center justify-center bg-white rounded shadow-sm text-slate-600 hover:text-green-500">
                  -
                </button>
                <span className="text-xs font-bold w-4 text-center">1</span>
                <button className="w-6 h-6 flex items-center justify-center bg-white rounded shadow-sm text-slate-600 hover:text-green-500">
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* --- จบส่วนที่ Loop --- */}
      </div>

      {/* 3. Footer: สรุปยอดเงิน และ ปุ่มชำระเงิน */}
      <div className="p-4 bg-white border-t border-slate-200 space-y-3">
        <div className="space-y-1.5">
          <div className="flex justify-between text-sm text-slate-500">
            <span>Subtotal</span>
            <span>$0.00</span>
          </div>
          <div className="flex justify-between text-sm text-slate-500">
            <span>Tax (7%)</span>
            <span>$0.00</span>
          </div>
          <div className="flex justify-between text-lg font-bold text-slate-900 pt-2 border-t border-dashed border-slate-200">
            <span>Total</span>
            <span className="text-green-600">$0.00</span>
          </div>
        </div>

        <button className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-green-200 transition-all active:scale-[0.98] flex items-center justify-center gap-2">
          Checkout Now
        </button>
      </div>
    </div>
  );
};

export default Cart;
