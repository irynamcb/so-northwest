import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle, faMinusCircle } from '@fortawesome/free-solid-svg-icons';

function Counter({val, callback}) {

    const [count, setCount] = useState(val);

    function decrement() {
        if (count > 1) {
            setValue(count - 1)
        }
    }

    function setValue(val) {
        setCount(val)
        callback(val)
    }

    return (

        <div className="quantity">
            <FontAwesomeIcon icon={faMinusCircle}
                color="#c5c5c5"
                size="lg"
                cursor="pointer"
                onClick={decrement}
            />
            <h1>{count}</h1>
            <FontAwesomeIcon icon={faPlusCircle}
                color="#c5c5c5"
                size="lg"
                cursor="pointer"
                onClick={() => setValue(count + 1)}
            />
        </div>
    )
}

export default Counter;