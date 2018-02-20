import React from 'react';
import NewTodo from '../Container/NewTodo/NewTodo.jsx';
import VisibleTodoList from '../Container/VisibleTodoList.js';
import AppBar from 'material-ui/AppBar';
import PropTypes from 'prop-types';
import IconButton from 'material-ui/IconButton';
import StarIcon from 'material-ui/svg-icons/toggle/star';
import getMuiTheme from 'material-ui/styles/getMuiTheme'

class App extends React.Component{
    getChildContext(){
        return {
            muiTheme: getMuiTheme()
        };
    }

    render() {
        return(
            <div>
                <AppBar
                    iconElementLeft={<IconButton><StarIcon/></IconButton>}
                    title="TodoList"
                />
                <NewTodo />
                <VisibleTodoList/>
            </div>)
    }
}

App.childContextTypes = {
    muiTheme: PropTypes.object
};

export default App;