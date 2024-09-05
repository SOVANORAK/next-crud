"use client";
import ProductCard from "@/components/card-product";
import { Query, useQuery } from "react-query";
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
    queryKey: ["products"],
    queryFn: () =>
      fetch(`http://localhost:3000/api/product`).then((res) => res.json()),
  });

  const products: Product[] = data;
  //console.log(products);

  return (
    <main>
      <div className="px-4 py-8 w-full min-h-screen bg-neutral-900 mx-auto">
        {/* flex gap-4 flex-col items-center justify-center sm:flex-row sm:flex-wrap sm:justify-center xl:justify-start w-full  */}

        <div className="flex gap-4 flex-col items-center justify-center xl:justify-start sm:flex-row sm:flex-wrap w-full">
          {isLoading && <Loading listsToRender={8} />}
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
