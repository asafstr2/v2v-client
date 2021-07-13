import { ADD_BUBBLE, SET_FILTER } from "./actionTypes";

let nextTodoId = 0;

export const addTodo = content => ({
    type: ADD_BUBBLE,
    payload: {
        id: ++nextTodoId,
        content
    }
});

export const setFilter = filter => ({ type: SET_FILTER, payload: { filter } });
