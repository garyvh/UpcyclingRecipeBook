import logoImage from "../images/UpLogo.PNG";
import "../stylesheets/TheHeader.css";
import { Link } from "react-router-dom";
function TheHeader() {
    return (
        <nav className="myNav">
            <img src={logoImage} className="logo"/>
            <h1><Link to="/">Home</Link></h1>
            <h1><Link to="/SearchPage">Recipes</Link></h1>
            <h1><Link to="/HelpPage">Help</Link></h1>
        </nav>
    )
}

export default TheHeader;