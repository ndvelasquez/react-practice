import React from "react";

function CalculationResult(props) {
    return (
        <div className="form__group">
            <p className="form__field--center" id={props.name}></p>
        </div>
    );
}

export { CalculationResult };