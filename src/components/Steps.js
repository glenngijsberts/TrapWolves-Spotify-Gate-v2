import React from 'react'
import classNames from 'classnames'

const Step = ({ number, label, active }) => (
    <div className={classNames('steps--step', { active })}>
        <span className="steps--step--number">{number}</span>
        <span className="steps--step--label">{label}</span>
    </div>
)

const Steps = ({ currentStep }) => (
    <section className="steps">
        <Step number={1} label="Follow" active={currentStep === 1} />
        <Step number={2} label="Information" active={currentStep === 2}  />
        <Step number={3} label="Complete" active={currentStep === 3} />
    </section>
)

export default Steps