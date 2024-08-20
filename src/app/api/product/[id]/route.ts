import Product from "@/models/product";
import { connectToDB } from "@/utils/database";
import { NextRequest, NextResponse } from "next/server";

//Fetch Single Product
export const GET = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  const { id } = params;

  try {
    await connectToDB();

    //fetch a product
    const product = await Product.findById(id);

    return new NextResponse(JSON.stringify(product), { status: 200 });
  } catch (error) {
    return new NextResponse("Failed to fetch product.", { status: 500 });
  }
};
