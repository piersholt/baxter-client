import { connect } from 'react-redux'
import Search from '../components/search'

let mapStateToProps = (state) => {
  let showResults = false
  if (state.accounts.length > 0) {
    showResults = true
  }

  return {
    showResults: showResults,
    showFilter: state.showFilter
  }
};

let mapDispatchToProps = (dispatch) => {
  return {

  }
};

export const SearchContainer = connect(mapStateToProps, mapDispatchToProps)(Search)
