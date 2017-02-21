import React from 'react';

class Result extends React.Component {
  render () {
    return (
      <tr onClick={() => this.props.select(this.props.id)}>
        <td className="profile-picture">
          <img className='result-profile-image' role="presentation" src={this.props.account.profile_picture} width='64' />
        </td>
        <td>
          <div className="row">
            <div className="col-md-12">
              <div className="full-name">
                { this.props.account.full_name }
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="second">{ this.props.account.bio }</div>
            </div>
          </div>
        </td>
        <td className="result-metric">
          { this.props.account.counts.followers }
        </td>
        <td className="result-metric">
          { this.props.account.counts.followers/10 }
        </td>
        <td className="result-metric">
          { 100 }
        </td>
        <td className="result-metric">
          15%
        </td>
    </tr>
    )
  }
}

export default Result;
