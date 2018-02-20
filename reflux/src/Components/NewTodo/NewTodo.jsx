import React from "react";
import TextField from "material-ui/TextField";
import './NewTodo.css';

const RETURN_KEY_CODE = 13;

class NewTodo extends React.Component {

    constructor(props) {
        super(props);

        this.onKeyDown = this.onKeyDown.bind(this);
    }

    onKeyDown(event) {
        if (event.keyCode === RETURN_KEY_CODE) {
            let text = event.target.value.trim();
            if (text === '') {
                return;
            }

            this.props.onAddTodo(text);

            event.target.value = '';
        }
    }

    render() {
        return(
            <div className="NewTodo_spacing">
                <p className="NewTodo-Question_prompt">What do you want to get done?</p>
                <TextField
                    onKeyDown = {this.onKeyDown}
                    hintText = "New Todo"
                    fullWidth = {true}
                />
            </div>
        )
    }
}

export default NewTodo;