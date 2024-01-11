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
       <div class="col-12 col-sm-12 col-md-6 col-lg-3">
        <div class="card">
  <img src="${cover}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${title}</h5>
    <p class="card-text">${category}.</p>
    <a href="#" class="btn btn-primary">${price}</a>
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
