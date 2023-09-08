import React from "react";
import { addToCart } from "./utils/AppSlice";
import { useDispatch } from "react-redux";
function Search() {
  const dispatch = useDispatch();

  const addToCartHandler = (item) => {
    dispatch(addToCart(item));
  };
  const item = {
    name: 'pizza',
    price: '$20'
  }
  return (
    <div className="search">
      <div className="search-container">
        <div className="search-input">
          <input type="text" placeholder="Search" />
          <button onClick={() => {addToCartHandler(item)}}></button>
        </div>
      </div>
    </div>
  );
}

export default Search;
