import mongoose, { Schema } from "mongoose";

const orderItemsModel = new Schema({
    order_id : {
        type: Schema.Types.ObjectId,
        ref: "orders",
        required: true
    },
    product_id : {
        type: Schema.Types.ObjectId,
        ref: "products",
        required: true
    },
    quantity: {
        type: Number,
        default: 0,
        min: 0
    },
    unit_price: {
        type: Number,
        required: true
    }
})

const OrderItem = mongoose.models.orderitems || mongoose.model("orderitem", orderItemsModel);
export default OrderItem;