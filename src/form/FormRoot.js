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
    // const _temp = pollQuestions[step].partyModifiers;
    // const _x = e.target.value;

    // console.log('--scores');
    // console.log(_temp.Beccus * _x);
    // console.log(_temp.Cornu * _x);
    // console.log(_temp.Brachi * _x);
    // console.log(_temp.NUS * _x);
    setFormData({ ...formData, [input]: e.target.value })
  }

  switch (step) {

    case 0:
      return (
        <div className='poll-start'>
          <h1>VoteMatch</h1>

          <p>VoteMatch will display a series of question/statements relating to the current election.</p>

          <p>At the end your answers will be compared to those of the parties to check how your values align with theirs.</p>

          <button type="button" onClick={nextStep} className="button button--primary">Start</button>

        </div>
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
