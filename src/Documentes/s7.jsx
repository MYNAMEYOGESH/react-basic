import React, { useState} from "react";

function Screen7(props){
    // syntax : const[state,handler] = useState(value)
    const [home,setHome] = useState('home')
    // const [about,setAbout] = useState('about')
    // const [job,setJob] = useState('job')
    // const [section,setSection] = useState('section')
    // const [products,setProducts] = useState('products')
 

    const toggleTab = (val) => {
        setHome(val)
       
    }
    return(
            <div>
                    <nav className="tab">
                    <a onClick={()=> toggleTab('home')} href="#">Home</a>
                    <a onClick={()=> toggleTab('about')} href="#">About</a>
                    <a onClick={()=> toggleTab('jobes')} href="#">Jobs</a>
                    <a onClick={()=> toggleTab('section')} href="#">section</a>
                    <a onClick={()=> toggleTab('products')} href="#">Products</a>
                    
                </nav>
                
                <section className="container">
                    {
                        home === "home" ? (
                            <div id="home">
                                <h1>Home section</h1>
                            </div>
                        ): null
                    }
                    {
                        home === "about" ? (
                            <div id="about">
                                <h1>About section</h1>
                            </div>
                        ): null
                    }
                    {
                      home === "jobes" ? (
                            <div id="jobes">
                                <h1>Jobs section</h1>
                            </div>
                        ): null
                    }
                    {
                       home === "section" ? (
                            <div id="section">
                                <h1>Services section</h1>
                            </div>
                        ): null
                    }
                    {
                        home === "products" ? (
                            <div id="products">
                                <h1>Products section</h1>
                            </div>
                        ): null
                    }
                </section>
            </div>
        )
}
export default Screen7

