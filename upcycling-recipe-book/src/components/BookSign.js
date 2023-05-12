import '../stylesheets/BookSign.css'
import book from './4.png'

function BookSign() {
    // const bookLogo = './4.png'

    const styles = {
        position: 'absolute',
        top: '40%',
        right: '13%',
        height: '200px',
        width: '200px'
    }

    return (
        <div id='bookImg'>
            <img style={styles} id='bookImg' src={book} alt='book logo'></img>
        </div>
    )
}
export default BookSign;
