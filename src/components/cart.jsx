import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../store/cart'

function Cart(){

    const dispatch = useDispatch();
    const cartProducts = useSelector(state => state.cart.products);


    return(
        <div className={`absolute -bottom-60 left-1/2 transform -translate-x-1/2 lg:top-20 lg:left-auto lg:-right-30 min-w-90 flex flex-col shadow-md rounded-md bg-white z-2`}>
            <span className="font-bold text-xl p-5">Cart</span>
            <hr />
            <div className="flex flex-col p-5 gap-5">
                {cartProducts.length === 0 ? <span className="font-bold text-(--color-neutral-grayish-blue) sm:px-25 sm:py-15 px-15 pt-10 ">Your Cart Is Empty</span> : cartProducts.map(product => {
                    return(
                        <div className="flex gap-5 justify-center text-(--color-neutral-grayish-blue)" key={product.id}>
                            <div><img className="w-20 rounded-sm" src={product.thumbnail} alt="Product Image" /></div>
                            <div className="flex flex-col gap-2 justify-center">
                                <span>{product.name}</span>
                                <div className="flex gap-2">
                                    <span>{`$${product.price} x ${product.quantity}`}</span>
                                    <span className="font-bold text-black">{`$${product.totalPrice}`}</span>
                                </div>
                            </div>
                            <div className="flex flex-col justify-center cursor-pointer" onClick={() => dispatch(removeFromCart(product))} >
                                <img className="h-fit" src="../Image/assets/icon-delete.svg" alt="Delete Product" />
                            </div>
                        </div>
                    )
                })}
                {cartProducts.length !==0 && <button className="bg-(--color-primary-dark) text-black font-bold cursor-pointer rounded-xl py-2.5 w-full">Checkout</button>}
            </div>
        </div>
    )
}

export default Cart