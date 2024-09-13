import Header from "../../components/header/Header.tsx";
import {Recipe} from "../../types";
import Card from "../../components/card/Card.tsx";
import {useSelector} from "react-redux";
import {RootState} from "../../redux/store";

const Liked = () => {
  const {products}: { products: Recipe[] } = useSelector((state: RootState) => state.like);

  return (
      <div className="w-full bg-white min-h-screen">
        <Header/>
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
              {products.map((recipe) => (
                  <Card key={recipe.id} recipe={recipe}/>
              ))}
            </div>
          </div>
      </div>
  )
}
export default Liked