import { GET_QUESTIONS } from "./types";

export const getQuestions = () => dispatch => {
  console.log("getQuestions call");
  let questionsArr = [
    {
      id: 1,
      text: "question 1",
      options: ["1", "2", "3", "4"],
      correct: "1"
    },
    {
      id: 2,
      text: "question 2",
      options: ["1", "2", "3", "4"],
      correct: "2"
    },
    {
      id: 3,
      text: "question 3",
      options: ["1", "2", "3", "4"],
      correct: "3"
    }
  ];
  dispatch({
    type: GET_QUESTIONS,
    payload: questionsArr
  });
};
