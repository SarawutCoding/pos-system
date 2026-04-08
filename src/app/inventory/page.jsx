import React from 'react'
import Sidebar from '../components/sidebar/Sidebar'
import SearchBar from '../components/searchBar/SearchBar'
import Link from 'next/link'

const InventoryPage = () => {
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
          
          <div className="ml-4">
            <Link 
              href="/inventory/postItem" 
              className="inline-flex items-center px-6 py-2.5 bg-sky-500 hover:bg-sky-600 text-white font-medium rounded-xl shadow-md shadow-sky-100 transition-all active:scale-95"
            >
              <span className="mr-2">+</span>
              เพิ่มข้อมูล
            </Link>
          </div>
        </header>

        {/* Content Section: พื้นที่แสดงข้อมูล/ตาราง */}
        <main className="flex-1 overflow-y-auto p-8">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 min-h-full p-6">
             {/* ใส่ Content หรือ Table ตรงนี้ */}
             <h1 className="text-xl font-semibold text-gray-700">รายการสินค้า (Inventory)</h1>
          </div>
        </main>
        
      </div>
    </div>
  )
}

export default InventoryPage