import Header from "../../components/header/Header.tsx";
import Hero from "../../components/hero/Hero.tsx";
import Products from "../../components/products/Products.tsx";
import Footer from "../../components/footer/Footer.tsx";
import Clean from "../../components/clean/Clean.tsx";
import TopProducts from "../../components/top-products/TopProducts.tsx";
import Testimonials from "../../components/testimonials/Testimonials.tsx";

const Home = () => {
  return (
      <div className="max-w-[1440px]">
        <Header/>
        <Hero/>
        <Products/>
        <Clean/>
        <Testimonials/>
        <TopProducts/>
        <Footer/>
      </div>
  )
}
export default Home
