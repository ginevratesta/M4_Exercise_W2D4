import { getBookID } from "./api.js";
import { bookDetailsHTML } from "./markup.js";

let book = {};

window.addEventListener("DOMContentLoaded", init);
async function init() {
  const params = new URLSearchParams(location.search);
  const id = params.get("id");
  book = await getBookID(id);
  displayBook(book);
}

const displayBook = (book) => {
  const bookContainer = document.getElementById("book-details-container");
  bookContainer.innerHTML = bookDetailsHTML(book);
};
