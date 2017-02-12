import { InterfaceActions } from './actions'
import { QueryActions } from './actions'

function selected(state = false, action) {
  switch (action.type) {
    case InterfaceActions.SELECT_ACCOUNT:
      return action.account_id
    default:
      return state
  }
}

function foo(state = [], action) {
  switch (action.type) {
    // Interface
    case InterfaceActions.ADD_ACCOUNT:
      return [...state, action.account]
    case InterfaceActions.ADD_ACCOUNTS:
      return [...state].concat(action.accounts)
    // Query
    case QueryActions.PAGINATE_SUCCESS:
      return [...state, ...action.payload]
    case QueryActions.SEARCH_SUCCESS:
      return [...action.payload]
    default:
      return state
  }
}

function searchReducer(state = { selected: 123 }, action) {
  return {
    selected: selected(state.selected, action),
    accounts: foo(state.accounts, action)
  }
}

export default searchReducer;
