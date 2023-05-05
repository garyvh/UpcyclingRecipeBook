import '../stylesheets/Homepage.css'
import TheHeader from "./TheHeader";
import Gallery from "./Gallery";
import HeroSection from "./HeroSection";
import { useState } from 'react';

function Homepage() {


    return (
        <div id="homepage">
            <div id="sideBarContainer">
                <span id="sideBarCircle"></span>
            </div>
            <TheHeader></TheHeader>
            <HeroSection></HeroSection>
            <Gallery></Gallery>
            <footer></footer>
        </div>
    )
}

export default Homepage;