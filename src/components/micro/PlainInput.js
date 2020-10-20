import React, {useEffect, useState, useRef} from 'react';
import styles from './Micro.module.css';

const PlainInput = props => {
    const inputEl = useRef(null);

    const [val, setVal] = useState(props.val);
    const [active, setActive] = useState(false);
    const [status, setStatus] = useState(null);
    const handleChange = event =>
        props.onChange
            ? props.onChange(event.target.value)
            : setVal(event.target.value);

    useEffect(() => setVal(props.val), [props.val]);

    return (
            <input
                {...props}
                onChange={e => handleChange(e)}
                value={val}
                ref={inputEl}
                onFocus={() => setActive(true)}
                onBlur={() => setActive(false)}
            />
    );
};

export default PlainInput;
