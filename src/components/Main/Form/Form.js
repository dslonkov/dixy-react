import React from 'react'
import classes from './Form.module.scss'

export default function Form() {
  return (
    <div className={classes.form}>
      <h2 className={classes.form__title}>подписаться на рассылку</h2>

      <p className={classes.form__text}>
        Значимость этих проблем настолько очевидна, что постоянный
        количественный рост и сфера нашей активности позволяет оценить значение
        новых предложений.
      </p>

      <form className={classes.form__body}>
        <input className={classes.input_name} type='text' placeholder='Имя' />

        <input className={classes.input_mail} type='email' placeholder='E-mail' />

        <button className={classes.form_btn} type='submit'>подписаться</button>
      </form>
    </div>
  );
}