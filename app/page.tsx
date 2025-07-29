import Image from "next/image";
import Header from "./components/Header";

export default function Home() {
  return (
    <div className=" ">
      <Header />
      <div className="flex flex-col items-center justify-center h-[80vh]">
       
        <h5 className="text-2xl font-bold text-red-500">
          Please sign-in to see the content.
        </h5>
      </div>
    </div>
  );
}
