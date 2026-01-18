import { createSlice } from '@reduxjs/toolkit';

const lightboxSlice = createSlice({
    name: "lightbox",
    initialState: {
        isOpen: false,
        activeImage: {
            src: "../Image/assets/image-product-1.jpg",
            index: 0,
        },
        images:[
            {
                mainImage: "../Image/image-product-1.jpg",
                thumbnail: "../Image/image-product-1-thumbnail.jpg"
            },
            {
                mainImage: "../Image/image-product-2.jpg",
                thumbnail: "../Image/image-product-2-thumbnail.jpg"
            },
            {
                mainImage: "../Image/image-product-3.jpg",
                thumbnail: "../Image/image-product-3-thumbnail.jpg"
            },
            {
                mainImage: "../Image/image-product-4.jpg",
                thumbnail: "../Image/image-product-4-thumbnail.jpg"
            },
        ]
    },
    reducers: {
        openLightbox: (state) => {
            state.isOpen = true;
        },
        closeLightbox: (state) => {
            state.isOpen = false;
        },
        changeActiveImage: (state, action) => {
            const { src, index } = action.payload;
            state.activeImage.src = src;
            state.activeImage.index = index;
        },
        toNextImg: (state) => {
            state.activeImage.index === 3 ? state.activeImage.index = 0 : state.activeImage.index += 1;
            state.activeImage.src = state.images[state.activeImage.index].mainImage
        },
        toPrevImg: (state) => {
            state.activeImage.index === 0 ? state.activeImage.index = 3 : state.activeImage.index -= 1;
            state.activeImage.src = state.images[state.activeImage.index].mainImage;
        }
    }
});

export const { openLightbox, closeLightbox, changeActiveImage, toNextImg, toPrevImg } = lightboxSlice.actions;
export default lightboxSlice.reducer;