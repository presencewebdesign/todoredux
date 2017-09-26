import React from 'react';
import { connect } from 'react-redux';
import Todo from './Todo';
import TodoApi from './api/TodoApi';
const TodoList = (props) => {
    const { todos, showCompleted, searchText } = props;
    const renderTodos = () => TodoApi.filterTodos(
        todos, showCompleted, searchText,
    ).map(todo => (
        <Todo
            key={todo.id}
            {...todo}
        />
    ));
    return (
        <div>
            {renderTodos()}
        </div>
    );
};

export default connect(
    (state) => {
        return{
            todos: state.todos,
            showCompleted: state.showCompleted,
            searchText: state.searchText,
        };
    }
)(TodoList);
