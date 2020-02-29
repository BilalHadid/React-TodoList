import React,{Component} from 'react'

class TodoItem extends Component{
    constructor(props){
        super(props);

        this.createTasks = this.createTasks.bind(this)

    }
    createTasks(item){
        return <li onClick={() => this.delete(item.key)} key={item.key}>{item.text}          <span>X</span></li>
    }
    delete(key){
        console.log(key)
        this.props.delete(key)
    }
    render(){
        let todoEntries = this.props.entries
        let listItem = todoEntries.map(this.createTasks)

        return(
            <ul className="theList">
                { listItem    }

            </ul>
        )
    }
}
export default TodoItem