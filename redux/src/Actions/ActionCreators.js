import { ADD_TODO, REMOVE_TODO } from './ActionTypes.js'

let nextTodoId = 4;


// This is a functions that create actions.
// With type of action (from ActionTypes.js and some other data)
export const addTodo = text => {
    return { 
        type: ADD_TODO,
        id: nextTodoId++,
        text 
    }
}

export const removeTodo = id => {
    return { 
        type: REMOVE_TODO, 
        id
    }
}