import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Input from './form/Input';
import Check from './form/Check';

class TodoSearch extends Component {
    render() {
        return (
            <div>
                <Input
                    name="searchText"
                    type="text"
                    state={this.state}
                    validate={this.validate}
                    placeholder="Search Todos..."
                    onChange={props.onChange}
                />
                <Check
                    name="isComplete"
                    type="checkbox"
                    label="Show Completed"
                    state={this.state}
                    handleSearch={this.handleSearch}
                    checked={this.isComplete}
                />
            </div>
        );
    }
}

export default connect(
    (state) => {
        return {
            showCompleted: state.showCompleted,
            searchText: state.searchText
        };
    }
)(TodoSearch);
