import mongoose from "mongoose";

const connetToMongoDB = async () => {
  try {
    await mongoose.connect(
      process.env.MONGO_DB_URI,
      console.log("connected to MongoDB")
    );
  } catch (error) {
    console.log("error while conneting to mongodb", error.message);
  }
};

export default connetToMongoDB;
