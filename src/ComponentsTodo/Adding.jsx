import React from 'react'
import { Component } from 'react'
import Item from './Todoitem'
import '../App'

class Todolist extends Component{
    constructor(props){
      super(props)

      this.state={
        item: []

      }

      this.addItem= this.addItem.bind(this)
      this.deleteItem = this.deleteItem.bind(this)
    }
    addItem(e){
        if (this._inputElement.value !== ""){
          
            let newItem ={
              text: this._inputElement.value,
              key: Date.now()
            }
            this.setState((prevState) => {
              return{
                item: prevState.item.concat(newItem)
              }
            })
        }
        else{
          alert('Please Enter Something')
        }
        this._inputElement.value=""
        console.log(this.state.item)
        e.preventDefault();
    }
    deleteItem(key){
      console.log("key is add" + key)
      console.log("item"+ this.state.item)
      let filterItems = this.state.item.filter(function(item ){
        return (item.key !== key)
      })
      this.setState({
        item: filterItems
      })
    }

    render() {
      return(
        <div className="todolistMain">
            <div className="header">
              <form onSubmit={this.addItem}>
                <input type="text" className="form-control" placeholder="Enter Something" ref={(a) => this._inputElement = a}/>
                <button className="btn btn-danger" type="Submit">Submit</button>
              </form>
              <div><h1>{this.props.name}</h1></div>
              
            </div>
            <Item entries ={this.state.item} delete={this.deleteItem}/>
        </div>
      )
    }
}
export default Todolist