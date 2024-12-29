import React from "react";
import { useAppDispatch, useAppSelector } from "../store";
import { increment, decrement } from "../features/cartItemSlice";

const RemoteButton = React.lazy(() => import("remoteApp/Button"));

const CartCount = () => {
  const cartCount = useAppSelector((state) => state.cartItemCount.count);
  const dispatch = useAppDispatch();
  return (
    <div className="container card">
      <div className="d-flex">
        <div className="flex-grow">Name: Host Application</div>
        <div>{`Item Count : ${cartCount}`}</div>
      </div>
      <RemoteButton
        label="Add to cart"
        onClick={() => {
          dispatch(increment());
        }}
      />
      <RemoteButton
        label="Remove from cart"
        onClick={() => {
          dispatch(decrement());
        }}
      />
    </div>
  );
};

export default CartCount;
