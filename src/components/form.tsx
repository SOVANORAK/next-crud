"use client";

import { useState } from "react";
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

type FormFields = {
  name: string;
  description: string;
  price: number;
  category: string;
  inStock: string;
  imageUrl: string;
};

const Form = () => {
  const { register, handleSubmit, control } = useForm<FormFields>();
  const onSubmit: SubmitHandler<FormFields> = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col items-start gap-2">
          <Label htmlFor="name" className="text-right">
            Name
          </Label>
          <Input
            id="name"
            defaultValue=""
            className=" bg-neutral-800"
            {...register("name")}
          />
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
        </div>
        <div className="flex flex-col items-start gap-2">
          <Label htmlFor="price" className="text-right">
            Price:
          </Label>
          <Input
            id="price"
            defaultValue=""
            className=" bg-neutral-800"
            type="number"
            {...register("price")}
          />
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
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent className="bg-neutral-800 text-white">
                  <SelectGroup>
                    <SelectLabel>Category...</SelectLabel>
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
                <SelectTrigger className="bg-neutral-800  w-full">
                  <SelectValue placeholder="Stock" />
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
          <Label htmlFor="imageUrl" className="text-right">
            ImageUrl
          </Label>
          <Input
            id="imageUrl"
            defaultValue=""
            className=" bg-neutral-800"
            {...register("imageUrl")}
          />
        </div>

        <Button className="bg-green-600 hover:bg-green-500 mt-6" type="submit">
          Add
        </Button>
      </div>
    </form>
  );
};

export default Form;
