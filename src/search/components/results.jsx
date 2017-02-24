import React from 'react';
import { ResultContainer } from '../containers/result.jsx';

class Results extends React.Component {
  showPaginate() {
    if (this.props.showPaginate === true) {
      return <button className="btn-rounded pull-right" onClick={() => this.props.paginateSearch(this.parameters())} type="button">Load More</button>
    }
  }

  parameters() {
    return {
      segment: {
        fashion: (this.props.search_parameters.segment.fashion),
        beauty: (this.props.search_parameters.segment.beauty),
        lifestyle: (this.props.search_parameters.segment.lifestyle),
        food: (this.props.search_parameters.segment.food),
        health: (this.props.search_parameters.segment.health),
        fitness: (this.props.search_parameters.segment.fitness),
      },
      origin: {
        VIC: (this.props.search_parameters.origin.VIC),
        NSW: (this.props.search_parameters.origin.NSW),
        QLD: (this.props.search_parameters.origin.QLD),
        SA:(this.props.search_parameters.origin.SA),
        WA:(this.props.search_parameters.origin.WA)
      },
      minFollowers: (this.props.search_parameters.minFollowers),
      maxFollowers: (this.props.search_parameters.maxFollowers),
      page: (this.props.search_parameters.page)
    }
  }

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
      <div>
      <table className="table table-fixed table-hover">
        <thead>
          <tr>
            <th></th>
            <th></th>
            <th>Followers</th>
            <th>AEPP</th>
            <th>AER</th>
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
