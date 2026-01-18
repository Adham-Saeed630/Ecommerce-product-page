import { useDispatch, useSelector } from 'react-redux';
import { toNextImg, toPrevImg } from '../store/lightbox';

function ImageGallery(props){
    const dispatch = useDispatch();
    const activeImage = useSelector(state => state.lightbox.activeImage);

    return(
        <div className={`relative select-none ${props.className}`}>
            <span className="absolute right-0 top-1/2 -translate-y-1/2 lg:translate-x-1/2 -translate-x-1/2 rounded-full bg-(--color-neutral-light-grayish-blue) p-5 cursor-pointer" onClick={() => dispatch(toNextImg())}>
                <img src="../Image/assets/icon-next.svg" alt="next" />
            </span>
            <img src={activeImage.src} alt="Product Image" className="w-full lg:max-w-125 lg:rounded-xl" />
            <span className="absolute left-0 top-1/2 -translate-y-1/2 lg:-translate-x-1/2 translate-x-1/2 rounded-full bg-(--color-neutral-light-grayish-blue) p-5 cursor-pointer" onClick={() => dispatch(toPrevImg())}>
                <img src="../Image/assets/icon-previous.svg" alt="previous" />
            </span>
        </div>
    )
}

export default ImageGallery