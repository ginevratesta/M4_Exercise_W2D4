import {getBookID} from "./api.js"

let book = {}

window.addEventListener('DOMContentLoaded', init);
async function init() {
  const params = new URLSearchParams(location.search)
  const id = params.get("id")
  book = await getBookID(id)
  displayBook(book)
}

const displayBook = (book) => {
  const bookContainer = document.getElementById("book-details-container")
  bookContainer.innerHTML = `
    <h1 class="my-5 title">${book.title}</h1>
      <div class="d-flex book">
        <img src="${book.img}" alt="cover" class="me-5 cover w-25"/>
        <div class="detail">
            <span class="fw-bold">Description: </span><br>
          <p class="fw-bold">Price: <span class="price fw-normal">${book.price}$</span></p>
          <p class="fw-bold">Category: <span class="category fw-normal">${book.category}</span></p>
        </div>
      </div>`
}
