//Create new product api
import { connectToDB } from "@/utils/database";
import Product, { IProduct } from "@/models/product";
import { NextResponse } from "next/server";

export const POST = async (req: Request, res: Response) => {
  //get all data from req.json beacause we get data from bbdy in json format
  const { name, description, price, category, inStock } = await req.json();

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
    });
    //res to console
    console.log("Product insert successfully");
    //res result data to client site
    return new NextResponse(JSON.stringify(product), { status: 201 });
  } catch (error) {
    console.log(error);
    return new NextResponse("Fail to create product", { status: 500 });
  }
};
