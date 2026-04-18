import React from 'react'
import Sidebar from '../components/sidebar/Sidebar'
import SearchBar from '../components/searchBar/SearchBar'

const itemsPage = () => {
  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
        <Sidebar />

        <div className="flex flex-col flex-1 overflow-hidden">
            <div className='p-5'>
                <SearchBar/>
            </div>
            <ul className='flex flex-col md:flex-row gap-2 md:gap-4'>
                <li>ทั้งหมด</li>
                <li>ไม้ยืนต้น</li>
                <li>ไม้พุ่ม</li>
                <li>ไม้คลุมดิน</li>
                <li>ไม้เลื้อย</li>
                <li>ไม้ประดับ</li>
                <li>ไม้น้ำ</li>
            </ul>
        </div>
    </div>
  )
}

export default itemsPage