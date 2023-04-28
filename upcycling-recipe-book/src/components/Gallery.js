import '../stylesheets/Gallery.css'

function Gallery() {
    const img1 = "https://www.makelifelovely.com/wp-content/uploads/2013/07/Mason-jar-lanterns.-These-pretty-diy-mason-jar-lights-are-easy-to-make-and-perfect-for-adding-ambience-to-a-party-bridal-shower-reception-or-wedding.jpg";

    const img2 = "https://cms-tc.pbskids.org/parents/_pbsKidsForParentsSixteenNineRatioMedium/90777/ToiletPaperTubeChicken_Feature.jpg";

    const img3 = "https://cdn.homedit.com/wp-content/uploads/2014/06/colored-tin-can-planters-768x512.jpg";

    const img4 = "https://4.bp.blogspot.com/-tmjtCwMcHwE/VX-keFakODI/AAAAAAAAQKw/ax-N0q9LaN0/s1600/P6150948.JPG";

    const img5 = "https://helloglow.co/wp-content/uploads/2012/04/IMG_9486.jpg";

    return (
        <div id='gallery'>
            <img id='farLeftImg' src={img1}></img>
            <img id='leftImg' src={img2}></img>
            <img id='centerImg' src={img3}></img>
            <img id='rightImg' src={img4}></img>
            <img id='farRightImg' src={img5}></img>
        </div>
    )
}

export default Gallery;