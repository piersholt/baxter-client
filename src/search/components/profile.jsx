import React from 'react';

class Profile extends React.Component {

  render () {

    let posts = this.props.posts.map(
      function(object){
        return <div key={object.id} className="col-lg-6 col-md-12 nopadding">
            <div className="post-image">
              <img width="100%" role="presentation" src={object.image.thumbnail} />
            </div>
          </div>;
      }
    )

    return (
      <div>

        <div className='row'>
          <div className='col-md-3 nopadding'>
            <img className='img-circle' role="presentation" src={this.props.profile_picture} width='96' />
          </div>
          <div className='col-md-9'>
            <div className='row profile-actions'>
              <div className='col-md-12'>
                <a href="http://instagram.com/nikkikphillips" className="btn btn-rounded" target="_blank">View Instagram</a>
              </div>
            </div>
            <div className='row profile-counts'>
              <div className='col-md-4'>
                {this.props.counts.media}
                <div className='profile-counts-label'>Posts</div>
              </div>
              <div className='col-md-4'>
                {this.props.counts.followers}
                <div className='profile-counts-label'>Followers</div>
              </div>
              <div className='col-md-4'>
                {this.props.counts.following}
                <div className='profile-counts-label'>Following</div>
              </div>
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
          <div id='website'><a href={this.props.website} target="_blank">{this.props.website}</a></div>
        </div>

        <div className='row'>
          <div id="origin">Victoria, NSW</div>
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
