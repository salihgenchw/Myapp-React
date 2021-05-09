import React from 'react'
import '../css/topbar.css';
import vslogo from '../images/vscodelogo.png';


function Topbar() {
    return (
        <div className="bgtop p-2">
            <img src={vslogo} alt="vscodelogo" style={{width:"20px"}}/>
            <ul className="topbarmenu">
                <li>File</li>
                <li>Edit</li>
                <li>Selection</li>
                <li>View</li>
                <li>Go</li>
                <li>Run</li>
                <li>Terminal</li>
                <li>Help</li>
            </ul>
        <span className="projectName">salihgenc.com - Visual Studio Code</span>
        </div>
    )
}
export default Topbar;
