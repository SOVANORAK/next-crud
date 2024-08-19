import Product from "@/models/product";
import { connectToDB } from "@/utils/database";

export const GET = async ({ params }: { params: { id: string } }) => {
  try {
    await connectToDB();

    //fetch a product
    const product = await Product.findById(params.id);

    //if no product
    if (!product) return new Response("Product not found!", { status: 404 });

    return new Response(JSON.stringify(product), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch product.", { status: 500 });
  }
};
//Update Product

//Delete Product
