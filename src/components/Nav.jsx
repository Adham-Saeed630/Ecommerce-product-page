import { useState } from 'react';
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toggleCart } from '../store/cart';
import NavLink from "./NavLink";
import Cart from './cart';


function Nav(){

    const cartItemCount = useSelector(state => state.cart.products.length);
    const isCartOpen = useSelector(state => state.cart.isCartOpen);
    
    const dispatch = useDispatch();

    const [isNavOpen, setIsNavOpen] = useState(false);

    const handleToggleNav = () => {
        isNavOpen ? setIsNavOpen(false) : setIsNavOpen(true);
        console.log(isNavOpen)
    }

    return (
        <nav className="w-full flex justify-between items-center px-6 lg:py-0 py-5 border-b border-(--color-neutral-grayish-blue) select-none relative">
            {isNavOpen && <div className="fixed inset-0 bg-black opacity-50 z-3"></div>}
            <div className="flex lg:gap-16 items-center gap-6">
                <img src="../Image/assets/icon-menu.svg" alt="Menu" className={`w-5 lg:hidden cursor-pointer`} onClick={() => handleToggleNav()} />
                <Link to="/">
                    <img src="../Image/assets/logo.svg" alt="Logo" />
                </Link>
                <ul className={`flex flex-col lg:gap-10 absolute lg:flex-row lg:relative top-0 left-0 lg:px-0 pl-10 pr-40 lg:h-fit h-screen lg:py-0 py-10 bg-white transform ${isNavOpen ? " " : "-translate-x-full"} lg:translate-x-0 transition-transform duration-300 ease-in-out z-4`}>
                    <img src="../Image/assets/icon-close.svg" alt="Close" className="w-5 pb-10 lg:hidden cursor-pointer" onClick={() => handleToggleNav()} />
                    <NavLink to="/collections">Collections</NavLink>
                    <NavLink to="/men">Men</NavLink>
                    <NavLink to="/women">Women</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                </ul>
            </div>
            <div className="flex items-center lg:gap-12 gap-8">
                <div className="relative" onClick={() => dispatch(toggleCart())}>
                    {cartItemCount > 0 && <span className="absolute py-.5 px-1 bg-(--color-primary-dark) text-white rounded-full -top-3 -right-2">{cartItemCount}</span>}
                    <img src="../Image/assets/icon-cart.svg" alt="cart" className="cursor-pointer" />
                </div>
                <img src="../Image/assets/image-avatar.png" alt="avatar" className="w-12 cursor-pointer hover:border-3 hover:border-(--color-primary-dark) rounded-full"/>
            </div>
            {isCartOpen && <Cart/>}
        </nav>
    )
}

export default Nav;
