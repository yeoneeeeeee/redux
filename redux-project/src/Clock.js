/*
    useSelector() ? 리덕스 저장소에 저장된 특정 상태를 얻어올때 사용

    useDispatch() ? 액션을 저장소로 운반하는 역할
                    Reducer의 두번째 매개변수로 action객체를 전달시켜줌
*/
import { useSelector , useDispatch } from "react-redux";
import { useEffect } from "react";

export default function Clock(){
    // 초기값으로 셋팅해두었던 today상태값 얻어오기
    const today = useSelector( (state) => state.today ); //; ({today}) => today 구조분해할당으로 이렇게도 쓰임.

    const dispatch = useDispatch(); // dispatch함수 얻어오기.

    /*
        interval함수를 활용하여 dispatch함수를 호출함
        새로운 시간을 설정하는 액션 객체를 리듀서에 두번째 매개변수로 전달     //; 01_Redux.js파일에 있는 'const rootReducer = (state = initialAppState, action) => {' 부분에서 'action'부분
    */
    useEffect( () => {
        const id = setInterval(
            () => {
                dispatch( {type : "setToday" , today: new Date()}); //;reducer가 store로 전달을 해준다. 01_Redux.js파일에 있는 today를 불러와서 시간이 흐름
                dispatch( {type : "action_type2" , today: new Date()}); //;reducer가 store로 전달을 해준다. 01_Redux.js파일에 있는 불러올 today가 없어서 시간이 흐르지 않음.
            } //; 시간초 안주면 최소 0.1초 처리됨
        )
        return () => clearInterval(id)
    },[])

    // useSelector훅을 사용하여 현재시간을 저장소에서 꺼낸후 화면에 출력하기.
    return(
        <div className="flex flex-col items-center justify-center mt-16">
            <h1 className="text-5xl">Clock</h1>
            <p className="mt-4 text-3xl">{today.toLocaleTimeString()}</p>
            <p className="mt-4 text-2xl">{today.toLocaleDateString()}</p>
        </div>
    )

}