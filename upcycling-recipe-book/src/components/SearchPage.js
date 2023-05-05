import SearchBar from "./SearchBar";
import SearchHero from "./SearchHero";
import "../stylesheets/SearchPage.css";
function SearchPage() {
    return (
        <div>
            <SearchBar/>
            <div className="searchPageBody">
                <div className="searchPageHeroDiv">
                    <SearchHero></SearchHero>
                    <SearchHero></SearchHero>
                </div>
                <div className="searchCategories">
                    <div className="category"></div>
                </div>
                <div className="searchRecommendations">
                    <div className="product"></div>
                </div>
            </div>
        </div>
    )
}

export default SearchPage;