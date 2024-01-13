const getBooks = async () => {
    try {
        const res = await fetch("https://striveschool-api.herokuapp.com/books")
        const data = await res.json()
        return data;
    } catch (error){
        console.error("Error:" + error);
        alert(error)
    }
    
}

const formatBookHtml = (book) => {
    const title = book.title;
    const cover = book.img;
    const price = book.price;
    const category = book.category;
    const formattedHtml = `
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
      return formattedHtml;
  }

const displayBooks = (books,marketPlace) => {
    books.forEach((book) => {
        //Displaying the book cards on the web page
        const formattedHtml = formatBookHtml(book)
        marketPlace.innerHTML += formattedHtml;
      });
}

export {getBooks,formatBookHtml,displayBooks}