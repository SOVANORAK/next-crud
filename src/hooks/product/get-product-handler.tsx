import { useQuery } from "react-query";
import { getProducts } from "./api";
import { ProductResponseTypes } from "@/types/products/product";

export const useGetProducts = () => {
  return useQuery<ProductResponseTypes[] | undefined>({
    queryKey: ["products"],
    queryFn: async () => await getProducts(),
  });
};
