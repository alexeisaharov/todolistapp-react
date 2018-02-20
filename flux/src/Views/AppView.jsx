import React, { Component } from "react";
import NewTodo from "../Components/NewTodo/NewTodo.jsx";
import TodoList from "../Components/TodoList/TodoList.jsx";

class AppView extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <NewTodo onAddTodo={this.props.onAddTodo} />
                <TodoList
                    todos={this.props.todos}
                    onRemoveTodo={this.props.onRemoveTodo}
                />
            </div>
        )
    }
}

export default AppView;