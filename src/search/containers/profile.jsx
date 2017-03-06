import { connect } from 'react-redux'
import Profile from '../components/profile'

export function buildString(array) {
  let output = ''
  let delimiter = ', '

  for (const item of array) {
    output = output + item + delimiter
  }

  output = output.slice(0, -2)
  return output
}

let mapStateToProps = (state) => {
  let selected_id = state.selected
  let selected_account = null

  for (let account of state.accounts) {
    if (account.id === selected_id) {
      selected_account = account
    }
  }

  if (selected_account == null) {
    selected_account = {
      profile_picture: 'https://scontent.cdninstagram.com/t51.2885-19/s150x150/15803612_366597850385743_5436120968172929024_a.jpg',
      full_name: 'Louise Roe',
      website: 'http://frontroe.co/2jzjPiR',
      counts: { media: 0, followers: 0, following: 0 },
      bio: '',
      posts: [],
      segments: [],
      username: 'louiseroe',
      origin: {state: 'None', country: 'None' }
    }
  }

  let segments = buildString(selected_account.segments)
  let origin = buildString([selected_account.origin.state, selected_account.origin.country])

  return {
    profile_picture: selected_account.profile_picture,
    full_name: selected_account.full_name,
    website: selected_account.website,
    bio: selected_account.bio,
    counts: selected_account.counts,
    posts: selected_account.posts,
    username: selected_account.username,
    segments: segments,
    origin: origin
  }
}

export const ProfileContainer = connect(mapStateToProps)(Profile)
