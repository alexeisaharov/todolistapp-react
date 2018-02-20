import { ADD_TODO, REMOVE_TODO } from '../Actions/ActionTypes.js'

const initialState = {
    todos: [ {
        id: 0,
        text: 'Buy Milk'
    }, {
        id: 1,
        text: 'Go to work'
    }, {
        id: 2,
        text: 'Return to home'
    }, {
        id: 3,
        text: 'Walk with the dog'
    }]
}

// Reducer todoApp specify how the application state changes in response to actions sent to the store.
function todoApp(state = initialState, action) {
    switch(action.type) {
        case ADD_TODO:
            return Object.assign({}, state, {
                todos: [
                    ...state.todos,
                    {
                        id: action.id,
                        text: action.text
                    }
                ]
            });
        case REMOVE_TODO:
            return Object.assign({}, state, {
                todos: state.todos.filter(todo => todo.id !== action.id)
            });
        default:
            return state;
    }
};

export default todoApp;