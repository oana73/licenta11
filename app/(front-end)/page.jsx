import CategoryList from "@/components/frontend/CategoryList";
import CommunityList from "@/components/frontend/CommunityList";
import Hero from "@/components/frontend/Hero";
import MarketList from "@/components/frontend/MarketList";
import { getData } from "@/lib/getData";
import Image from "next/image";
import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";

export default async function Home() {
  const categoriesData = await getData('categories')
  const categories = categoriesData.filter((category)=>{
    return category.products.length >0 
  })
  const trainings =  await getData("trainings")
  const session = await getServerSession(authOptions);
  console.log(session?.user)
  return (
    <div className="min-h-screen ">
    <Hero/>
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
    <CommunityList trainings={trainings.slice(0,3)}/>
    </div>
  );
}
