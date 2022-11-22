import React from 'react'

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



    return (
        <section>

            <div className="row">
                <span className='poll-form__category'>{_current.category.label}</span>
            </div>

            <div className="row flex flex--column flex-md--row gap--6">

                <div className='col-1 col--md-6'>
                    <p className='poll-form__statement'>{_current.statement}</p>

                    <label>testInput
                        <input
                            type="text"
                            placeholder="?"
                            value={formState[_current.questionId]}
                            onChange={handleChange(`${_current.questionId}`)}
                        />
                    </label>
                </div>


                <div className='col-1 col--md-3'>
                    <button onClick={Continue} type="button">Next</button>
                    <button onClick={Previous} type="button">Back</button>
                </div>


            </div>

        </section>
    )

}

export default PollQuestion