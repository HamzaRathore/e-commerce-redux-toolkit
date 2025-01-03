import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
} from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/slices/cartSlice";

const ProductSectionItem = ({
  id,
  img,
  name,
  text,
  color,
  size,
  totalPrice,
  price,
}) => {
  const dispatch = useDispatch();

  const defaultSize = size[0];
  const defaultColor = color[0]; 
  return (
    <div className="w-full max-w-sm">
      <Card className="w-full">
        <CardHeader floated={false} className="h-80">
          <img
            src={img}
            alt={name}
            className="h-full w-full object-cover hover:scale-105 hover:duration-200 hover:ease-in-out"
          />
        </CardHeader>
        <CardBody className="text-center">
          <Typography variant="h4" color="blue-gray" className="mb-2">
            {name}
          </Typography>

          <Typography color="blue-gray" className="font-medium" textGradient>
            {text}
          </Typography>
          <div className="flex flex-col sm:flex-row justify-between items-center pt-4 space-y-2 sm:space-y-0">
            <Typography color="gray" className="font-medium">
              Size left: {defaultSize}
            </Typography>
            <Typography color="gray" className="font-medium">
              Color:
              <span
                className="px-2 py-1 rounded-full ml-2"
                style={{ backgroundColor: defaultColor }}
              ></span>
            </Typography>
          </div>
        </CardBody>
        <CardFooter className="flex justify-center pt-4">
          <Tooltip content="Add to cart" placement="bottom">
            <Button
              className="hover:scale-105 hover:duration-300"
              onClick={() =>
                dispatch(
                  addToCart({
                    id,
                    img,
                    text,
                    amount: 1,
                    price,
                    totalPrice,
                    name,
                    size: defaultSize,
                    color: defaultColor,
                  })
                )
              }
              size="lg"
              color="gray"
              ripple={true}
            >
              Add To Cart
            </Button>
          </Tooltip>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ProductSectionItem;
