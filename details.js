import {getBooks, displayBooks} from "./script.js"

const books = await getBooks();
displayBooks(books);

function newPageDetails(books) {
    const detailBtn = document.querySelectorAll(".detailsButton");
  
    detailBtn.forEach((btn) => {
      btn.addEventListener("click", () => {
        window.location.href = "details.html";
      });
    });
  }

  newPageDetails(books)