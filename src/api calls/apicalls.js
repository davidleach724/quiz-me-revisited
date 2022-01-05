export const fetchCategories = () => {
  return fetch('https://opentdb.com/api_category.php')
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