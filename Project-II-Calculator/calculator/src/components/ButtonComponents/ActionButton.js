import React from 'react';
import './Button.css';

const ActionButton = props =>{
    return(
        <div>
            <button className='long-btn'>{props.text}</button>
        </div>
    )
}

export default ActionButton;
