import React, { Component } from 'react'
import List from 'material-ui/List/List'
import ListItem from 'material-ui/List/ListItem'
import ChevronRightIcon from 'material-ui/svg-icons/navigation/chevron-right'
import TodoRepo from '../../Repo/TodoRepo.js'
import './TodoList.css'

class TodoList extends Component {

    constructor() {
        super();
        this.state = { todoList: [] }; // Internal state of compoment. This can't be shared to other component.
    }

    // Use this step of lifecycle to get data from server. It executes after render() method.
    componentDidMount() {

        // Call getAll to fill todoList
        TodoRepo.getAll().then((data) => {
            
            // Change element of state 'todoList' ONLY by using this notation! 
            // It is important for React components!
            // Never use this - this.state = { todoList: data } - because it will not work properly!
            this.setState({
                todoList: data
            })
        });

        // Subscribe to TodoRepo for getting notifications about changing todos
        TodoRepo.subscribe((action) => {
            // Callback will have been executed when TodoRepo execute method 'publish(action)'
            this.setState({
                todoList: action.todos
            });
        });
    }

    // 
    render() {
        // Map current state of todoList to new array of ListItem controls
        // by calling method create(todo)
        const listItems = this.state.todoList.map(this.create.bind(this));

        //Method render should has return with rendered element
        return (<List className='TodoList'>
                    {listItems}
                </List>
        );
    }

    //Handling of mouse click event
    handleClick(todo) {
        TodoRepo.remove(todo);
    }

    // Implementation of method for creating ListItem component
    create(todo) {
        return (<ListItem
                    onMouseDown={this.handleClick.bind(null, todo)}
                    key={todo.id}
                    leftIcon={<ChevronRightIcon />}
                    primaryText={todo.text}
                    secondaryText={todo.timestamp}>
                </ListItem>
        );
    }
}

export default TodoList;