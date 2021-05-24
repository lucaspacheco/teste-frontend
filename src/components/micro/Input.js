import React from 'react';
import PlainInput from './PlainInput'; //import de PlainInput.js do mesmo diretório

const Input = props => {
    return (
        <div>
            <label>Label</label>
            <PlainInput />
            <span>status</span>
        </div>
    );
};

export default Input;
