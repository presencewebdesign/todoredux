export const setSearchText = (searchText) => {
    return {
        type: 'SET_SEARCH_TEXT',
        searchText
    };
};
export const setTodo = (setTodo) => {
    return {
        type: 'SET_NEW_TODO',
        setTodo
    };
};
export const toggleShowCompleted = () => {
    return {
        type: 'TOGGLE_SHOW_COMPLETED'
    };
};
export const addTodo = (text) => {
    return {
        type: 'ADD_TODO',
        text
    };
};
export const addTodos = (todos) => {
    return {
        type: 'ADD_TODOS',
        todos
    };
};
export const toggleTodo = (id) => {
    return {
        type: 'TOGGLE_TODO',
        id
    };
};
