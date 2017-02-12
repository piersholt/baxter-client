import React from 'react';

class Result extends React.Component {
  render () {
    return (
      <tr onClick={() => this.props.select(this.props.id)}>
        <td width="100">
          <img className='img-circle center-block' role="presentation" src={this.props.account.profile_picture} width='75' />
        </td>
        <td width="300">
          <div className="row">
            <div className="col-md-12">
              { this.props.account.full_name }
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="second">{ this.props.account.bio }</div>
            </div>
          </div>
        </td>
        <td className="result-metric">
          8
        </td>
        <td className="result-metric">
          { 100 }
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
