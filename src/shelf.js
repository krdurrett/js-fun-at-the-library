function shelfBook(book, genre){
  sciFiShelf = genre;
  if (genre.length < 3) {
    genre.unshift(book);
  }
  return (sciFiShelf, book);
};
module.exports = {
   shelfBook,
  // unshelfBook,
  // listTitles,
  // searchShelf
};
