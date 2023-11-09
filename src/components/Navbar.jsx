import React, { useEffect }from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { RiNotification3Line } from 'react-icons/ri'
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import { Notification, UserProfile } from '.';
import { useStateContext } from '../contexts/ContextProvider';


const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
    <TooltipComponent content={title} position="BottomCenter">
        <button type="button" onClick={customFunc} style={{color}} 
        className="relative text-xl rounded-full p-3 hover:bg-light-gray">
            <span style={{ background: dotColor }}
            className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
            />
                {icon}
        </button>
    </TooltipComponent>
)

const Navbar = () => {
    const { activeMenu, setActiveMenu, isClicked, handleClick, screenSize, setScreenSize } = useStateContext();
  
    useEffect(() => {
        const handleResize = () => setScreenSize(window.innerWidth);

        window.addEventListener('resize', handleResize);

        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if(screenSize <= 900) {
            setActiveMenu(false);
        } else {
            setActiveMenu(true);
        }
    }, [screenSize]);

    const handleActiveMenu = () => setActiveMenu(!activeMenu);

    return (
        <div className="flex justify-between p-2 md:ml-6 relatives">
            <div className="lg:hidden">
                <NavButton 
                title="Menu" 
                customFunc={handleActiveMenu}
                color="blue"
                icon={<AiOutlineMenu />}
                />
            </div>

            <div className="flex">
                <NavButton 
                title="Notification" 
                customFunc={() => handleClick('notification')}
                color="blue"
                icon={<RiNotification3Line />}
                />
            </div>

            {isClicked.notification && <Notification />}

        </div>
  )
}

export default Navbar