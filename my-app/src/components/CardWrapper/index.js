import React from 'react';
import './style.css';



function CardWrapper({ children }) {
    return (
        <div className="wrapper">{children}</div>

    )
}


export default CardWrapper;