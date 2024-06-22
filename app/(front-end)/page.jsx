import CategoryList from "@/components/frontend/CategoryList";
import CommunityList from "@/components/frontend/CommunityList";
import MarketList from "@/components/frontend/MarketList";
import { getData } from "@/lib/getData";
import Image from "next/image";
import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";

export default async function Shop() {
  const categoriesData = await getData('categories')
  const categories = categoriesData.filter((category)=>{
    return category.products.length > 2
  })
  const trainings =  await getData("trainings")
  const session = await getServerSession(authOptions);
  console.log(session?.user)
  return (
    <div className="min-h-screen mx-auto max-w-screen-2xl dark:bg-neutral-900 ">
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
