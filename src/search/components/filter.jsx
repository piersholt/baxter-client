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
      minFollowers: this.props.minFollowers,
      maxFollowers: this.props.maxFollowers
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

    this.props.changeSearchParameters(this.parameters())
  }

  // A bit of a faff, but there's no nested params in the form, but we nest them for the API
  parameters() {
    return {
      segment: {
        fashion: (this.state.segmentFashion === undefined ? false : this.state.segmentFashion),
        beauty: (this.state.segmentBeauty === undefined ? false : this.state.segmentBeauty),
        lifestyle: (this.state.segmentLifestyle === undefined ? false : this.state.segmentLifestyle),
        food: (this.state.segmentFood === undefined ? false : this.state.segmentFood),
        health: (this.state.segmentHealth === undefined ? false : this.state.segmentHealth),
        fitness: (this.state.segmentFitness === undefined ? false : this.state.segmentFitness)
      },
      origin: {
        VIC: (this.state.originVIC === undefined ? false : this.state.originVIC),
        NSW: (this.state.originNSW === undefined ? false : this.state.originNSW),
        QLD: (this.state.originQLD === undefined ? false : this.state.originQLD),
        SA:(this.state.originSA === undefined ? false : this.state.originSA),
        WA:(this.state.originWA === undefined ? false : this.state.originWA)
      },
      minFollowers: (this.state.minFollowers),
      maxFollowers: (this.state.maxFollowers),
      page: 1
    }
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <form className="filter-forms">

            <div className="row filter-buttons">
              <button className="btn-rounded-jumbo pull-right" onClick={() => this.props.newSearch(this.parameters())} type="button">Find Influencers</button>
              <button className="btn-cancel pull-right" onClick={() => this.props.showFilter(false)} type="button">Cancel</button>
            </div>

            {/*  SEGMENT */}
            <fieldset className="segment">
                <div className="filter-header">Categories</div>

                  <div className="col-md-4">
                    <input
                      name="segmentFashion"
                      type="checkbox"
                      checked={this.state.segmentFashion}
                      onChange={this.handleInputChange}
                      className="magic-checkbox"
                      id="segmentFashion"/>
                    <label htmlFor="segmentFashion" className="filter-label">Fashion</label>
                  </div>

                  <div className="col-md-4">
                    <input
                      name="segmentBeauty"
                      type="checkbox"
                      checked={this.state.segmentBeauty}
                      onChange={this.handleInputChange}
                      className="magic-checkbox"
                      id="segmentBeauty"/>
                    <label htmlFor="segmentBeauty" className="filter-label">Beauty</label>
                  </div>

                  <div className="col-md-4">
                    <input
                      name="segmentLifestyle"
                      type="checkbox"
                      checked={this.state.segmentLifestyle}
                      onChange={this.handleInputChange}
                      className="magic-checkbox"
                      id="segmentLifestyle"/>
                    <label htmlFor="segmentLifestyle" className="filter-label">Lifestyle</label>
                  </div>

                  <div className="col-md-4">
                    <input
                      name="segmentFood"
                      type="checkbox"
                      checked={this.state.segmentFoodie}
                      onChange={this.handleInputChange}
                      className="magic-checkbox"
                      id="segmentFood"/>
                    <label htmlFor="segmentFood" className="filter-label">Food</label>
                  </div>

                  <div className="col-md-4">
                    <input
                      name="segmentHealth"
                      type="checkbox"
                      checked={this.state.segmentHealth}
                      onChange={this.handleInputChange}
                      className="magic-checkbox"
                      id="segmentHealth"/>
                    <label htmlFor="segmentHealth" className="filter-label">Health</label>
                  </div>

                  <div className="col-md-4">
                    <input
                      name="segmentFitness"
                      type="checkbox"
                      checked={this.state.segmentFitness}
                      onChange={this.handleInputChange}
                      className="magic-checkbox"
                      id="segmentFitness"/>
                    <label htmlFor="segmentFitness" className="filter-label">Fitness</label>
                  </div>
            </fieldset>

            <hr />

            {/*  ORIGIN */}
            <fieldset className="segment">
                <div className="filter-header">Locations</div>
                  <div className="col-md-4">
                    <input
                      name="originNSW"
                      type="checkbox"
                      checked={this.state.originNSW}
                      onChange={this.handleInputChange}
                      className="magic-checkbox"
                      id="originNSW"/>
                    <label htmlFor="originNSW" className="filter-label">New South Wales</label>
                  </div>

                  <div className="col-md-4">
                    <input
                      name="originVIC"
                      type="checkbox"
                      checked={this.state.originVIC}
                      onChange={this.handleInputChange}
                      className="magic-checkbox"
                      id="originVIC"/>
                    <label htmlFor="originVIC" className="filter-label">Victoria</label>
                  </div>

                  <div className="col-md-4">
                    <input
                      name="originQLD"
                      type="checkbox"
                      checked={this.state.originQLD}
                      onChange={this.handleInputChange}
                      className="magic-checkbox"
                      id="originQLD"/>
                    <label htmlFor="originQLD" className="filter-label">Queensland</label>
                  </div>

                  <div className="col-md-4">
                    <input
                      name="originSA"
                      type="checkbox"
                      checked={this.state.originSA}
                      onChange={this.handleInputChange}
                      className="magic-checkbox"
                      id="originSA"/>
                    <label htmlFor="originSA" className="filter-label">South Australia</label>
                  </div>

                  <div className="col-md-4">
                    <input
                      name="originWA"
                      type="checkbox"
                      checked={this.state.originWA}
                      onChange={this.handleInputChange}
                      className="magic-checkbox"
                      id="originWA"/>
                    <label htmlFor="originWA" className="filter-label">Western Australia</label>
                  </div>
            </fieldset>

            <hr />

            {/*  FOLLOWERS */}
            <fieldset className="followers">
              <div className="filter-header">Followers</div>
              <div className="col-md-2">
                <select
                  name="minFollowers"
                  type="number"
                  value={this.state.minFollowers}
                  onChange={this.handleInputChange}
                  className="form-control input-lg input-followers">
                  <option>5k</option>
                  <option>10k</option>
                  <option>25k</option>
                  <option>50k</option>
                  <option>100k</option>
                  <option>250k</option>
                  <option>500k</option>
                  <option>1m</option>
                </select>
              </div>
              <div className="col-md-2">
                <select
                  name="maxFollowers"
                  type="number"
                  value={this.state.maxFollowers}
                  onChange={this.handleInputChange}
                  className="form-control input-lg input-followers">
                  <option>5k</option>
                  <option>10k</option>
                  <option>25k</option>
                  <option>50k</option>
                  <option>100k</option>
                  <option>250k</option>
                  <option>500k</option>
                  <option>Over 1m</option>
                </select>
              </div>
            </fieldset>

          </form>
        </div>
      </div>
    );
  }
}

export default Filter;
