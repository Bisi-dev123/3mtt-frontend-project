import { WiMoonWaningCrescent5 } from "react-icons/wi";


const NavBar = () => {
    return (
        <div className="header-wrapper" >
            <div className="title-wrapper" >
                <h1>My Repositories</h1>
            </div>
            <div className="toggle-wrapper" >
            <WiMoonWaningCrescent5 />
            </div>
        </div>
    );
}

export default NavBar