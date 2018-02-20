import React from 'react'
import PropTypes from 'prop-types'
import ListItem from 'material-ui/List/ListItem'
import ChevronRightIcon from 'material-ui/svg-icons/navigation/chevron-right'

const Todo = ({ handleClick, text }) => {
    return (
        <ListItem
            onMouseDown={handleClick}
            leftIcon = {<ChevronRightIcon />}
            primaryText = {text}>
        </ListItem>
    )
}

Todo.propTypes = {
    handleClick: PropTypes.func.isRequired, 
    text: PropTypes.string.isRequired
}

export default Todo;