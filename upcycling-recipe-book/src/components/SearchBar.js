import logoImage from "../images/UpLogo.PNG";
import "../stylesheets/SearchBar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
function SearchBar() {
    return (
        <nav className="searchHeader">
            <img src={logoImage} className="logo"/>
            <div className="searchDiv">
                <label htmlFor="searchInput" className="searchIcon"><FontAwesomeIcon icon={faMagnifyingGlass} /></label>
                <input type="search" placeholder="Search For Recipes" className="searchInput" id="searchInput"/>
            </div>
        </nav>
    )
}

export default SearchBar;