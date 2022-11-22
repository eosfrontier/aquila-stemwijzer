import React from 'react'


const options = [
    { affix: 'sa', text: 'Strongly agree', value: 1 },
    { affix: 'a', text: 'Agree', value: 0.5 },
    { affix: 'da', text: 'Disagree', value: -0.5 },
    { affix: 'sda', text: 'Strongly disagree', value: -1 }
]


const PollQuestion = ({ nextStep, prevStep, step, handleChange, formState, questionList }) => {

    const Continue = e => {
        e.preventDefault()
        nextStep()
    }
    const Previous = e => {
        e.preventDefault()
        prevStep()
    }

    const _current = questionList.find((question) => question.step === step)

    const isChecked = (opt) => formState[_current.questionId] === (opt.value).toString()
    const completionPercentage = () => {
        const percentage = ((step - 1) / questionList.length) * 100;
        return `${Math.round(percentage)}%`
    }

    const RadioButtons = options.map((opt, index) => {
        const htmlId = `${_current.questionId}-${opt.affix}`
        const radioState = isChecked(opt) ? 'form-radio form-radio--checked' : 'form-radio'

        return (
            <label key={index} className={radioState} htmlFor={htmlId}>
                <input type="radio"
                    name={_current.questionId}
                    checked={isChecked(opt)}
                    value={opt.value}
                    id={htmlId}
                    onChange={handleChange(`${_current.questionId}`)}
                />

                {opt.text}

                <span className="form-radio__dot"></span>
            </label>
        )
    })

    return (
        <>
            <aside className="row poll-top">
                <span className='poll-top__tile poll-top__category'>{_current.category.label}</span>

                <span className='poll-top__tile poll-top__step'>{step}</span>
                <span className='poll-top__tile poll-top__progress'>{completionPercentage()}</span>

            </aside>

            <article>
                <form name={_current.questionId}>

                    <section className="row flex flex--column flex-md--row gap-4">

                        <div className='col-1 col--md-6'>
                            <p className='poll-quote'>{_current.statement}</p>
                        </div>

                        <div className='col-1 col--md-3 col--lg-4'>
                            <div className='poll-options'>
                                {RadioButtons}
                            </div>
                        </div>

                    </section>

                    <nav className="row">
                        <button onClick={Continue} type="button">Next</button>
                        <button onClick={Previous} type="button">Back</button>
                    </nav>

                </form>
            </article>




        </>
    )

}

export default PollQuestion