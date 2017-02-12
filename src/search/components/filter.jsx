import React from 'react';

class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      segmentFashion: (this.props.segmentFashion === undefined ? false : true),
      segmentBeauty: (this.props.segmentBeauty === undefined ? false : true),
      segmentLifestyle: (this.props.segmentLifestyle === undefined ? false : true),
      segmentFood: (this.props.segmentFood === undefined ? false : true),
      segmentHealth: (this.props.segmentHealth === undefined ? false : true),
      segmentFitness: (this.props.segmentFitness === undefined ? false : true),
      minFollowers: 2,
      maxFollowers: 2
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  parameters() {
    return {
      segmentFashion: (this.state.segmentFashion),
      segmentBeauty: (this.state.segmentBeauty),
      segmentLifestyle: (this.state.segmentLifestyle),
      segmentFood: (this.state.segmentFood),
      segmentHealth: (this.state.segmentHealth),
      segmentFitness: (this.state.segmentFitness),
      minFollowers: (this.state.minFollowers),
      maxFollowers: (this.state.maxFollowers)
    }
  }

  render() {
    return (
      <form>
        <fieldset className="segment">
          <label>
            Fashion:
            <input
              name="segmentFashion"
              type="checkbox"
              checked={this.state.segmentFashion}
              onChange={this.handleInputChange} />
          </label>
          <label>
            Beauty:
            <input
              name="segmentBeauty"
              type="checkbox"
              checked={this.state.segmentBeauty}
              onChange={this.handleInputChange} />
          </label>
          <label>
            Lifestyle:
            <input
              name="segmentLifestyle"
              type="checkbox"
              checked={this.state.segmentLifestyle}
              onChange={this.handleInputChange} />
          </label>
          <label>
            Foodie:
            <input
              name="segmentFood"
              type="checkbox"
              checked={this.state.segmentFood}
              onChange={this.handleInputChange} />
          </label>
          <label>
            Health:
            <input
              name="segmentHealth"
              type="checkbox"
              checked={this.state.segmentHealth}
              onChange={this.handleInputChange} />
          </label>
          <label>
            Fitness:
            <input
              name="segmentFitness"
              type="checkbox"
              checked={this.state.segmentFitness}
              onChange={this.handleInputChange} />
          </label>
        </fieldset>

        <br />
        <fieldset className="followers">
          <label>
            Min followers:
            <input
              name="minFollowers"
              type="number"
              value={this.state.minFollowers}
              onChange={this.handleInputChange} />
          </label>
          <label>
            Max followers:
            <input
              name="maxFollowers"
              type="number"
              value={this.state.maxFollowers}
              onChange={this.handleInputChange} />
          </label>
        </fieldset>
        <button className="pull-right" onClick={() => this.props.paginateSearch(this.parameters())} type="button">Search</button>
      </form>
    );
  }
}

export default Filter;
