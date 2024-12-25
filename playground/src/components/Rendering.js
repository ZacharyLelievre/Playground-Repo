import React, { useState } from 'react';


const RenderTest = () => {
    const [show, setShow] = useState(true);

    const toggling = ()=>{
        setShow(!show);
    }

    return (
        <div>
            <button onClick={toggling}>Toggle</button>
            {show&&(
                <h1>Testing Rendering here</h1>
            )}

            {/*<form>*/}
            {/*    <input type="text" name="customerFirstName" placeholder="First Name" onChange={handleChange} required />*/}
            {/*    <input type="text" placeholder="Enter your infromation here" />*/}
            {/*</form>*/}

        </div>
    )
}
export default RenderTest;