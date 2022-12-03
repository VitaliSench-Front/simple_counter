import React from 'react';
import "./ButtonRes.css"

type buttonResType = {
    name: string
    callback: () => void
    isDisabled: boolean
}

const ButtonRes = (props: buttonResType) => {

    const onClickHandler = () => {
        props.callback()
    }

    return (
        <button disabled={props.isDisabled}
                className={props.isDisabled ? "opacity" : "button"}
                onClick={onClickHandler}>{props.name}</button>
    );
};

export default ButtonRes;