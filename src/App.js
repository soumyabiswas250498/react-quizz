import { useEffect, useReducer } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Loader from './components/Loader';
import Error from './components/Error';
import StartScreen from './components/StartScreen';
import Question from './components/Question';
import NextButton from './components/NextButton';
import Progress from './components/Progress';
import FinishScreen from './components/FinishScreen';
import Footer from './components/Footer';
import Timer from './components/Timer';
import PrevButton from './components/PrevButton';

const SECS_PRT_QUSTIONS = 30;

const initialState = {
  questions: [],

  // 'loading', 'error, 'ready, 'active', 'finished'
  status: 'loading',
  index: 0,
  answer: null,
  secondsRemaining: null,
  userResponses: null,
};
function reducer(state, action) {
  switch (action.type) {
    case 'dataRecieved':
      return {
        ...state,
        questions: action.payload,
        status: 'ready',
      };
    case 'dataFailed':
      return {
        ...state,
        status: 'error',
      };
    case 'start':
      return {
        ...state,
        status: 'active',
        secondsRemaining: state.questions.length * SECS_PRT_QUSTIONS,
        userResponses: new Array(state.questions.length),
      };
    case 'newAnswer':
      return {
        ...state,
        answer: action.payload,
        userResponses: [
          ...state.userResponses.slice(0, state.index),
          action.payload,
          ...state.userResponses.slice(state.index + 1),
        ],
      };
    case 'nextQuestion':
      // console.log(state.userResponses);
      return { ...state, index: state.index + 1, answer: null };
    case 'previousQuestion':
      return {
        ...state,
        index: state.index - 1,
      };
    case 'finished':
      return { ...state, status: 'finished' };
    case 'restart':
      return {
        ...initialState,
        questions: state.questions,
        status: 'ready',
      };
    case 'timer':
      return {
        ...state,
        secondsRemaining: state.secondsRemaining - 1,
        status: state.secondsRemaining === 0 ? 'finished' : state.status,
      };
    default:
      throw new Error('Action Unknown');
  }
}

function App() {
  const [
    { questions, answer, status, index, secondsRemaining, userResponses },
    dispatch,
  ] = useReducer(reducer, initialState);
  const numQuestions = questions.length;
  useEffect(function () {
    fetch('http://localhost:8000/questions')
      .then(response => response.json())
      .then(data => {
        // console.log(data);
        dispatch({ type: 'dataRecieved', payload: data });
      })
      .catch(err => dispatch({ type: 'dataFailed' }));
  }, []);
  return (
    <div className="app">
      <Header />
      <Main>
        {status === 'loading' && <Loader />}
        {status === 'error' && <Error />}
        {status === 'ready' && (
          <StartScreen numQuestions={numQuestions} dispatch={dispatch} />
        )}
        {status === 'active' && (
          <>
            <Progress
              userResponses={userResponses}
              numQuestions={numQuestions}
            />
            <Question
              question={questions[index]}
              dispatch={dispatch}
              userResponses={userResponses[index]}
            />
            <Footer>
              <PrevButton index={index} dispatch={dispatch} />

              <NextButton
                dispatch={dispatch}
                answer={answer}
                index={index}
                numQuestions={numQuestions}
              />
            </Footer>
            <Timer dispatch={dispatch} secondsRemaining={secondsRemaining} />
          </>
        )}
        {status === 'finished' && (
          <FinishScreen
            dispatch={dispatch}
            userResponses={userResponses}
            questions={questions}
          />
        )}
      </Main>
    </div>
  );
}

export default App;
