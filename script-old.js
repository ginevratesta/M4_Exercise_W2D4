fetch("https://striveschool-api.herokuapp.com/books")
  .then((res) => res.json())
  .then((data) => {
    const books = data;
    const marketPlace = document.querySelector("#marketPlace");

    books.forEach((book) => {
      //Displaying the book cards on the web page
      const title = book.title;
      const cover = book.img;
      const price = book.price;
      const category = book.category;
      marketPlace.classList.add("row", "py-4", "ps-3", "w-100");

      marketPlace.innerHTML += `
        <div class="book-card col-12 col-sm-12 col-md-3 col-lg-2 pb-4">
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
        
    });

    //Adding an event on click to skip the option
    const skipButtons = document.querySelectorAll(".skip");
    const cards = document.querySelectorAll(".book-card");

    skipButtons.forEach((skip, index) => {
      skip.addEventListener("click", (ev) => {
        if (ev.target === skip) {
          cards[index].style.display = "none";
        }
      });

      //Adding an event on click to add a book to the cart
      const cartSelections = document.querySelector(".dropdown-menu");
      const cartButtons = document.querySelectorAll(".cartButtons");
      // console.log(cartSelections);

      cartButtons.forEach((cart, cover, title, price) => {
        cart.addEventListener("click", (ev) => {
          if (ev.target === cart) {
            console.log(title)
            cartSelections.innerHTML = `
            <li class="d-flex align-items-center justify-content-around">
            <img class="w-100 h-100" src="${cover}" alt="book cover"/>
            <span class="text-truncate">${title}<span>
            </li>
            `;
          }
        });
      });
    });
  })
  .catch((error) => {
    console.error(error);
    // alert(`Error: ${error}`);
  });
