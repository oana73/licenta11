import BrandFilter from "./BrandFilter";
import PriceFilter from "./PriceFilter";


export default function Filter({slug}) {
  return (
    <div className="bg-green-400">
        <PriceFilter slug={slug}/>
        <BrandFilter/>
    </div>
  )
}
