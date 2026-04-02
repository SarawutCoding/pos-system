import mongoose from "mongoose";

export const connectMongo = async () => {
    try {
        await mongoose.connect(process.env.URL_MONGODB);
        console.log("Mongo Connect OK");
    } catch (error) {
        console.log(error);
    }
}