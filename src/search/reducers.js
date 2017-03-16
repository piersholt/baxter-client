import { InterfaceActions } from './actions'
import { QueryActions } from './actions'
import {combineReducers } from 'redux'
import {authStateReducer} from "redux-auth"

const selected = (state = false, action) => {
  switch (action.type) {
    case InterfaceActions.SELECT_ACCOUNT:
      return action.account_id
    case QueryActions.SEARCH_SUCCESS:
      if (action.payload.data.length > 0) {
        return action.payload.data[0].id }
      else { return state }
    default:
      return state
  }
}

const isFetching = (state = false, action) => {
  switch (action.type) {
    case QueryActions.SEARCH_REQUEST:
      if (action.error === true) {
        return false
      } else {
        return true
      }
    case QueryActions.PAGINATE_REQUEST:
      if (action.error === true) {
        return false
      } else {
        return true
      }
    case QueryActions.SEARCH_SUCCESS:
      return false
    case QueryActions.PAGINATE_SUCCESS:
      return false
    case QueryActions.SEARCH_FAILURE:
      return false
    case QueryActions.PAGINATE_FAILURE:
      return false
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
    case QueryActions.SEARCH_REQUEST:
      return Object.assign({}, state, action.meta.parameters)
    case QueryActions.SEARCH_SUCCESS:
      return Object.assign({}, state, action.meta.parameters)
    case QueryActions.PAGINATE_SUCCESS:
      return Object.assign({}, state, action.meta.parameters)
    case QueryActions.PAGINATE_FAILURE:
      return Object.assign({}, state, { page: state.page - 1 })
    case QueryActions.PAGINATE_REQUEST:
      if (action.error === true) {
        return Object.assign({}, state, { page: state.page - 1 })
      } else {
        return state
      }
    // case InterfaceActions.CHANGE_SEARCH_PARAMETERS:
    //   return Object.assign({}, state, action.parameters)
    default:
      return state
  }
}

const maps = (state = {}, action) => {
  switch (action.type) {
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
    case QueryActions.SEARCH_REQUEST:
      return []
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

const error = (state = null, action) => {
  switch (action.type) {
    case QueryActions.SEARCH_SUCCESS:
      if (action.payload.data.length === 0) {
        return 'No results. Ensure a State, and an appropriate Follower range is selected.'
      }
      else {
        return null
      }
    case QueryActions.SEARCH_REQUEST:
      if (action.error === true) {
        return action.payload.message
      } else {
        return state
      }
    case QueryActions.PAGINATE_REQUEST:
      if (action.error === true) {
        return action.payload.message
      } else {
        return state
      }
    case QueryActions.PAGINATE_SUCCESS:
      return null
    case QueryActions.SEARCH_FAILURE:
      return 'Ok, something has broken. I couldn\'t get more data!'
    case QueryActions.PAGINATE_FAILURE:
      return 'Ok, something has broken. I couldn\'t get more data!'
    case 'AUTHENTICATE_COMPLETE':
      return null
    case 'AUTHENTICATE_ERROR':
      return 'Please sign in.'
    case 'EMAIL_SIGN_IN_COMPLETE':
      return null
    case InterfaceActions.DISMISS_ERROR:
      if (action.dismissalType === 'clickaway') {
        return null
      } else {
        return state
      }
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
  payload,
  isFetching,
  maps,
  error
})

export default searchReducer;
