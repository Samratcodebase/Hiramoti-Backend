import mongoose from "mongoose";

const menuSchema = new mongoose.Schema(
  {
    foodName: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      default: "",
    },

    price: {
      type: Number,
      required: true,
      min: 0,
    },

    category: {
      type: String, 
      required: true,
    },

    isVeg: {
      type: Boolean,
      default: false,
    },

    isAvailable: {
      type: Boolean,
      default: true,
    },

    image: {
      type: String,
      default: "",
    },
  },
  { timestamps: true },
);

export default mongoose.model("menu", menuSchema);
