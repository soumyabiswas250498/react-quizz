function Progress({ userResponses, numQuestions }) {
  let questionsAttempted = 0;
  userResponses.map(response =>
    response !== undefined ? questionsAttempted++ : null
  );

  return (
    <header className="progress">
      <progress max={numQuestions} value={questionsAttempted} />
      <p>
        Question <strong>{questionsAttempted}</strong> /{numQuestions}
      </p>
    </header>
  );
}

export default Progress;
