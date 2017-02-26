import { connect } from 'react-redux'
import Filter from '../components/filter'
import { newSearch } from '../actions'
import { showFilter } from '../actions'
import { changeSearchParameters } from '../actions'

let mapStateToProps = (state) => {
  return {
    segmentFashion: (state.search_parameters.segment.fashion),
    segmentBeauty: (state.search_parameters.segment.beauty),
    segmentLifestyle: (state.search_parameters.segment.lifestyle),
    segmentFood: (state.search_parameters.segment.food),
    segmentHealth: (state.search_parameters.segment.health),
    segmentFitness: (state.search_parameters.segment.fitness),
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
