import { Candidates } from '../../constants/polls/enums';
import { POLL_PARTY_MODIFIERS } from '../../constants/polls/party-modifiers';
import { POLL_QUESTIONS } from '../../constants/polls/flow-questions';

const getEmptyPartScoreBoard = () => {
    return {
        [Candidates.Bec]: 0,
        [Candidates.Bra]: 0,
        [Candidates.Cor]: 0,
        [Candidates.Nus]: 0,
    }
}

// Get the "maximum amount of points" one can get for each party.
export const GetPartyTotalScores = () => {
    const _opinionTotals = getEmptyPartScoreBoard();

    for (const questionId in POLL_PARTY_MODIFIERS) {

        for (const candidate in _opinionTotals) {
            // Using Math.Abs we turn all negatives into positives - we want the
            // maximum POSITIVE POSSIBLE score after all.
            const _value = Math.abs(POLL_PARTY_MODIFIERS[questionId][candidate]);
            _opinionTotals[candidate] += _value;
        }
    }

    return _opinionTotals
}

// Turn the FormState answers (radio) and partymodifiers into scores
export const CalculateScoresPerParty = (formState) => {
    const _playerScores = getEmptyPartScoreBoard();

    // loop over all radio inputs
    for (const questionKey in formState) {
        const _partyModifiers = POLL_PARTY_MODIFIERS[questionKey];
        
        for (const candidate in _playerScores) {

            // multiply the players -1 / -0.5 / 0.5 / 1 input with the
            // importance/score per party.
            const value = formState[questionKey] * _partyModifiers[candidate];
            _playerScores[candidate] += value;
        }
    }

    return _playerScores;
}

// Use Scores (above) to create actual Agreement Percentages per party
export const CalculatePercentageScores = (playerScores) => {
    const partyTotals = GetPartyTotalScores();
    const playerScorePercentages = getEmptyPartScoreBoard();

    for (const candidate in playerScores) {
        
        // get the party 'max' from earlier - and then double it for the percent
        // calculation later.
        const _pointCap = partyTotals[candidate];
        const _pointRange = (_pointCap * 2);

        const points = playerScores[candidate];

        let x = 0;
        let percentage = 0;

        if (points >= 0) {
            // add points + "highest" to set a baseline of 50%
            x = points + _pointCap;
        } else if (points < 0) {
            // remove "low" score from "highest" to keep what remains
            // from 50% and below.
            x = _pointCap - Math.abs(points);
        }
        percentage = parseFloat((x / _pointRange) * 100).toFixed(2);

        playerScorePercentages[candidate] = percentage;
    }

    return playerScorePercentages;
}

// Get an overview of Player opinions Compared to Party opinions
export const getScoreComparisonOverview = (formState) => {
    let scoreOverview = [];

    for (const questionId in formState) {
        const _question = POLL_QUESTIONS[questionId]
        const _questionModifiers = POLL_PARTY_MODIFIERS[questionId];
        const userValue = formState[questionId]
        const _partyValues = getEmptyPartScoreBoard();

        for (const candidate in _partyValues) {
            _partyValues[candidate] = userValue * _questionModifiers[candidate];
        }

        scoreOverview.push({
            question: _question,
            questionId,
            userValue,
            ..._partyValues
        })
    }

    return scoreOverview;
}