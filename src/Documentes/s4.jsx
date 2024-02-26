import React, { Component } from "react";


class Spage4 extends Component {
    constructor(props) {
        super(props)
        state = {
            view: false
        }
    }

    ToggleButton() {
        setState(
            { view: view }
        );
    }
    

    
    render() {
        return(
            <div>
                <h1>Modify The view using  State</h1>
                {
                    view ? (
                        <dir>
                            <h3>Login window</h3>
                            <div className="log">
                                <form action="#">
                                    <label htmlFor="text">UserName : </label>
                                    <input type="text" /><br />
                                    <label htmlFor="password">Password : </label> 
                                    <input type="password" /> <br />
                                    <button style={{background: "red",color: "#fff"}}>Login</button>
                                </form>
                            </div>
                        </dir>
                    ) : (
                        <div>
                            <h3>Register window</h3>
                            <div className="log">
                                <form action="#">
                                    <label htmlFor="text">Name : </label>
                                    <input type="text" /><br />
                                    <label htmlFor="text">UserName : </label>
                                    <input type="text" /><br />
                                    <label htmlFor="password">Password : </label> 
                                    <input type="password" /> <br />
                                    <button style={{background: "red",color: "#fff"}}>Register</button>
                                </form>
                            </div>
                        </div>
                    )
                }

              <p>Alredy register...<a style={{color: "green"}} onClick={() => ToggleButton()} >{textflag === false ? "Register Here" : "Login Here"}</a></p>
               
                
            </div>
        )
    }
}

export default Spage4