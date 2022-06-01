import React from "react";

function TrianglePerimeterCalculationButton() {

    const trianglePerimeter = (base, side1, side2) => base + side1 + side2;

    const calculateTrianglePerimeter = () => {
        const valueSide1 = parseInt(document.getElementById("triangle_side1").value);
        const valueSide2 = parseInt(document.getElementById("triangle_side2").value);
        const valueBase = parseInt(document.getElementById("triangle_base").value);
        const perimeter = trianglePerimeter(valueBase, valueSide1, valueSide2);
        document.getElementById("triangle_result").innerHTML = `perimeter: ${perimeter} cm`;
        document.getElementById("triangle_base").value = ''
        document.getElementById("triangle_height").value = ''
        document.getElementById("triangle_side1").value = ''
        document.getElementById("triangle_side2").value = ''
    }

    return (
        <button type="button"
        onClick={calculateTrianglePerimeter}
        >Calculate Perimeter</button>
    );
}

export { TrianglePerimeterCalculationButton };