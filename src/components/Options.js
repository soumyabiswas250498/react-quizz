function Options({ question, dispatch, userResponses }) {
  return (
    <div className="options">
      {question.options.map((option, index) => {
        return (
          <button
            className={`btn btn-option ${
              index === userResponses ? 'answer' : ''
            } `}
            key={index}
            onClick={() => dispatch({ type: 'newAnswer', payload: index })}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
}

export default Options;
