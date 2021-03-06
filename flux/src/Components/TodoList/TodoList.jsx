import React, { Component } from 'react';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import ChevronRightIcon from 'material-ui/svg-icons/navigation/chevron-right';
import './TodoList.css';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = { todoList: this.props.todos };

        this.handleClick = this.handleClick.bind(this);
    }

    render() {
        return(
            <List className="TodoList">
                {
                    this.props.todos.map((todo) => {
                        return <ListItem
                            onMouseDown={this.handleClick.bind(null, todo)}
                            key={todo.id}
                            leftIcon={<ChevronRightIcon/>}
                            primaryText={todo.text}
                            secondaryText={todo.timestamp}
                        />
                    })
                }
            </List>
        )
    }

    handleClick(todo) {
        if (todo) {
            this.props.onRemoveTodo(todo);
        }
    }
}

export default TodoList;