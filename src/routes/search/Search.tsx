import {useSearchRecipeQuery} from "../../redux/api/productsApi.ts";
import Header from "../../components/header/Header.tsx";
import Card from "../../components/card/Card.tsx";
import useSearchParamsHook from "../../paramsHook/paramsHook.ts";

const Search = () => {
  const {getParam} = useSearchParamsHook();
  const {data} = useSearchRecipeQuery({q: getParam("q")})
  const recipes = data?.recipes
  return (
      <div>
        <Header/>
        <div className="mb-8">
          <div className="max-w-[1440px] max-h-[100px] my-4">
            <div
                className="text-center text-[#0b254b] text-[40px] font-medium font-['Poppins'] leading-[57.60px]">{
              recipes && recipes.length === 0 ? <span>Not found Recipes</span>
                  : <span>Found products</span>
            }
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4 px-4">
            {
              recipes?.map((recipe) => (
                  <Card key={recipe.id} recipe={recipe}/>
              ))}
          </div>
        </div>
      </div>
  )
}

export default Search