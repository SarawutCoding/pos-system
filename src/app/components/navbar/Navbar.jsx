"use client";
import { signOut } from 'next-auth/react'
import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className='bg-amber-400 shadow-md sticky top-0 z-50'>
      <div className='container mx-auto px-6 py-4 flex justify-between items-center'>
        
        {/* Logo Section */}
        <div className='text-2xl font-bold text-gray-800 tracking-tight'>
          <Link href="/">🛒 POS <span className="text-white">System</span></Link>
        </div>

        {/* Auth Buttons */}
        <div className='flex items-center gap-x-4'>
          <Link 
            href="/register" 
            className='px-4 py-2 text-sm font-semibold bg-gray-900 text-white rounded-lg hover:bg-gray-800 shadow-sm transition-all'
          >
            Register
          </Link>
        </div>

      </div>
    </nav>
  )
}

export default Navbar