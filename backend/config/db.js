import mongoose from "mongoose";

const connectDB = async () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName: "proshop",
    })
    .then(() => {
      console.log(`Database Connection is ready...`);
    })
    .catch((error) => {
      console.log(`Error: ${error.message}`);
      process.exit(1);
    });
};

export default connectDB;
