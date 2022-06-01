import React from "react";
import UserList from "./userList";

function FillArrayButton() {
    const fillArray = () => {
        const userInput = document.getElementById("number_value");
        const userValue = parseInt(userInput.value);
        UserList.push(userValue);
        userInput.value = '';
        // insert the elements into HTML
        document.getElementById("number_list").innerHTML = `Number list: ${UserList}, `;
    }
    return (
        <button type="button"
        onClick={fillArray}
        >+ add number</button>
    );
}

export { FillArrayButton };