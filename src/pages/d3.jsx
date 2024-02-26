import React, { Component } from "react";

class Doc3 extends Component {
    constructor(props){
        super(props)
    }

    render() {
        return(
            <div>
                <h1>Default Props</h1>
                <h2> product = {this.props.a * this.props.b }</h2>

            <hr />
                <h3></h3>
                <h1> view = {this.props.view ? "say True": "Say False"} </h1>

               <div>
                {
                    this.props.emp.map((item,index)=>{
                        return(

                            <p key={index}> {item} </p>
                        )
                    })
                }
               </div>

               <hr />

               <h2>
                user id = { this.props.user.id}, name= {this.props.user.name},email= {this.props.user.email}, gender = {this.props.user.gender}
               </h2>

            </div>
        )
    }
}

// Default props 
Doc3.defaultProps = {
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
export default Doc3