import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { SiShopware } from 'react-icons/si'
import { MdOutlineCancel } from 'react-icons/md'
import { TooltipComponent} from '@syncfusion/ej2-react-popups'

import { links1, links2 } from '../data/dummy/dummy'
import { useStateContext } from '../contexts/ContextProvider';

const Sidebar = () => {
    const { activeMenu, setActiveMenu, screenSize } = useStateContext();

    const handleCloseSideBar = () => {
        if(activeMenu !== undefined && screenSize <= 900) {
            setActiveMenu(false);
        }
    };

    const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-gray text-md m-2 bg-light-gray dark:bg-slate-600'
    const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 hover:bg-light-gray dark:text-gray-400 dark:hover:text-black dark:hover:bg-slate-600 m-2';
  
    return (
    <div className=" h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10 bg-white dark:bg-gray-900">
        {activeMenu && (
            <>
                <div className="flex justify-between items-center">
                    <Link to="/" onClick={handleCloseSideBar}
                    className="items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-slate-400">
                        <SiShopware /> <span>Quick Note</span>
                    </Link>
                    <TooltipComponent content="Menu" position="BottomCenter">
                        <button type="button"
                        onClick={() => setActiveMenu(!activeMenu)}
                        className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden"
                        >
                            <MdOutlineCancel />
                        </button>
                    </TooltipComponent>
                </div>
                <div className="flex-col">
                    <div className="mt-10">
                        {links1.map((item) => (
                            <div key={item.title}>
                                <p className="text-gray-400 m-3 mt-4 uppercase">
                                    {item.title}
                                </p>
                                {item.links.map((Link) => (
                                    <NavLink 
                                    to={`/${Link.name}`}
                                    key={Link.name}
                                    onClick={handleCloseSideBar}
                                    className={({ isActive }) => isActive ? activeLink : normalLink}
                                    >
                                        {Link.icon}
                                        <span className="capitalize">
                                            {Link.name}
                                        </span>
                                    </NavLink>
                                ))}
                            </div>
                        ))}
                    </div>
                    <div className="mt-10">
                        {links2.map((item) => (
                                <div key={item.title}>
                                    <p className="text-gray-400 m-3 mt-4 uppercase">
                                        {item.title}
                                    </p>
                                    {item.links.map((Link) => (
                                        <NavLink 
                                        to={`/${Link.name}`}
                                        key={Link.name}
                                        onClick={handleCloseSideBar}
                                        className={({ isActive }) => isActive ? activeLink : normalLink}
                                        >
                                            {Link.icon}
                                            <span className="capitalize">
                                                {Link.name}
                                            </span>
                                        </NavLink>
                                    ))}
                                </div>
                            ))}
                    </div>
                </div>
            
            </>
        )}
    </div>
  )
}

export default Sidebar