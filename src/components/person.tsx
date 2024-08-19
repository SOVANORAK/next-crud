"use client";

import { useState } from "react";

interface Person {
  name: string;
  age: number;
  isMarried: boolean;
}

export default function Person(props: Person) {
  const [personBio, setPersonBio] = useState<string | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPersonBio(event.target.value);
  };

  return (
    <div>
      <div className="w-60 h-40 bg-orange-600 mb-3 rounded-md flex flex-col  justify-center items-center">
        <p>Name: {props.name}</p>
        <p>Age: {props.age}</p>
        <p>This person: {props.isMarried ? "is married" : "is single"}</p>
        <p>
          {props.name} Bio : {!personBio ? "no bio aviable" : personBio}
        </p>
      </div>

      <input type="text" onChange={handleChange} className="text-black" />
    </div>
  );
}
