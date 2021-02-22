

export const fetchQuestions = (amount, category, difficulty) => {

    const url = () => {
        if(category) {
            return `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}`
        } else {
            return `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}`
        }
    }


    return (dispatch) => {
        dispatch({ type: 'LOADING_QUESTIONS' })
        fetch(url())
            .then(resp => resp.json())
            .then(resp => { dispatch({ type: 'ADD_QUESTIONS', questions: resp })})
    }
}
