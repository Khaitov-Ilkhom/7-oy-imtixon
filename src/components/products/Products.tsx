import Card from "../card/Card.tsx";
import {useAllProductsQuery} from "../../redux/api/productsApi.ts";
import {useState} from "react";
import {Recipe} from "../../types";

const Products = () => {
  const [limit, setLimit] = useState<number>(8)
  const {data} = useAllProductsQuery()
  const recipes: Recipe[] = data?.recipes

  return (
      <div>
        <div className="max-w-[1440px] max-h-[100px] mt-5">
          <div
              className="text-center text-[#0b254b] text-[40px] font-medium font-['Poppins'] leading-[57.60px]">Products
          </div>
          <div
              className="text-center text-[#5e6e89] text-lg font-medium font-['Poppins'] leading-7 tracking-tight">Order
            it for you or for your beloved ones
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4 px-4">
          {
            recipes?.slice(0, limit).map((recipe) => (
                <Card key={recipe.id} recipe={recipe}/>
            ))}
        </div>
        <div className="text-center mb-5">
          <button
              className="text-center text-white text-xl font-medium mt-[45px] px-11 py-2 bg-[#56b280] rounded justify-start items-start gap-2.5 inline-flex transition-transform active:scale-95 hover:bg-[#418a62]"
              onClick={() => setLimit(limit + 4)}>Show more
          </button>
        </div>
      </div>
  )
}
export default Products
