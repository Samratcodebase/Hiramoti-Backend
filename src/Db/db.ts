import mongoose from "mongoose";

const ConnectDb = async () => {
  const connection = await mongoose.connect(process.env.MONGO_URI as string);
  console.log("DB connected");
};

export default ConnectDb;
