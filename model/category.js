import mongoose, { Schema } from "mongoose";

const category = new Schema({
    name: {type: String, trim: true}
})

const Category = mongoose.models.categorys || mongoose.model("categorys", category);
export default Category;