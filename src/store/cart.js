import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        products: [],
        isCartOpen: false,
    },
    reducers: {
        addToCart: (state, action) => {
            const existingProduct = state.products.find(product => product.name === action.payload.name);
            if(existingProduct){
                existingProduct.quantity += action.payload.quantity;
            }else{
                state.products.push(action.payload);
            }
        },
        removeFromCart: (state, action) => {
            state.products = state.products.filter(product => product.id !== action.payload.id);
        },
        toggleCart: (state) => {
            state.isCartOpen ? state.isCartOpen = false : state.isCartOpen = true;
        }
    }
});

export const { addToCart, removeFromCart, toggleCart } = cartSlice.actions; 
export default cartSlice.reducer