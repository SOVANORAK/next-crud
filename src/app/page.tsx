import Person from "@/components/person";

export default function Home() {
  return (
    <div className="flex justify-center flex-col items-center">
      <h1 className="text-4xl font-semibold mb-28">Testing</h1>
      <div className="flex flex-col gap-5">
        <Person name={"Sovanorak"} age={23} isMarried={false} />
        <Person name={"Sovanorak"} age={12} isMarried={true} />
      </div>
    </div>
  );
}
