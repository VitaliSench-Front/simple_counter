import React from 'react';
import "./ButtonInc.css"

type buttonIncType = {
    name: string
    callback: () => void
    isDisabled: boolean
}

const ButtonInc = (props: buttonIncType) => {

    const onClickHandler = () => {
        props.callback()
    }

    return (
        <button disabled={props.isDisabled}
                className={props.isDisabled ? "opacity" : "button"}
                onClick={onClickHandler}>{props.name}</button>
    );
};

export default ButtonInc;