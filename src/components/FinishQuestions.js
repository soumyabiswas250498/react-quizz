function FinishQuestions({ userResponses, questions }) {
  return (
    <div className="question-Section">
      <h2> Your Responses</h2>
      {questions.map((question, qindex) => {
        return (
          <div className="question" key={qindex}>
            <h4>
              {qindex + 1}) {question.question}
            </h4>
            <>
              {question.options.map((option, index) => {
                return (
                  <h5
                    className={`${
                      index === question.correctOption ? 'correct' : ''
                    } ${index === userResponses[qindex] ? 'wrong' : ''}`}
                    key={option}
                  >
                    {index + 1}) {option}
                  </h5>
                );
              })}
            </>
            <h5
              className={`${
                userResponses[qindex] !== undefined
                  ? question.correctOption === userResponses[qindex]
                    ? 'correct'
                    : 'wrong'
                  : 'not-answered'
              }`}
            >{`${
              userResponses[qindex] !== undefined
                ? question.correctOption === userResponses[qindex]
                  ? 'Your answer is correct. You are reawarded with ' +
                    question.points +
                    ' points'
                  : 'Your answer is wrong'
                : 'Not answered'
            }`}</h5>
          </div>
        );
      })}
    </div>
  );
}

export default FinishQuestions;
