import { useRef } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { ThemeSwitchUI } from '../MUI_Switch/index';
import { FormattedMessage } from "react-intl";
import { Nav } from './styles'
import "./styles.js";
import logo from "../images/budget.svg";
function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
    <Nav>
		<header>
			  <img src={logo} style={{ height: 60, width: 60 }} alt="logo" />
			<nav ref={navRef}>
      <Link to="/"><FormattedMessage id="menu.home" /></Link>
      <Link to="/statistics"><FormattedMessage id="menu.statistics" /></Link>
      <Link to="/settings"><FormattedMessage id="menu.settings" /></Link>
      <Link to="/about"><FormattedMessage id="menu.about" /></Link>
      <ThemeSwitchUI />

				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
    </Nav>
	);
}

export default Navbar;