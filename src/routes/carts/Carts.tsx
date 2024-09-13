import Header from "../../components/header/Header.tsx";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../redux/store";
import {Recipe} from "../../types";
import {addToCart, removeFromCart} from "../../redux/slice/cartSlice.ts";
import {CiCircleRemove} from "react-icons/ci";
import Footer from "../../components/footer/Footer.tsx";

const Carts = () => {
  const {cartProducts}: { cartProducts: Recipe[] } = useSelector((state: RootState) => state.cart)
  const dispatch = useDispatch<AppDispatch>()
  return (
      <div className="w-full bg-white min-h-screen">
        <Header/>

        <div className="max-w-[1440px] max-h-[100px] my-1">
          <div
              className="text-center text-[#0b254b] text-[40px] font-medium font-['Poppins'] leading-[57.60px]">Your cart items
          </div>
          <div
              className="text-center text-green-400 text-lg font-medium font-['Poppins'] leading-7 tracking-tight">
            Back to shopping
          </div>
        </div>
        <table className="px-[60px] w-full my-6">
          <tbody className="w-full">
          <tr className="w-full border-b-2">
            <th className="max-w-[300px] py-3 text-zinc-800 text-xl text-start px-10 font-medium">Product name and
              image
            </th>
            <th className="max-w-[300px] py-3 text-zinc-800 text-xl font-medium">QTY</th>
          </tr>
          {
            cartProducts?.map(product =>
                <tr key={product.id}
                    className="w-full border-b-2 justify-around items-center min-h-[200px] text-neutral-800 text-lg font-normal">
                  <td className=" max-w-[400px] pl-[30px] py-5">
                    <div className="flex items-center gap-5">
                      <button className="font-2xl text-red-600"
                              onClick={() => dispatch(removeFromCart({...product, quantity: 0}))}><CiCircleRemove
                          size="28px"/>
                      </button>
                      <img className="max-w-[200px] max-h-[100px] object-contain" src={product.image}
                           alt={product.name}/>
                      <span>{product.name}</span>
                    </div>
                  </td>
                  <td className="max-w-[300px] w-full px-[10px] flex justify-center items-center">
                    <div
                        className="bg-[#f6f7f8] max-w-[140px] w-full flex justify-between items-center px-4 mt-10 py-2  font-bold rounded-lg">
                      <button disabled={product.quantity === 1}
                              onClick={() => dispatch(removeFromCart({...product, quantity: 1}))}
                              className="text-green-400">-
                      </button>
                      <span>{product.quantity}</span>
                      <button onClick={() => dispatch(addToCart({...product, quantity: 1}))}
                              className="text-green-400">+
                      </button>
                    </div>
                  </td>
                </tr>
            )
          }
          </tbody>
        </table>

        <Footer/>
      </div>
  )
}
export default Carts
