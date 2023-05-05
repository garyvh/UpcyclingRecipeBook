import logoImage from "../images/UpLogo.PNG";
import "../stylesheets/SearchBar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import React, {useState} from "react";
import { Link } from "react-router-dom";
function SearchBar() {
    const [textValue, setTextValue] = useState("");

    function inputChanged(e) {
        setTextValue(e.target.value);
    }

    function parseString(str) {
        
    }

    return (
        <nav className="searchHeader">
            <Link to="/"><img src={logoImage} className="logo"/></Link>
            <div className="searchDiv">
                <label htmlFor="searchInput" className="searchIcon"><FontAwesomeIcon icon={faMagnifyingGlass} /></label>
                <input type="search" placeholder="Search For Recipes" className="searchInput" id="searchInput" onInput={inputChanged} />
            </div>
        </nav>
    )
}

export default SearchBar;