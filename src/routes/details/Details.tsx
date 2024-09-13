import Header from "../../components/header/Header.tsx";
import {useParams} from "react-router-dom";
import {useGetProductQuery} from "../../redux/api/productsApi.ts";
import Footer from "../../components/footer/Footer.tsx";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../redux/store";
import {addToCart} from "../../redux/slice/cartSlice.ts";
import {SlBasketLoaded} from "react-icons/sl";
import {Recipe} from "../../types";
import {addToLiked} from "../../redux/slice/likeSlice.ts";
import {AiFillHeart, AiOutlineHeart} from "react-icons/ai";

const Details = () => {
  const {id} = useParams()
  const {data} = useGetProductQuery(id)
  const dispatch = useDispatch<AppDispatch>()
  const recipe = data
  const {products}: { products: Recipe[] } = useSelector((state: RootState) => state.like);

  const isProductLiked = (id: number) => {
    return products?.some(product => product.id === id)
  };

  const handleLike = (product: Recipe) => {
    dispatch(addToLiked(product));
  }

  const [productCount, setProductCount] = useState(1);

  const handleProductCountIncrement = () => {
    setProductCount(count => count + 1)
  }

  const handleProductCountDecrement = () => {
    if(productCount > 1){
      setProductCount(count => count - 1)
    }
  }

  const handleAddToCart = (recipe) => {
    dispatch(addToCart({...recipe, quantity: productCount}));
    setProductCount(1)
  }

  return (
      <div className="w-full min-h-screen bg-white">
        <Header/>
         <div className="px-4">
           {
               recipe && <div className="text-white font-sans py-[50px]">
                 <h1 className="text-center text-green-300 text-3xl font-bold mb-4">{recipe.name}</h1>
                 <div className="w-full flex justify-center items-start gap-8">
                   <div>
                     <img src={recipe.image} alt={recipe.name}
                          className="max-w-[600px] h-auto rounded mb-4"/>
                   </div>
                   <div className="flex justify-center items-start gap-6">
                     <div>
                       <div className="mb-4">
                         <h2 className="text-green-300 text-2xl font-semibold">Information:</h2>
                         <p><strong>Prep Time:</strong> {recipe.prepTimeMinutes}</p>
                         <p><strong>Cook Time:</strong> {recipe.cookTimeMinutes}</p>
                         <p><strong>Servings:</strong> {recipe.servings}</p>
                         <p><strong>Difficulty:</strong> {recipe.difficulty}</p>
                         <p><strong>Cuisine:</strong> {recipe.cuisine}</p>
                         <p><strong>Calories Per Serving:</strong> {recipe.caloriesPerServing}</p>
                         <p><strong>Rating:</strong> {recipe.rating}/5 ({recipe.reviewCount} reviews)</p>
                         <p><strong>Meal Type:</strong> {recipe.mealType[0]}</p>
                       </div>
                       <div className="mb-4">
                         <h2 className="text-green-300 text-2xl font-semibold">Tags:</h2>
                         <ul className="list-disc ml-6">
                           {
                             recipe.tags.map(tag =>
                                 <li key={tag}>{tag}</li>
                             )
                           }
                         </ul>
                       </div>

                       <div className="py-3">
                         <div className="w-full flex flex-col items-start gap-4">
                           <div
                               className="bg-green-300 max-w-[140px] w-full flex justify-between px-4 py-2 font-bold rounded-lg">
                             <button disabled={productCount === 1} onClick={handleProductCountDecrement}
                                     className="text-white">-
                             </button>
                             <span>{productCount}</span>
                             <button onClick={handleProductCountIncrement} className="text-white">+</button>
                           </div>
                           <div className="flex items-center gap-4">
                             <button onClick={() => handleAddToCart(recipe)}
                                     className="bg-green-300 text-white py-2 px-4 flex items-center rounded-lg gap-3">
                               <span><SlBasketLoaded/></span> Add To Cart
                             </button>
                             <button
                                 onClick={() => handleLike(recipe)}
                                 className="product-like text-white bg-gray-100 p-2 rounded-full text-3xl"
                             >
                               {
                                 isProductLiked(recipe?.id) ? <AiFillHeart className="text-red-500 text-2xl"/> :
                                     <AiOutlineHeart className="text-red-500 text-2xl"/>
                               }
                             </button>
                           </div>
                         </div>
                       </div>
                     </div>
                     <div>
                       <div className="mb-4">
                         <h2 className="text-green-300 text-2xl font-semibold">Ingredients:</h2>
                         <ul className="list-disc ml-6">
                           {
                             recipe.ingredients.map(ingre =>
                                 <li key={ingre}>{ingre}</li>
                             )
                           }
                         </ul>
                       </div>
                       <div className="mb-4 max-w-[300px]">
                         <h2 className="text-green-300 text-2xl font-semibold">Instructions:</h2>
                         <ol className="list-decimal ml-6">
                           {
                             recipe.instructions.map(instruc =>
                                 <li key={instruc}>{instruc}</li>
                             )
                           }
                         </ol>
                       </div>
                     </div>
                   </div>
                 </div>
               </div>
           }
         </div>
        <Footer/>
      </div>
  )
}
export default Details
