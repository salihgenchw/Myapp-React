import React from 'react'
import explorerlogo from '../images/explorericon.png';
import searchlogo from '../images/searchicon.png';
import giticon from '../images/giticon.png';
import debugicon from '../images/debugicon.png';
import expicon from '../images/expicon.png';

import '../css/vsSide.css';

function VsSide() {
    return (
        <div className="vsside">
            <div className="text-center">
                <a href="/">
                   <img className="mt-3" src={explorerlogo} alt="explorerlogo"/>  
                </a>
                <a href="/">
                   <img className="mt-4" src={searchlogo} alt="explorerlogo"/>  
                </a>
                <a href="/">
                   <img className="mt-4" src={giticon} alt="explorerlogo" style={{width:"30px"}}/>  
                </a>
                <a href="/">
                   <img className="mt-4" src={debugicon} alt="explorerlogo" style={{width:"33px"}}/>  
                </a>
                <a href="/">
                   <img className="mt-4" src={expicon} alt="explorerlogo" style={{width:"32px"}}/>  
                </a>
            </div>  
        </div>
    )
}

export default VsSide;
