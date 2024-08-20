import Product from "@/models/product";
import { connectToDB } from "@/utils/database";
import { NextRequest, NextResponse } from "next/server";

//Fetch Single Product
export const GET = async (
  res: NextResponse,
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

//UPDATE PRODUCT
export const PUT = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  const { name, description, price, category, inStock, imageURL } =
    await req.json();
  const { id } = params;
  try {
    await connectToDB();

    await Product.findByIdAndUpdate(id, {
      name,
      description,
      price,
      category,
      inStock,
      imageURL,
    });

    return new NextResponse("Updated product successfully", { status: 200 });
  } catch (error) {
    return new NextResponse("Fail to update product", { status: 500 });
  }
};
