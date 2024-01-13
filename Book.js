const getBooks = async () => {
  try {
    const res = await fetch("https://striveschool-api.herokuapp.com/books");
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error:" + error);
    // alert(error)
  }
};

const getBook = async (asin) => {
  try {
    const res = await fetch(
      "https://striveschool-api.herokuapp.com/books/" + asin
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error:" + error);
    // alert(error)
  }
};

const formatBookHtml = (book) => {
  const title = book.title;
  const cover = book.img;
  const price = book.price;
  const category = book.category;
  const asin = book.asin;
  const formattedHtml = `
      <div id="${asin}" class="book-card col-12 col-sm-12 col-md-3 col-lg-2 pb-4">
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
    const bookHtmlElement = document.getElementById(book.asin);
    const cartSelections = document.querySelector(".dropdown-menu");
    const cartButton = bookHtmlElement.querySelector(".cartButtons");
    cartButton.addEventListener("click", async (ev) => {
      const cardElement = ev.target.parentElement.parentElement.parentElement;
      const bookData = await getBook(cardElement.id);
      if (ev.target === cartButton) {
        cartSelections.innerHTML += `<li class="d-flex align-items-center justify-content-between m-2">
            <div class="img-cart-holder me-2">
            <img class="w-100 h-100" src="${bookData.img}" alt="book cover"/>
            </div>
            <span class="text-truncate">${bookData.title}</span>
            </li>`;
            cartButton.style.color = "red";
      }
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
};

export { getBooks, formatBookHtml, displayBooks };
