import { getBookID } from "./api.js";

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
  bookContainer.innerHTML = `
  <div class="row ps-3 mt-3 w-100">
    <div class="col-lg-4 mb-3">
  <img class="w-100 h-100 b-red" src="${book.img}" alt="Book cover"/>
    </div>
    <div class="col-lg-4">
      <h1 class="dark-red">${book.title}</h1>
         <p>Price: ${book.price}</p>
         <p>Category: ${book.category}</p>
    </div>
  </div>`;
};
