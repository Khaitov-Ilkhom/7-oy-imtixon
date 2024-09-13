import {useSearchRecipeQuery} from "../../redux/api/productsApi.ts";
import Header from "../../components/header/Header.tsx";
import Card from "../../components/card/Card.tsx";
import useSearchParamsHook from "../../paramsHook/paramsHook.ts";

const Search = () => {
  const {getParam} = useSearchParamsHook();
  const {data} = useSearchRecipeQuery({q:getParam("q")})
  console.log(data)
  return (
      <div>
        <Header/>
        {/*<div className=" pt-[150px]">*/}
        {/*  <Card key={recipe.id} recipe={recipe}/>*/}
        {/*</div>*/}
      </div>
  )
}

export default Search