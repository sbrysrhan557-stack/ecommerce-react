import React from "react";
import { FaStar, FaCartArrowDown, FaRegHeart, FaInfo } from "react-icons/fa6";
import { Link } from "react-router";

function Product({ item }) {
  return (
    <div className="product">
      <Link to={`/product/${item.id}`}>
        <div className="img-product px-5">
          <img
            src={item.images[0]}
            className="w-full h-full object-cover"
            alt=""
          />
        </div>
        <div className="info-product mt-4">
          <h4 className="product-name text-lg font-bold">{item.title}</h4>
          <div className="stars py-2 flex text-xl gap-1 text-yellow-400">
            <FaStar /> {item.rating}
          </div>
          <p className="price-product text-lg font-bold text-(--main-color)">
            $ {item.price}
          </p>

          <div className="icon">
            <span>
              <FaCartArrowDown />
            </span>
            <span>
              <FaRegHeart />
            </span>
            <span>
              <FaInfo />
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Product;
