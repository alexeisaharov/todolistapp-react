import ActionTypes from "./ActionTypes";
import TodosDispatcher from "../Dispatchers/TodosDispatcher";

const Actions = {
    addTodo(todo) {
        TodosDispatcher.dispatch({
            type: ActionTypes.ADD_TODO,
            todo
        });
    },
    removeTodo(todo) {
        TodosDispatcher.dispatch({
            type: ActionTypes.REMOVE_TODO,
            todo
        });
    }
};

export default Actions;