import mongoose, { Schema } from "mongoose";

const user = new Schema({
    username: { type: String , required: true },
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    password: { type: String , required: true }
},
{
    timestamps: true
})
const User = mongoose.models.users || mongoose.model("users", user);
export default User;