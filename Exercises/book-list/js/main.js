import {books} from "../data/books.js";


const debounce = (fn, delay) => {
    let timeoutId;
    return (...args) => {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
            fn(...args);
        }, delay);
    };
};
const renderBookElement = (book) => {
    const {
        isbn10,
        title,
        authors,
        categories,
        thumbnail,
        description,
        published_year,
        average_rating,
        num_pages,
        ratings_count
    } = book;
    const bookElement = document.createElement("tr");
    bookElement.innerHTML = `<td>${title}</td>
                                <td>${authors}</td>
                                <td>${categories}</td>
                                <td>${isbn10}</td>
                                <td>${published_year}</td>
                                <td>
                                    <button class="btn btn-sm btn-danger" data-delete>Delete</button>
                                </td>`;
    const deleteBtn = bookElement.querySelector("button[data-delete]");
    deleteBtn.addEventListener('click', e => {
        bookElement.remove();
    });
    // document.querySelector("#book-list").appendChild(bookElement);
    return bookElement;
};


const updateBooks = (books) => {
    document.querySelector("#book-list").innerHTML = "";
    // get all user input values for filtering
    const categoryInput = document.querySelector("#category");
    const categoryValue = categoryInput.value; // the value came from the inspection of the html page and the property value: 'horror'
    // console.log("Category Value => ", categoryValue);
    const searchInput = document.querySelector("#search");
    const searchValue = searchInput.value; //the .value came from the inspection of the html page and the property value: 'horror'
    // console.log("Search Value => ", searchValue);

    // filter books using higher level function from jsIII
    let filteredBooks = books;
    // filter by each value individually
    filteredBooks = filteredBooks.filter((book) => {
        if (!categoryValue) {
            return true;
        }
        if (typeof book.categories !== "string") {
            return false;
        }
        return book.categories.toLowerCase().includes(categoryValue.toLowerCase());
    });
    filteredBooks = filteredBooks.filter((book) => {
        if (!searchValue) {
            return true;
        }
        if (typeof book.title !== "string") {
            return false;
        }
        if (!searchValue) {
            return true;
        }
        return book.title.toLowerCase().includes(searchValue.toLowerCase());
    });


    //temporary container for a document fragment
    const booksFragment = document.createDocumentFragment();


    // render filtered array
    for (let book of filteredBooks) {
        booksFragment.appendChild(renderBookElement(book));
    }

    document.querySelector("#book-list").appendChild(booksFragment);
};


// let make the search and filters work!!
const handleFilterEvents = (books) => {
    const searchInput = document.querySelector('#search');
    searchInput.addEventListener('input', debounce(e) => {
        if(searchInput.value.toLowerCase() === "the") {
            return;
        }
        updateBooks(books);
    }, 500)
};

    const handleCategoryEvents = (books) => {
        const categoryInput = document.querySelector('#category');
        categoryInput.addEventListener('change', e => {
            updateBooks(books);
        });
    }
}


// MAIN
(() => {
    updateBooks(books);
    handleFilterEvents(books);

})();
