import logoImage from "../images/UpLogo.PNG";
import "../stylesheets/TheHeader.css";
function TheHeader() {
    return (
        <nav className="myNav">
            <img src={logoImage}/>
            <h1>Home</h1>
            <h1>Recipes</h1>
            <h1>Sign Up</h1>
            <h1>Log In</h1>
            <h1>Help</h1>
        </nav>
    )
}

export default TheHeader;