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

    return (
        <div>
            <SearchBar
                items={items}
                setItems={setItems}
            />
            <div className="searchPageBody">
                <div className="searchPageHeroDiv">
                    <SearchHero
                        name={"Mason Jar Lanterns"}
                        link={"https://www.makelifelovely.com/diy-mason-jar-lanterns/"}
                        img={"https://www.makelifelovely.com/wp-content/uploads/2013/07/Mason-jar-lanterns.-These-pretty-diy-mason-jar-lights-are-easy-to-make-and-perfect-for-adding-ambience-to-a-party-bridal-shower-reception-or-wedding.jpg"}
                        cite={"Photo by Make Life Lovely"}
                        supplies={["Mason jars", "Spray Paint (Optional)", "Stretch lace ribbion", "Jute ribbion", "Wire coat hanger", "Wire cutters", "Glue", "Foam brush", "Glue gun"]}
                    />
                </div>
            </div>
        </div>
    )
}

export default SearchPage;