import { Link } from 'react-router-dom';

function NavLink(props){
    return (
        <>
            <Link to={props.to} className="group relative text-(--color-neutral-dark-grayish-blue) hover:text-(--color-neutral-very-dark-blue) text-[16px] font-semibold lg:py-12 py-4">
                {props.children}
                <div className="w-16 h-1 bg-(--color-primary-dark) absolute bottom-0 left-1/2 -translate-x-1/2 scale-x-0 group-hover:scale-x-100 group-hover:opacity-100 transition-scale duration-150"></div>
            </Link>
        </>
    )
}

export default NavLink;