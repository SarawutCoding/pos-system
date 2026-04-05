import mongoose, { Schema } from "mongoose";

const products = new Schema({
    name: String,
    description: String,
    price: Number,
    quantity: Number,
    category_id: {
        type: Schema.Types.ObjectId,
        ref: "category",
        required: true
    },
    image_url: {
        type: String,
        unique: true
    }
})

const Products = mongoose.models.products || mongoose.model("products", products);
export default Products;

