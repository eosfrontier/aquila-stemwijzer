import React from 'react';

import { sortArrDesc } from '../utils/common';
import { CalculatePercentageScores, CalculateScoresPerParty } from '../utils/score-util';
import { CompletionOverview } from './completion-overview';


const CreateProgressBars = (scorePercentages) => {
    return scorePercentages.map((scoreObj, index) => {
        const { candidate, score } = scoreObj;

        return (
            <div key={index} className="mb-2">

                <div className="result">

                    <p><strong>{candidate}</strong> - {`${score}%`}</p>

                    <img src={`/vectors/${candidate.toLowerCase()}.svg`} alt={`Logo ${candidate}`} />

                </div>

                <div className='progress'>
                    <div
                        aria-label={`${score}% agreement score bar, for candidate ${candidate}`}
                        className={`progress__inner ${candidate}`}
                        style={{ width: `${score}%` }}
                    >
                    </div>
                </div>
            </div>
        )
    })
}

const ConvertScoresToPercentages = (playerScores) => {
    const percentageObj = CalculatePercentageScores(playerScores);
    let percentages = [];

    for (const candidate in percentageObj) {
        percentages.push({ candidate, score: percentageObj[candidate] })
    }

    return sortArrDesc(percentages, 'score');
}



export function PollCompletionStep({
    prevStep, step, formState, questionList
}) {
    const Previous = (e) => {
        e.preventDefault();
        prevStep();
    };

    const playerScores = CalculateScoresPerParty(formState);
    const percentages = ConvertScoresToPercentages(playerScores);


    return (<article className="page-results">
        <section className='container container--smaller'>
            <h1>
                Results
            </h1>

            <div className='load-first'>
                <div className='spinner mt-4 mb-4'></div>
            </div>


            <div className="load-second result-bar flex flex--column gap-4">
                {CreateProgressBars(percentages)}
            </div>


            <div className="load-second mt-8">
                <button onClick={Previous} tabIndex={2}>Go back</button>
            </div>
        </section>

        <section className='container--full load-second result-overview'>
            <div className='container container--smaller'>
                
                <h2>How was this calculated?</h2>

                <p>Each party has replied to the same statements in shape of a priority/agreement scale point system.</p>
                <p>The higher the number (or lower in the negatives) - the harder the parties agree/disagree to the statement.</p>

                <h3 className='mt-4'><strong>What?</strong></h3>

                <p><strong>For example:</strong> if you answered "Strongly Disagree" to a statement, you provide a Negative score.</p>

                <ul className='mt-4 mb-3'>
                    <li>If a party disagreed to the same statement, they provided a Negative score as well.</li>
                    <li>If you and they both disagree, you gain a <i>Positive</i> score with them, on that statement.</li>
                    <li>If you Agreed instead, you'd gain a <i>Negative</i> score - as you and the party disagree on this matter.</li>
                    <li>Agree + Agree means a Positive score as well.</li>
                </ul>

                <p>Additionally:</p>

                <ul>
                    <li>'Strongly' answers count harder than their regular counterparts.</li>
                    <li>The point gain/loss scales on your answer VS theirs.</li>
                    <li>The 'higher' the point changes, the Stronger a party Agrees/Disagrees to the statement.</li>
                
                </ul>


            </div>
            <div className='container container--smaller pb-8'>

                <h3><strong>Scores</strong></h3>

                <p className="mb-4">Here's how your answers compare to to theirs:</p>

                <CompletionOverview formState={formState} />

                <div className="load-second m-4">
                    <button onClick={Previous} tabIndex={2}>Go back</button>
                </div>
            </div>





        </section>
    </article>)

}

export default PollCompletionStep


// Nice to have! sharebaar maken via URL & PARAMS
// MAYBE: inladen met diezelfde params om terug te kunnen kijken met 2-3 andere statements?