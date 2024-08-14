"use client";
import React, { createContext, useState, ReactNode, FC } from "react";
import { CartItem } from "../shared/types"; // Assuming this type includes Product and GiftCard

interface CartContextProps {
  cartItems: CartItem[];
  totalPrice: number;
  totalQuantity: number;
  addItem: (item: CartItem) => void;
  toggleCartItemQty: (id: string, action: "increase" | "decrease") => void;
  onRemove: (id: string) => void;
  emptyCart: () => void;
  showCart: boolean;
  setShowCart: React.Dispatch<React.SetStateAction<boolean>>;
  qty: number;
  setQty: (qty: number) => void;
  incQty: () => void;
  decQty: () => void;
}

export const CartContext = createContext<CartContextProps | undefined>(
  undefined
);

export const CartProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [showCart, setShowCart] = useState<boolean>(false);
  const [qty, setQty] = useState<number>(1);

  const totalQuantity = cartItems.reduce(
    (sum, item) => sum + (item.quantity || 0),
    0
  );
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0
  );

  const addItem = (item: CartItem) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((i) => i._id === item._id);
      if (existingItem) {
        return prevItems.map((i) =>
          i._id === item._id
            ? { ...i, quantity: (i.quantity || 0) + (item.quantity || 1) }
            : i
        );
      } else {
        return [...prevItems, item];
      }
    });
  };

  const toggleCartItemQty = (id: string, action: "increase" | "decrease") => {
    setCartItems((prevItems) =>
      prevItems
        .map((i) =>
          i._id === id
            ? {
                ...i,
                quantity:
                  action === "increase"
                    ? (i.quantity || 0) + 1
                    : Math.max((i.quantity || 0) - 1, 1),
              }
            : i
        )
        .filter((i) => i.quantity && i.quantity > 0)
    );
  };

  const onRemove = (id: string) => {
    setCartItems((prevItems) => prevItems.filter((i) => i._id !== id));
  };

  const emptyCart = () => {
    setCartItems([]);
  };

  const incQty = () => setQty((prevQty) => prevQty + 1);
  const decQty = () => setQty((prevQty) => (prevQty > 1 ? prevQty - 1 : 1));

  return (
    <CartContext.Provider
      value={{
        cartItems,
        totalPrice,
        totalQuantity,
        addItem,
        toggleCartItemQty,
        onRemove,
        emptyCart,
        showCart,
        setShowCart,
        qty,
        setQty,
        incQty,
        decQty,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
