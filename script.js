import {getBooks, displayBooks} from "./Book.js";

// Taking the parameter with await because it is an asyncronous function
const books = await getBooks()

const marketPlace = document.querySelector("#marketPlace");
marketPlace.classList.add("row", "py-4", "ps-3", "w-100");
displayBooks(books,marketPlace)


