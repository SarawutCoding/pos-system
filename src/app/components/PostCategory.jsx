import { connectMongo } from "../../../lib/mongoConnect";
import Category from "../../../model/category";
import React from "react";

const PostCategory = async (id) => {
    await connectMongo();
    const category = "";
    if (id) {
        category = await Category.find({});
    } else {
        category = await Category.findById(id);
    }
  return (
    <div className="flex items-center gap-2 w-full">
      <div className="flex-1">
        <select
          onChange={(e) => {
            setCategoryID(e.target.value);
          }}
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-sky-400 focus:border-transparent outline-none transition-all cursor-pointer bg-white"
        >
          <option value="">เลือกหมวดหมู่</option>
            {category &&
                category.length > 0 &&
                category.map((val) => (
                <option key={val._id} value={val._id}>
                    {val.name}
                </option>
            ))}
        </select>
      </div>

      {/* ปุ่มเพิ่มหมวดหมู่ - ปรับให้ขนาดสูงเท่ากับ Select */}
      <button
        type="button"
        onClick={() => setModal(true)}
        className="px-4 py-3 rounded-xl bg-sky-500 hover:bg-sky-600 text-white font-medium transition-colors shadow-sm flex items-center justify-center whitespace-nowrap"
        title="เพิ่มหมวดหมู่"
      >
        <span className="text-xl mr-1">+</span>
        <span>เพิ่ม</span>
      </button>
    </div>
  );
};

export default PostCategory;
