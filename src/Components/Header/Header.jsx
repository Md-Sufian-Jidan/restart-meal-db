import { NavLink } from "react-router-dom";
import './Header.css'


const Header = () => {
    return (
        <div>
            <nav className="navbar">
            <h2>YummyMeal</h2>
            <ul className="links">
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'/meals'}>Meals</NavLink>
            </ul>

            </nav>
            
        </div>
    );
};

export default Header;