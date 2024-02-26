import React, { useState } from "react";

const Screen9 = (props) => {
    const[x,setX] = useState(1)

    const addValue = (val) => {
        setX(x + val)
    }

    console.log('component render')
    return(
        <div>
            <h1>states in arrow function</h1>
            <h2>variable  x = {x}</h2>

            <button onClick={() => addValue(1)}>add+1</button>
        </div>
    )

}
export default Screen9