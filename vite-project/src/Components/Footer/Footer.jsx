import React from 'react';
import './Footer.css';
import lopi from "../../assets/photo3.png";
// import facebook from "../../assets/facebook.png"
// import insta from "../../assets/instagram.png";
// import twitter from "../../assets/twitter.png";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaBasketball } from "react-icons/fa6";
// import GiB from "../../assets/github.png";
// import ball from "../../assets/basket-ball.png";

function Footer() {
    return (
        <div className='Foot'>
            <div id='footer'>
                <img id='lopi' src={lopi} alt="" />
                <p className='lom'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br /> Incidunt consequuntur amet culpa cum itaque neque.
                </p>
                <span className='hori'>
                    <p id='a'>About</p>
                    <p id='ca'>Careers</p>
                    <p id='hi'>History</p>
                    <p id='s'>Services</p>
                    <p id='p'>Projects</p>
                    <p id='b'>Blog</p>
                </span>
                <span id='icon'>
                    <img id='png' src="/assets/facebook.png" alt="" />
                    {/* <img id='png' src={insta} alt="" /> */}
                    {/* <img  src="/assets/twitter.png" alt="" /> */}
                    {/* <img id='png' src={GiB} alt="" /> */}
                    {/* <img id='png' src={ball} alt="" /> */}
                    <FaFacebook className='fa' style={{marginLeft:"350px", cursor:"pointer"}}/>
                    <FaTwitter className='fa' style={{cursor:"pointer"}}/>
                    <FaInstagramSquare className='fa'style={{cursor:"pointer"}}/>
                    <FaGithub className='fa'style={{cursor:"pointer"}}/>
                    <FaBasketball className='fa'style={{cursor:"pointer"}}/>
                </span>
            </div>
        </div>
    );
}

export default Footer;