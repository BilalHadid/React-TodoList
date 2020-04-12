<<<<<<< HEAD
import React from 'react'
import { render } from 'react-dom'
import { Component} from 'react'
// import Mygf from './ComponentsTodo/First'
import Heady from './ComponentsTodo/headerComponent'
import Zoo from './ComponentsTodo/Adding'




class App extends Component{
    // constructor(props){
    //     super(props)
    //     this.state = {value: ''}

    //     this.handleChange = this.handleChange.bind(this)
    //     this.handleSubmit = this.handleSubmit.bind(this)
    // }
    // handleChange(event){
    //     this.setState({value: event.target.value})
    // }
    // handleSubmit(event){
    //     console.log('Name' , this.state.value)
        
    //     event.preventDefault();
         
    // }
    
    render (){
        return(
            <div>
                 <Heady/>
                <div>
                <Zoo />
                
                
                </div>
                <div>
                   
                </div>
               
                
            </div>
        )
    }
    
=======
import React, { Component } from "react";
import { render } from "react-dom";
import Heady from "./ComponentsTodo/headerComponent";
import Zoo from "./ComponentsTodo/Adding";

class App extends Component {
  render() {
    return (
      <div>
        {/* This should be Header not Heady */}
        <Heady />
        <div>
          {/* What is this Zoo? Name your components correctly */}
          <Zoo />
        </div>
        <div></div>
      </div>
    );
  }
>>>>>>> 90b2bfce3696f2b40123c4ac230740741be7917a
}

render(<App />, document.getElementById("root"));
