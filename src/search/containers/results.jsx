import { connect } from 'react-redux'
import Results from '../components/results'
import { paginateSearch } from '../actions'

let mapStateToProps = (state) => {
  let showPaginate = false

  if (state.search_parameters.page < state.payload.meta.total_pages) {
    showPaginate = true
  }

  return {
    accounts: state.accounts,
    search_parameters: state.search_parameters,
    showPaginate: showPaginate
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
