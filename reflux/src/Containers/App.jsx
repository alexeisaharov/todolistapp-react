import React, { Component } from "react";
import AppContainer from "../Containers/AppContainer.jsx";
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import PropTypes from 'prop-types';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import StarIcon from 'material-ui/svg-icons/toggle/star';

class App extends Component {

    getChildContext(){
        return {
            muiTheme: getMuiTheme()
        };
    }

    render()
    {
        return(
            <div>
                <AppBar
                    iconElementLeft={<IconButton><StarIcon/></IconButton>}
                    title="TodoList"
                />
                <AppContainer />
            </div>
        );
    }
}

App.childContextTypes = {
    muiTheme: PropTypes.object
};

export default App;