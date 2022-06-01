import React from "react";
import UserList from "./userList";

function ModeCalculation() {
    /*Calculate mode */
    const mode = (list) => {
        /* I create an object that will contain the number of times the array element is repeated */
        const listCount = {};
        /* I add and add each element of the array to the object */
        list.map(element => listCount[element] ? listCount[element] += 1 : listCount[element] = 1);
        /* I parse the object with the elements into an array and sort them by the quantity of each element in ascending order */
        const listArray = Object.entries(listCount).sort((a,b) => a[1] - b[1]);
        /* I create the variable that will show me the mode */
        const mode = listArray[listArray.length - 1];
        return mode;
    }

    const calculateMode = () => {
        const result = mode(UserList);
        document.getElementById("arithmetic_result").innerHTML = `the mode is: ${result}`;
    }

    return (
        <button type="button"
        onClick={calculateMode}
        >Calculate Mode</button>
    )
}

export { ModeCalculation };