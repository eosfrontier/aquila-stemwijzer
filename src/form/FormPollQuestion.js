import React from 'react';

const options = [
  {affix: 'sa', text: 'Strongly agree', value: 2},
  {affix: 'a', text: 'Agree', value: 1},
  {affix: 'da', text: 'Disagree', value: -1},
  {affix: 'sda', text: 'Strongly disagree', value: -2},
];

const PollQuestion = ({
  nextStep,
  prevStep,
  step,
  handleChange,
  formState,
  questionList,
}) => {
  const Continue = (e) => {
    e.preventDefault();
    nextStep();
  };
  const Previous = (e) => {
    e.preventDefault();
    prevStep();
  };

  const _current = questionList.find((question) => question.step === step);

  const isChecked = (opt) =>
    formState[_current.questionId] === opt.value.toString();
    
  const completionPercentage = () => {
    const percentage = ((step - 1) / questionList.length) * 100;
    return `${Math.round(percentage)}%`;
  };

  const RadioButtons = options.map((opt, index) => {
    const htmlId = `${_current.questionId}-${opt.affix}`;
    const radioState = isChecked(opt)
      ? 'form-radio form-radio--checked'
      : 'form-radio';

    return (
      <div key={index} className={`option-${opt.affix}`}>
        <label className={radioState} htmlFor={htmlId}>
          <input
            tabIndex={1}
            type="radio"
            name={_current.questionId}
            checked={isChecked(opt)}
            value={opt.value}
            id={htmlId}
            onChange={handleChange(`${_current.questionId}`)}
          />

          {opt.text}

          <span className="form-radio__dot"></span>
        </label>
      </div>
    );
  });

  return (
    <>
      <aside className="row poll-top">
        <span className="poll-top__tile poll-top__category">
          {_current.category.label}
        </span>

        <span className="poll-top__tile poll-top__step">{step}</span>
        <span className="poll-top__tile poll-top__progress">
          {completionPercentage()}
        </span>
      </aside>

      <article>
        <form name={_current.questionId}>
          <section className="row flex flex--column gap-4">
            <div className="">
              <p className="poll-quote">{_current.statement}</p>
            </div>

            <div className="">
              <div className="poll-options">{RadioButtons}</div>
            </div>
          </section>

          <nav className="row poll-buttons">
            <span>
              {step > 1 && (
                <button 
                  onClick={Previous}
                  tabIndex={3}
                  type="button" 
                  className="button"
                >
                  Back
                </button>
              )}
            </span>
            <span>
              {formState[_current.questionId] && (
                <button
                  onClick={Continue}
                  tabIndex={2}
                  type="button"
                  className="button button--primary"
                >
                  Next
                </button>
              )}
            </span>
          </nav>
        </form>
      </article>
    </>
  );
};

export default PollQuestion;
