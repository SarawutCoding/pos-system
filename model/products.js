import mongoose, { Schema } from "mongoose";

const products = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        trim: true
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    quantity: {
        type: Number,
        default: 0,
        min: 0
    },
    category_id: {
        type: Schema.Types.ObjectId,
        ref: "categorys",
        required: true
    },
    image_url: {
        type: String,
        unique: true,
        sparse: true
    }
}, {
    timestamps: true
})

const Products = mongoose.models.products || mongoose.model("products", products);
export default Products;

