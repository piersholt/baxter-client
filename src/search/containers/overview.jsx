import { connect } from 'react-redux'
import Overview from '../components/overview'
import { showFilter } from '../actions'

let mapStateToProps = (state) => {
  let output = []

  let segment = state.search_parameters.segment

  let keys = Object.keys(segment)
  keys.forEach(function(key){
    segment[key] === true ? output.push(key) : null
  })



  console.log(output)

  return {
    segments: output
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
