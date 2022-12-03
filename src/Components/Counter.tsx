import React from 'react';

type  CounterPropsType =  {
    count: number
}

const Counter = ({count}: CounterPropsType ) => {
    return (
        <div className={count >= 5 ? "red" : ""}>{count}</div>
    );
};

export default Counter;