function shelfBook(book, genre){
  sciFiShelf = genre;
  if (genre.length < 3) {
    genre.unshift(book);
  }
  return (sciFiShelf, book);
};

function unshelfBook(bookName, genre){
  for (var i = 0; i < genre.length; i++) {
    if (genre[i].title === bookName) {
      genre.splice(i,1);
    };
  };
};

module.exports = {
   shelfBook,
   unshelfBook,
  // listTitles,
  // searchShelf
};
