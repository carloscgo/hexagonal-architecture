// app/components/Menu.tsx

import { Link } from "react-router-dom";
import { BiHome, BiStore, BiSpreadsheet } from 'react-icons/bi';
import routes from "../utils/routes";

type PropsMenu = {
    maxSidebar: React.MutableRefObject<HTMLDivElement | null>
    miniSidebar: React.MutableRefObject<HTMLDivElement | null>
}

const ItemsMenu = [
    {
        label: 'Home',
        url: routes.home,
        icon: <BiHome />
    },
    {
        label: 'Products',
        url: routes.products.list,
        icon: <BiStore />
    },
    {
        label: 'Orders',
        url: routes.orders.list,
        icon: <BiSpreadsheet />
    },
]

export default function Menu({ maxSidebar, miniSidebar }: PropsMenu) {
    return (
        <>
            <div ref={maxSidebar} className="max hidden text-white mt-20 flex-col space-y-2 w-full h-[calc(100vh)]">
                {ItemsMenu.map((item, index) => (
                    <Link key={index} to={item.url} className="hover:ml-4 w-full text-white hover:text-purple-500 dark:hover:text-blue-500 bg-[#1E293B] p-2 pl-8 rounded-full transform ease-in-out duration-300 flex flex-row items-center space-x-3">
                        {item.icon}
                        <div>
                            {item.label}
                        </div>
                    </Link>
                ))}
            </div>

            <div ref={miniSidebar} className="mini mt-20 flex flex-col space-y-2 w-full h-[calc(100vh)]">
                {ItemsMenu.map((item, index) => (
                    <Link key={index} to={item.url} className="hover:ml-4 justify-end pr-5 text-white hover:text-purple-500 dark:hover:text-blue-500 w-full bg-[#1E293B] p-3 rounded-full transform ease-in-out duration-300 flex">
                        {item.icon}
                    </Link>
                ))}
            </div>
        </>
    )
}