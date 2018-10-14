import React from 'react'

const Step = ({ number, label }) => (
    <div className="steps--step">
        <span className="steps--step--number">{number}</span>
        <span className="steps--step--label">{label}</span>
    </div>
)

const Steps = () => (
    <section className="steps">
        <Step number={1} label="Follow" />
        <Step number={2} label="Information" />
        <Step number={3} label="Complete" />
    </section>
)

export default Steps