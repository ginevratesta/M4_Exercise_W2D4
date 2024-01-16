import { getBooks, getBookID } from "./api.js";

const formatBookHtml = (book) => {
  const title = book.title;
  const cover = book.img;
  const price = book.price;
  const category = book.category;
  const id = book.asin;
  const formattedHtml = `
      <div id="${id}" class="book-card col-12 col-sm-12 col-md-3 col-lg-2 pb-4">
        <div class="card">
          <img src="${cover}" class="card-img-top w-100 h-100" alt="Book cover">
          <div class="card-body">
            <h5 class="card-title text-truncate">${title}</h5>
            <p class="card-text">Genre: ${category}.</p>
            <p class="card-text">Price: ${price}.</p>
          </div>
          <div class="d-flex justify-content-between px-4 pb-3">
            <ion-icon class="fs-3 cartButtons" name="cart-outline"></ion-icon>
            <ion-icon class="fs-3 skip" name="play-skip-forward-outline"></ion-icon>
            <ion-icon id="details-${id}" class="fs-3 detailsButton" name="reorder-three-outline"></ion-icon>
          </div>
        </div>
      </div>`;
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
          cartItemsList.innerHTML += `<li id="li-${bookData.asin}" class="item-in-cart d-flex align-items-center justify-content-between m-2">
            <div class="img-cart-holder me-2">
            <img class="w-100 h-100" src="${bookData.img}" alt="book cover"/>
            </div>
            <span class="text-truncate">${bookData.title}</span>
            <span id="li-counter-${bookData.asin}" class="ms-2">1</span>
            </li>`;
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

const newPageDetails = (books) => {
  const detailBtn = document.querySelectorAll(".detailsButton");

  detailBtn.forEach(btn => {btn.addEventListener("click", () => {
    window.open("details.html");
  })
})
}


  


const displayBooks = (books, marketPlace) => {
  books.forEach((book) => {
    const formattedHtml = formatBookHtml(book);
    marketPlace.innerHTML += formattedHtml;
  });
  addSkipActionButton();
  addBookToCart(books);
  emptyCart();
  filteredBooks();
  newPageDetails(books);
};

export { getBooks, displayBooks };
