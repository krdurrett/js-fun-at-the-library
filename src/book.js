function createTitle(bookIdea, sushiTitle, dragonTitle, ghostTitle) {
  return `The ${bookIdea}`;
  return `The ${sushiTitle}`;
  return `The ${dragonTitle}`;
  return `The ${ghostTitle}`;
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

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  // calculatePageCount,
  // writeBook,
  // editBook
}
