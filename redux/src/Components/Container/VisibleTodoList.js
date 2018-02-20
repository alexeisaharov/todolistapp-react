import { connect } from 'react-redux'
import { removeTodo } from '../../Actions/ActionCreators.js'
import TodoList from '../Presentational/TodoList/TodoList.jsx'

const getTodos = todos => {
    return todos;
}

const mapStateToProps = state => {
    return {
        todos: getTodos(state.todos)
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onTodoClick: id => {
            dispatch(removeTodo(id));
        }
    };
}

const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);

export default VisibleTodoList;