import { useState } from "react";
import { useDispatch,useSelector } from 'react-redux';
import { addToCart } from '../store/cart';

function DetailsSection(){

    const [ quantity, setQuantity ] = useState(0);

    const dispatch = useDispatch();
    const cartProducts = useSelector(state => state.cart.products);

    const product = {
        name: "Full Limited Edition Sneakers",
        id: 1,
        quantity: quantity,
        price: 125.00,
        totalPrice: (125.00 * quantity).toFixed(2),
        thumbnail: "../src/assets/image-product-1-thumbnail.jpg",
    }

    return (
        <div className="flex flex-col gap-10 min-w-100 max-w-175 p-10 lg:p-0">
            <div className="flex flex-col gap-6">
                <span className="text-(--color-neutral-grayish-blue) text-lg font-semibold">SNEAKER COMPANY</span>
                <span className="text-(--color-neutral-very-dark-blue) text-5xl font-bold max-w-160">Full Limited Edition Sneakers</span>
            </div>
            <div className="flex flex-col gap-6">
                <span className="text-(--color-neutral-grayish-blue) text-lg lg:max-w-100">
                    These low-profile sneakers are your perfect casual wear companion. Featuring a 
                    durable rubber outer sole, they’ll withstand everything the weather can offer.
                </span>
                <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-6">
                        <span className="text-(--color-neutral-very-dark-blue) text-4xl font-bold">$ 125.00</span>
                        <span className="bg-(--color-neutral-very-dark-blue) text-(--color-neutral-light-grayish-blue) px-2 py-1 rounded-md">50%</span>
                    </div>
                    <div className="text-(--color-neutral-grayish-blue) line-through">$ 250.00</div>
                </div>
            </div>
            <div className="flex flex-1 lg:flex-row flex-col items-center gap-4 text-(--color-neutral-very-dark-blue) font-bold select-none">
                <div className="flex flex-1 items-center bg-(--color-neutral-light-grayish-blue) py-2 rounded-lg justify-around w-full lg:max-w-75">
                    <button className="flex items-center cursor-pointer px-6 h-full" onClick={() => setQuantity(quantity > 0 ? quantity - 1 : 0)}>
                        <img src="../src/assets/icon-minus.svg" alt="minus" />
                    </button>
                    <span className="px-4">{quantity}</span>
                    <button className="flex items-center cursor-pointer px-6 h-full" onClick={() => setQuantity(quantity + 1)}>
                        <img src="../src/assets/icon-plus.svg" alt="plus" />
                    </button>
                </div>
                <button className="flex-1 flex justify-center items-center gap-4 py-4 cursor-pointer bg-(--color-primary-dark) rounded-lg hover:bg-(--color-primary) transition-bg duration-150 w-full lg:max-w-75" onClick={() => {quantity > 0 && dispatch(addToCart(product)); console.log(cartProducts)}}>
                    <img src="../src/assets/icon-cart.svg" alt="Add to cart" className="text-(--color-neutral-very-dark-blue)" />
                    <span>Add to cart</span>
                </button>
            </div>
        </div>
    )
}

export default DetailsSection;