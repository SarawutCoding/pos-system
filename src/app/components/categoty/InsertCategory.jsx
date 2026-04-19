import { connectMongo } from "../../../../lib/mongoConnect";
import Category from "../../../../model/category";
import PostCategory from "./PostCategory";
import React from "react";

const InsertCategory = async ({ id, categoryID, model}) => {
  await connectMongo();
  let categoryData = "";
  if (id) {
    categoryData = await Category.findById(id);
    
  }else{
    categoryData = await Category.find({});
  }
  const category = JSON.parse(JSON.stringify(categoryData));
  return (
    <div>
      <PostCategory category={category} categoryID={categoryID} model={model}/>
    </div>
  );
};

export default InsertCategory;
