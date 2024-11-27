import { useState } from 'react';


const PropComponent = () => {
    const [state, setState] = useState(0);
    const handleClick = () => {
        setState(state + 1);
    }
    return (
        <div>
            <h1>{state}</h1>
            <button onClick={handleClick}>Click me</button>
        </div>
    )
}
export default PropComponent;