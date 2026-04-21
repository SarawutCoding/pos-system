"use client"
import Loading from "./components/loading/Loading";
import Sidebar from "./components/sidebar/Sidebar";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const { data: session , status } = useSession();
  const route = useRouter();
  useEffect(() => {
    if (status === "unauthenticated") {
      route.replace("/login");
    }
  }, [status, route]);

  // 3. ระหว่างรอโหลด หรือถ้าไม่มี Session ไม่ต้องวาด Navbar (ป้องกันหน้าแวบ)
  if (status === "loading") {
    return <div className="flex h-screen items-center justify-center"> <Loading/></div>;
  }

  if (!session) {
    return null; 
  }
  return (
    <div className="flex h-screen overflow-hidden">
      {/* 1. ฝั่งซ้าย: Sidebar (ความกว้างคงที่) */}
      <Sidebar />

      {/* 2. ฝั่งขวา: พื้นที่ส่วนที่เหลือทั้งหมด */}
      <div className="flex flex-col flex-1">
        {/* Main Content: พื้นที่แสดงเนื้อหาหน้าเว็บ */}
        <main className="flex-1 overflow-y-auto p-6 bg-slate-50">
          <div>
              <h1 className="text-3xl font-bold text-gray-800">DashBoard</h1>
          </div>
        </main>
      </div>
    </div>
  );
}
