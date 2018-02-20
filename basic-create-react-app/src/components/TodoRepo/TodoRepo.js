import TodoModel from '../Models/TodoModel'

const URL = 'http://localhost:3001/api/todos'

const USE_STUB = true;

//Hardcoded repository (in memory)
const todos = [
    new TodoModel(1, 'Buy Milk'),
    new TodoModel(2, 'Go to work'),
    new TodoModel(3, 'Return to home'),
    new TodoModel(4, 'Walk with the dog')
]

function getAll() {
    if (USE_STUB) {
        return new Promise((resolve => {
            resolve(todos)
        }));
    } else {
        return new Promise((resolve, reject) => {
            fetch(URL)
                .then(response => response.json())
                .catch(error => console.log(error, '---', reject))
                .then(response => resolve(response));
        });
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

class TodoRepo {
    constructor() {
        this.idCount = getAll().then(data => {
            this.idCount = Math.max.apply(Math, data.map(todo => todo.id))
        });
        this.subscribers = [];
    }

    add(todoText) {
        this.idCount++;
        let todo = new TodoModel(this.idCount, todoText);

        add(todo).then(() => {
            this.publish({
                actionType: 'add',
                data: todo
            });
        });

        return this.idCount;
    }

    remove(todo) {
        remove(todo).then(() => {
            this.publish({
                actionType: 'remove',
                data: todo
            });
        });
    }

    getAll() {
        return getAll();
    }

    publish(action) {
        this.getAll().then((data) => {
            action.todos = data;
            this.subscribers.forEach((subscriber) => {
                subscriber(action);
            });
        });
    }

    subscribe(subscriber) {
        this.subscribers.push(subscriber);
    }
}

export default new TodoRepo();