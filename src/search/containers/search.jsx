import { connect } from 'react-redux'
import Search from '../components/search'

let mapStateToProps = (state) => {
  let showResults = false
  let showFilter = state.showFilter
  let showOverview = !showFilter
  let showFetching = false
  let showProfile = false

  if (state.accounts.length > 0 ) {
    showResults = true
  }

  if (state.isFetching === true && state.accounts.length === 0)
  {
    showFetching = true
  }

  if (state.accounts.length > 0) {
    showProfile = true
  }

  return {
    showResults: showResults,
    showFilter: showFilter,
    showOverview: showOverview,
    showFetching: showFetching,
    showProfile: showProfile
  }
};

let mapDispatchToProps = (dispatch) => {
  return {

  }
};

export const SearchContainer = connect(mapStateToProps, mapDispatchToProps)(Search)
