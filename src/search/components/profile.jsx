import React from 'react';

class Profile extends React.Component {

  render () {

    let posts = this.props.posts.map(
      function(object){
        return <div className="col-md-6"><img width="100" role="presentation" src={object.image.thumbnail} /></div>;
      }
    )

    return (
      <div>

        <div className='row'>

          <div className='col-md-3'>
            <img className='img-circle' role="presentation" src={this.props.profile_picture} width='75' />
          </div>

          <div className='col-md-9'>
            <div className='row'>
              <div className='col-md-4'></div>
              <div className='col-md-4'></div>
              <div className='col-md-4'></div>
            </div>
            <div className='row'>
              <div className='col-md-4'>{this.props.counts.media}</div>
              <div className='col-md-4'>{this.props.counts.followers}</div>
              <div className='col-md-4'>{this.props.counts.following}</div>
            </div>
          </div>
        </div>

        <div className='row'>
          <div id="full_name">{ this.props.full_name }</div>
        </div>

        <div className='row'>
          <div id="bio">{ this.props.bio }</div>
        </div>

        <div className='row'>
          <div id='website'><a href={this.props.website}>{this.props.website}</a></div>
        </div>

        <div className='row'>
          <div id="origin">Victoria, Australia</div>
        </div>

        <div className='row'>
          <div id="segment">Fashion, Lifestyle</div>
        </div>

        <div className='row'>
          <div id="posts">
            { posts }
          </div>
        </div>

      </div>
     )
  };
}

export default Profile;
