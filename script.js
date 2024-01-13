import {getBooks, displayBooks} from "./Book.js";


// 1. prendo il dato
const books = await getBooks()

// 2. inserisco il dato nell'html
const marketPlace = document.querySelector("#marketPlace");
marketPlace.classList.add("row", "py-4", "ps-3", "w-100");
const skipButtons = document.querySelectorAll(".skip");
const cards = document.querySelectorAll(".book-card");

displayBooks(books,marketPlace)

