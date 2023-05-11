import SearchBar from "./SearchBar";
import SearchHero from "./SearchHero";
import CategoryDiv from "./CategoryDiv";
import "../stylesheets/SearchPage.css";
//icons for categories
import clothingImage from "../images/clothing.jpg"
import JewelryImage from "../images/bracelet.PNG"
import DecorationImage from "../images/decoration.PNG"
import FurnitureImage from "../images/lantern.jpg"
import React, {useState} from "react";

function SearchPage() {
    const [items, setItems] = useState([]);

    const itemComps = [];
    for (let i = 0; i < items.length; i++) {
        itemComps.push(
            <SearchHero 
                key={items[i].title}
                name={items[i].title} 
                link={items[i].tutorialLink}
                img={items[i].image.link}
                cite={items[i].image.credit}
                supplies={items[i].supplies}
            />
        );
    }

    return (
        <div>
            <SearchBar
                items={items}
                setItems={setItems}
            />
            <div className="searchPageBody">
                {itemComps}
            </div>
        </div>
    )
}

export default SearchPage;