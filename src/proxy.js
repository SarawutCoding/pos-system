// middleware.js
import { withAuth } from "next-auth/middleware"

export default withAuth({
  pages: {
    signIn: "/login", // ถ้าไม่มี Session ให้เด้งไปหน้านี้
  },
})

export const config = { 
  matcher: [
    '/',
    '/inventory',        // ดักหน้าหลัก inventory
    '/inventory/:path*', // ดักหน้าย่อยของ inventory
    '/postItem', 
    '/postItem/:path*',
    '/register',
    '/register/:path*',
  ] 
}