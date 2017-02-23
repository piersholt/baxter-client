import { createStore, applyMiddleware } from 'redux'
import { apiMiddleware } from 'redux-api-middleware';
import searchReducer from './search/reducers'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';

let initialState = {
  showFilter: true,
  search_parameters:
  {
    segment: {},
    origin: {},
    minFollowers: 0,
    maxFollowers: 0
  }
}

const store = createStore(searchReducer, initialState, composeWithDevTools(applyMiddleware(thunk, apiMiddleware)));

export default store
