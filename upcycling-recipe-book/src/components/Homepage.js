import '../stylesheets/Homepage.css'
import TheHeader from "./TheHeader";
import Gallery from "./Gallery";
import HeroSection from "./HeroSection";
import { useState } from 'react';
import BookSign from "./BookSign";

function Homepage() {


    return (
        <div id="homepage">
            <div id="sideBarContainer">
                <span id="sideBarCircle"></span>
            </div>
            <TheHeader></TheHeader>
            <HeroSection></HeroSection>
            <Gallery></Gallery>
            <BookSign></BookSign>

            <footer></footer>
        </div>
    )
}

export default Homepage;