import { Link } from "react-router-dom";
import { Nav } from './style'
import logo from "../images/budget.svg";
const Header = () => (
    <Nav>

        <ul>
        <li className="logo">
            <img src={logo} style={{ height: 60, width: 60 }} alt="logo" />
        </li>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/statistics">Statistics</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
        </ul>
    </Nav>
)

export default Header;