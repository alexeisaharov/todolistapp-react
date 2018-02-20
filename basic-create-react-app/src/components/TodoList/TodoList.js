import React, { Component } from 'react'
import List from 'material-ui/List/List'
import ListItem from 'material-ui/List/ListItem'
import ChevronRightIcon from 'material-ui/svg-icons/navigation/chevron-right'
import TodoRepo from '../TodoRepo/TodoRepo'
import './TodoList.css'

class TodoList extends Component {

    constructor() {
        super();
        this.state = { todoList: [] };
    }

    //Use this step of lifecycle to get data from server
    componentDidMount() {

        //Call getAll to fill todoList
        TodoRepo.getAll().then((data) => {
            this.setState({
                todoList: data
            })
        });

        //Subscribe to TodoRepo for getting notifications about changing todos
        TodoRepo.subscribe((action) => {
            this.setState({
                todoList: action.todos
            })
        })
    }

    render() {
        //Map current state of todoList to new array of ListItem controls
        const listItems = this.state.todoList.map(this.create.bind(this));

        return (<List className='TodoList'>
                    {listItems}
                </List>)
    }

    //Experimental syntax of creating function for handling mouse click events
    handleClick(note) {
        TodoRepo.remove(note)
    }

    //Create and bind method here
    create = (todo) => {
        return (<ListItem
                    onMouseDown={this.handleClick.bind(null, todo)}
                    key={todo.id}
                    leftIcon={<ChevronRightIcon />}
                    primaryText={todo.text}
                    secondaryText={todo.timestamp}>
                </ListItem>
        )
    }
}

export default TodoList