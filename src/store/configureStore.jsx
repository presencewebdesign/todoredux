import { dispatch, compose, createStore, combineReducers } from 'redux';
import { searchTextReducer, showCompletedReducer, todosReducer } from '../reducers/index';

export default () => {
    const reducer = combineReducers({
        searchText: searchTextReducer,
        showCompleted: showCompletedReducer,
        todos: todosReducer,
    });

    let store = createStore(reducer, compose(
        window.devToolsExtension ? window.devToolsExtension() : f => f
    ));

    return store;
};