import Immutable from "immutable";
import { ReduceStore } from "flux/utils";
import ActionTypes from "../Actions/ActionTypes";
import TodosDispatcher from "../Dispatchers/TodosDispatcher";
import TodoModel from "../Models/TodoModel";

class TodosStore extends ReduceStore {
    constructor() {
        super (TodosDispatcher);
    }

    getInitialState() {
        return Immutable.List.of( 
                                    new TodoModel(0, 'Buy Milk'),
                                    new TodoModel(1, 'Go to work'),
                                    new TodoModel(2, 'Return to home'),
                                    new TodoModel(3, 'Walk with the dog')
                                );
    }

    reduce(state, action) {
        switch (action.type) {
            case ActionTypes.ADD_TODO:
                if (action.todo) {
                    let newId = 0;
                    if (state.last()) {
                        newId = state.last().id + 1;
                    }

                    return state.push(new TodoModel(newId, action.todo));
                }
                return state;

            case ActionTypes.REMOVE_TODO:
                let index = state.findIndex((el) => el.id === action.todo.id);
                if (index > -1) {
                    return state.delete(index);
                }
                return state;

            default:
                return state;
        }
    }
}

export default new TodosStore();