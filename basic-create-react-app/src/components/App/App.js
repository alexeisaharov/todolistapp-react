import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Container from '../Container/Container'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import StarIcon from 'material-ui/svg-icons/toggle/star';

class App extends Component {

    //Use it to push muiTheme to child objects
    getChildContext(){
        return {
            muiTheme: getMuiTheme()
        };
    }

    render() {
        return(
            <div>
                <AppBar
                    className='App'
                    iconElementLeft={<IconButton><StarIcon/></IconButton>}
                    title="TodoList"
                />
                <Container />
            </div>)
    }
}


App.childContextTypes = {
    muiTheme: PropTypes.object
};

export default App;