import {books} from "./";

// MAIN
(() => {
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
        document.querySelector("#book-list").appendChild(bookElement);
    };

})();
