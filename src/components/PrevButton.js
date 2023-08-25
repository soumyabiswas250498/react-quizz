function PrevButton({ index, dispatch }) {
  if (index !== 0) {
    return (
      <div
        className="btn btn-prev"
        onClick={() => dispatch({ type: 'previousQuestion' })}
      >
        Previous
      </div>
    );
  } else {
    return null;
  }
}

export default PrevButton;
