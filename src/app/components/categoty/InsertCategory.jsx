import { connectMongo } from "../../../../lib/mongoConnect";
import Category from "../../../../model/category";
import PostCategory from "./PostCategory";
import React from "react";

const InsertCategory = async () => {
  await connectMongo({ id });
  if (id) {
    
  }
  return (
    <div>
      <PostCategory/>
    </div>
  );
};

export default InsertCategory;
