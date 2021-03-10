

const questionReducer = (state = [], action) => {

    switch (action.type) {
        case 'ADD_QUESTIONS': 
            return action.questions
        default:
            return state
    }
}

export default questionReducer