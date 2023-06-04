import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name:"cart",
    initialState:{
        cart:[]
    },
    reducers:{

        // Add to Cart 
        addToCart:(state,action)=>{
            const isPresent = state.cart.find(item=>item.id === action.payload.id);
            if(isPresent){
                isPresent.quantity++;
            }else{
                state.cart.push({...action.payload,quantity:1})
            }
        },
        //remove from cart
        removeFromCart:(state,action)=>{
            const removeItem = state.cart.filter(item=>item.id==action.payload.id);
            state.cart = removeItem;
        },

        //increase the cart quantity
        incrementQuantity:(state,action)=>{
            const isPresent = state.cart.find(item=>item.id === action.payload.id);
            isPresent.quantity++
        },

        //decrease the cart quantity
        decrementQuatity:(state,action)=>{
            const isPresent = state.cart.find(item=>item.id === action.payload.id);
            if(isPresent.quantity ===1){
                const removeItem = state.cart.filter(item=>item.id!==action.payload.id);
                state.cart = removeItem;
            }else{
                isPresent.quantity--;
            }
        },
        // Clear the cart
        clearCart:(state,action)=>{
            state.cart = []

        }
    }
})


export const {addToCart,removeFromCart,clearCart,incrementQuantity,decrementQuatity}= cartSlice.actions;

export default cartSlice.reducer