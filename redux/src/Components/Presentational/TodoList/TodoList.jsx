import React from 'react';
import PropTypes from 'prop-types';
import Todo from '../Todo.jsx';
import List from 'material-ui/List/List'
import './TodoList.css'

const TodoList = ({ todos, onTodoClick }) => {
    return (
        <List className='TodoList'>
        {
            todos.map(todo => (
                <Todo key={todo.id} {...todo} handleClick={ () => onTodoClick(todo.id)} />
            ))
        }
        </List>
    )
}

TodoList.propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired
        }).isRequired
    ).isRequired,
    onTodoClick:PropTypes.func.isRequired
}

export default TodoList;