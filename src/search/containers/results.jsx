import { connect } from 'react-redux'
import Results from '../components/results'
import { paginateSearch } from '../actions'

let mapStateToProps = (state) => {
  return {
    accounts: state.accounts,
    search_parameters: state.search_parameters
  }
};

let mapDispatchToProps = (dispatch) => {
  return {
    paginateSearch: (parameters) => {
      dispatch(paginateSearch(parameters));
    }
  }
};

export const ResultsContainer = connect(mapStateToProps, mapDispatchToProps)(Results)
