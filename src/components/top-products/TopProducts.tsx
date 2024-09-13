import Card from "../card/Card.tsx";
import {useAllProductsQuery} from "../../redux/api/productsApi.ts";
import {Recipe} from "../../types";

const Products = () => {
  const {data} = useAllProductsQuery()
  const recipes: Recipe[] = data?.recipes?.map((product) => product).sort((a, b) => b.rating - a.rating).slice(0, 4);

  return (
      <div className="mb-8">
        <div className="max-w-[1440px] max-h-[100px] my-4">
          <div
              className="text-center text-[#0b254b] text-[40px] font-medium font-['Poppins'] leading-[57.60px]">Popular
          </div>
          <div
              className="text-center text-[#5e6e89] text-lg font-medium font-['Poppins'] leading-7 tracking-tight">
            Our top selling product that you may like
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4 px-4">
          {
            recipes?.map((recipe) => (
                <Card key={recipe.id} recipe={recipe}/>
            ))}
        </div>
      </div>
  )
}
export default Products
