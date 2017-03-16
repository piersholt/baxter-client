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
      s_f: false,
      s_b: false,
      s_fd: false,
      s_c: false,
      s_hi: false,
      s_l: false,
      s_hf: false,
      s_cp: false,
      s_ap: false,
      s_t: false
    },
    origin: {
    },
    minFollowers: 5000,
    maxFollowers: 1000000
  },
  maps: {
    segment: {
      s_f: 'Fashion',
      s_b: 'Beauty',
      s_fd: 'Food & Drinks',
      s_c: 'Cooking',
      s_hi: 'Home & Interior',
      s_l: 'Lifestyle',
      s_hf: 'Health & Fitness',
      s_cp: 'Children & Parenting',
      s_ap: 'Animals & Pets',
      s_t: 'Travel'
    },
    origin: {
      VIC: 'Victoria',
      NSW: 'New South Wales',
      WA: 'Western Australia',
      TAS: 'Tasmania',
      SA: 'South Australia',
      QLD: 'Queensland',
      NT: 'Northern Territory',
      ACT: 'Australian Capital Territory'
    }
  }
}

const store = createStore(searchReducer, initialState, composeWithDevTools(applyMiddleware(thunk, apiMiddleware)));

export default store
