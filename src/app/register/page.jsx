"use client";
import React , { useState } from 'react'
import Link from 'next/link'

const RegisterPage = () => {
    const [userName, setUserName] = useState("");
    const [email , setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password != confirmPassword) {
            alert("รหัสผ่านไม่ตรงกัน กรุณาพิมพ์ใหม่")
            return
        }
        if (password.length < 6 || confirmPassword.length < 6) {
            alert("รหัสผ่านต่ำกว่า 6 กรุณาใส่ให้มากกว่า 6");
            return
        }
        if (!userName || !email || !password || !confirmPassword) {
            alert("ข้อมูลไม่ครบถ้วน กรุณากรอกให้ครบ")
            return
        }
        try {
          const res = await fetch('http://localhost:3000/api/register', {
            method: "POST",
            headers: {"Content-Type":"appication/json"},
            body: JSON.stringify({ userName, email, password })
          })
          if (res.ok) {
            console.log("สมัครเสร็จสิ้น");
          }
        } catch (error) {
          console.log(error);
        }
    }

  return (
    <div className="min-h-[calc(100vh-80px)] bg-gray-50 flex items-center justify-center p-6">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md border border-gray-100">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-extrabold text-gray-800">สร้างบัญชีใหม่</h2>
          <p className="text-gray-500 mt-2">กรุณากรอกข้อมูลเพื่อลงทะเบียนเข้าใช้งาน</p>
        </div>

        {/* Form */}
        <form className="space-y-5" onSubmit={handleSubmit}>
          {/* Username */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Username</label>
            <input 
              type="text"
              onChange={(e) => {setUserName(e.target.value)}}
              placeholder="ชื่อผู้ใช้งาน"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-amber-400 focus:border-transparent outline-none transition-all"
            />
          </div>

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
              className="w-full bg-amber-400 hover:bg-amber-500 text-gray-800 font-bold py-3 rounded-xl shadow-lg shadow-amber-200 transition-all active:scale-[0.98]"
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
          <Link href="/login" className="text-amber-600 font-bold hover:underline">
            เข้าสู่ระบบที่นี่
          </Link>
        </div>

      </div>
    </div>
  )
}

export default RegisterPage