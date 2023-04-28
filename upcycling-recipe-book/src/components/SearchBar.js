import logoImage from "../images/UpLogo.PNG";
import "../stylesheets/SearchBar.css"
function SearchBar() {
    return (
        <nav className="searchHeader">
            <img src={logoImage} className="logo"/>
            <input type="search" placeholder="Search For Recipes" className="searchInput"/>
        </nav>
    )
}

export default SearchBar;