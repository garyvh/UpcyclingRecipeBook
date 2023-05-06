import logoImage from "../images/UpLogo.PNG";
import "../stylesheets/SearchBar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import React, {useState} from "react";
import { Link } from "react-router-dom";
function SearchBar() {
    const BACKEND_PATH = "http://localhost:3500/recipeList/retrieve/";

    const [textValue, setTextValue] = useState("");

    function inputChanged(e) {
        setTextValue(parseToBackend(e.target.value));
    }

    async function fetchResults() {
        try {
            let result = await fetch(BACKEND_PATH + textValue);
            let obj = await result.json();
            return obj;
        } catch(err) {
            console.error(err);
        }
    }

    async function handleSubmit(e) {
        e.preventDefault();
        let obj = await fetchResults();
        console.log(obj);
    }

    function parseToBackend(str) {
        return str.toLowerCase().replace(/(^\w|\s\w)/g, m => m.toUpperCase()).replace(/\s/g, "");
    }

    return (
        <nav className="searchHeader">
            <Link to="/"><img src={logoImage} className="logo"/></Link>
            <form className="searchDiv" onSubmit={handleSubmit}>
                <label htmlFor="searchInput" className="searchIcon"><FontAwesomeIcon icon={faMagnifyingGlass} /></label>
                <input type="search" placeholder="Search For Recipes" className="searchInput" id="searchInput" onInput={inputChanged} />
            </form>
        </nav>
    )
}

export default SearchBar;