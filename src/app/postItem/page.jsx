"use client";
import React , { useState, useEffect } from 'react'
import Link from 'next/link'

const PostItemPasge = () => {
  return (
    <div className="min-h-[calc(100vh-80px)] bg-gray-50 flex items-center justify-center p-6">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md border border-gray-100">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-extrabold text-gray-800">เพิ่มสินค้า</h2>
        </div>

        {/* Form */}
        <form className="space-y-5">
          {/* Username */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">ProductName</label>
            <input 
              type="text"
              onChange={(e) => {setUserName(e.target.value)}}
              placeholder="ชื่อสินค้า"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-amber-400 focus:border-transparent outline-none transition-all"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
            <input 
              type="email"
              onChange={(e) => {setEmail(e.target.value)}}
              placeholder="example@pos.com"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-amber-400 focus:border-transparent outline-none transition-all"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input 
              type="password"
              onChange={(e) => {setPassword(e.target.value)}}
              placeholder="รหัสผ่าน (อย่างน้อย 6 ตัวอักษร)"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-amber-400 focus:border-transparent outline-none transition-all"
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
            <input 
              type="password"
              onChange={(e) => {setConfirmPassword(e.target.value)}}
              placeholder="ยืนยันรหัสผ่านอีกครั้ง"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-amber-400 focus:border-transparent outline-none transition-all"
            />
          </div>

          {/* Buttons */}
          <div className="flex flex-col gap-3 pt-4">
            <button 
              type="submit" 
              className="w-full bg-sky-400 hover:bg-sky-500 text-gray-900 font-bold py-3 rounded-xl shadow-lg shadow-amber-200 transition-all active:scale-[0.98]"
            >
              ลงทะเบียน
            </button>
            <Link 
              href="/" 
              className="w-full bg-gray-100 hover:bg-gray-200 text-gray-600 font-semibold py-3 rounded-xl text-center transition-all"
            >
              ยกเลิก
            </Link>
          </div>
        </form>

        {/* Footer Link */}
        <div className="mt-8 text-center text-sm text-gray-600">
          มีบัญชีอยู่แล้วใช่ไหม?{' '}
          <Link href="/login" className="text-sky-600 font-bold hover:underline">
            เข้าสู่ระบบที่นี่
          </Link>
        </div>

      </div>
    </div>
  )
}

export default PostItemPasge