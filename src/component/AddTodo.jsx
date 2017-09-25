import React, { Component } from 'react';
import * as actions from '../actions';
import Input from './form/Input';

class AddTodo extends Component {
    render() {
        return (
            <div>
                {<pre>
                    {JSON.stringify(this.state, null, 4)}
                </pre>}
                <form onSubmit={this.handleSubmit}>
                    <Input
                        name="addtodo"
                        type="text"
                        state={this.state}
                        control={this.control}
                        validate={this.validate}
                        placeholder="Add Todos"
                    />
                    <button type="submit">Add Todo</button>
                </form>
            </div>
        );
    }
}

export default connect(
    (state) => {
        return{
            todos: state.todos
        };
    }
)(AddTodo);
