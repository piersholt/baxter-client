import React from 'react';

class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      s_f: (this.props.s_f),
      s_b: (this.props.s_b),
      s_fd: (this.props.s_fd),
      s_c: (this.props.s_c),
      s_hi: (this.props.s_hi),
      s_l: (this.props.s_l),
      s_hf: (this.props.s_hf),
      s_cp: (this.props.s_cp),
      s_cp: (this.props.s_cp),
      s_ap: (this.props.s_ap),
      s_t: (this.props.s_t),
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

    // this.props.changeSearchParameters(this.parameters())
  }

  // A bit of a faff, but there's no nested params in the form, but we nest them for the API
  parameters() {
    return {
      segment: {
        s_f: (this.state.s_f),
        s_b: (this.state.s_b),
        s_fd: (this.state.s_fd),
        s_c: (this.state.s_c),
        s_hi: (this.state.s_hi),
        s_l: (this.state.s_l),
        s_hf: (this.state.s_hf),
        s_cp: (this.state.s_cp),
        s_ap: (this.state.s_ap),
        s_t: (this.state.s_t)
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

            <div className="row filter-buttons nopadding">
              <button className="btn-rounded-jumbo pull-right" onClick={() => this.props.newSearch(this.parameters())} type="button">Find Influencers</button>
              <button className="btn-cancel pull-right" onClick={() => this.props.showFilter(false)} type="button">Cancel</button>
            </div>

            {/*  SEGMENT */}
            <fieldset className="segment">
                <div className="filter-header">Categories</div>

                  <div className="col-md-4">
                    <input
                      name="s_f"
                      type="checkbox"
                      checked={this.state.s_f}
                      onChange={this.handleInputChange}
                      className="magic-checkbox"
                      id="s_f"/>
                    <label htmlFor="s_f" className="filter-label">Fashion</label>
                  </div>

                  <div className="col-md-4">
                    <input
                      name="s_b"
                      type="checkbox"
                      checked={this.state.s_b}
                      onChange={this.handleInputChange}
                      className="magic-checkbox"
                      id="s_b"/>
                    <label htmlFor="s_b" className="filter-label">Beauty</label>
                  </div>

                  <div className="col-md-4">
                    <input
                      name="s_fd"
                      type="checkbox"
                      checked={this.state.s_fd}
                      onChange={this.handleInputChange}
                      className="magic-checkbox"
                      id="s_fd"/>
                    <label htmlFor="s_fd" className="filter-label">Food & Drink</label>
                  </div>

                  <div className="col-md-4">
                    <input
                      name="s_c"
                      type="checkbox"
                      checked={this.state.s_c}
                      onChange={this.handleInputChange}
                      className="magic-checkbox"
                      id="s_c"/>
                    <label htmlFor="s_c" className="filter-label">Cooking</label>
                  </div>

                  <div className="col-md-4">
                    <input
                      name="s_hi"
                      type="checkbox"
                      checked={this.state.s_hi}
                      onChange={this.handleInputChange}
                      className="magic-checkbox"
                      id="s_hi"/>
                    <label htmlFor="s_hi" className="filter-label">Home & Interior</label>
                  </div>

                  <div className="col-md-4">
                    <input
                      name="s_l"
                      type="checkbox"
                      checked={this.state.s_l}
                      onChange={this.handleInputChange}
                      className="magic-checkbox"
                      id="s_l"/>
                    <label htmlFor="s_l" className="filter-label">Lifestyle</label>
                  </div>

                  <div className="col-md-4">
                    <input
                      name="s_hf"
                      type="checkbox"
                      checked={this.state.s_h}
                      onChange={this.handleInputChange}
                      className="magic-checkbox"
                      id="s_hf"/>
                    <label htmlFor="s_hf" className="filter-label">Health</label>
                  </div>

                  <div className="col-md-4">
                    <input
                      name="s_cp"
                      type="checkbox"
                      checked={this.state.s_cp}
                      onChange={this.handleInputChange}
                      className="magic-checkbox"
                      id="s_cp"/>
                    <label htmlFor="s_cp" className="filter-label">Children & Parenting</label>
                  </div>

                  <div className="col-md-4">
                    <input
                      name="s_ap"
                      type="checkbox"
                      checked={this.state.s_ap}
                      onChange={this.handleInputChange}
                      className="magic-checkbox"
                      id="s_ap"/>
                    <label htmlFor="s_ap" className="filter-label">Animals & Pets</label>
                  </div>

                  <div className="col-md-4">
                    <input
                      name="s_t"
                      type="checkbox"
                      checked={this.state.s_t}
                      onChange={this.handleInputChange}
                      className="magic-checkbox"
                      id="s_t"/>
                    <label htmlFor="s_t" className="filter-label">Travel</label>
                  </div>
            </fieldset>

            <hr />

            {/*  ORIGIN */}
            <fieldset className="origin">
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
                  <option value="5000" selected="selected">5k</option>
                  <option value="10000">10k</option>
                  <option value="25000">25k</option>
                  <option value="50000">50k</option>
                  <option value="100000">100k</option>
                  <option value="250000">250k</option>
                  <option value="500000">500k</option>
                  <option value="1000000">1m</option>
                </select>
              </div>
              <div className="col-md-1 element-followers-arrow nopadding">
                <img src={require('../../../public/el-followers-arrow@2x.png')} className="element-followers-arrow"/>
              </div>
              <div className="col-md-2">
                <select
                  name="maxFollowers"
                  type="number"
                  value={this.state.maxFollowers}
                  onChange={this.handleInputChange}
                  className="form-control input-lg input-followers">
                  <option value="5000">5k</option>
                  <option value="10000">10k</option>
                  <option value="25000">25k</option>
                  <option value="50000">50k</option>
                  <option value="100000">100k</option>
                  <option value="250000">250k</option>
                  <option value="500000">500k</option>
                  <option value="1000000" selected="selected">Over 1m</option>
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
