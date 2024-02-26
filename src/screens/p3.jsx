import React from "react";
//variables
let x = 12
let y = 394.45
const status = true

const str = "welcome to react"

let colors = ['red','orange','blue','green']

const user = {
    name: "yogi",
    email: "yogi@gmail.com",
    age: 23,
    isAdmin: false
}
  const  Page3 = () => {
    return (
        <div>
            <h1> variables in function componentes </h1>
            <h1> x = {x}</h1>
            <h1> y = {y}</h1>
            <h3>{ status ? "Hi Welcome ,": "Bye,."} </h3>
            <h3> {str}</h3>
            <hr />
            <ol>

                {

                    colors.map(function(item,index){
                        return(
                            <li key={index}> {item}</li>
                        )
                    })
                }
            </ol>
            <hr />
            <h1> name = { user.name} & email = {user.email} & age = {user.age}</h1>
        </div>
    )
 }
 export default Page3