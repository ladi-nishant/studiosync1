import mongoose from "mongoose";

const connectToMongoDB = () => {
  console.log("waiting for the mongo connection....");
  mongoose
    .connect(process.env.MONGO)
    .then(() => {
      console.log("connected to MongoDB....");
    })
    .catch((err) => {
      throw err;
    });
};

export { connectToMongoDB };
// Commit 30: minor function tweak
function dummyUpdate30() { return 30; }
// Commit 46: minor function tweak
function dummyUpdate46() { return 46; }
