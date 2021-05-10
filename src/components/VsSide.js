import React from 'react'
import explorerlogo from '../images/explorericon.png';
import '../css/vsSide.css';

function VsSide() {
    return (
        <div className="vsside">
            <div className="text-center">
                <a href="/">
                   <img className="mt-3" src={explorerlogo} alt="explorerlogo"/>  
                </a>
            </div>
            
        </div>
    )
}

export default VsSide;
