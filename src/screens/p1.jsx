import React ,{Component} from "react"

//variables
let x = 12
let y = 394.45
const status = true

const str = "welcome to react"

let colors = ['red','orange','blue','green']

const usre = {
    name: "yogi",
    email: "yogi@gmail.com",
    age: 23,
    isAdmin: false
}

class Page1 extends Component {
    constructor(props) {
        super(props)
        
    }
    render () {
        return (
            <div>
                <h1> Variable in calss componentes</h1>
                <h1>x = {x}</h1>
                <h1>y = {y}</h1>
                <h1>prodesct = {x*y}</h1>
                <hr/>

                <h1> { str }</h1>
                <hr/>

                <h1> Boolean = { status ? "Say True " : "Say False"}</h1>
                <hr/>

                <h1>User name = { usre.name}</h1>
                <h1>User email = { usre['email']}</h1>
                <hr />

                <ol>
                    {
                        colors.map(function(item,index){
                            return (
                                <li key={index}> {item}</li>
                            )
                        })
                    }
                </ol>
            </div>
        )
    }
} 
export default Page1