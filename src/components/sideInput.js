import React from "react";

function SideInput(props) {
    return (
        <div className="form__group">
            <label htmlFor={props.name}>
                <span>{props.description}</span>
                <input type={props.type} name={props.name} id={props.name} required />
            </label>
        </div>
    );
}

export { SideInput }