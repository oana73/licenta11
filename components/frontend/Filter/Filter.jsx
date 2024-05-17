import BrandFilter from "./BrandFilter";
import PriceFilter from "./PriceFilter";


export default function Filter({slug}) {
  return (
    <div className="">
        <PriceFilter slug={slug}/>
    </div>
  )
}
