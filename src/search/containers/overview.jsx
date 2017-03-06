import { connect } from 'react-redux'
import Overview from '../components/overview'
import { showFilter } from '../actions'
import { buildString } from './profile'

let mapStateToProps = (state) => {
  let segmentOutput = []
  let searchParametersSegments = state.search_parameters.segment
  let segmentKeys = Object.keys(searchParametersSegments)
  segmentKeys.forEach(function(key) {
    if (searchParametersSegments[key] === true) {
      let segmentName = state.maps.segment[key]
      segmentOutput.push(segmentName)
    }
  })

  segmentOutput = buildString(segmentOutput)


  let originOutput = []
  let searchParametersOrigins = state.search_parameters.origin
  let originKeys = Object.keys(searchParametersOrigins)
  originKeys.forEach(function(key) {
    if (searchParametersOrigins[key] === true) {
      let originName = state.maps.origin[key]
      originOutput.push(originName)
    }
  })

  originOutput = buildString(originOutput)


  return {
    segments: segmentOutput,
    origin: originOutput
  }
};

let mapDispatchToProps = (dispatch) => {
  return {
    showFilter: (bool) => {
      dispatch(showFilter(bool));
    }
  }
};

export const OverviewContainer = connect(mapStateToProps, mapDispatchToProps)(Overview)
