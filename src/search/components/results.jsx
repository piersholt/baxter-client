import React from 'react';
import { ResultContainer } from '../containers/result.jsx';

class Results extends React.Component {
  render () {
    // console.log('Results / Rendering...')

    let accounts = null

    if (this.props.accounts.length > 0) {
      // console.log('accounts not empty and longer than 0...')
      accounts = this.props.accounts.map(function(object) {
        return <ResultContainer key={object.id} id={object.id} account={object} />;
         })
      // console.log('Results / Rendering / Accounts (in loop): ' + accounts)
    }
    else {
      // console.log('Results / Rendering / No accounts!')
    }

    // console.log('Results / Rendering / Accounts (outside loop): ' + accounts)

    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th></th>
            <th></th>
            <th>Baxter Score</th>
            <th>Followers</th>
            <th>AEPP</th>
            <th>AER</th>
          </tr>
        </thead>
        <tbody>
          { accounts }
          <tr><button className="pull-right" onClick={() => this.props.paginateSearch('test')} type="button">Load More</button></tr>
        </tbody>
      </table> )
  }
}

export default Results;
