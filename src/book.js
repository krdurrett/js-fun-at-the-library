function createTitle(title) {
  return `The ${title}`;
};

function buildMainCharacter(name, age, pronouns){
  var mainCharacter = {
    name: name,
    age: age,
    pronouns: pronouns,
  };
  return mainCharacter;
};

function saveReview(firstReview, reviews){
  if (reviews.includes(firstReview)){
    return reviews;
  }else{
    reviews.push(firstReview);
  };
  return reviews;
};

function calculatePageCount(title) {
  var titleLength = title.length;
  var pageCount = titleLength * 20;
  return pageCount;
};

function writeBook(title, character, genre){
  var bookDescription = {
    title: title,
    mainCharacter: character,
    pageCount: calculatePageCount(title),
    genre: 'fantasy',
  };
  return bookDescription;
};

function editBook(book){
  book.pageCount *= 0.75;
};

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}
