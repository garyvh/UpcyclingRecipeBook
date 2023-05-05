import logoImage from "../images/UpLogo.PNG";
import "../stylesheets/SearchBar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import React, {useState} from "react";

function SearchBar() {
    const BACKEND_PATH = "/";

    const [textValue, setTextValue] = useState("");

    function inputChanged(e) {
        setTextValue(parseToBackend(e.target.value));
    }

    async function fetchResults() {
        try {
            let result = await fetch(BACKEND_PATH);
            let obj = await result.json();
        } catch(err) {
            console.error(err);
        }
    }

    function parseToBackend(str) {
        return str.toLowerCase().replace(/(^\w|\s\w)/g, m => m.toUpperCase()).replace(/\s/g, "");
    }

    return (
        <nav className="searchHeader">
            <img src={logoImage} className="logo"/>
            <div className="searchDiv">
                <label htmlFor="searchInput" className="searchIcon"><FontAwesomeIcon icon={faMagnifyingGlass} /></label>
                <input type="search" placeholder="Search For Recipes" className="searchInput" id="searchInput" onInput={inputChanged} />
            </div>
        </nav>
    )
}

export default SearchBar;