import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const DB_URI = process.env.DB_URI;
    const conn = await mongoose.connect(DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,

    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (err) {
    console.log(err);
  }
};

export default connectDB;
