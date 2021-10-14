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

function calculatePageCount(titleOfBook){
  var titleArray = Array.from(titleOfBook);
  var titleCharOnly = titleArray.filter(function(char){
    return char != null;
  });
  var titleLength = titleCharOnly.length;
  var pageCount = titleLength * 20;
  return pageCount;
};


module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  // writeBook,
  // editBook
}
