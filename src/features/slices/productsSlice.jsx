import { createSlice } from "@reduxjs/toolkit";
import { storeData } from "../../assets/data/dummyData";
export { storeData } from "../../assets/data/dummyData";
export const productsSlice = createSlice({
  name: "products",
  initialState: {
    filteredProducts:
      JSON.parse(sessionStorage.getItem("filteredData")) || storeData,
    singleProduct:
      JSON.parse(sessionStorage.getItem("singleProduct")) || storeData,
    error: false,
  },

  reducers: {
    filterProduct(state, action) {
      try {
        const filter = storeData.filter(
          (product) => product.type === action.payload
        );
        state.filteredProducts = filter;
        state.error=false;
        console.log("filter", filter);
        const saveState = JSON.stringify(filter);
        sessionStorage.setItem("filteredData", saveState);
      } catch (error) {
        return error;
      }
    },
    singleProduct(state, action) {
      try {
        const oneProduct = storeData.filter(
          (product) => product.id === action.payload
        );
        state.singleProduct = oneProduct;
        const saveState = JSON.stringify(oneProduct);
        sessionStorage.setItem("oneProduct", saveState);
      } catch (error) {
        return error;
      }
    },
    filterGender(state, action) {
      try {
        const gender = state.filteredProducts.filter(
          (product) => product.gender === action.payload
        );
        state.error = false;
        state.filteredProducts = gender;
        const oneGenderType = gender.length > 0;
        if (oneGenderType) {
          state.error = false;
          const saveState = JSON.stringify(gender);
          sessionStorage.setItem("filteredData", saveState);
        } else {
          state.error = true;
          state.filteredProducts = [];
        }
      } catch (error) {
        return error;
      }
    },
    sortByPrice(state, action) {
      try {
        const price = state.filteredProducts.sort((a, b) =>
          a.price > b.price ? -1 : 1
        );
        state.filteredProducts = price;
        let count = price.length;
        if (count > 1) {
          const notError = false;
          state.error = notError;
          if (!notError) {
            state.filteredProducts = price;
            const saveState = JSON.stringify(price);
            sessionStorage.setItem("filteredData", saveState);
          }
        } else {
          state.error = true;
          state.filteredProducts = [];
        }
      } catch (error) {
        return error;
      }
    },
    filterByColor(state, action) {
      try {
        const color = state.filteredProducts.filter((product) =>
          product.color.includes(action.payload)
        );
        state.error = false;
        state.filteredProducts = color;
        if (color.length <= 0) {
          state.error = true;
          state.filteredProducts = [];
        } else {
          state.error = false;
          state.filteredProducts = color;
          const saveState = JSON.stringify(color);
          sessionStorage.setItem("filteredData", saveState);
        }
      } catch (error) {
        return error;
      }
    },
    filterBySize(state, action) {
      try {
        const size = state.filteredProducts.filter(
          (product) => product.size === action.payload
        );
        
        // If no products match, set error and clear products
        if (size.length === 0) {
          state.error = true;
          state.filteredProducts = [];
        } else {
          state.error = false;
          state.filteredProducts = size;
    
          // Save filtered data to sessionStorage
          const saveState = JSON.stringify(size);
          sessionStorage.setItem("filteredData", saveState);
        }
      } catch (error) {
        console.error("Error filtering by size:", error);
        state.error = true; // Set an error flag if filtering fails
      }
    },
    
  },
});
export const {
  filterProduct,
  singleProduct,
  filterGender,
  sortByPrice,
  filterByColor,
  filterBySize,
} = productsSlice.actions;
export default productsSlice.reducer;
