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

function checkoutBook(library, bookName, shelf){
  if (shelf === 'fantasy') {
    library.shelves.fantasy.pop();
    return `You have now checked out ${bookName} from the ${library.name}`;
  } else if (shelf === 'fiction') {
    library.shelves.fiction.pop();
    return `You have now checked out ${bookName} from the ${library.name}`;
  } else if (shelf === 'nonFiction') {
    library.shelves.nonFiction.pop();
    return `You have now checked out ${bookName} from the ${library.name}`;
    }
};

module.exports = {
  createLibrary,
  addBook,
  checkoutBook
};
