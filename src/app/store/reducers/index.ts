import { composeReducers } from  '@angular-redux/form'
import { combineReducers } from 'redux'

export const rootReducer = composeReducers(
    combineReducers({})
)