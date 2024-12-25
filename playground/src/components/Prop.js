import {useEffect, useState} from 'react';


const PropComponent = () => {
    const [state, setState] = useState(0);
    const handleClick = () => {
        setState(state + 1);
    }
    const handleClickMinus= () =>{
        setState(state-1);
    }
    return (
        <div>
            <h1>Addition</h1>
            <h2>{state}</h2>
            <button onClick={handleClick}>Add</button>
            <h1>Subtraction</h1>
            <h2>{state}</h2>
            <button onClick={handleClickMinus}>Remove</button>
        </div>
    )
}
export default PropComponent;