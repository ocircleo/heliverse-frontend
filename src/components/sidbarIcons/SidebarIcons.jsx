

import { NavLink } from 'react-router-dom';

const SidebarIcons = ({ data, nav = false, setNav = false }) => {
    const { path, title } = data
    const navToggle = () => {
        if (nav == false) return;
        setNav(!nav)
    }
    return (
        <NavLink onClick={navToggle} to={path} className={({ isActive, isPending }) => isActive ? "capitalize text-lg font-semibold   py-2 bg-gray-800/90 rounded text-indigo-400" : isPending ? "capitalize text-lg font-semibold  py-2 bg-gray-200/90 rounded text-indigo-400" : "capitalize text-lg font-semibold py-2 bg-gray-200/90 rounded text-black hover:bg-gray-500/90"}>
            {
                title
            }
        </NavLink>
    );
};

export default SidebarIcons;