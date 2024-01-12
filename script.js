fetch("https://striveschool-api.herokuapp.com/books")
  .then((res) => res.json())
  .then((data) => {
    const books = data;
    const marketPlace = document.querySelector("#marketPlace");
    books.map((book) => {
      const title = book.title;
      const cover = book.img;
      const price = book.price;
      const category = book.category;
      marketPlace.innerHTML += `
       <div class="col-12 col-sm-12 col-md-3 col-lg-2 pb-4">
        <div class="card">
  <img src="${cover}" class="card-img-top w-100 h-100" alt="Book cover">
  <div class="card-body">
    <h5 class="card-title text-truncate">${title}</h5>
    <p class="card-text">Genre: ${category}.</p>
    <p class="card-text">Price: ${price}.</p>
  </div>
  <div class="d-flex justify-content-between px-4 pb-3">
  <ion-icon class="fs-3" name="cart-outline"></ion-icon>
  <ion-icon class="fs-3" name="play-skip-forward-outline"></ion-icon>
  </div>
</div>
</div>`;

      marketPlace.classList.add("row", "py-4", "ps-3", "w-100");
    });
  })
  .catch((error) => {
    console.error(error);
    // alert(`Error: ${error}`);
  });
