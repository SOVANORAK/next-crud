//Create new product api
import { connectToDB } from "@/utils/database";
import Product from "@/models/product";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  //get all data from req.json beacause we get data from bbdy in json format
  const { name, description, price, category, inStock, imageURL } =
    await req.json();

  try {
    //connect to database first
    await connectToDB();

    //instert product model
    const product = await Product.create({
      name,
      description,
      price,
      category,
      inStock,
      imageURL,
    });

    return new NextResponse(JSON.stringify(product), { status: 201 });
  } catch (error) {
    console.log(error);
    return new NextResponse("Fail to create product", { status: 500 });
  }
};
