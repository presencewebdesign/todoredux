import React from 'react';
import { connect } from 'react-redux';
import Todo from './Todo';

const TodoList = (props) => {
    const { todos } = props;
    const renderTodos = () => todos.map(todo => (
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
            todos: state.todos
        };
    }
)(TodoList);
