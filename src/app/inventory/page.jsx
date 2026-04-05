import React from 'react'
import Sidebar from '../components/sidebar/Sidebar'
import SearchBar from '../components/searchBar/SearchBar'
import Link from 'next/link'

const InventoryPage = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      {/* 1. ฝั่งซ้าย: Sidebar (ความกว้างคงที่) */}
      <Sidebar />

      {/* 2. ฝั่งขวา: พื้นที่ส่วนที่เหลือทั้งหมด */}
      <div className="flex flex-col flex-1 p-5">
        {/* Main Content: พื้นที่แสดงเนื้อหาหน้าเว็บ */}
        <SearchBar/>
        <main className="flex-1 overflow-y-auto p-6">
            <Link href="/postItem" className='px-6 py-2.5 bg-sky-500 hover:bg-sky-600 text-white font-medium rounded-2xl shadow-lg shadow-sky-200 transition-all active:scale-95'>เพิ่มข้อมูล</Link>
        </main>
      </div>
    </div>
  )
}

export default InventoryPage