import React, { Component } from "react";
let x = 0

class Spage3 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            qunt: 0
        }
    }

    addValue(val) {
        console.log('value = ',val)
        this.setState({
            qunt: this.state.qunt+val 
        })
    }

    // subValue(val) {
    //     if(this.state.qunt>=1){
    //     console.log('value = ',val)
    //     this.setState ({qunt: this.state.qunt-val})
    //     }else{
    //         console.log('value shold be 1') 
    //     }
    // }

    subValue(val){
        if(this.state.qunt <= 1) {
            this.setState({
                qunt: 1
            })
        }else {
            this.setState({
                qunt: this.state.qunt -1
            })
        }
    }
    render() {
        console.log('component rendered')
        return(
            <div>
                <h1>React states</h1>
                <div  >
                <button onClick={() => this.subValue(1)}>-</button> 
                <h2>qunt = { this.state.qunt}</h2> 
                <button onClick={() => this.addValue(1)}>+</button>
                </div>
              
               
                
            </div>
        )
    }
}

export default Spage3