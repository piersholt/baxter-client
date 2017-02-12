import { connect } from 'react-redux'
import Result from '../components/result'
import { selectAccount } from '../actions'

let mapDispatchToProps = (dispatch) => {
  return {
    select: (id) => {
      dispatch(selectAccount(id))
    }
  }
};

export const ResultContainer = connect(null, mapDispatchToProps)(Result)
