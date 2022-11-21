import React, {useState} from 'react';
import {
  generateQuestionList,
  initEmptyFlowState,
} from './steps/step-controller';

function PollFormRoot() {
  // set initial states
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState(initEmptyFlowState());
}

export default PollFormRoot;
