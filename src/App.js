// Deps
import React, { Component } from 'react'

// Components
import Header from 'components/Header'
import Steps from 'components/Steps'

// Assets
import Logo from 'assets/img/logo_trapwolves.png'
import Arrow from 'assets/img/Arrow.png'
import Shirts from 'assets/img/Shirts.png'

class App extends Component {
  render() {
    return (
      <div className="App container">
        <Header logo={Logo} />
        <main>

          <section className="content">
            <img src={Arrow} alt="Enter below!" className="content--arrow" />
            <img src={Shirts} alt="Enter to win!!" className="content--shirts" />
            <img src={Arrow} alt="Enter below!" className="content--arrow" />
          </section>

          <Steps />

        </main>
      </div>
    );
  }
}

export default App;
