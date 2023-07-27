/*
    middle?
    미들웨어란 액션을 dispatch함수로 전달하고 리듀서가 실행되기전, 실행된후
    처리되는 기능.

    redux패키지에서 지원하는 applyMiddleware함수를 사용하면 간편하게 구현
    가능하다.
*/

import { applyMiddleware } from "redux";

const CallMiddleware = store => nextMiddle => action => {
    //;매개변수를 받아 순차적으로 실행시킴
    console.log('1. reducer 실행전');
    console.log('2. action.type : '+action.type+" , store "+store.getState().data);
    let result = nextMiddle(action); //reducer를 통해 액션이 스토어에 전달
    console.log("3. reducer 실행후 ");
    console.log('4. action.type : '+action.type+" , store "+store.getState().data);
    return result;
}

export default CallMiddleware;