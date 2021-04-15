import { createContext, useReducer } from "react";
import { Card } from "react-bootstrap";

export const CartContext = createContext();

const initialState = {
  carts: [],
};

const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "ADD_PRODUCT_TO_CART":
      const findProductByIdInCarts = state.carts.find(
        (cart) => cart.id === payload.product.id
      );

      if (findProductByIdInCarts) {
        const updatedCarts = state.carts.map((cart) =>
          cart.id === payload.product.id
            ? {
                ...cart,
                qty: cart.qty + 1,
              }
            : cart
        );

        return {
          ...state,
          carts: updatedCarts,
        };
      }

      return {
        ...state,
        carts: [
          ...state.carts,
          {
            ...payload.product,
            qty: 1,
          },
        ],
      };
    case "REMOVE_PRODUCT_FROM_CART":
      const filteredCarts = state.carts.filter(
        (cart) => cart.id !== payload.product.id
      );

      return {
        ...state,
        carts: filteredCarts,
      };

    default:
      throw new Error();
  }
};

export const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CartContext.Provider value={[state, dispatch]}>
      {children}
    </CartContext.Provider>
  );
};
