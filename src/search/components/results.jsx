import React from 'react';
import { ResultContainer } from '../containers/result.jsx';
import CircularProgress from 'material-ui/CircularProgress';


class Results extends React.Component {
  showPaginate() {
    if (this.props.isFetching === true) {
      return <center><CircularProgress color="#FF4C42"/></center>
    }
    else if (this.props.showPaginate === true) {
      return <center><button className="btn-rounded" onClick={() => this.props.paginateSearch(this.props.search_parameters)} type="button">Load More</button></center>
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
      <div class="center-block">
        { this.showPaginate() }
      </div>
    </div>
    )
  }
}

export default Results;
