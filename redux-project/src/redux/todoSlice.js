import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name : 'todoList',
    initialState : { //;state초기값 넣어주기
        todos : []
    },
    reducers : {
        addTodos : (state, action) => { //;state는 항상 이 위치 그대로, action이 자동으로 두번째 매개변수로 됨.
            console.log(action); // addTodos에 두번째 매개변수로
            // view에서 호출한 inputValue가 넘어옴(payload의 값으로써)
            const newTodo = {
                todo : action.payload,
                id   : state.todos.length
            }
            // state에 newTodo를 추가한후 스토어에 값을 전달.
            return {...state, todos : [...state.todos, newTodo]};   //...state로 원래 키값 유지해주면서 값을 넘겨줌
        },
        deleteTodos : (state, action) => {
            const updatedTodos = state.todos.filter((todo) => todo.id !== action.payload);
            console.log(action);
            return {...state, todos : updatedTodos}; //;전개연산자 사용 이유? state는 application당 1개이므로 다른 곳에도 state값이 존재할 수 있으므로 ...state로 표기
        }
    }
});

export const { addTodos, deleteTodos } = todoSlice.actions; //;reducers는 actions에 들어감. 즉 actions라고 할 수 있다.
export default todoSlice.reducer;