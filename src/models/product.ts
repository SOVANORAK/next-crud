import { Document, Schema, models, model, Model } from "mongoose";

//Defined the IProduct interface
export interface IProduct extends Document {
  name: string;
  description: string;
  category: string;
  price: number;
  inStock: boolean;
  imageURL: string;
  createdAt: Date;
  updatedAt: Date;
}

//Defined the Product Schema
const ProductSchema: Schema<IProduct> = new Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide product name"],
      trim: true,
      maxlength: [100, "Product can not exceed 100 characters"],
    },
    description: {
      type: String,
      required: [true, "Please provide a product description"],
      maxlength: [500, "Product description cannot exceed 500 characters"],
    },
    price: {
      type: Number,
      required: [true, "Please provide a product price"],
      min: [0, "Price cannot be negative"],
    },
    category: {
      type: String,
      required: [true, "Please provide a product category"],
      trim: true,
    },
    inStock: {
      type: Boolean,
      default: true,
    },
    imageURL: {
      type: String,
      required: [true, "Please provide product image"],
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  }
);

//Create the Product model
const Product: Model<IProduct> =
  models.Product || model<IProduct>("Product", ProductSchema);

export default Product;
