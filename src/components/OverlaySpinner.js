import React from 'react'
import Spinner from 'components/Spinner/Spinner'

const OverlaySpinner = () => (
    <div className="overlay-spinner">
        <Spinner size={30} color="#717171" bgColor="#ececec" />
    </div>
)

export default OverlaySpinner