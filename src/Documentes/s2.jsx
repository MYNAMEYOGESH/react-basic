import React, { Component } from "react";
let x = 12;

class Spage2 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            num: 0
        }
    }

    addValue(val) {
        console.log('value = ',val)
        // x = val
        this.setState({
            num: this.state.num+val 
        })
    }
    render() {
        console.log('component rendered')
        return(
            <div>
                <h1>React states</h1>

                <h2>num = { this.state.num}</h2>
                <hr />
                <button onClick={() => this.addValue(10)}>Add+10</button>
                <button onClick={() => this.addValue(50)}>Add+50</button>
                <button onClick={() => this.addValue(100)}>Add+100</button>
            </div>
        )
    }
}

export default Spage2