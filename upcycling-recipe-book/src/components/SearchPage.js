import SearchBar from "./SearchBar";
import SearchHero from "./SearchHero";
import CategoryDiv from "./CategoryDiv";
import "../stylesheets/SearchPage.css";
//icons for categories
import clothingImage from "../images/clothing.jpg"
import JewelryImage from "../images/bracelet.PNG"
import DecorationImage from "../images/decoration.PNG"
import FurnitureImage from "../images/lantern.jpg"

function SearchPage() {
    return (
        <div>
            <SearchBar/>
            <div className="searchPageBody">
                <div className="searchPageHeroDiv">
                    <SearchHero></SearchHero>
                    <SearchHero></SearchHero>
                </div>
                <h1 className="searchTitle">Category</h1>
                <div className="searchCategories">
                    <CategoryDiv className="category" categoryTitle="Clothing" image={clothingImage}></CategoryDiv>
                    <CategoryDiv className="category" categoryTitle="Jewelry" image={JewelryImage}></CategoryDiv>
                    <CategoryDiv className="category" categoryTitle="Decoration" image={DecorationImage}></CategoryDiv>
                    <CategoryDiv className="category" categoryTitle="Furniture" image={FurnitureImage}></CategoryDiv>
                    <CategoryDiv className="category" categoryTitle="Misc"></CategoryDiv>
                    <CategoryDiv className="category" categoryTitle="Misc"></CategoryDiv>
                </div>
                <div className="searchRecommendations">
                    <div className="product"></div>
                </div>
            </div>
        </div>
    )
}

export default SearchPage;