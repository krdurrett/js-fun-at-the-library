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
    for (var i = 0; i < library.shelves.fantasy.length; i++) {
      var bookOnShelf = library.shelves.fantasy[i].title;
      if (bookOnShelf === bookName) {
      library.shelves.fantasy.splice(i,1);
      return `You have now checked out ${bookName} from the ${library.name}`;
    }
  }
  } else if (shelf === 'fiction') {
    for (var i = 0; i < library.shelves.fiction.length; i++) {
      var bookOnShelf = library.shelves.fiction[i].title;
      if (bookOnShelf === bookName) {
      library.shelves.fiction.splice(i,1);
      return `You have now checked out ${bookName} from the ${library.name}`;
    }
  }
  } else if (shelf === 'nonFiction') {
    for (var i = 0; i < library.shelves.nonFiction.length; i++) {
      var bookOnShelf = library.shelves.nonFiction[i].title;
      if (bookOnShelf === bookName) {
      library.shelves.nonFiction.splice(i,1);
      return `You have now checked out ${bookName} from the ${library.name}`;
    }
  }
    }
    return `Sorry, there are currently no copies of ${bookName} available at the ${library.name}`;
  }


module.exports = {
  createLibrary,
  addBook,
  checkoutBook
};
