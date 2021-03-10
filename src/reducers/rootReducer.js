import { combineReducers } from 'redux'
import categoryReducer from './categoryReducer'
import questionReducer from './questionReducer'

const rootReducer = combineReducers({
    categories: categoryReducer,
    questions: questionReducer
})

export default rootReducer;