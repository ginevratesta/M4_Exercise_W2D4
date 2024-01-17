import { getBooks, getBookID } from "./api.js";
import { bookCardHTML, bookInCartHTML } from "./markup.js";

const formatBookHtml = (book) => {
  const formattedHtml = bookCardHTML(book)
  return formattedHtml;
};

const addSkipActionButton = () => {
  const skipButtons = document.querySelectorAll(".skip");
  const cards = document.querySelectorAll(".book-card");
  skipButtons.forEach((skip, index) => {
    skip.addEventListener("click", (ev) => {
      if (ev.target === skip) {
        cards[index].style.display = "none";
      }
    });
  });
};

const addBookToCart = (books) => {
  books.forEach((book) => {
    const bookHtmlElement = document.getElementById(`${book.asin}`);
    const cartItemsList = document.getElementById("cart-items-list");
    const cartButton = bookHtmlElement.querySelector(".cartButtons");
    cartButton.addEventListener("click", async (ev) => {
      const cardElement = ev.target.closest(".book-card");
      const bookData = await getBookID(cardElement.id);
      if (ev.target === cartButton) {
        const alreadyInCart =
          cartItemsList.querySelectorAll(`#li-${bookData.asin}`).length === 0
            ? false
            : true;
        if (!alreadyInCart) {
          cartItemsList.innerHTML += bookInCartHTML(bookData)
          cartButton.style.color = "red";
        } else {
          let itemCounter = document.getElementById(
            `li-counter-${bookData.asin}`
          );
          let actualCount = parseInt(itemCounter.innerText);
          let nextCount = actualCount + 1;
          itemCounter.innerText = nextCount.toString();
        }
      }
    });
  });
};

const emptyCart = () => {
  const trashCan = document.getElementById("trash-can");
  trashCan.addEventListener("click", () => {
    let iconsToDeactivate = [
      ...document.querySelectorAll(".cartButtons"),
    ].filter((el) => el.style.color === "red");
    let cartItemsList = document.getElementById("cart-items-list");
    cartItemsList.innerHTML = null;
    iconsToDeactivate.forEach((el) => (el.style.color = "black"));
  });
};

const filteredBooks = () => {
  const input = document.getElementById("search-bar");
  input.addEventListener("keyup", () => {
    let cardsToEvaluate = [...document.querySelectorAll(".book-card")];
    cardsToEvaluate.forEach((cardToEvaluate) => {
      const title = cardToEvaluate
        .querySelector(".card-title")
        .innerText.toLowerCase();
      const isToShow = title.includes(input.value) || input.value.length < 3;
      cardToEvaluate.style.display = isToShow ? "block" : "none";
    });
  });
};

const displayBooks = (books, marketPlace) => {
  books.forEach((book) => {
    const formattedHtml = formatBookHtml(book);
    marketPlace.innerHTML += formattedHtml;
  });
  addSkipActionButton();
  addBookToCart(books);
  emptyCart();
  filteredBooks();
};

export { getBooks, displayBooks };
