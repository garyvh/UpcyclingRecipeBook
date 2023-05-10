
import "../stylesheets/SearchHero.css";
function SearchHero(props) {
    const thisStyle = {
        backgroundImage: `url(${props.img})`
    }

    return (
        <a href={props.link}>
            <div className="searchHero" style={thisStyle}>
                <div className="item-title-container">
                    {props.name}
                </div>
                <div className='item-supplies'>
                    {props.supplies}
                </div>
                <div className='item-citation'>
                    {props.cite}
                </div>
            </div>
        </a>
    )
}

export default SearchHero;