import React from 'react';

class Overview extends React.Component {
  render () {
    return (
      <div>
        <div className="search-overview pull-left">
          { this.props.origin }&nbsp;&nbsp;|&nbsp;&nbsp;{ this.props.segments }&nbsp;&nbsp;|&nbsp;&nbsp;{ this.props.followers }
        </div>
        <button className="btn-outline pull-right" onClick={() => this.props.showFilter(true)} type="button">Show Search</button>
      </div>

    )
  }
}

export default Overview;
