import { createStore, applyMiddleware } from 'redux'
import { apiMiddleware } from 'redux-api-middleware';
import searchReducer from './search/reducers'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';

let initialState = {
  showFilter: true,
  search_parameters:
  {
    segment: {
      s_f: true,
      s_b: false,
      s_fd: false,
      s_c: false,
      s_hi: false,
      s_l: true,
      s_hf: false,
      s_cp: false,
      s_ap: false,
      s_t: false
    },
    origin: {
      VIC: true
    },
    minFollowers: 5000,
    maxFollowers: 1000000
  }
}

const store = createStore(searchReducer, initialState, composeWithDevTools(applyMiddleware(thunk, apiMiddleware)));

export default store
