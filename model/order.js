import mongoose, { Schema } from "mongoose";

const orders = new Schema({
    total_price: {
        tyre: Number,
        required: true
    },
    status: {
        type: String,
        required: true,
        trim: true
    }
},
{
    timestamps: true
})

const Orders = mongoose.models.orders || mongoose.model("orders", orders);
export default Orders;