import React, {Component} from 'react'
import TodoList from '../TodoList/TodoList'
import NewTodo from '../NewTodo/NewTodo'
import './Container.css'

class Container extends Component {

    render() {
        return (<div className='Container'>
                    <NewTodo/>
                    <TodoList/>
                </div>)
    }
}

export default Container;