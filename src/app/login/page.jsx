"use client";
import React , { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const route = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!email || !password) {
            alert("กรอกข้อมูลให้ครบ");
            return            
        }
    }

  return (
    <div className="min-h-[calc(100vh-80px)] bg-gray-50 flex items-center justify-center p-6">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md border border-gray-100">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-extrabold text-gray-800">เข้าสู่ระบบ</h2>
          <p className="text-gray-500 mt-2">กรุณากรอกข้อมูลเพื่อเข้าใช้งาน</p>
        </div>

        {/* Form */}
        <form className="space-y-5" onSubmit={handleSubmit}>
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
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
              placeholder="รหัสผ่าน"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-amber-400 focus:border-transparent outline-none transition-all"
            />
          </div>

          {/* Buttons */}
          <div className="flex flex-col gap-3 pt-4">
            <button 
              type="submit" 
              className="w-full bg-amber-400 hover:bg-amber-500 text-gray-800 font-bold py-3 rounded-xl shadow-lg shadow-amber-200 transition-all active:scale-[0.98]"
            >
              เข้าสู่ระบบ
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
          ยังไม่มีบัญชีใช่ไหม?{' '}
          <Link href="/register" className="text-amber-600 font-bold hover:underline">
            สมัครสมาชิกที่นี่
          </Link>
        </div>

      </div>
    </div>
  )
}

export default LoginPage