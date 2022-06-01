import React from "react";

function SquarePerimeterCalculationButton() {
    const squarePerimeter = (side) => side * 4;
    const calculateSquarePerimeter = () => {
        const value = document.getElementById("square_side").value;
        const perimeter = squarePerimeter(value);
        document.getElementById("square_result").innerHTML = `perimeter: ${perimeter} cm`;
        document.getElementById("square_side").value = "";
    }

    return (
        <button type="button"
        onClick={calculateSquarePerimeter}
        >Calculate Perimeter</button>
    );
}

export { SquarePerimeterCalculationButton };