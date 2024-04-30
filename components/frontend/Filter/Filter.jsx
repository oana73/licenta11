import BrandFilter from "./BrandFilter";
import PriceFilter from "./PriceFilter";


export default function Filter() {
  return (
    <div className="bg-green-400">
        <PriceFilter/>
        <BrandFilter/>
    </div>
  )
}
