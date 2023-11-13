/* NODE METHODS FOR TRAVERSAL
 * - querySelector: crawl down the DOM tree, returns first match
 * - querySelectorAll: crawl down the DOM tree, returns all matches
 * - closest: crawl up the DOM tree, returns first match
 * - nextElementSibling: crawl sideways the DOM tree, returns following element
 * - previousElementSibling: crawl sideways the DOM tree, returns previous element
 * - parentElement: crawl up the DOM tree, returns parent element
 * - children: crawl down the DOM tree, returns all children elements
 * - firstElementChild: crawl down the DOM tree, returns first child element
 * - lastElementChild: crawl down the DOM tree, returns last child element
 */

(() => {
    const btnChanger = document.querySelector("#change-last-li");
    const liNums = document.querySelectorAll('[data-ul]');
    const h3Changer = document.querySelector('h3');


    btnChanger.addEventListener('click', e => {
        //const h3s = document.querySelectorAll('h3');
        //for(let h3 of h3s) {
        //h3.addEventListener('click', e  => {
        //const list = h3.parentElement.querySelector("ul");
        //in css: ul.bold { font-weight: 800;}
        //list.classList.toggle('bold');
        //});
        for (let liNum of liNums) {
            liNum.lastElementChild.style.backgroundColor = "goldenrod";
        }
    });

    h3Changer.addEventListener('click', e => {
        //const lasListItems = document.querySelectorAll("ul li:last-child");
        //for (let lastListItem of lastListItems) {
        // in css: make a ul li:last-child { background-color: yellow; }
        //lastListItem.classList.add("highlight");
        for (let liNum of liNums) {
            liNum.style.fontWeight = "bold";
        }
    });

    // const listItems = document.querySelectorAll("li");
    // for(let listItem of listItems) {
    //     listItem.addEventListener('click', e => {
    //         const firstListItem = listItem.parentElement.firstElementChild;
    //         firstListItem.classList.toggle("blue");
    //         //in css: make a li { color: blue; }
//}
    //     });


})();