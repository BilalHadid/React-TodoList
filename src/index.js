import React from 'react'
import { render } from 'react-dom'
import { Component} from 'react'
import Mygf from './ComponentsTodo/First'
import Heady from './ComponentsTodo/headerComponent'
import Zoo from './ComponentsTodo/Adding'

const list=[]


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
    
}

render(<App />,document.getElementById('root'))
export default App
