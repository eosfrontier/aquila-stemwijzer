import React from "react";
import { getScoreComparisonOverview } from "../utils/score-util";


const options = [
    { text: 'Strongly agree', value: 1 },
    { text: 'Agree', value: 0.5 },
    { text: 'Disagree', value: -0.5 },
    { text: 'Strongly disagree', value: -1 },
];
const getOptionByValue = (value) => options.find((opt) => opt.value == value)


function getScoreClassNames(score) {
    const _base = 'col-1 result-overview__score';
    let _state = 'zero';

    if (score > 0) {
        _state = score >= 2.5 ? 'plus' : 'plus-half'
    } else if (score < 0) {
        _state = score <= -2.5 ? 'min' : 'min-half'
    }

    return `${_base} ${_state}`;
}

function PartyOverviewEntry(name, value, qid) {
    return (<div key={`${qid}${name}`} className={getScoreClassNames(value)}>
        <p>{name}</p>
        <p>{value > 0 ? `+${value}` : value}</p>
    </div>)
}

export function CompletionOverview({formState}) {
    const overview = getScoreComparisonOverview(formState);

    return overview.map((entry) => {
        const yourAnswer = getOptionByValue(entry.userValue);

        return (
            <div key={entry.questionId} className="result-overview__row">

                <p className="result-overview__quote">
                    <strong>"{entry.question}"</strong>
                </p>


                <p className="result-overview__answer">
                    <span>Your answer: </span><strong>{yourAnswer.text}</strong>
                </p>
                <p className="mb-3">Opinions/Points relative to your answer:</p>


                <div className="flex flex--row gap-3">

                    {PartyOverviewEntry('Beccus', entry.Beccus, entry.questionId )}
                    {PartyOverviewEntry('Brachi', entry.Brachi, entry.questionId )}
                    {PartyOverviewEntry('Cornu', entry.Cornu, entry.questionId )}
                    {PartyOverviewEntry('NUS', entry.NUS, entry.questionId )}

                </div>


            </div>
        )
    })

}

export default CompletionOverview