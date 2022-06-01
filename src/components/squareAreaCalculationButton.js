import React from "react";

function SquareAreaCalculationButton() {
    const squareArea = (side) =>  side * side;
    const calculateSquareArea = () => {
        const value = document.getElementById("square_side").value;
        const area = squareArea(value);
        document.getElementById("square_result").innerHTML = `area: ${area} cm`
        document.getElementById("square_side").value = "";
    }

    return (
        <button type="button"
        onClick={calculateSquareArea}
        >Calculate Area</button>
    );
}

export { SquareAreaCalculationButton };