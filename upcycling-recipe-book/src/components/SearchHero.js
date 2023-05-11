
import "../stylesheets/SearchHero.css";
function SearchHero(props) {
    const thisStyle = {
        backgroundImage: `url(${props.img})`
    }

    return (
        <a className="itemLink" href={props.link}>
            <div className="searchHero" style={thisStyle}>
                <div className="item-title-container">
                    {props.name}
                </div>
                <div className='item-supplies'>
                    {props.supplies.join(", ")}
                </div>
                <div className='item-citation'>
                    {props.cite}
                </div>
            </div>
        </a>
    )
}

export default SearchHero;