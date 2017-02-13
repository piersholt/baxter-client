import { connect } from 'react-redux'
import Filter from '../components/filter'
import { newSearch } from '../actions'


let mapDispatchToProps = (dispatch) => {
  return {
    paginateSearch: (parameters) => {
      dispatch(newSearch(parameters));
    }
  }
};

export const FilterContainer = connect(null, mapDispatchToProps)(Filter)
