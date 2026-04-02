import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className='cantainer bg-amber-300 mx-auto flex justify-between p-5'>
        <h1>POS System</h1>
        <div className='loginRegisterPorfile'>
            <Link href="/">Login</Link>
            <Link href="/">Regiter</Link>
        </div>
        <div>
            <ul className='flex'>
                <li>Home</li>
                <li>Item</li>
                <li>ll</li>
                <li>ll</li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar