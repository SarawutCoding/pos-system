"use client"
import Navbar from "./components/navbar/Navbar";
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
    return <div className="p-10 text-center">กำลังยืนยันตัวตน...</div>;
  }

  if (!session) {
    return null; 
  }
  return (
    <div>
      <Navbar/>
      <Sidebar/>
    </div>
  );
}
