import { connect } from 'react-redux'
import Filter from '../components/filter'
import { newSearch } from '../actions'


let mapDispatchToProps = (dispatch) => {
  return {
    paginateSearch: (parameters) => {
      var param = require('jquery-param');
      let url_parameters = param(parameters)
      dispatch(newSearch(url_parameters));
    }
  }
};

export const FilterContainer = connect(null, mapDispatchToProps)(Filter)
