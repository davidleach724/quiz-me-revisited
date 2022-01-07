export const fetchCategories = () => {
  return fetch('https://opentdb.com/api_category.php')
  .then(response => checkError(response))
  .catch(error => console.log(error))
}

export const fetchQuestions = (categoryID, difficulty) => {
  return fetch(`https://opentdb.com/api.php?amount=10&category=${categoryID}&difficulty=${difficulty.toLowerCase()}&type=multiple`)
  .then(console.log(categoryID, difficulty))
  .then(response => checkError(response))
  .catch(error => console.log(error))
}

const checkError = (res) => {
  if (!res.ok) {
    throw new Error(
      "Sorry...Server Error"
    )
  } else {
      return res.json()
  }
}