import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../../../Actions/ActionCreators.js'
import TextField from 'material-ui/TextField'
import './NewTodo.css'

const RETURN_KEY_CODE = 13; // Code of ENTER key on your keyboard

let NewTodo = ({ dispatch }) => {
    return (
        <div className='NewTodo_spacing'>
            <p className='NewTodo-Question_prompt'>What do you want to get done?</p>
            <TextField
                onKeyDown={event => {
                    if (event.keyCode === RETURN_KEY_CODE) {
                        let text = event.target.value.trim(); // Remove all spaces
                        if (text === '') {
                            return;
                        }
                        
                        dispatch(addTodo(text));
                        event.target.value = '';
                    }
                }}
                hintText="New todo"
                fullWidth={true}
            />
        </div>
    )
}

NewTodo = connect()(NewTodo);

export default NewTodo;