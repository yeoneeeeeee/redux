/* 
    Fragments?

    return되는 컴포넌트를 감싸는 틀

    컴포넌트를 단위로 요소를 return할때는 반드시 단일한 1개의 요소만 반환할수 있기 
    때문에, 태그요소를 반환하고 싶다면 반드시 하나의 html요소 태그로 감싸주어야 한다.

    반환시키고자하는 값이 여러개인경우 에러가 발생할수 있는데, 이때 Fragements태그를
    활용하면 불필요한 html코드를 없애고 여러개의 요소를 반활할수 있다.

    ex) function App3(){
            return(
                // <Pure/>
                // <Shallow/>
                <div>
                    <TestUseState/>
                    <TestUseEffect/>
                    <TestUseCallback/>
                </div>
                div로 묶으면 여러개의 컴포넌트를 하나의 컴포넌트로 묶어서 실행시킬수 있지만
                불필요한 div를 사용하게 되므로 좋은 방법이 아님.
                Fragement코드를 사용하면 html코드 없이 깔끔하게 작성가능
            )
        }
*/
function Fragements(){
    return(
        // <React.Fragment>
        //     <td>리액트1</td>
        //     <td>리액트2</td>
        // </React.Fragment>

        //;좀 더 간편한 방법
        <>
            <td>리액트11</td>
            <td>리액트22</td>
        </>
    )
}

export default Fragements;