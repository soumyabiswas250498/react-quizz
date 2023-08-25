function Progress({ index, numQuestions, maxPoints, points }) {
  return (
    <header className="progress">
      <progress max={numQuestions} value={index} />
      <p>
        Question <strong>{index + 1}</strong> /{numQuestions}
      </p>
      <p>
        Points <strong>{points}</strong> /{maxPoints}
      </p>
    </header>
  );
}

export default Progress;
