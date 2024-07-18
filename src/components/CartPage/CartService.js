import { useContext } from 'react';
import { CartContext } from './CartContext';

const useCartService = () => {
  const { cart, addToCart, removeFromCart, updateQuantity, clearCart } = useContext(CartContext);

  const addItemToCart = (product) => {
    addToCart(product);
  };

  const removeItemFromCart = (productId) => {
    removeFromCart(productId);
  };

  const updateItemQuantity = (productId, newQuantity) => {
    updateQuantity(productId, newQuantity);
  };

  const clearAllCartItems = () => {
    clearCart();
  };

  return {
    cart,
    addItemToCart,
    removeItemFromCart,
    updateItemQuantity,
    clearAllCartItems,
  };
};

export default useCartService;
