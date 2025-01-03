import React from "react";
import {
  nextSlide,
  prevSlide,
  dotSlides,
} from "../features/slices/sliderSlice";
import { useSelector, useDispatch } from "react-redux";
import { sliderData } from "../assets/data/dummyData";

const Slider = () => {
  const slideIndex = useSelector((state) => state.slider.value);
  const dispatch = useDispatch();

  return (
    <div className="relative pb-4 overflow-hidden">
      {/* Slider Container */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${slideIndex * 100}%)` }}
      >
        {sliderData.map((item) => (
          <div key={item.id} className="w-full flex-shrink-0">
            <img
              className="w-full h-[400px] sm:h-[600px] md:h-[700px] lg:h-[850px] object-cover"
              src={item.img}
              alt="shoes"
            />
          </div>
        ))}
      </div>

      {/* Slider Text */}
      <div className="absolute top-16 sm:top-24 md:top-32 mx-auto inset-x-4 sm:inset-x-1/4 text-center">
        <p className="text-white text-xl sm:text-2xl md:text-4xl font-inter font-bold tracking-normal leading-none">
          {sliderData[slideIndex]?.text}
        </p>
      </div>

      {/* Dots beneath images */}
      <div className="flex justify-center absolute bottom-6 sm:bottom-8 w-full">
        {sliderData.map((dot, index) => (
          <div className="mr-2 sm:mr-4" key={dot.id}>
            <div
              className={`cursor-pointer rounded-full ${
                index === slideIndex
                  ? "bg-green-300 p-2 sm:p-4"
                  : "bg-gray-500 p-2 sm:p-4"
              }`}
              onClick={() => dispatch(dotSlides(index))}
            ></div>
          </div>
        ))}
      </div>

      {/* Buttons for slider */}
      <button
        className="absolute top-1/2 right-2 sm:right-4 transform -translate-y-1/2 bg-white p-1 sm:p-2 rounded-full hover:bg-green-300"
        onClick={() => dispatch(nextSlide(slideIndex + 1))}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m8.25 4.5 7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>
      <button
        className="absolute top-1/2 left-2 sm:left-4 transform -translate-y-1/2 bg-white p-1 sm:p-2 rounded-full hover:bg-green-300"
        onClick={() => dispatch(prevSlide(slideIndex - 1))}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5 8.25 12l7.5-7.5"
          />
        </svg>
      </button>
    </div>
  );
};

export default Slider;
