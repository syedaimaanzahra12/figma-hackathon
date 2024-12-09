// pages/food-category.js
import Image from "next/image";

const FoodCategory = () => {
  return (
    <div className="bg-black text-white mt-16 pb-16">
      <div className="text-center mb-8">
        <h2 className="text-vividOrange italic font-serif text-lg lg:text-[32px]">Food Category</h2>
        <h1 className="text-4xl font-bold">
          <span className="text-vividOrange">Choose</span> Food Item
        </h1>
      </div>
      <div className="flex justify-center space-x-4 px-4">
        <div className="relative">
          <Image
            src="/salad.jpg"
            alt="A plate of salad with various vegetables"
            className="rounded-lg"
            width={300}
            height={200}
          />
          <div className="absolute  bottom-4 left-4  px-2 py-1 rounded">
            <span className="hidden md:block text-sm bg-white text-vividOrange mb-2" >Save 30%</span>
            <span className="hidden md:block text-lg font-bold bg-vividOrange px-1">Fast Food Dish</span>
          </div>
        </div>
        <div>
          <Image
            src="/burger.jpg"
            alt="A burger with lettuce and tomato"
            className="rounded-lg"
            width={300}
            height={200}
          />
        </div>
        <div>
          <Image
            src="/chicken.jpg"
            alt="A plate of salad with chicken and vegetables"
            className="rounded-lg"
            width={300}
            height={200}
          />
        </div>
        <div>
          <Image
            src="/donut.jpg"
            alt="Stacked donuts with chocolate and sprinkles"
            className="rounded-lg"
            width={300}
            height={200}
          />
        </div>
      </div>
    </div>
  );
};

export default FoodCategory;