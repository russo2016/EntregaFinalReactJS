import CartWidget from "../CartWidget/CartWidget";

const NavBar = () =>{
    return(
        <nav className="has-text-centered">
            <h3 className="title is-primary">Bmym Vapor</h3>
            <div className="buttons is-centered">
                <button className="button is-link is-outlined">7000pff</button>
                <button className="button is-link is-outlined">5000pff</button>
                <button className="button is-link is-outlined">3000pff</button>
            </div>
            <CartWidget/>
        </nav>
    )
}

export default NavBar;