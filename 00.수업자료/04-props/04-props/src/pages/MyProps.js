import React from 'react';
import MyPropsSub from '../components/MyPropsSub';

const MyProps = () => {
    console.clear();

    return (
        <div>
            <h2>MyProps</h2>
            <MyPropsSub />
            <MyPropsSub name='민호' age='19' />
            <MyPropsSub name='수영' age={21} />
        </div>
    )
}

export default MyProps;