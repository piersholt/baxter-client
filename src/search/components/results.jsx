import React from 'react';
import { ResultContainer } from '../containers/result.jsx';

class Results extends React.Component {
  showPaginate() {
    if (this.props.showPaginate === true) {
      return <button className="btn-rounded pull-right" onClick={() => this.props.paginateSearch(this.props.search_parameters)} type="button">Load More</button>
    }
  }

  render () {
    let accounts = null

    if (this.props.accounts.length > 0) {
      accounts = this.props.accounts.map(function(object) {
        return <ResultContainer key={object.id} id={object.id} account={object} />;
         })
    }

    return (
      <div>
      <table className="table table-fixed table-hover">
        <thead>
          <tr className="resultHeader">
            <th></th>
            <th></th>
            <th>Followers</th>
            <th>Reach</th>
            <th>Engagement</th>
            <th>Engagement Rate</th>
          </tr>
        </thead>
        <tbody>
          { accounts }
        </tbody>
      </table>
      { this.showPaginate() }
    </div>
    )
  }
}

export default Results;
