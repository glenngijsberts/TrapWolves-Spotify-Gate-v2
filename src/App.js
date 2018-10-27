// Deps
import React, { Component } from 'react'
import axios from 'axios'

// Components
import Header from 'components/Header'
import Steps from 'components/Steps'
import StepsContent from 'components/StepsContent'
import OverlaySpinner from 'components/OverlaySpinner'

// Assets
import Logo from 'assets/img/logo_trapwolves.png'
import Arrow from 'assets/img/Arrow.png'
import Shirts from 'assets/img/Shirts.png'

// Utils
import spotify_token from 'utils/Spotify'

const PLAYLIST = '71z8xZqacq06KVQ2Nir9H6'
const OWNER = 'trapwolvesofficial'

class App extends Component {

  state = {
    currentStep: 1,
    loaded: false,
    token: null,
    user_id: null,
  }

  async componentDidMount() {
    const token = await spotify_token
    this.setState({
      token,
      loaded: true,
    })
  }

  getUserData = async () => {
    const data = await axios({
      method: 'GET',
      url: 'https://api.spotify.com/v1/me',
      headers: {
        'Authorization': `Bearer ${this.state.token}`
      },
    })
    .then((data) => {
      return data
    })

    // Get the id of the profile
    const { data: { id }} = data;
    await this.setState({
      user_id: id,
    })

    this.followPlaylist()
  }

  followPlaylist = async () => {
    axios({
      method: 'get',
      url: `https://api.spotify.com/v1/users/${OWNER}/playlists/${PLAYLIST}/followers/contains?ids=${this.state.user_id}`,
      headers: {
        'Authorization': `Bearer ${this.state.token}`
      }
    }).then((response) => {
      if (response.data[0]) {
        console.log('true')
      }
    })
  }

  render() {

    const { currentStep, loaded } = this.state

    if (!loaded) return <OverlaySpinner />

    return (
      <div className="App container">
        <Header logo={Logo} />
        <main>

          <section className="content">
            <img src={Arrow} alt="Enter below!" className="content--arrow" />
            <img src={Shirts} alt="Enter to win!!" className="content--shirts" />
            <img src={Arrow} alt="Enter below!" className="content--arrow" />
          </section>

          <Steps currentStep={currentStep} />

          <StepsContent currentStep={currentStep} getUserData={this.getUserData} /> 

        </main>
      </div>
    )
  }
}

export default App;
