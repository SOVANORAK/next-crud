import { Card } from "@/components/ui/card";
import Image from "next/image";
interface Props {
  name: string;
  description: string;
  price: number;
  category: string;
  inStock: boolean;
  imageUrl: string;
}

const ProductCard = ({
  name,
  description,
  price,
  category,
  inStock,
  imageUrl,
}: Props) => {
  return (
    <Card className="bg-neutral-700 rounded-md border-none text-white p-4 flex flex-col gap-3 w-fit min-w-[20rem]">
      <div>
        <Image
          src={imageUrl}
          width={500}
          height={500}
          alt="image of shoes"
          className="object-cover object-center w-full rounded-md h-[9rem]"
        />
      </div>

      <div className="flex flex-col gap-1 ">
        <h1 className="text-xl">{name}</h1>
        <h4 className="text-neutral-300">{description}</h4>
      </div>

      <div className="flex justify-start gap-2 text-sm items-center ">
        <span className="flex px-4 py-1 bg-orange-500  rounded-full  font-bold items-center">
          ${price}
        </span>
        {inStock ? (
          <span className="flex px-4 py-1 bg-green-600  rounded-full  font-bold items-center justify-center text-center">
            In stock
          </span>
        ) : (
          <span className="flex px-4 py-1 bg-red-600  rounded-full  font-bold items-center justify-center text-center">
            Out stock
          </span>
        )}
        <span className="flex px-4 py-1 bg-yellow-600  rounded-full  font-bold items-center">
          {category}
        </span>
      </div>
    </Card>
  );
};

export default ProductCard;
