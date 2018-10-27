// Deps
import React, { Component } from 'react'

// Components
import Header from 'components/Header'
import Steps from 'components/Steps'
import StepsContent from 'components/StepsContent'
import OverlaySpinner from 'components/OverlaySpinner'

// Assets
import Logo from 'assets/img/logo_trapwolves.png'
import Arrow from 'assets/img/Arrow.png'
import Shirts from 'assets/img/Shirts.png'

class App extends Component {

  state = {
    currentStep: 1,
    loaded: false,
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({loaded: true})
    }, 2000)
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

          <StepsContent currentStep={currentStep} /> 

        </main>
      </div>
    )
  }
}

export default App;
