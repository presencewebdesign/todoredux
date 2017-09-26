import { compose, createStore, combineReducers } from 'redux';
import { searchTextReducer, showCompletedReducer, todosReducer, setTodoReducer } from '../reducers/index';

export default () => {
    const reducer = combineReducers({
        searchText: searchTextReducer,
        showCompleted: showCompletedReducer,
        todos: todosReducer,
        settodo: setTodoReducer,
    });

    let store = createStore(reducer, compose(
        window.devToolsExtension ? window.devToolsExtension() : f => f
    ));

    return store;
};