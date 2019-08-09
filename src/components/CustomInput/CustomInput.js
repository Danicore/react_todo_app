import React from 'react';
import './index.css';

const CustomInput = (props) => {
    return (
        <input {...props} className="custom-input"/>
    );
}

export default CustomInput;