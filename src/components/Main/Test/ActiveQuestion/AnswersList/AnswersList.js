import React from 'react'
import classes from './AnswersList.module.scss'
import AnswersItem from '../AnswersList/AnswersItem/AnswersItem'

const AnswersList = (props) => (
  <ul className={classes.answerslist}>
    { props.answers.map((answer, index) => {
      return (
        <AnswersItem
          key={index}
          answer={answer}
        />
      )
    })}
  </ul>
);

export default AnswersList