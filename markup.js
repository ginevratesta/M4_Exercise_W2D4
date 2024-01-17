const bookCardHTML = (book) => {
  const title = book.title;
const cover = book.img;
const price = book.price;
const category = book.category;
const id = book.asin;
  return `
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
        <a href="./details.html?id=${id}">
        <ion-icon class="fs-3 detailsButton" name="reorder-three-outline"></ion-icon>
        </a>
      </div>
    </div>
  </div>`;
};

const bookInCartHTML = (bookData) => {
  return `<li id="li-${bookData.asin}" class="item-in-cart d-flex align-items-center justify-content-between m-2">
  <div class="img-cart-holder me-2">
  <img class="w-100 h-100" src="${bookData.img}" alt="book cover"/>
  </div>
  <span class="text-truncate">${bookData.title}</span>
  <span id="li-counter-${bookData.asin}" class="ms-2">1</span>
  </li>`;
};

const bookDetailsHTML = (book) => {
  return `
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
}

export {bookCardHTML, bookInCartHTML, bookDetailsHTML}