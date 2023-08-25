function FinishScreen({ points, maxPoints }) {
  const percentage = (points / maxPoints) * 100;
  return (
    <p className="result">
      You scored <strong>{points}</strong> out fo {maxPoints} (
      {Math.ceil(percentage)}%)
    </p>
  );
}

export default FinishScreen;
