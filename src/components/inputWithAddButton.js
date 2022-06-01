import React from "react";
import { FillArrayButton } from "./fillArrayButton";

function InputWithAddButton(props) {
    return (
        <div className="form__group">
            <label htmlFor={props.name}>
                <span>{props.description}</span>
                <input type={props.type} name={props.name} id={props.name} required />
            </label>
            <FillArrayButton />
        </div>
    );
}

export { InputWithAddButton }