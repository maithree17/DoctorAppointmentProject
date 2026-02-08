import mongoose from "mongoose";
//Event Listener
mongoose.connection.on("connected", () => {
  console.log("Database connected");
});

mongoose.connection.on("error", err => {
  console.error("MongoDB error:", err.message);
});

mongoose.connection.on("disconnected", () => {
  console.log("MongoDB disconnected");
});

const connectDB=async () =>{
    await mongoose.connect(`${process.env.MONGODB_URI}/suvacha`)
}
export default connectDB;