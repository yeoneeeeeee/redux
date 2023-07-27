import {useState , useCallback} from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { addTodos, deleteTodos } from '../redux/todoSlice';

import { useRef } from 'react';

function TodoList(){

    //useState를 활용하여 todolist를 state에 저장
    const todos = useSelector((state) => state.todoList.todos);

    const inputRef = useRef(null);

    const dispatch = useDispatch();

    // 투두리스트 추가기능
    const handleAddTodo = useCallback(() => {
        const inputValue = inputRef.current.value;
        dispatch(addTodos(inputValue));
        inputRef.current.value = "";
    },[]);

    // 완료한 투두리스트 삭제기능.
    const handleDeleteTodo = (id) => {
        dispatch(deleteTodos(id));
    };

    return(
        <div>
            <h2>Todo List</h2>
            <input type="text" ref={inputRef}/>
            <button onClick={handleAddTodo}>추가</button>
            <ul>
                {
                    todos.map( (item) => {                        
                        return <li key={item.id}>
                                {item.todo}
                                <a onClick={() => handleDeleteTodo(item.id)}>💕</a>
                            </li>
                    })
                }
            </ul>
        </div>
    )
}

export default TodoList;