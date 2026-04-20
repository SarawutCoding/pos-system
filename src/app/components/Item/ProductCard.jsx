import React from 'react'

const ProductCard = ({ product }) => {
  return (
    <div className="group cursor-pointer bg-white rounded-2xl shadow-sm border border-emerald-50 hover:shadow-xl hover:border-emerald-200 transition-all duration-300 overflow-hidden flex flex-col">
      
      {/* 1. พื้นที่รูปภาพ (Product Image) */}
      <div className="relative h-40 w-full bg-emerald-50 overflow-hidden">
        {product.image ? (
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        ) : (
          <div className="flex items-center justify-center h-full text-emerald-200">
             {/* ไอคอน Placeholder กรณีไม่มีรูป */}
            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="StoreFrontIcon..." />
            </svg>
          </div>
        )}
        
        {/* Badge หมวดหมู่ (จางๆ มุมบน) */}
        <span className="absolute top-2 right-2 bg-white/80 backdrop-blur-sm text-emerald-700 text-[10px] font-bold px-2 py-1 rounded-lg uppercase tracking-wider">
          {product.category_id?.name || 'ทั่วไป'}
        </span>
      </div>

      {/* 2. รายละเอียดสินค้า (Product Details) */}
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-gray-800 font-semibold text-sm line-clamp-2 mb-1 group-hover:text-emerald-700">
            {product.name}
          </h3>
          <p className="text-gray-400 text-xs font-normal">
            สต็อก: <span className="text-emerald-600">{product.quantity || 0}</span> ชิ้น
          </p>
        </div>

        {/* 3. ส่วนราคาและปุ่มกด (Price & Action) */}
        <div className="mt-3 flex items-center justify-between">
          <span className="text-lg font-bold text-emerald-700">
            ฿{product.price?.toLocaleString()}
          </span>
          
          <button className="bg-emerald-600 hover:bg-emerald-700 text-white p-2 rounded-xl shadow-lg shadow-emerald-100 transition-colors active:scale-90">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard