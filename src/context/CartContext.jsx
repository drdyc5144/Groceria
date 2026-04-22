import { createContext, useReducer } from "react";

export const CartContext = createContext(null);

const initialCartState = [];

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const existingInCart = state.findIndex(
        (item) => item.id === action.payload.id,
      );
      if (existingInCart === -1) {
        const newItem = { ...action.payload, quantity: 1 };
        return [...state, newItem];
      } else {
        const updatedCart = state[existingInCart];
        updatedCart.quantity += 1;

        return [...state];
      }
    }

    case "REMOVE_FROM_CART": {
      const updatedCart = state.filter((item) => item.id !== action.payload);
      return updatedCart;
    }
    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialCartState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
