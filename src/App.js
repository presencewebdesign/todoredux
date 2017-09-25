import React from 'react';
import { Provider } from 'react-redux';
import TodoApp from './component/TodoApp';
import * as actions from './actions';
import configureStore from './store/configureStore';
import './App.css';
import './foundation.min.css';

const store = configureStore();

// Subscribe to changes
store.subscribe(() => {
    console.log('New state', store.getState());
});

store.dispatch(actions.addTodo('Clean the car'));
store.dispatch(actions.setSearchText('yard'));
store.dispatch(actions.toggleShowCompleted());


export default function App() {
    return (
        <Provider store={store}>
            <TodoApp />
        </Provider>
    );
}
