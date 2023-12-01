
import { NavLink } from 'react-router-dom';

const NavbarLinks = ({ data }) => {
    const { path, title } = data

    return (
        <NavLink to={path} className={({ isActive, isPending }) => isActive ? "capitalize  sm:font-semibold text-indigo-400" : isPending ? "capitalize  sm:font-semibold text-black " : "capitalize  sm:font-semibold text-black"}>
            {
                title
            }
        </NavLink>
    );
};

export default NavbarLinks;