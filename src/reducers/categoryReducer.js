

const categoryReducer = (state = [], action) => {

    switch(action.type) {
        case 'ADD_CATEGORIES':
            return action.categories
        default: 
            return state
    }
}

export default categoryReducer