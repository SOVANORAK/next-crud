import ProductCard from "@/components/card-product";

export default function HomePage() {
  return (
    <main>
      <div className="p-10 w-full min-h-screen bg-neutral-900">
        <div className="flex gap-6 flex-col items-center justify-center sm:flex-row sm:flex-wrap sm:justify-center lg:justify-start ">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </main>
  );
}
