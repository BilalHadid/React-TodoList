import React, { Component } from "react";


// DONT ADD MULTIPLE RETURN STATEMENTS TO THE UI 
class TodoItem extends Component {
  render() {
    return (
      <ul className="theList">
        {this.props.entries.map(item => (
          <li onClick={() => this.props.delete(item.key)} key={item.key}>
            {item.text} <span>X</span>
          </li>
        ))}
      </ul>
    );
  }
}
export default TodoItem;
