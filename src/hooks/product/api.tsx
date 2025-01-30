import { ProductResponseTypes } from "@/types/products/product";
import { useQuery } from "react-query";

//get product api
export const getProducts = async () => {
  return fetch(`http://localhost:3000/api/product`).then((res) => res.json());
};
