import React, { Component } from "react";

class Sub2 extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div>
                <h1>sub component 2</h1>
                <h2> prodeuct (a*b) = {this.props.a * this.props.b}</h2>
            </div>
        )
    }
}
export default Sub2