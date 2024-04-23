//create a slice
//create reducers
//export reducer and reducers
const { createSlice } = require("@reduxjs/toolkit");

const initialState = JSON.parse(localStorage.getItem('cart')) || []
const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
      addToCart: (state, action) => {
        const { id, title, discount, imageUrl } = action.payload;
        // Check if the item already exists in the cart
        const existingItem = state.find((item) => item.id === id);
  
        if (existingItem) {
          // If the item exists, update the quantity
          existingItem.qty += 1;
        } else {
          // If the item doesn't exist, add it to the cart
          const newItem = { id, title, discount, qty: 1, imageUrl };
          state.push(newItem);
          // Update localStorage with the new state
          localStorage.setItem("cart", JSON.stringify([...state]));
        }
      },
      removeFromCart: (state, action) => {
        const cartId = action.payload;
        const newState = state.filter((item) => item.id !== cartId);
        // Update localStorage with the new state
        localStorage.setItem("cart", JSON.stringify(newState));
        return newState;
      },
      incrementQty: (state, action) => {
        const cartId = action.payload;
        const cartItem = state.find((item) => item.id === cartId);
        if (cartItem) {
          cartItem.qty += 1;
          // Update localStorage with the new state
          localStorage.setItem("cart", JSON.stringify([...state]));
        }
      },
      decrementQty: (state, action) => {
        const cartId = action.payload;
        const cartItem = state.find((item) => item.id === cartId);
        if (cartItem && cartItem.qty > 1) {
          cartItem.qty -= 1;
          // Update localStorage with the new state
          localStorage.setItem("cart", JSON.stringify([...state]));
        }
      },
    },
  });

export const {addToCart, removeFromCart,incrementQty, decrementQty} = cartSlice.actions;
export default cartSlice.reducer;