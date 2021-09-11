import React from 'react'
import Common from './Common'
import img from "./images/home2.png";

const About = () => {
    return (
        <>
        <Common name="Welcome to About Page" imgsrc={img} visit="/Contact" btnName="Contact Now" />
        </>
    )
}

export default About
