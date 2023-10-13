(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */
    //
    // const person = {
    //     firstName: "Lauren",
    //     lastName: "Gates",
    //     sayHello: function(){
    //         const message = `Hello from ${(this.firstName)} ${(this.lastName)}!`;
    //         return message;
    //     }
    // };
    // console.log(person.firstName);
    // console.log(person.lastName);

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */

    //console.log(person.sayHello());


    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    // const shoppers = [
    //     {name: 'Cameron', amount: 180},
    //     {name: 'Ryan', amount: 250},
    //     {name: 'George', amount: 320}
    // ];
    //
    // shoppers.forEach((shopper) => {
    //     const {name, amount} = shopper;
    //         if(amount >= 200) {
    //             const savingTotal = (amount*.12).toLocaleString("en-US", {style:"currency", currency: "USD"});
    //             const discount = (amount * (1 - .12)).toLocaleString("en-US", {style:"currency", currency: "USD"});
    //             console.log(`${name}, your bill is ${amount.toLocaleString("en-US", {style:"currency", currency: "USD"})}, but with a 12% discount you save ${savingTotal} and only need to pay ${discount}!`);
    //         } else {
    //             console.log(`${name}, you do not get a discount.`);
    //         }
    //
    //     });


    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */
    const books = [

        {
            title: "Fairy Animals of Misty Wood",
            author: {
                firstName: "Lily",
                lastName: "Small",
            },
        },
        {
            title: "The Perfect Police State",
            author: {
                firstName: "Geoffrey",
                lastName: "Cain",
            },
        },
        {
            title:"The Jungle Book",
            author: {
                firstName: "Rudyard",
                lastName: "Kipling",
            },
        },
        {
            title: "The Tales of Beedle the Bard",
            author: {
                firstName: "J.K.",
                lastName: "Rowling",
            },
        },
        {
            title: "On the Origin of Species by Means of Natural Selection",
            author: {
                firstName: "Charles",
                lastName: "Darwin",
            },
        },
    ];

    // console.log(books[4].title);
    // console.log(books[4].author.firstName);
    // console.log(books[4].author.lastName);


    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */
    // books.forEach((book, index) => {
    //     const bookNum = index + 1;
    //     const { title, author } = book;
    //     console.log(`Book ${bookNum}: \nTitle: ${title} \n Author: ${author.firstName} ${author.lastName}`);
    // });

    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

    const createBook = (title, authorFirstName, authorLastName) => {
        return {
            title: title,
            author: {
                firstName: authorFirstName,
                lastName: authorLastName,
            },
        };
    }

    console.log(createBook("Aesop's Fables", "Aesop"));
    console.log(createBook("How To Write Gooder Code", "The Angry Developer Behind You", "Watch Out"));
    console.log(books);

 const showBookInfo = ({books}) => {
     return
 }


})();