import mongoose, { Schema } from "mongoose";

const ordersModel = new Schema({
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

const Orders = mongoose.models.orders || mongoose.model("orders", ordersModel);
export default Orders;