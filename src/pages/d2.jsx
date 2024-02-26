import React from "react";
import Sub3 from "./Sub3";

let emp = ['john','david','simon' ]

let course = {
    id: 2,
    title: "Reactjs",
    duration: '1.5 month'
}
function Doc2(props){
    return(
        <div>
            <h1>props in function component </h1>
            <Sub3 x={23} y= {34} view= {true} users= {emp} cT= {course} />
        </div>
    )
}


export default Doc2