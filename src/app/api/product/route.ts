// Get all product

import Product from "@/models/product";
import { connectToDB } from "@/utils/database";
import { NextResponse } from "next/server";

export const GET = async (req: Request, res: Response) => {
  //connect to database
  await connectToDB();

  try {
    //fetch all product
    const products = await Product.find({}); //find all
    //return to client
    return new NextResponse(JSON.stringify(products), { status: 200 });
  } catch (error) {
    console.log(error);
  }
};
