import React from 'react';
import { Provider } from 'react-redux';
import TodoApp from './component/TodoApp';
import TodoApi from './component/api/TodoApi';
import * as actions from './actions';
import configureStore from './store/configureStore';
import './App.css';
import './foundation.min.css';

const store = configureStore();

// Subscribe to changes
store.subscribe(() => {
    const state = store.getState();
    console.log('New state', store.getState());
    TodoApi.setTodos(state.todos);
});

const initialTodos = TodoApi.getTodos();
store.dispatch(actions.addTodos(initialTodos));


export default function App() {
    return (
        <Provider store={store}>
            <TodoApp />
        </Provider>
    );
}
