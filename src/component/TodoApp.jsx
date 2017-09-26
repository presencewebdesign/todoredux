import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { Button, Row, Column } from 'react-foundation';
import TodoList from './TodoList';
import Input from './form/Input';
import Check from './form/Check';

class TodoApp extends Component {
    constructor(props) {
        super(props);
        this.control = this.control.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    control(e) {
        const value = e.target.value;
        const name = e.target.name;
        this.setState({
            values: {
                ...this.state.values, // this takes all thats inside of this.state.values and puts it here - below you add the new data.
                [name]: value, // use [] to use a dynamic (variable) key
            },
        });
    }
    handleSubmit(e) {
        e.preventDefault();
        const todoText = this.props.settodo;
        if (todoText.length > 0) {
            this.props.dispatch(actions.addTodo(todoText));
        }
    }
    render() {
        return (
            <div>
                <div className="grid-center-example">
                    <div className="container">
                        <h1 className="page-title">Todo App</h1>
                        <Row className="display">
                            <Column small={11} medium={6} large={5}>
                                <Input
                                    name="searchText"
                                    type="text"
                                    state={this.state}
                                    placeholder="Search Todos..."
                                    onChange={(e) => {
                                        this.props.dispatch(actions.setSearchText(e.target.value));
                                    }}
                                />
                                <Check
                                    name="showCompleted"
                                    type="checkbox"
                                    label="Show Completed"
                                    state={this.state}
                                    onChange={() => {
                                        this.props.dispatch(actions.toggleShowCompleted());
                                    }}
                                />
                                <TodoList />
                                <form onSubmit={this.handleSubmit}>
                                    <Input
                                        name="settodo"
                                        type="text"
                                        state={this.state}
                                        control={this.control}
                                        placeholder="Add Todos"
                                        onChange={(e) => {
                                        this.props.dispatch(actions.setTodo(e.target.value));
                                    }}
                                    />
                                    <Button type="submit">Add Todo</Button>
                                </form>
                            </Column>
                        </Row>
                    </div>
                </div>

            {/*
            <TodoSearch
                onSearch={this.handleSearch}
            />
            <TodoList
                todos={filteredTodos}
                onToggle={this.handleToggle}
            />
            <AddTodo
                onAddTodo={this.handleAddTodo}
            /> */}

          </div>
        );
    }
}
export default connect(
    (state) => {
        return{
            todos: state.todos,
            settodo: state.settodo,
        };
    },
    (dispatch) => ({
        dispatch
    })
)(TodoApp);
