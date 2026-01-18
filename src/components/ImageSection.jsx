import Thumbnails from './Thumbnails';
import ImageGallery from './ImageGallery';

function ImageSection(){
    return(
        <>
            <div className="lg:flex flex-col gap-8 min-w-100 select-none hidden">
                <div>
                    <img src="../src/assets/image-product-1.jpg" alt="Product Image" className="w-100 rounded-xl" />
                </div>
                <Thumbnails justify="between"/>
            </div>
            <ImageGallery className="lg:hidden"/>
        </>
    )
}

export default ImageSection;