import Image from "next/image";
import Header from "./components/Header";

export default function Home() {
  return (
    <div className="w-full">
      <Header />
      <div className="text-3xl font-bold text-green-800 tablet:text-red-800">
        ggg ok
      </div>
    </div>
  );
}
