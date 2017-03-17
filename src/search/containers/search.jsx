import { connect } from 'react-redux'
import Search from '../components/search'
import { dismissError } from '../actions'

let mapStateToProps = (state) => {
  let showResults = false
  let showFilter = state.showFilter
  let showOverview = !showFilter
  let showFetching = false
  let showProfile = false
  let showError = false
  let errorMessage = 'No errors. You shouldn\'t be seeing this!'

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

  if (state.error != null) {
    showError = true
    errorMessage = state.error
  }

  return {
    showResults: showResults,
    showFilter: showFilter,
    showOverview: showOverview,
    showFetching: showFetching,
    showProfile: showProfile,
    showError: showError,
    errorMessage: errorMessage
  }
};

let mapDispatchToProps = (dispatch) => {
  return {
    dismissError: (manual) => {
      dispatch(dismissError(manual));
    }
  }
};

export const SearchContainer = connect(mapStateToProps, mapDispatchToProps)(Search)
