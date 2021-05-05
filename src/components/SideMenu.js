import React from 'react';
import logo from '../images/g_logo.png';
import '../css/sideMenu.css';

function SideMenu() {
    return (
        <div className="sidemenu">
           <img src={logo} className="logo mx-auto d-block mt-3" alt="blogo"/>   
           <h5 className="mt-1 text-center text-white">genc</h5>
           <p className="text-center yazicik  mt-4 mb-0">Jr.</p>
           <p className="text-center yazicik  p-0">Frontend Developer</p>
        </div>
    )
}

export default SideMenu;
