import { Link } from "react-router-dom";
import { Nav } from './style'
import logo from "../images/budget.svg";
import  {ThemeSwitchUI}  from '../MUI_Switch/index';
import { FormattedMessage } from "react-intl";

// import FormControlLabel from '@mui/material/FormControlLabel';

const Header = () => {
return(
    <div>
        <Nav>
            <ul>
                <li className="logo">
                    <img src={logo} style={{ height: 60, width: 60 }} alt="logo" />
                </li>
                <li>
                    <Link to="/"><FormattedMessage id = "menu.home"/></Link>
                </li>
                <li>
                    <Link to="/statistics"><FormattedMessage id = "menu.statistics"/></Link>
                </li>
                <li>
                    <Link to="/settings"><FormattedMessage id = "menu.settings"/></Link>
                </li>
                <li>
                    <Link to="/about"><FormattedMessage id = "menu.about"/></Link>
                </li>
                <li>
      <ThemeSwitchUI/>
                </li>
            </ul>
        </Nav>
        

    </div>

);
}

export default Header;