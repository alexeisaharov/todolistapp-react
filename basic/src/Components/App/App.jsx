import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Container from '../Container/Container.jsx'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import StarIcon from 'material-ui/svg-icons/toggle/star';

// App Component. Just a wrapper under other component.
// Think about it as a ROOT or MAIN component in our hierarchy of components.
class App extends Component {

    // Use it to push muiTheme to child objects.
    // Actually its a bad practice. Try not to use it in outher places.
    // Just need it for styles of material-ui components.
    getChildContext(){
        return {
            muiTheme: getMuiTheme()
        };
    }

    // This method render next two components:
    // AppBar - is completed component from material-ui.
    // Container - is our component that include all that we developed.
    render() {
        return(
            <div>
                <AppBar
                    iconElementLeft={<IconButton><StarIcon/></IconButton>}
                    title="TodoList"
                />
                <Container />
            </div>)
    }
}

// This method needs to define drained object to childrens
App.childContextTypes = {
    muiTheme: PropTypes.object
};

export default App;