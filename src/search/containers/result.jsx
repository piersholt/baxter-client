import { connect } from 'react-redux'
import Result from '../components/result'
import { selectAccount } from '../actions'

let mapStateToProps = (state, ownProps) => {
  let selected = ownProps.id === state.selected ? true : false
  return {
    selected: selected
  }
};

let mapDispatchToProps = (dispatch) => {
  return {
    select: (id) => {
      dispatch(selectAccount(id))
    }
  }
};

export const ResultContainer = connect(mapStateToProps, mapDispatchToProps)(Result)
