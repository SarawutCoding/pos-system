"use client";
import React, { useState } from "react";

const MainSale = ({ Products, category }) => {
  return (
    <main>
      <ul className="flex flex-col md:flex-row gap-2 md:gap-4">
        <li>ทั้งหมด</li>
        {category && category.length > 0 ? (
            category.map(val => (
                <li key={val._id}>{val.name}</li>
            ))
        ) : (
            <li>ไม่มีหมวดหมู่</li>
        )}
        <li>ไม้ยืนต้น</li>
      </ul>
    </main>
  );
};

export default MainSale;
