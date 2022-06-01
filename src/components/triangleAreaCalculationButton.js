import React from "react";

function TriangleAreaCalculationButton() {

    const triangleArea = (base, height) => (base * height) / 2;
    
    const calculateTriangleArea = () => {
        const valueBase = document.getElementById("triangle_base").value;
        const valueHeight = document.getElementById("triangle_height").value;
        const area = triangleArea(valueBase, valueHeight);
        document.getElementById("triangle_result").innerHTML = `area: ${area} cm`;
        document.getElementById("triangle_base").value = ''
        document.getElementById("triangle_height").value = ''
        document.getElementById("triangle_side1").value = ''
        document.getElementById("triangle_side2").value = ''
    }

    return (
        <button type="button"
        onClick={calculateTriangleArea}
        >Calculate Area</button>
    );
}

export { TriangleAreaCalculationButton };