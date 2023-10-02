import { NavLink } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget"

const NavBar = () =>{
    return(
        <div>
            <nav className="navbar is-link" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <NavLink to ="/">
                <h3 className="navbar-item has-text-black">
                    BMYM VAPOR
                </h3>
                </NavLink>

            </div>

            <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-end buttons are-medium espacio">
                <NavLink to={`category/2000PFF`} className={({ isActive }) => (isActive ? "ActiveOption" : "Option") + "navbar-item is-tab button is-info has-text-black mr-6"}>
                    2000PFF
                </NavLink>
                <NavLink to={`category/5000PFF`} className={({ isActive }) => (isActive ? "ActiveOption" : "Option") + "navbar-item is-tab button is-info has-text-black mr-6 ml-6"}>
                    5000PFF
                </NavLink>
                <NavLink to={`category/7000PFF`} className={({ isActive }) => (isActive ? "ActiveOption" : "Option") + "navbar-item is-tab button is-info has-text-black mr-6 ml-6"}>
                    7000PFF
                </NavLink>
                <p className="navbar-item ml-6 mr-3">
                    <CartWidget/>
                </p>
                </div>
            </div>
            </nav>
    </div>
    )
}

export default NavBar;