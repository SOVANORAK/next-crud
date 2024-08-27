"use client";
import ProductCard from "@/components/card-product";
import { useQuery } from "react-query";
import Loading from "./loading";

interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  inStock: boolean;
  imageURL: string;
}

export default function HomePage() {
  const { data, error, isLoading } = useQuery({
    queryKey: "products",
    queryFn: () =>
      fetch("http://localhost:3000/api/product").then((res) => res.json()),
  });

  const products: Product[] = data;

  return (
    <main>
     
      <div className="p-10 w-full min-h-screen bg-neutral-900">
        {isLoading && <Loading />}
        <div className="flex gap-4 flex-col items-center justify-center sm:flex-row sm:flex-wrap sm:justify-center xl:justify-start">
          {products?.map((product) => (
            <ProductCard
              key={product._id}
              name={product.name}
              description={product.description}
              price={product.price}
              category={product.category}
              inStock={product.inStock}
              imageUrl={product.imageURL}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
