
import SidebarIcons from "../sidbarIcons/SidebarIcons";
const SideBar = () => {
    const links = [
        {
            path: '/',
            title: "home",

        },
        {
            path: '/search',
            title: "search",

        },
        {
            path: '/groups',
            title: "groups",

        },
        {
            path: '/make-group',
            title: "make group",

        },
    ]
    return (
        <nav className="w-56 hidden lg:block h-screen bg-white shadow float-left ">
            <div className="flex items-stretch  p-3 text-center h-full w-full flex-col gap-1 border">
                <p className="text-xl text-start px-2 text-indigo-500 font-semibold pb-2">Heliverse</p>
                {
                    links.map(ele => <SidebarIcons key={ele.path} data={ele}></SidebarIcons>)
                }

            </div>


        </nav>
    );
};

export default SideBar;