import React, { useState } from 'react';
import {
  generateQuestionList,
  initEmptyFlowState,
} from './steps/step-controller';
import PollQuestion from './FormPollQuestion';


function PollFormRoot() {
  // set initial states

  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState(initEmptyFlowState());

  const pollQuestions = generateQuestionList()
  const pollEndNumber = (pollQuestions.length + 1)

  const nextStep = () => setStep(step + 1)
  const prevStep = () => setStep(step - 1)

  const handleChange = input => e => {
    setFormData({ ...formData, [input]: e.target.value })
  }

  switch (step) {

    case 0:
      return (
        <>
          <h1>VoteMatch</h1>

          <p>VoteMatch will display a series of question/statements relating to the current election.</p>
          <p>At the end your answers will be compared to the candidate's.</p>

          <button type="button" onClick={nextStep} className="button button--primary">Start</button>

        </>
      )
    case pollEndNumber:
      return (
        <p>End</p>
      )
    default:
      return (
        <PollQuestion
          nextStep={nextStep}
          prevStep={prevStep}
          step={step}
          handleChange={handleChange}
          formState={formData}
          questionList={pollQuestions}
        />
      )

  }

}

export default PollFormRoot;
