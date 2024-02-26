import React from "react"

function Doc4(props) {
    return(
        <div>
            <h1>Default props in Function component </h1>
            <h3>a={props.a} </h3>
            <h2>b= {props.b} </h2>
            <h3> product = {props.a * props.b} </h3>
        </div>
    )
}



// Default props 
Doc4.defaultProps = {
    a: 232,
    b: 434.454,
    view: false,
    emp: ['john','david','adam'],
    user: {
        id:12,
        name: "mohit",
        email: "mohit@gamil.com",
        gender: "male"

    }
}
export default  Doc4