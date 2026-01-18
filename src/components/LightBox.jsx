import { useDispatch } from 'react-redux';
import { closeLightbox } from '../store/lightbox';
import ImageGallery from './ImageGallery';
import Thumbnails from './Thumbnails';
import IconClose from '../assets/Image/icon-close.svg';

function Lightbox() {

    const dispatch = useDispatch();
    return(
        <div className="absolute bg-black/75 w-full h-full flex flex-col justify-center items-center z-5 select-none">
            <div className="flex flex-col items-end gap-5">
                <div className="cursor-pointer" onClick={() => dispatch(closeLightbox())}>
                    <img src={IconClose} alt="close" />
                </div>
                <ImageGallery />
                <Thumbnails/>
            </div>
        </div>
    )
}

export default Lightbox;