import React from "react";
import UserList from "./userList";
import { arithmeticAverage } from "./helpers";

function ArithmeticAverageCalculation() {
    
    const calculateArithmeticAverage = () => {
        const result = arithmeticAverage(UserList);
        document.getElementById("arithmetic_result").innerHTML = `the average is: ${result}`;
    }
    
    return (
        <button type="button"
        onClick={calculateArithmeticAverage}
        >Calculate arithmetic average
        </button>
    );
}

export { ArithmeticAverageCalculation };