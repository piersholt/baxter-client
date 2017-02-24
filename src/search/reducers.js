import { InterfaceActions } from './actions'
import { QueryActions } from './actions'
import {combineReducers } from 'redux'
import {authStateReducer} from "redux-auth"

const selected = (state = false, action) => {
  switch (action.type) {
    case InterfaceActions.SELECT_ACCOUNT:
      return action.account_id
    default:
      return state
  }
}

const showFilter = (state = false, action) => {
  switch (action.type) {
    case InterfaceActions.SHOW_FILTER:
      return action.showFilter
    case QueryActions.SEARCH_SUCCESS:
      return action.meta.showFilter
    case QueryActions.SEARCH_REQUEST:
      return action.meta.showFilter
    default:
      return state
  }
}

const search_parameters = (state = {}, action) => {
  switch (action.type) {
    case QueryActions.SEARCH_SUCCESS:
      return Object.assign({}, state, action.meta.parameters)
    case QueryActions.PAGINATE_SUCCESS:
      return Object.assign({}, state, action.meta.parameters)
    default:
      return state
  }
}

const accounts = (state = [], action) => {
  switch (action.type) {
    // Interface
    case InterfaceActions.ADD_ACCOUNT:
      return [...state, action.account]
    case InterfaceActions.ADD_ACCOUNTS:
      return [...state].concat(action.accounts)
    // Query
    case QueryActions.PAGINATE_SUCCESS:
      return [...state, ...action.payload.data]
    case QueryActions.SEARCH_SUCCESS:
      return [...action.payload.data]
    default:
      return state
  }
}

const payload = (state = [], action) => {
  switch (action.type) {
    case QueryActions.PAGINATE_SUCCESS:
      return action.payload
    case QueryActions.SEARCH_SUCCESS:
      return action.payload
    default:
      return state
  }
}

const searchReducer = combineReducers({
  auth: authStateReducer,
  accounts,
  search_parameters,
  selected,
  showFilter,
  payload
})

export default searchReducer;
