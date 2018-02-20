import TodoModel from '../Models/TodoModel.js';

// Set it to false if you want to use local 'in memory' storage
// or set it to true if you want to use binding with backend
const USE_STUB = true; 

// URL of backendpart. Used in case when USE_STUBE equal true
const URL = 'http://localhost:3001/api/todos';

// Hardcoded repository (in memory) - will be refreshed when you refresh page
const todos = [
    new TodoModel(1, 'Buy Milk'),
    new TodoModel(2, 'Go to work'),
    new TodoModel(3, 'Return to home'),
    new TodoModel(4, 'Walk with the dog')
]

//Internal functions for executing calls to backend, or to work with storage in memory
function getAll() {

    if (USE_STUB) {
        return new Promise((resolve => {
            resolve(todos)
        }));
    }
    else {
        return new Promise((resolve, reject) => {
            fetch(URL)
                .then(response => response.json())
                .catch(error => console.log(error, '---', reject))
                .then(response => resolve(response));
        })
    }
}

function remove(todo) {

    if (USE_STUB) {
        for(let i = 0; i < todos.length; i++){
            if (todos[i].id === todo.id)
                todos.splice(i, 1);
        }

        return new Promise((resolve => {
            resolve(todos)
        }));
    } else {
        return new Promise((resolve, reject) => {
            fetch(URL + '/' + todo.id, {method: 'DELETE'})
                .then(response => {
                    if (response.status === 200) {
                        return response
                    } else {
                        throw new Error('Cannot execute remove operation')
                    }
                })
                .catch(error => console.log(error, '---', reject))
                .then(response => resolve(response));
        });
    }
}

function add(todo) {
    if (USE_STUB) {
        todos.push(todo);

        return new Promise((resolve => {
            resolve(todos);
        }));
    } else {
        return new Promise((resolve, reject) => {
            fetch(URL, {
                method: 'POST',
                body: JSON.stringify(todo),
                headers: new Headers({
                    'Content-Type': 'application/json'
                })
            })
                .then(response => response.json())
                .catch(error => console.log(error, '---', reject))
                .then(response => resolve(response));
        });
    }
}

// Proxy class for interaction with storage and controlling it
class TodoRepo {
    constructor() {
        // Initialize default state of class

        this.idCount = getAll().then(data => {
            this.idCount = Math.max.apply(Math, data.map(todo => todo.id))
        }); 

        // Collection of subscribers
        this.subscribers = [];
    }

    add(todoText) {
        this.idCount++;
        
        // Initialize new element of TodoModel using incoming parameters
        let todo = new TodoModel(this.idCount, todoText);

        // Execute call to internal function and handle promise with then(...)
        add(todo).then(() => {
            
            // When function add executed succesfully - need to notify subscribers about it
            this.publish({
                actionType: 'add',
                data: todo
            });
        });

        return this.idCount;
    }

    remove(todo) {
        remove(todo).then(() => {

            // When function remove executed succesfully - need to notify subscribers about it
            this.publish({
                actionType: 'remove',
                data: todo
            });
        });
    }

    getAll() {
        return getAll();
    }

    // Method to notify subscribers about changes
    publish(action) {
        this.getAll().then((data) => {
            action.todos = data;
            this.subscribers.forEach((subscriber) => {
                // Pass data to subscriber's callback
                subscriber(action);
            });
        });
    }

    // Call this method to add subscriber into internal collection
    subscribe(subscriber) {
        this.subscribers.push(subscriber);
    }

    // Also we can create method for unsubscribing. But we don't ned it now.
}

export default new TodoRepo();