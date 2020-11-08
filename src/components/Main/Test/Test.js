import React from 'react'
import classes from './Test.module.scss'
import TestBody from './TestBody/TestBody'

export default function Test() {
  return (
    <div className={classes.test}>
      <div className={classes.test__descr}>
        <h2 className={classes.test__descr_title}>Пройди тест</h2>

        <p className={classes.test__descr_text}>
          Значимость этих проблем настолько очевидна, что постоянный
          количественный рост и сфера нашей активности позволяет оценить
          значение новых предложений.
        </p>
      </div>

      <div className={classes.test__body}>
        <TestBody />
      </div>
    </div>
  );
}