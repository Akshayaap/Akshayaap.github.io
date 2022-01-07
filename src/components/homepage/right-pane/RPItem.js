import React from 'react';
import './rightpane.css';
const RPItem=(props)=>{
    
    return (
        <div className="rp-item">
            <h3>{props.arg1}</h3>
            <h5>{props.arg2}</h5>
            <h5>{props.arg3}</h5>
        </div>
    )
}

export default RPItem;