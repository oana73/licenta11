//create a slice
//create reducers
//export reducer and reducers
const { createSlice } = require("@reduxjs/toolkit");

const initialState = []
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
              state.push({ id, title, discount, qty: 1, imageUrl });
            }
          },
        removeFromCart: (state, action) =>{
            
        },
        incrementQty: (state, action) =>{
            
        },
        decrementQty: (state, action) =>{
            
        },
    }
})

export const {addToCart, removeFromCart,incrementQty, decrementQty} = cartSlice.actions;
export default cartSlice.reducer;