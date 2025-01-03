import React from "react";
import { storeData } from "../assets/data/dummyData";
import ProductSectionItem from "./ProductSectionItem";

const ProductSection = () => {
  return (
    <div className="px-4">
      {/* Sale Banner */}
      <div className="bg-green-400 p-2 w-full md:w-[70%] lg:w-[55%] mx-auto rounded-md mt-4">
        <h2 className="font-inter text-orange-900 text-center text-lg md:text-xl font-bold tracking-normal leading-none">
          Summer T-Shirt Sale 30%
        </h2>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-8 mx-auto max-w-7xl">
        {storeData.slice(0, 6).map((product, index) => (
          <div key={index}>
            <ProductSectionItem
              id={product.id}
              name={product.name}
              img={product.img}
              text={product.text}
              price={product.price}
              totalPrice={product.totalPrice}
              color={product.color}
              size={product.size}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductSection;
