import Hero from "@/components/frontend/Hero";
import MarketList from "@/components/frontend/MarketList";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen ">
    <Hero/>
    <MarketList/>
      <h2 className=" text-4xl ">
        Welcome
      </h2>
      <Link className="my-4 hover:underline" href="/register-supplier">Sell smth!</Link>
    </div>
  );
}
