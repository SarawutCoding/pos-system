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

        {/* Navigation Links */}
        <div className='hidden md:block'>
          <ul className='flex gap-x-8 font-medium text-gray-700'>
            <li>
              <Link href="/" className='hover:text-white transition-colors'>Home</Link>
            </li>
            <li>
              <Link href="/items" className='hover:text-white transition-colors'>Items</Link>
            </li>
            <li>
              <Link href="/inventory" className='hover:text-white transition-colors'>Inventory</Link>
            </li>
            <li>
              <Link href="/reports" className='hover:text-white transition-colors'>Reports</Link>
            </li>
          </ul>
        </div>

        {/* Auth Buttons */}
        <div className='flex items-center gap-x-4'>
          <Link 
            href="/login" 
            className='px-4 py-2 text-sm font-semibold text-gray-800 hover:bg-amber-500 rounded-lg transition-all'
          >
            Login
          </Link>
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