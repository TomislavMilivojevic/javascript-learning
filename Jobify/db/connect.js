import mongoose from "mongoose";

// this shit is async
const connectDB = (url) => {
  return mongoose.connect(url);
};

export default connectDB;
