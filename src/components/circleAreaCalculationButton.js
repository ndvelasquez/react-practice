import React from "react";

function CircleAreaCalculationButton() {

    const circleArea = (radius) => (radius ** 2) * Math.PI;
    
    const calculateCircleArea = () => {
        const value = document.getElementById("radius").value;
        const area = circleArea(value);
        document.getElementById("circle_result").innerHTML = `area: ${area.toFixed(2)} cm`;
        document.getElementById("radius").value = '';
    }

    return (
        <button type="button"
        onClick={calculateCircleArea}
        >Calculate Area</button>
    );
}

export { CircleAreaCalculationButton };