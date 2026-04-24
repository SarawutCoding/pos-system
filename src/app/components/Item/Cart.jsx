"use client"
import React, { useEffect } from 'react'

const Cart = ({ listCart }) => {
    const ListData = [];
    ListData.push(listCart);
    console.log(ListData);
    
  return (
    <div>
        {ListData && ListData.length > 0 ? (
            ListData.map(val => (
                <div key={val._id}>{val.name}</div>
            ))
        ) : (
            <div>ไม่มีข้อมูล</div>
        )}
    </div>
  )
}

export default Cart