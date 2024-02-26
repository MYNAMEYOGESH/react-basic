import React from "react";

class Sereen extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            tabItem: "home"
        }
    }

    toggleTab(val){
        this.setState({
            tabItem: val
        })
    }

    render(){
        return(
            <div>
                <h1>Tab switching using state</h1>

                <nav className="tab">
                    <a onClick={()=> this.toggleTab('home')} href="#">Home</a>
                    <a onClick={()=> this.toggleTab('about')} href="#">About</a>
                    <a onClick={()=> this.toggleTab('jobes')} href="#">Jobes</a>
                    <a onClick={()=> this.toggleTab('section')} href="#">section</a>
                    <a onClick={()=> this.toggleTab('products')} href="#">Products</a>
                    
                </nav>

                <section className="container">
                    {
                        this.state.tabItem === "home" ? (
                            <div id="home">
                                <h1>Home section</h1>
                            </div>
                        ): null
                    }
                    {
                        this.state.tabItem === "about" ? (
                            <div id="about">
                                <h1>About section</h1>
                            </div>
                        ): null
                    }
                    {
                        this.state.tabItem === "jobes" ? (
                            <div id="jobes">
                                <h1>Jobs section</h1>
                            </div>
                        ): null
                    }
                    {
                        this.state.tabItem === "section" ? (
                            <div id="section">
                                <h1>Services section</h1>
                            </div>
                        ): null
                    }
                    {
                        this.state.tabItem === "products" ? (
                            <div id="products">
                                <h1>Products section</h1>
                            </div>
                        ): null
                    }
                </section>
                </div>
        )
    }
}
export default Sereen