import React from 'react'
import classes from './ActiveQuestion.module.scss'
import AnswersList from './AnswersList/AnswersList';

const ActiveQuestion = (props) => (
  <div className={classes.activeQuestion}>
    <p className={classes.title}>
      <span>{props.question}</span>
    </p>

    <AnswersList answers={props.answers} />

    <button
      className={classes.question_btn}
      onClick={props.onButtonClick}
      
    >далее
    </button>
  </div>
);



export default ActiveQuestion