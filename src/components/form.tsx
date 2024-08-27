"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  name: z.string().max(50),
  description: z.string().max(150),
  price: z.number().positive(),
  category: z.string().max(80),
  inStock: z.boolean(),
  imageURL: z.string().url(),
});

type FormFields = z.infer<typeof schema>;

const Form = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>({
    resolver: zodResolver(schema),
  });
  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col items-start gap-2">
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            defaultValue=""
            className=" bg-neutral-800"
            {...register("name")}
          />
          {errors.name && (
            <div className="text-red-500">{errors.name.message}</div>
          )}
        </div>
        <div className="flex flex-col items-start gap-2">
          <Label htmlFor="description" className="text-right">
            Description
          </Label>
          <Input
            id="description"
            defaultValue=""
            className=" bg-neutral-800"
            {...register("description")}
          />
          {errors.description && (
            <div className="text-red-500">{errors.description.message}</div>
          )}
        </div>
        <div className="flex flex-col items-start gap-2">
          <Label htmlFor="price">Price:</Label>
          <Input
            id="price"
            defaultValue=""
            className=" bg-neutral-800"
            type="number"
            {...register("price", { valueAsNumber: true })}
          />
          {errors.price && (
            <div className="text-red-500">{errors.price.message}</div>
          )}
        </div>
        <div className="flex flex-col items-start gap-2">
          <Label htmlFor="category" className="text-right">
            Category
          </Label>
          <Controller
            name="category"
            control={control}
            render={({ field }) => (
              <Select onValueChange={field.onChange}>
                <SelectTrigger className="bg-neutral-800  w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-neutral-800 text-white">
                  <SelectGroup>
                    <SelectItem value="drink">Drink</SelectItem>
                    <SelectItem value="food">Food</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            )}
          />
        </div>
        <div className="flex flex-col items-start gap-2">
          <Label htmlFor="inStock">Stock</Label>
          <Controller
            name="inStock"
            control={control}
            render={({ field }) => (
              <Select onValueChange={field.onChange}>
                <SelectTrigger className="bg-neutral-800 w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-neutral-800 text-white">
                  <SelectGroup>
                    <SelectLabel>Stock...</SelectLabel>
                    <SelectItem value="true">In Stock</SelectItem>
                    <SelectItem value="false">Out Of Stock</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            )}
          />
        </div>
        <div className="flex flex-col items-start gap-2">
          <Label htmlFor="imageURL" className="text-right">
            imageURL
          </Label>
          <Input
            id="imageURL"
            defaultValue=""
            className=" bg-neutral-800"
            {...register("imageURL")}
          />
          {errors.imageURL && (
            <div className="text-red-500">{errors.imageURL.message}</div>
          )}
        </div>

        <Button className="bg-green-600 hover:bg-green-500 mt-6" type="submit">
          {isSubmitting ? "Loading..." : "Add"}
        </Button>
      </div>
    </form>
  );
};

export default Form;
