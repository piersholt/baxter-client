import { connect } from 'react-redux'
import Search from '../components/search'

let mapStateToProps = (state) => {
  let showResults = false
  let showFilter = state.showFilter
  let showOverview = !showFilter

  if (state.accounts.length > 0) {
    showResults = true
  }

  if (state.accounts.length == 0) {
    showFilter = true
    showOverview = false
    showResults = false
  }

  return {
    showResults: showResults,
    showFilter: showFilter,
    showOverview: showOverview
  }
};

let mapDispatchToProps = (dispatch) => {
  return {

  }
};

export const SearchContainer = connect(mapStateToProps, mapDispatchToProps)(Search)
