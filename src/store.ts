import { createStore } from "redux";

// actions
const SET_QUESTION_ACTION = "SET_QUESTION";

// action creaters
export function setQuestion(question: string) {
  return {
    type: SET_QUESTION_ACTION,
    question: question
  };
}

// init state
const initState = {
  question: ""
};

// reducer
export const questionReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_QUESTION_ACTION:
      return {
        question: action.question
      };
    default:
      return state;
  }
};

// store
export const store = createStore(questionReducer);
