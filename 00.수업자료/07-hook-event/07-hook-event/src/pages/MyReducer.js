import React from 'react';

function setCounterValue(state, action) {
    console.log("[%o] %o", action, state);

    switch (action) {
        case 'HELLO':
            return state + 1;
        case 'WORLD':
            return state - 1;
        default: 
            return 0;
    }
}

const MyReducer = () => {
    /**
     * 상태값(myCounter)와 상태값 갱신함수 (setMyCounter)를 정의한다.
     * ->setCounterValue: setMyCounter()가 호출됨에 따라 간접적으로 호출될 함수
     * -> 0 : myCounter에 저장될 초기값
     * 
     * setMyCounter()함수에게 action값을 전달하면
     * React내부적으로 setCounterValue()함수가 호출되며,
     * 상태값으로 지정된 myCounter와 "HELLO" | "WORLD"가 파라미터로 전달된다.
     */
    const [myCounter, setMyCounter] = React.useReducer(setCounterValue, 0)
    return (
        <div>
            <h2>MyReducer</h2>
            <p>현재 카운트 값: {myCounter}</p>
            <button type="button" onClick={e=> setMyCounter('HELLO')}>UP</button>
            <button type="button" onClick={e=> setMyCounter('WORLD')}>DOWN</button>
            <button type="button" onClick={e=> setMyCounter('')}>RESET</button>
        </div>
    )
}

export default MyReducer;