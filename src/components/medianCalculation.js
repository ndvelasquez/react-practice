import React from "react";
import UserList from "./userList";
import { arithmeticAverage, isPar } from "./helpers";

function MedianCalculation() {
    const median = (list) => {
        // First I order the list in ascending order
        list.sort((a, b) => a - b);
        // Second, I get the value in the middle of the list
        const halfListPosition = parseInt(list.length / 2);
        // I declare the variable to store the median
        let median;
    
        if (isPar(halfListPosition)) {
            let element1 = list[halfListPosition];
            let element2 = list[halfListPosition - 1];
            median = arithmeticAverage([element1, element2]);
            return median;
        }
        else {
            median = list[halfListPosition];
            return median;
        }
    }

    /* To Calculate the median */
    const calculateMedian = () => {
        const result = median(UserList);
        document.getElementById("arithmetic_result").innerHTML = `the median is: ${result}`;
    }
    
    return (
        <button type="button"
        onClick={calculateMedian}
        >Calculate Median</button>
    );
}

export { MedianCalculation };