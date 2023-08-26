import FinishQuestions from './FinishQuestions';

function FinishScreen({ dispatch, userResponses, questions }) {
  let correct = 0;
  let wrong = 0;
  let notAnswered = 0;
  let score = 0;
  let totalScore = 0;
  userResponses.forEach((response, index) => {
    if (response === undefined) {
      notAnswered++;
    } else if (response !== questions[index].correctOption) {
      wrong++;
    } else if (response === questions[index].correctOption) {
      correct++;
      score = score + questions[index].points;
    }

    totalScore += questions[index].points;
  });
  return (
    <>
      <div>
        <p className="result">
          You answerred correct = {correct} wrong = {wrong} not answered =
          {notAnswered}
        </p>
        <p className="result">
          You scored <strong>{score}</strong> out of {totalScore}({}%)
        </p>
        <button className="btn" onClick={() => dispatch({ type: 'restart' })}>
          Restart
        </button>
      </div>
      <FinishQuestions userResponses={userResponses} questions={questions} />
    </>
  );
}

export default FinishScreen;
