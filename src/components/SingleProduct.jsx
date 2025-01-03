import React, { useState,useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Tooltip, Button } from "@material-tailwind/react";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/slices/cartSlice";
import { useNavigate } from "react-router-dom";

const SingleProduct = () => {
  const product = useSelector((state) => state.products.singleProduct);
  const productSize = product[0]?.size ? product[0].size[0] : "";
  const productColor = product[0]?.color[0];

  const [size, setSize] = useState(productSize);
  const [color, setColor] = useState(productColor);
  const { id } = useParams();
  const dispatch = useDispatch();

  const navigate=useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top when this component is mounted
  }, []);

  return (
    <div className="px-4 py-10">
      {product
        .filter((product) => product.id === id)
        .map((item, index) => (
          <div
            key={index}
            className="flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-12"
          >
            {/* Product Image */}
            <div className="flex justify-center lg:justify-end w-full lg:w-[45%]">
              <img
                className="w-full max-w-[400px] lg:max-w-[500px] h-auto rounded-lg object-cover"
                src={item.img}
                alt={item.name}
              />
            </div>

            {/* Product Details */}
            <div className="w-full max-w-md lg:max-w-xl">
              <h5 className="text-2xl lg:text-3xl font-inter font-bold pb-4">
                {item.name}
              </h5>
              <p className="text-orange-700 text-xl lg:text-2xl font-inter font-bold pb-4">
                15% OFF
              </p>
              <p className="text-gray-600 text-lg lg:text-xl font-medium pb-6">
                {item.text}
              </p>

              {/* Size Selector */}
              <div className="pb-6">
                <label
                  htmlFor="size"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Pick a size
                </label>
                <select
                  id="size"
                  name="size"
                  value={size}
                  onChange={(e) => setSize(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                >
                  {item.size?.map((item, index) => (
                    <option key={index} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>

              {/* Color Selector */}
              <div className="pb-6">
                <label
                  htmlFor="color"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Pick a color
                </label>
                <select
                  id="color"
                  name="color"
                  value={color}
                  onChange={(e) => setColor(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                >
                  {item.color?.map((color, index) => (
                    <option key={index} value={color}>
                      {color}
                    </option>
                  ))}
                </select>
              </div>

              {/* Add to Cart Button */}
              <Tooltip content="Add to Cart" placement="bottom">
                <Button
                  color="gray"
                  size="lg"
                  variant="outlined"
                  ripple={true}
                  onClick={() => {
                    dispatch(
                      addToCart({
                        id: item.id,
                        name: item.name,
                        img: item.img,
                        text: item.text,
                        size: size,
                        color: color,
                        price: item.price,
                        amount: 1,
                        totalPrice: item.price,
                      })
                    );
                    alert("Item Added To Cart");
                    navigate('/');
                  }}
                >
                  Add to Cart
                </Button>
              </Tooltip>
            </div>
          </div>
        ))}
    </div>
  );
};

export default SingleProduct;
