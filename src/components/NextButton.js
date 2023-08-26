function NextButton({ dispatch, answer, index, numQuestions }) {
  if (index < numQuestions - 1) {
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: 'nextQuestion' })}
      >
        Next
      </button>
    );
  } else if (index === numQuestions - 1) {
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: 'finished' })}
      >
        Finish
      </button>
    );
  }
}

export default NextButton;
