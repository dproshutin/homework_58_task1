import React from 'react';
import './InputField.css';

const InputField = props => {
    return (
        <input
            type="text"
            value={props.name}
            onChange={props.change}
        />
    );
};

export default InputField;