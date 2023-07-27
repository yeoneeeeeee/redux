import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../redux/counterSlice';
import todosReducer from '../redux/todoSlice';


export default configureStore({
    reducer : {
        counter : counterReducer,     //;01_Redux.js의 const store = configureStore({ reducer : rootReducer , middleware:[] }); 와 같은 방식으로 이름 변경해준것임.
        todoList : todosReducer
    },
    middleware : []
});