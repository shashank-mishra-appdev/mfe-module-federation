import React from "react";
import { useAppDispatch, useAppSelector } from "../store";
import { increment } from "../features/cartItemSlice";

const RemoteButton = React.lazy(() => import("remoteApp/Button"));

const CartCount = () => {
  const cartCount = useAppSelector((state) => state.cartItemCount);
  const dispatch = useAppDispatch();
  return (
    <div className="container card">
      <div className="d-flex">
        <div className="flex-grow">Name: Host Application</div>
        <div>{`Item Count : ${cartCount}`}</div>
      </div>
      <RemoteButton
        label="Add To Cart"
        onClick={() => {
          dispatch(increment());
        }}
      />
    </div>
  );
};

export default CartCount;
