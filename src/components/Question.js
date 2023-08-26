import Options from './Options';

function Question({ question, dispatch, userResponses }) {
  // console.log(question);
  return (
    <div>
      <h4>{question.question}</h4>
      <Options
        question={question}
        dispatch={dispatch}
        userResponses={userResponses}
      />
    </div>
  );
}

export default Question;
