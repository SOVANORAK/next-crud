import Product from "@/models/product";
import { connectToDB } from "@/utils/database";

export const GET = async ({ params }: { params: { id: string } }) => {
  try {
    await connectToDB();

    //fetch a product
    const product = await Product.findById(params.id);

    console.log(product);

    return new Response(JSON.stringify(product), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("Failed to fetch product.", { status: 500 });
  }
};
