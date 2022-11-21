import { POLL_CATEGORIES, POLL_STEP_ORDER } from '../../constants/polls/flow-config';
import { POLL_QUESTIONS } from '../../constants/polls/flow-questions';


export function getQuestionCategory(questionId) {
  return POLL_CATEGORIES.find((category) => category.questions.includes(questionId))
}

export function getQuestionText(questionId) {
  try {
    return POLL_QUESTIONS[questionId];

  } catch {
    throw new Error(`ERR: No Question/Statement found for ${questionId}`)
  }
}

/**
 * Generate Array containing Poll questions: including..
 * - unique ID      (questionId)
 * - Step number    (Index +1, to avoid usage of 0 )
 * - Category Name  (category)
 * - Statement Text
 * ??? TODO: PARTY MODIFIERS ???
 */
export function generateQuestionList() {
  return POLL_STEP_ORDER.map((questionId, index) => {
    return {
      step: index + 1,
      questionId,
      category: getQuestionCategory(questionId),
      statement: getQuestionText(questionId)
    };
  });
}

export function initEmptyFlowState() {
  const _state = {};
  POLL_STEP_ORDER.map((questionId) => (_state[questionId] = ''));

  return _state;
}

/* 
...
  statement: 'fullText',
  partyModifiers: {
    brachi: 0,
    cornu: 0,
    beccus: 0,
    nus: 0,
  },
*/
