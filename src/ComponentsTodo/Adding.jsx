import React from "react";
import { Component } from "react";
import Item from "./Todoitem";

class Todolist extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todo: "",
      item: []
    };

    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }
  addItem(e) {
    e.preventDefault();
    if (this.state.todo) {
      this.setState((prevState) => ({
        item: prevState.item.concat({
          text: this.state.todo,
          key: Date.now()
        }),
        todo: ""
      }))
    } else {
      alert("Please Enter Something");
    }
  }

  deleteItem(key) {
    // Use arrow function as a array helper callback
    let filterItems = this.state.item.filter((item) => item.key !== key);
    this.setState({ item: filterItems });
  }

  render() {
    return (
      <div className="todolistMain">
        <div className="header">
          <form onSubmit={this.addItem}>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Something"
              value={this.state.todo}
              onChange={event => this.setState({ todo: event.target.value })}

            // Ref should only be used in rare case when you need to access the dom
            // use state to manage all the data inside the component
            // ref={a => (this._inputElement = a)}
            />
            <button className="btn btn-danger" type="Submit">
              Submit
            </button>
          </form>
        </div>
        <Item entries={this.state.item} delete={this.deleteItem} />
      </div>
    );
  }
}
export default Todolist;
