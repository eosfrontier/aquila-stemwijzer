import React, {Component} from 'react';

export default class FormRoot extends Component {
  state = {
    step: 0,
    categories: {
      initial: {
        iAmNotARobot: false,
        name: '',
        planet: ''
      },
      pollQuestions: {
        otherFactions: '',
        poorBabyDugo: '',
        serviceTerms: ''
      }

    }
  };


  render() {
    return <div>
      formRoot
    </div>;
  }
}
