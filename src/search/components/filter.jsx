import React from 'react';

class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      segmentFashion: (this.props.segmentFashion),
      segmentBeauty: (this.props.segmentBeauty),
      segmentLifestyle: (this.props.segmentLifestyle),
      segmentFood: (this.props.segmentFood),
      segmentHealth: (this.props.segmentHealth),
      segmentFitness: (this.props.segmentFitness),
      originVIC: (this.props.originVIC),
      originNSW: (this.props.originNSW),
      originQLD: (this.props.originQLD),
      originSA:(this.props.originSA),
      originWA:(this.props.originWA),
      minFollowers: 50,
      maxFollowers: 100
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
      segment: {
        fashion: (this.state.segmentFashion),
        beauty: (this.state.segmentBeauty),
        lifestyle: (this.state.segmentLifestyle),
        food: (this.state.segmentFood),
        health: (this.state.segmentHealth),
        fitness: (this.state.segmentFitness)
      },
      origin: {
        VIC: (this.state.originVIC),
        NSW: (this.state.originNSW),
        QLD: (this.state.originQLD),
        SA:(this.state.originSA),
        WA:(this.state.originWA)
      },
      minFollowers: (this.state.minFollowers),
      maxFollowers: (this.state.maxFollowers),
      page: 1
    }
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-12" id="SearchFilterResults">
          <form>
            {/*  SEGMENT */}
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
            {/*  ORIGIN */}
            <fieldset className="segment">
              <label>
                Victoria:
                <input
                  name="originVIC"
                  type="checkbox"
                  checked={this.state.originVIC}
                  onChange={this.handleInputChange} />
              </label>
              <label>
                New South Wales:
                <input
                  name="originNSW"
                  type="checkbox"
                  checked={this.state.originNSW}
                  onChange={this.handleInputChange} />
              </label>
              <label>
                Queensland:
                <input
                  name="originQLD"
                  type="checkbox"
                  checked={this.state.originQLD}
                  onChange={this.handleInputChange} />
              </label>
              <label>
                South Australia:
                <input
                  name="originSA"
                  type="checkbox"
                  checked={this.state.originSA}
                  onChange={this.handleInputChange} />
              </label>
              <label>
                Western Australia:
                <input
                  name="originWA"
                  type="checkbox"
                  checked={this.state.originWA}
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
            <button className="pull-right" onClick={() => this.props.paginateSearch(this.parameters())} type="button">Cancel</button>
            <button className="pull-right" onClick={() => this.props.paginateSearch(this.parameters())} type="button">Find Influencers</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Filter;
