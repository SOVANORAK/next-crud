"use client";
import ProductCard from "@/components/card-product";
import { useGetProducts } from "@/hooks/product/get-product-handler";

export default function HomePage() {
  const { data: products } = useGetProducts();

  return (
    <section className="w-full h-full flex justify-center items-center bg-neutral-900">
      <div className="lg:px-10 w-full min-h-screen  px-5 py-10 xl:px-20 max-w-screen-2xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
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
    </section>
  );
}
