import React from 'react'
import { Link } from "react-router-dom";
import './footer.css'



const Footer=()=>{
    
    //html2canvas(document.querySelector("body"),document.querySelector("home"));
    
    return(
        <div className="footer">
            ©The Akshay PVT. LTD.
            <br />
            <a href="https://www.twitter.com/_the_Akshay">@_the_Akshay</a>
            
            
        </div>
    );
}

export default Footer