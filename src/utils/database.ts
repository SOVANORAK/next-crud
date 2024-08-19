import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI as string;

if (!MONGODB_URI) {
  throw new Error("MONGODB_URI is not correct");
}

//Function connect to db
export const connectToDB = async () => {
  mongoose.set("strictQuery", true);
  try {
    await mongoose.connect(MONGODB_URI, {
      dbName: "next_test",
    });

    console.log("MongoDB is connected👏👏👏👏");
  } catch (error) {
    console.log(error);
  }
};
