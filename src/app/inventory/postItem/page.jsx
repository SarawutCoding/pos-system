"use client";
import React , { useState, useEffect } from 'react'
import Link from 'next/link'

const PostItemPasge = () => {
  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [fileImge, setFileImge] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!productName || !description || !price || !quantity || !fileImge) {
        alert("ข้อมูลไม่ครบ")
        return
    }
    const formData = new FormData();

    const res = await fetch("http://localhost:3000/api/postItem/", {
      method: "POST",
      headers: {"Content-Type" : "application/json", "Content-Type" : "multipart/form-data"},
      body: JSON.stringify(productName, description, price, quantity, fileImge)
    })

  }
  return (
    <div className="min-h-[calc(100vh-80px)] bg-gray-50 flex items-center justify-center p-6">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md border border-gray-100">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-extrabold text-gray-800">เพิ่มสินค้า</h2>
        </div>

        {/* Form */}
        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">ProductName</label>
            <input 
              type="text"
              onChange={(e) => {setProductName(e.target.value)}}
              placeholder="ชื่อสินค้า"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-amber-400 focus:border-transparent outline-none transition-all"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
            <textarea 
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-amber-400 focus:border-transparent outline-none transition-all"
              onChange={(e) => {setDescription(e.target.value)}}
              placeholder='รายละเอียดสินค้า'></textarea>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Price</label>
            <input 
              type="number"
              onChange={(e) => {setPrice(e.target.value)}}
              placeholder="ราคา"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-amber-400 focus:border-transparent outline-none transition-all"
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Quantity</label>
            <input 
              type="number"
              onChange={(e) => {setQuantity(e.target.value)}}
              placeholder="จำนวน"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-amber-400 focus:border-transparent outline-none transition-all"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Imge</label>
            <input 
              type="file"
              onChange={(e) => {setFileImge(e.target.files[0])}}
              className="w-full text-sm text-sky-600 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-sky-100 file:text-sky-700 hover:file:bg-sky-200 cursor-pointer"
            />
          </div>

          {/* Buttons */}
          <div className="flex flex-col gap-3 pt-4">
            <button 
              type="submit" 
              className="w-full bg-sky-400 hover:bg-sky-500 text-gray-900 font-bold py-3 rounded-xl shadow-lg shadow-amber-200 transition-all active:scale-[0.98] cursor-pointer"
            >
              เพิ่มข้อมูล
            </button>
            <Link 
              href="/inventory" 
              className="w-full bg-gray-100 hover:bg-gray-200 text-gray-600 font-semibold py-3 rounded-xl text-center transition-all"
            >
              ยกเลิก
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default PostItemPasge