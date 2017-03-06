import { connect } from 'react-redux'
import Overview from '../components/overview'
import { showFilter } from '../actions'
import { buildString } from './profile'

import numeral from 'numeral';

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


  let minFollowersFormatted = numeral(state.search_parameters.minFollowers).format('0a')
  let maxFollowersFormatted = numeral(state.search_parameters.maxFollowers).format('0a')

  let followersOutput = minFollowersFormatted + ' to ' + maxFollowersFormatted + ' followers'

  return {
    segments: segmentOutput,
    origin: originOutput,
    followers: followersOutput
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
