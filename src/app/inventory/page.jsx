"use client"
import {React, useState, useEffect} from 'react'
import Sidebar from '../components/sidebar/Sidebar'
import SearchBar from '../components/searchBar/SearchBar'
import Link from 'next/link'
import Loading from '../components/loading/Loading'

const InventoryPage = () => {
  const [product, setProduct] = useState("");

  const getProduct = async () => {
    const res = await fetch("http://localhost:3000/api/postItem", {
      method: "GET",
      cache: "no-cache"
    })

    if (!res.ok) {
      alert("Error")
      return
    }
    const data = await res.json();
    setProduct(data.products)
  }

  useEffect(() => {
    getProduct();
  }, [])
  
  
  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      {/* 1. Sidebar */}
      <Sidebar />

      {/* 2. Main Area */}
      <div className="flex flex-col flex-1 overflow-hidden">
        
        {/* Header Section: รวม Search และ Action Button */}
        <header className="flex items-center justify-between px-8 py-4 bg-white border-b border-gray-100">
          <div className="flex-1 max-w-2xl">
            <SearchBar />
          </div>
        </header>

        {/* Content Section: พื้นที่แสดงข้อมูล/ตาราง */}
        <main className="flex-1 overflow-y-auto p-8 bg-gray-50">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 min-h-full p-6">
            
            {/* Header Section */}
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-xl font-semibold text-gray-700">รายการสินค้า (Inventory)</h1>
              <Link href="/inventory/postItem" className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-xl transition-all shadow-sm text-sm">
                + เพิ่มสินค้าใหม่
              </Link>
            </div>

            {/* Table Section */}
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-gray-100">
                    <th className="px-4 py-4 font-medium text-gray-500 text-sm">รูปภาพ</th>
                    <th className="px-4 py-4 font-medium text-gray-500 text-sm">ชื่อสินค้า</th>
                    <th className="px-4 py-4 font-medium text-gray-500 text-sm">รายละเอียด</th>
                    <th className="px-4 py-4 font-medium text-gray-500 text-sm">ชนิด</th>
                    <th className="px-4 py-4 font-medium text-gray-500 text-sm">ราคา</th>
                    <th className="px-4 py-4 font-medium text-gray-500 text-sm">คงเหลือ</th>
                    <th className="px-4 py-4 font-medium text-gray-500 text-sm text-center">จัดการ</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {product && product.length > 0 ? (
                    product.map(val => (
                      <tr key={val._id} className="hover:bg-gray-50/50 transition-colors">
                        <td className="px-4 py-4">
                          <div className="w-12 h-12 bg-gray-100 rounded-lg overflow-hidden border border-gray-100">
                            <img src={val.imgUrl} className="object-cover w-full h-full" />
                          </div>
                        </td>
                        <td className="px-4 py-4 text-sm font-medium text-gray-700">{val.name}</td>
                        <td className="px-4 py-4 text-sm font-medium text-gray-700">{val.description}</td>
                        <td className="px-4 py-4">
                          <span className="px-3 py-1 bg-amber-50 text-amber-600 text-xs rounded-full border border-amber-100">
                            {val.category_id.name}
                          </span>
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-600 font-semibold">{val.price}</td>
                        <td className="px-4 py-4">
                          <div className="text-sm text-gray-600">{val.quantity} ต้น</div>
                          {/* Progress Bar เล็กๆ เพิ่มความสวยงาม */}
                          <div className="w-24 h-1.5 bg-gray-100 rounded-full mt-1">
                            <div className="bg-green-500 h-1.5 rounded-full w-3/4"></div>
                          </div>
                        </td>
                        <td className="px-4 py-4">
                          <div className="flex justify-center gap-2">
                            <Link 
                            href={`/inventory/editItem/${val._id}`}
                            className="p-2 text-blue-500 hover:bg-blue-50 rounded-lg transition-colors">
                              ✏️
                            </Link>
                            <button className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors">
                              🗑️
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="100%" className="text-center bg-gray-100 p-10">
                        <Loading/>
                      </td>
                    </tr>
                  )}
                  
                </tbody>
              </table>
            </div>

          </div>
        </main>
        
      </div>
    </div>
  )
}

export default InventoryPage