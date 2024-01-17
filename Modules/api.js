const getBooks = async () => {
  try {
    const res = await fetch("https://striveschool-api.herokuapp.com/books");
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error:" + error);
    alert(error);
  }
};

const getBookID = async (asin) => {
  try {
    const res = await fetch(
      "https://striveschool-api.herokuapp.com/books/" + asin
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error:" + error);
    alert(error);
  }
};

export { getBooks, getBookID };
