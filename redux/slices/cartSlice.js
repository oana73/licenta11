//create a slice
//create reducers
//export reducer and reducers
const { createSlice } = require("@reduxjs/toolkit");

const initialState = [{
    id:1,
    title: "product1s"
}]
const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        addToCart: (state, action) =>{

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