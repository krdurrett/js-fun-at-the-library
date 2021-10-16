function createLibrary(name){
  var library = {
    name: name,
    shelves: {
      fantasy: [],
      fiction: [],
      nonFiction: [],
    },
  };
  return library;
};

function addBook(library, bookName){
  var genre = bookName.genre;
  if (genre === 'fantasy'){
    library.shelves.fantasy.push(bookName);
  } else if (genre === 'fiction'){
    library.shelves.fiction.push(bookName);
  } else if (genre === 'nonFiction'){
    library.shelves.nonFiction.push(bookName);
  }
};

function checkoutBook (){

};

module.exports = {
  createLibrary,
  addBook,
  checkoutBook
};
