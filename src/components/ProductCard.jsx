import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";

import { useDispatch } from "react-redux";
import {singleProduct} from '../features/slices/productsSlice'
import { Link, useParams } from 'react-router-dom';

const ProductCard = ({ id, name, text, img, price, colors }) => {

    const dispatch=useDispatch();
    const {type} = useParams();

  return (
    <Link to={`/filterProducts/${type}/` + id} >
    <Card className="w-full sm:w-auto" onClick={()=>useDispatch(singleProduct(id))}>
      <CardHeader className="relative h-64 my-8 md:h-96">
        <img
          src={img}
          alt={name}
          className="w-full h-full rounded-lg hover:scale-105 hover:cursor-pointer"
        />
      </CardHeader>
      <CardBody>
        <Typography
          variant="h5"
          color="blue-gray"
          className="mb-2 text-base sm:text-lg font-semibold"
        >
          {name}
        </Typography>
        <Typography className="text-sm sm:text-base text-gray-700">
          {text}
        </Typography>
      </CardBody>
      <CardFooter divider className="flex items-center justify-between py-3">
        <Typography variant="small" className="font-bold text-sm sm:text-base">
          {price}$
        </Typography>
        <div className="flex gap-1">
          {colors?.map((color, index) => (
            <span
              className="h-4 w-4 rounded-full border border-gray-300"
              key={index}
              style={{ backgroundColor: color }}
            ></span>
          ))}
        </div>
      </CardFooter>
    </Card>
    </Link>
  );
};

export default ProductCard;
