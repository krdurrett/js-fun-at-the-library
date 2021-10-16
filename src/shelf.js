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

function listTitles(shelfTitles){
  var titles = [];
  for (var i = 0; i < shelfTitles.length; i++) {
    titles.push(shelfTitles[i].title);
  };
  return titles.join(", ");
};

function searchShelf(shelfTitles, bookName){
  for(var i = 1; i < shelfTitles.length; i--) {
    if (bookName === shelfTitles[i].title) {
      return true;
    } else  {
      return false;
    };
  };
};


module.exports = {
   shelfBook,
   unshelfBook,
   listTitles,
   searchShelf
};
