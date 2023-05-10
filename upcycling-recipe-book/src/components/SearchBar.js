import logoImage from "../images/UpLogo.PNG";
import "../stylesheets/SearchBar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import React, {useState} from "react";
import { Link } from "react-router-dom";

function SearchBar(props) {
    const BACKEND_PATH = "http://localhost:4000/recipeList/retrieve/";

    const [textValue, setTextValue] = useState("");

    function inputChanged(e) {
        setTextValue(parseToBackend(e.target.value));
    }

    async function fetchResults() {
        try {
            let result = await fetch(BACKEND_PATH + textValue);
            let obj = await result.json();
            if (Array.isArray(obj)) {
                obj.forEach((result) => {
                  if (result.title) {
                    result.title = result.title.replace(/([a-z])([A-Z])/g, '$1 $2'); // add spaces between camel case words
                  }
                });
            }
            return obj;
        } catch(err) {
            console.error(err);
        }
    }

    async function handleSubmit(e) {
        e.preventDefault();
        let obj = await fetchResults();
        // console.log(obj);
        props.setItems(obj);
    }

    function parseToBackend(str) {
        str = str.toLowerCase().replace(/(^\w|\s\w)/g, m => m.toUpperCase()).replace(/\s/g, "");
        return str;
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