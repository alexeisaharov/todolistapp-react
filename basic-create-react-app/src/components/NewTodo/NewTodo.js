import React, {Component} from 'react'
import TextField from 'material-ui/TextField'
import TodoRepo from '../TodoRepo/TodoRepo'
import './NewTodo.css'

const RETURN_KEY_CODE = 13;

class NewTodo extends Component {

    //Handle onKeyDownEvent
    onKeyDown(event) {
        if (event.keyCode === RETURN_KEY_CODE) {
            let text = event.target.value.trim();
            if (text === '') {
                return;
            }

            TodoRepo.add(event.target.value.trim());

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
        )
    }
}

export default NewTodo;