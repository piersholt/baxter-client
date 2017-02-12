import { connect } from 'react-redux'
import Results from '../components/results'
import { paginateSearch } from '../actions'

let mapStateToProps = (state) => {
  return {
    accounts: state.accounts
  }
};

let mapDispatchToProps = (dispatch) => {
  return {
    paginateSearch: (id) => {
      dispatch(paginateSearch(id));
    }
  }
};

export const ResultsContainer = connect(mapStateToProps, mapDispatchToProps)(Results)
