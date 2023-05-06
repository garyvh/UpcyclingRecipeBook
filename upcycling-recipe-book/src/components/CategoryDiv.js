//BUG: inline style for background image not working
import "../stylesheets/CategoryDiv.css";
function CategoryDiv(props) {
    return (
        <div className="categoryDiv">
            <div className="categoryImage" style={{backgroundImage:`url(${props.image})`}}></div>
            <h1 className="categoryTitle">{props.categoryTitle}</h1>
        </div>
    )
}

export default CategoryDiv;