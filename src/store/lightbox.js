import { createSlice } from '@reduxjs/toolkit';
import img1 from '../assets/Image/image-product-1.jpg';
import img2 from '../assets/Image/image-product-2.jpg';
import img3 from '../assets/Image/image-product-3.jpg';
import img4 from '../assets/Image/image-product-4.jpg';
import thumb1 from '../assets/Image/image-product-1-thumbnail.jpg';
import thumb2 from '../assets/Image/image-product-2-thumbnail.jpg';
import thumb3 from '../assets/Image/image-product-3-thumbnail.jpg';
import thumb4 from '../assets/Image/image-product-4-thumbnail.jpg';

const lightboxSlice = createSlice({
    name: "lightbox",
    initialState: {
        isOpen: false,
        activeImage: {
            src: img1,
            index: 0,
        },
        images:[
            {
                mainImage: img1,
                thumbnail: thumb1
            },
            {
                mainImage: img2,
                thumbnail: thumb2
            },
            {
                mainImage: img3,
                thumbnail: thumb3
            },
            {
                mainImage: img4,
                thumbnail: thumb4
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