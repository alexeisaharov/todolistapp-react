import React, {Component} from 'react'
import TextField from 'material-ui/TextField'
import TodoRepo from '../../Repo/TodoRepo.js'
import './NewTodo.css'

const RETURN_KEY_CODE = 13; // Code of ENTER key on your keyboard

// Component for createing new todo and adding it into TodoList
class NewTodo extends Component {

    // Handle onKeyDownEvent
    onKeyDown(event) {

        if (event.keyCode === RETURN_KEY_CODE) {
            let text = event.target.value.trim(); // Remove all spaces
            if (text === '') {
                return;
            }

            TodoRepo.add(text);

            event.target.value = '';
        }
    }

    render() {
        return(
            <div className='NewTodo_spacing'>
                <p className='NewTodo-Question_prompt'>What do you want to get done?</p>
                <TextField
                    onKeyDown={this.onKeyDown}
                    hintText="New todo"
                    fullWidth={true}
                />
            </div>
        );
    }
}

export default NewTodo;