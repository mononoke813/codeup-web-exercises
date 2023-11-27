// CREATE THE FETCH-PROMISE-RESPONSE
//build fetch which starts with a url and options
// inside options you need your method and headers
// return fetch with the url and options as the parameters
// 1st .then needs to make the response as an anon function and return the response in whatever way you want it (like json for example)
// 2nd .then outputs the data or variable or array that you are working with. i.e. if doing tools -> data = tool; array of pokemon -> data = pokemon; film titles -> data = film.
//  IT REQUIRES A RETURN
// .catch lets you see any errors/reasons why fetch isn't working

//inside IIFE: function with declared parameter .then of the data => {.log (data)}

"use strict";
// TODO: Create an AJAX GET request for the file under data/inventory.json

// TODO: Take the data from inventory.json and append it to the products table
//       HINT: Your data should come back as a JSON object; use console.log() to inspect
//             its contents and fields
//       HINT: You will want to target #insertProducts for your new HTML elements


const createToolElement = (tool) => {
    const {title, quantity, categories, price,} = tool;
    
    const toolElement = document.createElement("tr");
    // toolElement.classList.add("to-do-item", "list-group-item", "d-flex", "justify-content-between", "align-items-center");
    toolElement.innerHTML = `
                            <td>${title}</td>
                            <td>${quantity}</td>
                            <td>${categories}</td>
                            <td>${price}</td>
                            <td>
                                    <button class="btn btn-sm btn-danger" data-delete>Delete</button>
                                </td>
    `;
    const deleteBtn = toolElement.querySelector("button[data-delete]");
    deleteBtn.addEventListener('click', e => {
        toolElement.remove();
    });
    return toolElement;
};


const getTools = () => {
    const url = "./data/inventory.json";
    const options = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    };
    return fetch(url, options)
        .then((response) => {
            return response.json();
        })
        .then(tool => {
            console.log(tool);
            return tool;
        })
        .catch(error => {
            console.log(error);
        })
};

// const createToolElement = (tool, tools) => {
// };

const updateToolsElements = (tools) => {
    document.querySelector("#tools").innerHTML = "";
    for (let tool of tools) {
        renderToolElement(tool);
    }
    // createToolElement(tools);
};

//MAIN
(() => {
    createToolElement("saw", 5, 5, "things that cut");
    // updateToolsElements(tools);
})();