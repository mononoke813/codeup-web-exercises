const createListElement = (toDo, toDos) => {
    const listElement = document.createElement("li");
    listElement.classList.add("to-do-item", "list-group-item", "d-flex", "justify-content-between", "align-items-center")
    listElement.innerHTML = `
        <p class="m-0">${toDo}</p>
        <button class="btn btn-danger" data-done>Done</button>
    `;
    const doneBtn = listElement.querySelector("button[data-done]");
    doneBtn.addEventListener('click', e => {
        listElement.remove();
    });
    document.querySelector("#to-do-list").appendChild(listElement);
};

const updateList = toDos => {
    document.querySelector("#to-do-list").innerHTML = "";
    for (let toDo of toDos) {
        createListElement(toDo);
    }
}


(() => {
    const toDos = ["wash the dishes", "clean the sink"];
    const userInput = document.querySelector('#to-do');
    const addBtn = document.querySelector('button#input');
    updateList(toDos);
    addBtn.addEventListener('click', e => {
        e.preventDefault();
        toDos.push(userInput.value);
        updateList(toDos);
        userInput.value = "";
    })

})();
