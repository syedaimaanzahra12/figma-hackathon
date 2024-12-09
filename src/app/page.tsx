import Hero from "./components/landing/hero";
import About from "./components/landing/about";
import FoodCategory from "./components/landing/foodCat";
import WhyUs from "./components/landing/whyUs";
export default function Home() {
  return (
        <div>
          <Hero/>
          <About/>
          <FoodCategory/>
          <WhyUs/>
        </div>
  );
}
