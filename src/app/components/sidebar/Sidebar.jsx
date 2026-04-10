"use client";
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { signOut } from 'next-auth/react'
import { useSession } from 'next-auth/react';
// นำเข้าไอคอนจาก lucide-react (สวยงามและใช้งานง่าย)
import { LayoutDashboard, ShoppingCart, Package, BarChart3, Settings, LogOut, Coffee, UserPlus } from 'lucide-react';

const Sidebar = () => {
  // ดึง Pathname ปัจจุบันมาเพื่อทำ Active Link Highlight
  const pathname = usePathname();

  const { data:session } = useSession();

  // กำหนดรายการเมนู เพื่อให้ง่ายต่อการจัดการและวนลูป
  const menuItems = [
    { name: 'Dashboard', href: '/', icon: LayoutDashboard },
    { name: 'POS / Items', href: '/items', icon: ShoppingCart },
    { name: 'Inventory', href: '/inventory', icon: Package },
    { name: 'Reports', href: '/reports', icon: BarChart3 },
    { name: 'Register', href: '/register', icon: UserPlus },
    { name: 'Settings', href: '/settings', icon: Settings },
  ];

  return (
    <div className="flex flex-col h-screen p-4 bg-slate-900 shadow-xl w-64 text-slate-100 border-r border-slate-700">
      
      {/* --- ส่วนหัว: Logo / Name --- */}
      <div className="flex items-center gap-3 px-3 py-4 mb-10 border-b border-slate-700">
        <div className="p-2.5 bg-sky-500 rounded-xl shadow-inner">
          <Coffee className="w-8 h-8 text-white" strokeWidth={1.5}/>
        </div>
        <div>
          <h1 className="text-xl font-bold tracking-tight text-white">POS <span className="text-sky-400">System</span></h1>
          <p className="text-sm text-slate-400">Manage with ease</p>
        </div>
      </div>

      {/* --- ส่วนกลาง: รายการเมนู --- */}
      <nav className="flex-1 space-y-1">
        <p className="px-3 mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500">Main Menu</p>
        
        {menuItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon; // ดึง Component ไอคอนมาใช้
          
          return (
            <Link key={item.name} href={item.href}>
              <div
                className={`flex items-center gap-3.5 px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 group
                  ${isActive 
                    ? 'bg-sky-500/10 text-sky-400 font-semibold shadow-sm' // สไตล์เมื่อ Active
                    : 'text-slate-300 hover:bg-slate-800 hover:text-white'    // สไตล์เมื่อ Hover
                  }`}
              >
                {/* แถบสีด้านข้างเมื่อ Active */}
                {isActive && (
                  <div className="absolute left-0 h-8 w-1 bg-sky-400 rounded-r-full" />
                )}

                {/* ไอคอน */}
                <Icon className={`w-5 h-5 flex-shrink-0 transition-colors 
                  ${isActive ? 'text-sky-400' : 'text-slate-500 group-hover:text-slate-300'}`} 
                />
                
                {/* ชื่อเมนู */}
                <span>{item.name}</span>
              </div>
            </Link>
          );
        })}
      </nav>

      {/* --- ส่วนท้าย: User / Action --- */}
      <div className="mt-auto border-t border-slate-700 pt-5 space-y-3">
        {/* ข้อมูลผู้ใช้แบบย่อ */}
        <div className="flex items-center gap-3 px-3">
          <img 
            src="https://api.dicebear.com/8.x/notionists/svg?seed=Sarah" 
            alt="Avatar" 
            className="w-10 h-10 rounded-full bg-slate-700 border border-slate-600"
          />
          <div>
            <p className="text-sm font-semibold text-white">{session?.user?.username}</p>
            <p className="text-xs text-slate-400">Manager</p>
          </div>
        </div>

        {/* ปุ่ม Logout */}
        <a className="flex items-center gap-3 w-full px-4 py-2.5 rounded-lg text-sm font-medium text-rose-400 hover:bg-rose-500/10 transition-colors" onClick={() => signOut({ redirect: true, callbackUrl: "/login" })}>
          <LogOut className="w-5 h-5" />
          Logout
        </a>
      </div>
    </div>
  );
};

export default Sidebar;