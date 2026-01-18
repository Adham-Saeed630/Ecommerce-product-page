import { configureStore } from '@reduxjs/toolkit';
import lightboxReducer from './lightbox';
import cartSliceReducer from './cart';

const store = configureStore({
    reducer: {
        lightbox: lightboxReducer,
        cart: cartSliceReducer,
    },
})

export default store;