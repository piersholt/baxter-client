import React from 'react';
import numeral from 'numeral';

class Result extends React.Component {
  selected() {
    if (this.props.selected ===  true) {
      return ( "selectedResult" )
    }
  }

  render () {
    return (
      <tr className={ this.selected() } onClick={() => this.props.select(this.props.id)}>
        <td className="profile-picture">
          <img className='result-profile-image' role="presentation" src={this.props.account.profile_picture} width='64' />
        </td>
        <td className="result-bio">
          <div className="row">
            <div className="col-md-12">
              <div className="username">
                { this.props.account.username }
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="second"><b>{ this.props.account.full_name } </b>{ this.props.account.bio }</div>
            </div>
          </div>
        </td>
        <td className="result-metric">
          { this.props.account.counts.followers < 1000000 ? numeral(this.props.account.counts.followers).format('0a') : numeral(this.props.account.counts.followers).format('0.00a') }
        </td>
        <td className="result-metric">
          { numeral(this.props.account.counts.followers/10).format('0a') }
        </td>
        <td className="result-metric">
          { this.props.account.engagement === undefined ? '-' : numeral(this.props.account.engagement.aggregate).format('0a') }
        </td>
        <td className="result-metric">
          { this.props.account.engagement === undefined ? '-' : numeral(this.props.account.engagement.rate).format('0.00%') }
        </td>
    </tr>
    )
  }
}

export default Result;
