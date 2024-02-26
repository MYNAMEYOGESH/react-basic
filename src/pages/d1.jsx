import React, { Component } from "react";
import Sub1 from "./Sub1";
import Sub2 from "./Sub2";

class Doc1 extends Component {
    constructor(props) {
        super(props)
    }

    render(){
        return(
            <div>
            <h1>Props in class  componentes </h1>
            <Sub1 x={213} y={245}/>
            <Sub2 a={346} b={355} />
            </div>
        )
    }
}
export default Doc1