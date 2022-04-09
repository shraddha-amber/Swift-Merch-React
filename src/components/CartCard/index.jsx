import "./style.css";
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";
import { useAuth, useData } from "../../context";
import {
  changeCartQuantity,
  deleteFromCart,
  addToCart,
} from "../../utils/services";
import { useWishlist } from "../../hooks";
import { actionType } from "../../constants";

const CartCard = ({ product }) => {
  const { img, name, album, price, mrp, qty } = product;
  const {
    authState: { token },
  } = useAuth();
  const { dataDispatch } = useData();
  const { inWishlist } = useWishlist({ product });

  const [disableWishlist, setDisableWishlist] = useState(false);
  const [disableCartDelete, setDisableCartDelete] = useState(false);
  const { INCREMENT, DECREMENT } = actionType.DATA;

  useEffect(() => {
    return () => {
      setDisableCartDelete(false);
      setDisableWishlist(false);
    };
  });

  const handleCartItemDeleteClick = async () => {
    setDisableCartDelete(true);
    await deleteFromCart({ token, product, dataDispatch });
    setDisableCartDelete(false);
  };

  const handleMoveToWishlistClick = async () => {
    setDisableWishlist(true);
    await deleteFromCart({ token, product, dataDispatch });
    if (!inWishlist) await addToCart({ token, dataDispatch, product });
    setDisableWishlist(false);
  };

  return (
    <div className="card horizontal-card pos-rel">
      <div className="pos-rel flex-row align-center horizontal-card-img">
        <img src={img} alt="cd-img" className="card-img responsive-img" />
      </div>
      <button
        className="icon-btn product-remove-btn pos-abs"
        onClick={handleCartItemDeleteClick}
        disabled={disableCartDelete}
      >
        <FaTrash />
      </button>
      <div className="horizontal-card-text">
        <div className="m-0-25 mt-0-5">
          <h3 className="m-0-25">{name}</h3>
          <p className="sm-text mx-0-25">{album} Album</p>
          <h4 className="mx-0-25">
            Rs. {price}
            <span className="text-line-through text-light-weight mx-0-5">
              Rs. {mrp}
            </span>
            <span className="primary-text">66% Off </span>
          </h4>
          <div className="product-qty">
            {qty !== 1 ? (
              <button
                className="icon-btn quantity-btn"
                onClick={() =>
                  changeCartQuantity({
                    token,
                    product,
                    type: DECREMENT.toLowerCase(),
                    dataDispatch,
                  })
                }
              >
                <FaMinus />
              </button>
            ) : (
              <button
                className="icon-btn quantity-btn"
                onClick={handleCartItemDeleteClick}
              >
                <FaTrash />
              </button>
            )}
            <span className="product-qty-value"> {qty} </span>
            <button
              className="icon-btn quantity-btn"
              onClick={() =>
                changeCartQuantity({
                  token,
                  product,
                  type: INCREMENT.toLowerCase(),
                  dataDispatch,
                })
              }
            >
              <FaPlus />
            </button>
          </div>
        </div>
        <div className="flex-row">
          <button
            className="btn btn-outline-secondary m-0-5 w-100p"
            onClick={handleMoveToWishlistClick}
            disabled={disableWishlist}
          >
            Move To Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

CartCard.propTypes = {
  product: PropTypes.object,
};

export { CartCard };
