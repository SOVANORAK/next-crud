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
