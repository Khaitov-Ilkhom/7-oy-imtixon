import {AiFillHeart, AiFillStar, AiOutlineHeart} from "react-icons/ai";
import {BiTime} from "react-icons/bi";
import {FaUser} from "react-icons/fa";
import {GiCookingPot, GiFireBowl} from "react-icons/gi"
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {addToLiked} from "../../redux/slice/likeSlice.ts";
import {AppDispatch, RootState} from "../../redux/store";
import {Recipe} from "../../types";


const Card = ({recipe}: { recipe: Recipe }) => {
  const navigate = useNavigate()
  const dispatch = useDispatch<AppDispatch>();
  const {products}: { products: Recipe[] } = useSelector((state: RootState) => state.like);

  const isProductLiked = (id: number) => {
    return products?.some(product => product.id === id)
  };

  const handleLike = (product: Recipe) => {
    dispatch(addToLiked(product));
  }


  return (
      <div
          className="rounded-lg flex flex-col justify-between overflow-hidden shadow-lg bg-[#56b280] hover:shadow-xl transition-shadow duration-300 border border-green-700">
        <div className="relative">
          <div className="absolute top-0 left-0 bg-green-700 text-white px-2 py-1 rounded-br-lg">
            {recipe.difficulty}
          </div>
          <img className="w-full h-56 object-cover" src={recipe.image} alt={recipe.name}/>
          <div className="absolute top-0 right-0 p-2">
            <button
                onClick={() => handleLike(recipe)}
                className="product-like text-white bg-gray-100 p-2 rounded-full text-3xl"
            >
              {
                isProductLiked(recipe.id) ? <AiFillHeart className="text-red-500 text-2xl"/> :
                    <AiOutlineHeart className="text-red-500 text-2xl"/>
              }
            </button>
          </div>
        </div>

        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 text-white">{recipe.name}</div>

          <div className="flex items-center mb-4">
            <AiFillStar className="h-5 w-5 text-yellow-400"/>
            <span className="ml-1 text-white font-semibold">{recipe.rating.toFixed(1)}</span>
            <span className="ml-1 text-gray-200">({recipe.reviewCount} reviews)</span>
          </div>

          <div className="flex justify-between mb-4">
            <p className="text-white text-sm font-semibold">
              {recipe.cuisine} Cuisine
            </p>
            <div className="flex items-center">
              <FaUser className="h-5 w-5 text-white mr-1"/>
              <span className="text-white">{recipe.servings} servings</span>
            </div>
          </div>

          <div className="flex justify-between items-start mb-2 text-white">
            <div className="flex items-center">
              <BiTime className="h-5 w-5 text-white mr-1"/>
              <span>{recipe.prepTimeMinutes + recipe.cookTimeMinutes} min</span>
            </div>
            <div className="flex items-center">
              <GiFireBowl className="h-5 w-5 text-white mr-1"/>
              <span>{recipe.caloriesPerServing} cal</span>
            </div>
          </div>

        </div>

        <div className="px-6 pb-4">
          <button onClick={() => navigate(`/details/${recipe.id}`)}
                  className="w-full bg-white hover:bg-gray-200 text-[#56b280] font-bold py-2 px-4 rounded-full transition-colors duration-300 flex items-center justify-center"
          >
            <GiCookingPot className="mr-2"/>
            View Recipe Details
          </button>
        </div>
      </div>

  )
}

export default Card