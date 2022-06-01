import React from "react";

function CirclePerimeterCalculationButton() {
    
    const circleDiameter = (radius) => radius * 2;

    const circlePerimeter = (radius) => circleDiameter(radius) * Math.PI;

    const calculateCirclePerimeter = () => {
        const value = document.getElementById("radius").value;
        const perimeter = circlePerimeter(value);
        document.getElementById("circle_result").innerHTML = `perimeter: ${perimeter.toFixed(2)} cm`;
        document.getElementById("radius").value = '';
    }

    return (
        <button type="button"
        onClick={calculateCirclePerimeter}
        >Calculate Perimeter</button>
    );
}

export { CirclePerimeterCalculationButton };