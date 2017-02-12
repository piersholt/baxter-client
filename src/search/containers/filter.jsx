import { connect } from 'react-redux'
import Filter from '../components/filter'
import { newSearch } from '../actions'


let mapDispatchToProps = (dispatch) => {
  return {
    paginateSearch: (id) => {
      dispatch(newSearch(id));
    }
  }
};

export const FilterContainer = connect(null, mapDispatchToProps)(Filter)
