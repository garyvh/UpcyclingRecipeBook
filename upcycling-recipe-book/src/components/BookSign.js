import '../stylesheets/BookSign.css'

function BookSign() {
    const bookLogo = '/4.png'

    return (
        <div id='bookImg'>
            <img id='bookImg' src={bookLogo} alt='book logo'></img>
        </div>
    )
}
export default BookSign;
