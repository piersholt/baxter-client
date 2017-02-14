import React from 'react';

class Overview extends React.Component {
  render () {
    return (
      <div>

        { this.props.segments }
        <button className="pull-right" onClick={() => this.props.showFilter(true)} type="button">Show Filters</button>
      </div>

    )
  }
}

export default Overview;
