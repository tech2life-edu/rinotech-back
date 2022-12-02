import mongoose from 'mongoose';


const ProductScheme = new mongoose.Schema({
    name:{
        type: String,
    },
    price:{
        type: Number,
    }


},
{
  timestamps: true,
  versionKey: false
}

);

export default mongoose.model('Products', ProductScheme);
