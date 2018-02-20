import React, {Component} from 'react'
import TodoList from '../TodoList/TodoList.jsx'
import NewTodo from '../NewTodo/NewTodo.jsx'
import './Container.css'

// Our Container component include NewTodo and TodoList components.
// All component that returns in render method need to have one ROOT component.
// In this case we cannot return next:
// <NewTodo/>
// <TodoList/>
//
// Because it is a rule of React. And we have to wrap it into div.
// But if we want to render only one component,
// for example <TodoList/> - it will work. 
//And it is not obligatory to wrap it into div.

class Container extends Component {

    render() {
        return (<div className='Container'>
                    <NewTodo/>
                    <TodoList/>
                </div>)
    }
}

export default Container;