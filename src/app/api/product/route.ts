import Product from "@/models/product";
import { connectToDB } from "@/utils/database";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (res: NextResponse) => {
  try {
    await connectToDB();
    const products = await Product.find({}); //find all

    return new NextResponse(JSON.stringify(products), { status: 200 });
  } catch (error) {
    console.log(error);
  }
};

//DELETE PRODUCT
export const DELETE = async (req: NextRequest, res: NextResponse) => {
  const id = req.nextUrl.searchParams.get("id");

  try {
    await connectToDB();
    await Product.findByIdAndDelete(id);

    return new NextResponse("Product deleted successfully", { status: 200 });
  } catch (error) {
    return new NextResponse("Fail to delete Product", { status: 500 });
  }
};
