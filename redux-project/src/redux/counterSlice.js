/*
    createSlice?
    리듀서 + 액션 생성
    리덕스에서 제공하는 함수로 리듀서와 action을 함께 생성해줄수 있다.
*/

import { createSlice } from "@reduxjs/toolkit";
/*
    createSlice? 반복적인 액션 생성작업을 줄여서 생산성을 향상시키기위해
    만들어진 함수

    [표현법]
    const 변수명 = createSlice({
        name : '리듀서의 이름',
        initialState : 초기화할 값
        reducers : {
            액션1 : () => {
                //상태변경로직
            },
            액션2 : () => {
                // 상태변경로직
            }
        }
    });
*/
const counterSlice = createSlice({   //; 매개변수가 필요없어서 생략한 상태임.
    name : 'counter',
    initialState : { //;객체형태로 전달
        value : 0
    },
    reducers : {                             //; 매개변수 넘겨주지 않아도 알아서 state값이 저장됨.
        increment : (state) => {    //; createSlice 함수가 실행될때 reducers의 increment,decrement 값이 담길것임.
            state.value += 1;       //; 이 값들이 아래의 actions에 담김.
        },
        decrement : (state) => {
            state.value -= 1;
        }
    }
});

export const {increment, decrement} = counterSlice.actions; //;구조분해할당

export default counterSlice.reducer;