import mongoose from 'mongoose';

const ProductScheme = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    category: {
      type:Array,
    },
    primaryImage: {
      type: String,
      required: true,
    },
    images: {
      type: Array,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default mongoose.model('Products', ProductScheme);
