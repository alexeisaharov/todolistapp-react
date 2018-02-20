import React, { Component } from "react";
import Reflux from "reflux";
import NewTodo from "../Components/NewTodo/NewTodo.jsx";
import TodoList from "../Components/TodoList/TodoList.jsx";
import TodosStore from "../Stores/TodosStore.jsx";
import Actions from "../Actions/Actions.jsx";

class AppContainer extends Reflux.Component {
    constructor(props) {
        super(props);

        this.store = TodosStore;
    }

    render() {
        return (
            <div>
                <NewTodo onAddTodo={Actions.addTodo} />
                <TodoList
                    todos={this.store}
                    onRemoveTodo={Actions.removeTodo}
                />
            </div>
        )
    }
}

export default AppContainer;