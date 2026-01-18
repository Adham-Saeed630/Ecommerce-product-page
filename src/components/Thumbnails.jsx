import { useDispatch, useSelector } from 'react-redux';
import { openLightbox, changeActiveImage } from '../store/lightbox';

function Thumbnails(){

    const dispatch = useDispatch();
    const activeImageIndex = useSelector(state => state.lightbox.activeImage.index);
    const images = useSelector(state => state.lightbox.images);

    return (
        <div className={`flex justify-around w-full`}>
            {images.map((image, index)=>{
                return(
                    <div className={`w-20 cursor-pointer border-2 border-transparent hover:border-(--color-primary-dark) hover:border-2 ${index === activeImageIndex && 'border-2 border-(--color-primary-dark)'} rounded-xl`} key={index} onClick={() => dispatch(changeActiveImage({src: image.mainImage, index: index}))} >
                        <img src={image.thumbnail} alt="Product Image 1" className="rounded-lg hover:opacity-50 transition-opacity duration-250" onClick={() => dispatch(openLightbox())}/>
                    </div>
                )
            })}
        </div>
    )
}

export default Thumbnails