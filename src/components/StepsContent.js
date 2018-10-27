import React from 'react'
// import Spinner from 'components/Spinner/Spinner'

const StepsContent = ({ currentStep, getUserData }) => {

    if (currentStep === 1) return (
        <section className="section-content">
            <button className="button button-spotify" onClick={getUserData}>
                Login with Spotify to follow us
                <span className="button--icon"><i className="fa fa-spotify"></i></span>
            </button>
            <p>You have to follow the TrapWolves playlist in order to enter the giveaway. Once you login you will follow the playlist.</p>
        </section>
    )

    if (currentStep === 2) return (
        <section className="section-content">
            <h1>Step 2</h1>
        </section>
    )

    return (
        <section className="section-content">
            <h1>Step 3</h1>
        </section>
    )

}

export default StepsContent