import {useEffect} from "react";
import { Button } from "@material-tailwind/react";
import clothes from "../assets/images/clothes.jpg";
import { filterProduct } from "../features/slices/productsSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const NavigateButtons = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top when this component is mounted
  }, []);
  const buttons = [
    "Hoodies",
    "Dresses",
    "Suits",
    "Shoes",
    "T-Shirts",
    "Jeans",
    "Jackets",
    "Bags",
  ];

  const dispatch = useDispatch();
  return (
    <div>
      {/* Buttons Section */}
      <div className="flex flex-wrap items-center justify-center gap-4 py-8 px-4">
        {buttons.map((button, index) => (
          <Link to={`/filterProducts/${button}`} key={index}>
            <Button
              onClick={() => dispatch(filterProduct(button))}
              size="lg"
              color="gray"
              ripple={true}
              className="hover:bg-blue-gray-400 duration-300 ease-in-out bg-white border-gray-400 border-2 text-gray-700 hover:text-white"
            >
              {button}
            </Button>
          </Link>
        ))}
      </div>

      {/* Sales Section */}
      <div className="bg-green-300 p-2 w-[90%] md:w-[70%] lg:w-[55%] mx-auto rounded-md">
        <h3 className="font-inter text-orange-900 text-center text-lg md:text-xl font-bold tracking-normal leading-none">
          SALES UPTO 50%
        </h3>
      </div>

      {/* Image Section */}
      <div className="flex justify-center items-center py-4 px-4">
        <img
          className="h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] w-full sm:w-[90%] md:w-[80%] lg:w-[70%] rounded-md shadow-lg shadow-gray-600 object-cover"
          src={clothes}
          alt="clothes"
        />
      </div>
    </div>
  );
};

export default NavigateButtons;
