import mongoose from "mongoose";

// connect mongo database

const connectDB = async ()=> {
    mongoose.connection.on('connected', ()=> console.log('database connected'))

    await mongoose.connect(`${process.env.MONGO_URI}/Lms`)
}

export default connectDB