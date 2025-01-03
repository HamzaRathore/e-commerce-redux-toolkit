import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import ProductCard from "./ProductCard";
import { Button } from "@material-tailwind/react";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import {
  filterProduct,
  filterGender,
  filterByColor,
  filterBySize,
  sortByPrice,
} from "../features/slices/productsSlice";
import ErrorComponent from "./ErrorComponent";

const FilterProducts = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top when this component is mounted
  }, []);
  const products = useSelector((state) => state.products.filteredProducts);
  const error = useSelector((state) => state.products.error);
  const { type } = useParams();
  // Gender Filter Buttons
  const genderButtons = ["male", "female"];
  const colorButtons = [
    "red",
    "green",
    "purple",
    "yellow",
    "orange",
    "blue",
    "black",
    "brown",
  ];
  const sizeButtons = ["S", "M", "L", "XL"];
  const dispatch = useDispatch();
  return (
    <div className="pt-16 px-4">
      <div className="pl-4 sm:pl-14">
        <h1 className="text-3xl sm:text-4xl font-inter text-gray-600 font-bold tracking-normal capitalize">
          {type}
        </h1>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between pt-8 gap-4">
          <div className="flex flex-wrap gap-2">
            {genderButtons.map((item, index) => {
              return (
                <div key={index}>
                  <Button
                    color="gray"
                    size="sm md:lg"
                    ripple={true}
                    className="text-black bg-white hover:bg-blue-gray-300 duration-300 ease-in-out mr-4 "
                    onClick={() => dispatch(filterGender(item))}
                  >
                    {item}
                  </Button>
                </div>
              );
            })}
            <Button
              color="gray"
              size="sm md:lg"
              ripple={true}
              className="text-black bg-white hover:bg-blue-gray-300 duration-300 ease-in-out mr-4 "
              onClick={() => dispatch(sortByPrice())}
            >
              High Price
            </Button>
            <Menu>
              <MenuHandler>
                <Button
                  color="gray"
                  size="sm md:lg"
                  ripple={true}
                  className="text-black bg-white hover:bg-blue-gray-300 duration-300 ease-in-out mr-4 "
                >
                  Select a Color
                </Button>
              </MenuHandler>
              <MenuList>
                {colorButtons.map((item, index) => {
                  return (
                    <MenuItem
                      style={{ color: item }}
                      key={index}
                      onClick={() => dispatch(filterByColor(item))}
                    >
                      {item}
                    </MenuItem>
                  );
                })}
              </MenuList>
            </Menu>
            {/* <Menu>
              <MenuHandler>
                <Button
                  disabled={type === "Bags" || type === "Shoes"}
                  color="gray"
                  size="lg"
                  ripple={true}
                  className="text-black bg-white hover:bg-blue-gray-300 duration-300 ease-in-out mr-4 "
                >
                  Select a Size
                </Button>
              </MenuHandler>
              <MenuList>
                {sizeButtons.map((item, index) => {
                  return (
                    <MenuItem
                      key={index}
                      onClick={() => dispatch(filterBySize(item))}
                    >
                      {item}
                    </MenuItem>
                  );
                })}
              </MenuList>
            </Menu> */}
          </div>
          <div>
            <Button
              color="gray"
              size="sm md:lg"
              ripple={true}
              className="text-black bg-white hover:bg-blue-gray-300 duration-300 ease-in-out mr-4 "
              onClick={() => dispatch(filterProduct(type))}
            >
              Clear Filter
            </Button>
          </div>
        </div>
      </div>
      {error ? (
        <ErrorComponent />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-8">
          {products
            ?.filter((product) => product.type === type)
            .map((product, index) => (
              <ProductCard
                key={index}
                id={product.id}
                name={product.name}
                text={product.text}
                img={product.img}
                price={product.price}
                colors={product.color}
              />
            ))}
        </div>
      )}
    </div>
  );
};

export default FilterProducts;
