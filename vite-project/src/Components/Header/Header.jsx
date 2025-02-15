import React from 'react';
import './Header.css';
import logo from "../../assets/logo.svg";

function Header() {
    return (
        <div className='navbar'>
            <header className='main'>
                <span className='imte'>
                    <span className='gfs'>
                            <img className='log' src={logo} alt="logo" />GeekFoods
                    </span>
                </span>
                <span className='sect'>
                    <span id='h'>Home</span>
                    <span id='q'>Quote</span>
                    <span id='rs'>Resturants</span>
                    <span id='fs'>Foods</span>
                    <span id='c'>Contact</span>
                </span>
                <button id='gs'>Get Started</button>
            </header>
            {/* <div className='container'>
                <img className='mng' src={mainpg} alt="mainPage" />
                <div className="overlay">
                    <h1 id='lf'>Let us find your</h1>
                    <h1 id='ff'>Forever Food.</h1>
                    <span className='lorem'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus numquam ea!</span>
                    <div className='butt'>
                        <button id='sn'>Search Now</button>
                        <button id='km'>Know More</button>
                    </div>
                </div>
            </div> */}
            {/* <div className='container1'>
                <img className='mdg' src={midpg} alt="" />
                <div className='content'>
                    
                </div>
            </div> */}
        </div>
    );
}

export default Header;