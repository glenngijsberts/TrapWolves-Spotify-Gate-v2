import React from 'react'
import './spinner.css'

const Spinner = ({ size, color, bgColor }) => {

    const style = {
        width: `${size}px`,
        height: `${size}px`,
        borderColor: `${bgColor}`,
        borderTopColor: `${color}`,
    }

    return (
        <div className="spinner" style={style}></div>
    )

}

export default Spinner