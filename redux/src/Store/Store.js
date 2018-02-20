import { createStore } from 'redux';
import todoApp from '../Reducers/TodoApp.js';

let store = createStore(todoApp);