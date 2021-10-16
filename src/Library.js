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
  library.shelves.fantasy.push(bookName);
};

module.exports = {
  createLibrary,
  addBook,
  // checkoutBook
};
