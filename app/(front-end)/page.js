import CategoryList from "@/components/frontend/CategoryList";
import CommunityList from "@/components/frontend/CommunityList";
import Hero from "@/components/frontend/Hero";
import MarketList from "@/components/frontend/MarketList";
import CatList from "@/components/frontend/CatList";
import { getData } from "@/lib/getData";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const categoriesData = await getData('categories')
  const categories = categoriesData.filter((category)=>{
    return category.products.length >0 
  })
  return (
    <div className="min-h-screen ">
    <Hero/>
    <CatList/>
    <MarketList/>
    {
      categories.map((category,i)=>{
        return(
          <div key={i}>
            <CategoryList category={category}/>
          </div>
        )}
      )
    }
    
    <CommunityList/>
      <h2 className=" text-4xl ">
        Welcome
      </h2>
      <Link className="my-4 hover:underline" href="/register-supplier">Sell smth!</Link>
    </div>
  );
}
