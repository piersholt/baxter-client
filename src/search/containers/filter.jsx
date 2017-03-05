import { connect } from 'react-redux'
import Filter from '../components/filter'
import { newSearch } from '../actions'
import { showFilter } from '../actions'
import { changeSearchParameters } from '../actions'

let mapStateToProps = (state) => {
  return {
    s_f: (state.search_parameters.segment.s_f),
    s_b: (state.search_parameters.segment.s_b),
    s_fd: (state.search_parameters.segment.s_fd),
    s_c: (state.search_parameters.segment.s_c),
    s_hi: (state.search_parameters.segment.s_hi),
    s_l: (state.search_parameters.segment.s_l),
    s_hf: (state.search_parameters.segment.s_hf),
    s_cp: (state.search_parameters.segment.s_cp),
    s_ap: (state.search_parameters.segment.s_ap),
    s_t: (state.search_parameters.segment.s_t),
    originVIC: (state.search_parameters.origin.VIC),
    originNSW: (state.search_parameters.origin.NSW),
    originQLD: (state.search_parameters.origin.QLD),
    originSA:(state.search_parameters.origin.SA),
    originWA:(state.search_parameters.origin.WA),
    minFollowers: state.search_parameters.minFollowers,
    maxFollowers: state.search_parameters.maxFollowers
  }
};


let mapDispatchToProps = (dispatch) => {
  return {
    newSearch: (parameters) => {
      dispatch(newSearch(parameters));
    },
    showFilter: (bool) => {
      dispatch(showFilter(bool));
    },
    changeSearchParameters: (parameters) => {
      dispatch(changeSearchParameters(parameters));
    }
  }
};

export const FilterContainer = connect(mapStateToProps, mapDispatchToProps)(Filter)
