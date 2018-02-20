import AppView from "../Views/AppView.jsx";
import { Container } from "flux/utils";
import React, { Component } from "react";
import TodosStore from "../Stores/TodosStore.jsx";
import Actions from "../Actions/Actions";

class AppContainer extends Component {
    static getStores() {
        return [TodosStore];
    }

    static calculateState(prevState) {
        return {
            todos: TodosStore.getState(),
            onAddTodo: Actions.addTodo,
            onRemoveTodo: Actions.removeTodo
        };
    }

    render() {
        return <AppView todos={this.state.todos}
                        onAddTodo={this.state.onAddTodo} 
                        onRemoveTodo={this.state.onRemoveTodo} />;
    }
} 

export default Container.create(AppContainer);