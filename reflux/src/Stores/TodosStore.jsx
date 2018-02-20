import Reflux from "reflux";
import Immutable from "immutable";
import Actions from "../Actions/Actions.jsx";
import TodoModel from "../Models/TodoModel";

class TodosStore extends Reflux.Store {
    constructor() {
        super();
        this.state = { todos: [
                new TodoModel(0, 'Buy Milk'),
                new TodoModel(1, 'Go to work'),
                new TodoModel(2, 'Return to home'),
                new TodoModel(3, 'Walk with the dog')
            ]
        };

        this.listenTo(Actions.addTodo, this.onAddTodo);
        this.listenTo(Actions.removeTodo, this.onRemoveTodo);
    }

    onAddTodo(todo) {
        let newId = 0;
        for (let i = 0; i < this.state.todos.length; i++) {
            let id = this.state.todos[i].id;
            if (newId < id)
                newId = id;
        }

        newId++;

        let newState = this.state.todos.push(new TodoModel(newId, todo));

        this.setState({state: newState});
    }

    onRemoveTodo(todo) {
        let data = this.state.todos;
        let index = data.indexOf(todo);
        if (index > -1) {
            data.splice(index, 1);
            this.setState({todos: data});
        }
    }
}

export default TodosStore;