
const categoryApi = 'https://opentdb.com/api_category.php'

export const fetchCategories = () => {
    return (dispatch) => {
        fetch(categoryApi)
            .then(resp => resp.json())
            .then(resp => { dispatch({ type: 'ADD_CATEGORIES', categories: resp.trivia_categories})})
    }
}