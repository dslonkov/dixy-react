import React from 'react'
import classes from './AnswersItem.module.scss'

const AnswersItem = props => {
  return (
    <li className={classes.answersItem}>
      <label>
        <input type='radio' name='rName' />
        <span className={classes.checkStyle}></span>
        <span className={classes.answersItem_text}>{props.answer.text}</span>
      </label>
    </li>
  );
}

export default AnswersItem